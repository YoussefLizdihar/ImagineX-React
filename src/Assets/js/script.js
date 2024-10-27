// Select the form and buttons from the DOM
const generateForm = document.querySelector(".generate-form");
const generateBtn = document.querySelector(".generate-btn");
const imageGallery = document.querySelector(".image-gallery");

const OPENAI_API_KEY = "sk-Xk4qIDJknMaXFw_AXE_jkRbDx7WHWOBMQoEzz_uyfGT3BlbkFJlPDq7NM4mRRxV5b3K-wOdJCrmADQC-yXeJTdgDr88A"; // Your OpenAI API key here inside ""
let isImageGenerating = false;

// Update image card with generated images
const updateImageCard = (imgDataArray) => {
  imgDataArray.forEach((imgObject, index) => {
    const imgCard = imageGallery.querySelectorAll(".img-card")[index];
    const imgElement = imgCard.querySelector("img");
    const downloadBtn = imgCard.querySelector(".download-btn");
    const editButton = imgCard.querySelector(".edit-btn");
    const editorBody = document.querySelector('.editor-body');
    let contentAdded = false;

    // Convert image data to base64 and set the image source
    const aiGeneratedImage = `data:image/jpeg;base64,${imgObject.b64_json}`;
    imgElement.src = aiGeneratedImage;

    // When image is loaded, update the download button and add event listener for edit
    imgElement.onload = () => {
      imgCard.classList.remove("loading");
      downloadBtn.setAttribute("href", aiGeneratedImage);
      downloadBtn.setAttribute("download", `${new Date().getTime()}-imaginator.jpg`);

      editButton.addEventListener('click', function() {
        if (!contentAdded) {
          const container = document.createElement('div');
          container.classList.add('editor-container');
          container.innerHTML = `
          <div>
            <h2 id="editorlink">Easy Image Editor</h2>
            <div class="wrapper">
              <div class="editor-panel">
                <div class="filter">
                  <label class="title">Filters</label>
                  <div class="options">
                    <button id="brightness" class="active">Brightness</button>
                    <button id="saturation">Saturation</button>
                    <button id="inversion">Inversion</button>
                    <button id="grayscale">Grayscale</button>
                  </div>
                  <div class="slider">
                    <div class="filter-info">
                      <p class="name">Brightness</p>
                      <p class="value">100%</p>
                    </div>
                    <input type="range" value="100" min="0" max="200"/>
                  </div>
                </div>
                <div class="rotate">
                  <label class="title">Rotate & Flip</label>
                  <div class="options">
                    <button id="left"><i class="fa-solid fa-rotate-left"></i></button>
                    <button id="right"><i class="fa-solid fa-rotate-right"></i></button>
                    <button id="horizontal"><i class='bx bx-reflect-vertical'></i></button>
                    <button id="vertical"><i class='bx bx-reflect-horizontal'></i></button>
                  </div>
                </div>
              </div>
              <div class="preview-img">
                <img src="${aiGeneratedImage}" alt="preview-img"/>
              </div>
            </div>
            <div class="editor-controls">
              <button class="reset-filter">Reset Filters</button>
              <div class="row">
                <button class="save-img">Save Image</button>
              </div>
            </div>
          </div>
          `;
          editorBody.innerHTML = '';
          editorBody.appendChild(container);
          contentAdded = true;

          // Initialize the editor
          initializeEditor();
        }
        else {
          contentAdded = false;
          editorBody.innerHTML = ``;
        }

        const previewImg = editorBody.querySelector(".preview-img img");
        previewImg.src = aiGeneratedImage;

        
      });
    }
  });
}

// Send request to OpenAI API to generate images
const generateAiImages = async (userPrompt, userImgQuantity) => {
  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: userPrompt,
        n: userImgQuantity,
        size: "512x512",
        response_format: "b64_json"
      }),
    });

// Handle errors from API response
    if (!response.ok) throw new Error("Failed to generate AI images. Make sure your API key is valid.");

    const { data } = await response.json();
    updateImageCard([...data]);
  } catch (error) {
    alert(error.message);
  } finally {
    generateBtn.removeAttribute("disabled");
    generateBtn.innerText = "Generate";
    isImageGenerating = false;
  }
}

const handleImageGeneration = (e) => {
  e.preventDefault();
  if (isImageGenerating) return;

  // Get user input and image quantity values
  const userPrompt = e.srcElement[0].value;
  const userImgQuantity = parseInt(e.srcElement[1].value);

  // Disable the generate button, update its text, and set the flag
  generateBtn.setAttribute("disabled", true);
  generateBtn.innerText = "Generating";
  isImageGenerating = true;

  // Creating HTML markup for image cards with loading state and buttons (edit - download)
  const imgCardMarkup = Array.from({ length: userImgQuantity }, () => 
      `<div id="imaginedcard" class="img-card loading">
        <img src="https://i.gifer.com/yy3.gif" alt="AI generated image">
        <a href="#editorlink" class="edit-btn">
          <svg width="50" height="50" viewBox="0 0 25 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.5C3.75 4.25736 4.75736 3.25 6 3.25H10.5851C11.8278 3.25 12.8351 4.25736 12.8351 5.5V18.4978C12.8351 19.7404 11.8278 20.7478 10.5851 20.7478H6C4.75736 20.7478 3.75 19.7404 3.75 18.4978V5.5ZM6 4.75C5.58579 4.75 5.25 5.08579 5.25 5.5V6.44922H8.23863C8.65284 6.44922 8.98863 6.78501 8.98863 7.19922C8.98863 7.61343 8.65284 7.94922 8.23863 7.94922H5.25V9.64844H8.23863C8.65284 9.64844 8.98863 9.98422 8.98863 10.3984C8.98863 10.8127 8.65284 11.1484 8.23863 11.1484H5.25V12.8477H8.23863C8.65284 12.8477 8.98863 13.1834 8.98863 13.5977C8.98863 14.0119 8.65284 14.3477 8.23863 14.3477H5.25V16.0469H8.23863C8.65284 16.0469 8.98863 16.3827 8.98863 16.7969C8.98863 17.2111 8.65284 17.5469 8.23863 17.5469H5.25V18.4978C5.25 18.912 5.58579 19.2478 6 19.2478H10.5851C10.9993 19.2478 11.3351 18.912 11.3351 18.4978L11.3351 5.5C11.3351 5.08579 10.9993 4.75 10.5851 4.75L6 4.75Z" fill="#343C54"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.335 16.5814C14.335 16.9901 14.4463 17.391 14.6569 17.7412L15.8641 19.7478C16.7385 21.2013 18.8457 21.2013 19.7201 19.7478L20.9272 17.7412C21.1379 17.391 21.2492 16.9901 21.2492 16.5814V5.5C21.2492 4.25736 20.2418 3.25 18.9992 3.25H16.585C15.3423 3.25 14.335 4.25736 14.335 5.5V16.5814ZM18.9992 4.75L16.585 4.75C16.1707 4.75 15.835 5.08579 15.835 5.5V7.19922H19.7492V5.5C19.7492 5.08579 19.4134 4.75 18.9992 4.75ZM19.7492 8.69922H15.835V16.5814C15.835 16.7176 15.8721 16.8513 15.9423 16.968L17.1494 18.9746C17.4409 19.4591 18.1433 19.4591 18.4347 18.9746L19.6419 16.968C19.7121 16.8513 19.7492 16.7176 19.7492 16.5814V8.69922Z" fill="#343C54"/>
          </svg>
        </a>
        <a class="download-btn" href="#">
          <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>`
  ).join("");

  imageGallery.innerHTML = imgCardMarkup;
  generateAiImages(userPrompt, userImgQuantity);
}


// Initialize editor with the necessary event listeners and handlers
const initializeEditor = () => {
  const filterOptions = document.querySelectorAll(".filter button"),
        filterName = document.querySelector(".filter-info .name"),
        filterValue = document.querySelector(".filter-info .value"),
        filterSlider = document.querySelector(".slider input"),
        rotateOptions = document.querySelectorAll(".rotate button"),
        resetFilterBtn = document.querySelector(".reset-filter"),
        saveImgBtn = document.querySelector(".save-img"),
        previewImg = document.querySelector(".preview-img img");

  let brightness = "100", saturation = "100", inversion = "0", grayscale = "0";
  let rotate = 0, flipHorizontal = 1, flipVertical = 1;

  const applyFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
  };

  filterOptions.forEach(option => {
    option.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      option.classList.add("active");
      filterName.innerText = option.innerText;

      if (option.id === "brightness") {
        filterSlider.max = "200";
        filterSlider.value = brightness;
        filterValue.innerText = `${brightness}%`;
      } else if (option.id === "saturation") {
        filterSlider.max = "200";
        filterSlider.value = saturation;
        filterValue.innerText = `${saturation}%`;
      } else if (option.id === "inversion") {
        filterSlider.max = "100";
        filterSlider.value = inversion;
        filterValue.innerText = `${inversion}%`;
      } else {
        filterSlider.max = "100";
        filterSlider.value = grayscale;
        filterValue.innerText = `${grayscale}%`;
      }
    });
  });

  const updateFilter = () => {
    filterValue.innerText = `${filterSlider.value}%`;
    const selectedFilter = document.querySelector(".filter .active");

    if (selectedFilter.id === "brightness") {
      brightness = filterSlider.value;
    } else if (selectedFilter.id === "saturation") {
      saturation = filterSlider.value;
    } else if (selectedFilter.id === "inversion") {
      inversion = filterSlider.value;
    } else {
      grayscale = filterSlider.value;
    }
    applyFilter();
  };

  rotateOptions.forEach(option => {
    option.addEventListener("click", () => {
      if (option.id === "left") {
        rotate -= 90;
      } else if (option.id === "right") {
        rotate += 90;
      } else if (option.id === "horizontal") {
        flipHorizontal = flipHorizontal === 1 ? -1 : 1;
      } else {
        flipVertical = flipVertical === 1 ? -1 : 1;
      }
      applyFilter();
    });
  });

  const resetFilter = () => {
    brightness = "100";
    saturation = "100";
    inversion = "0";
    grayscale = "0";
    rotate = 0;
    flipHorizontal = 1;
    flipVertical = 1;
    filterOptions[0].click();
    applyFilter();
  };

  const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;

    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if (rotate !== 0) {
      ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.scale(flipHorizontal, flipVertical);
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    const link = document.createElement("a");
    link.download = `${new Date().getTime()}-imaginator.jpg`;
    link.href = canvas.toDataURL();
    link.click();
  };

  filterSlider.addEventListener("input", updateFilter);
  resetFilterBtn.addEventListener("click", resetFilter);
  saveImgBtn.addEventListener("click", saveImage);
}

//generateForm.addEventListener("submit", handleImageGeneration);
////        generateForm.addEventListener("submit", (e) => handleImageGeneration(e));




const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}