import React from "react";
import AboutImage1 from "../Assets/about-1.png";
import AboutImage2 from "../Assets/about-2.png";
import Aboutleft from "../Assets/about-left-shape.svg";
import Aboutdots1 from "../Assets/left-dots.svg";
import Aboutdots2 from "../Assets/right-dots.svg";
import Aboutright from "../Assets/about-right-shape.svg";

const About = () => {
  return (
    <section>
      <section id="features" className="feature-section pt-120" style={{ marginTop: '250px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-feature">
              <div className="icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#5864ff" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8749 2.51272C20.1915 1.8293 19.0835 1.8293 18.4001 2.51272L13.2418 7.67095C12.879 8.03379 12.6511 8.50974 12.5959 9.0199L12.4069 10.7668C12.3824 10.9926 12.4616 11.2173 12.6222 11.3778C12.7827 11.5384 13.0074 11.6176 13.2332 11.5931L14.9801 11.4041C15.4903 11.3489 15.9662 11.121 16.3291 10.7582L21.4873 5.59994C22.1707 4.91652 22.1707 3.80848 21.4873 3.12506L20.8749 2.51272ZM18.5981 4.43601L19.564 5.40191L15.2684 9.69751C15.1474 9.81846 14.9888 9.89443 14.8187 9.91283L13.9984 10.0016L14.0872 9.18126C14.1056 9.01121 14.1815 8.85256 14.3025 8.73161L18.5981 4.43601Z" fill="#5864ff"/>
                  <path d="M5.5 3.25H15.5411L14.0411 4.75H5.5C5.08579 4.75 4.75 5.08579 4.75 5.5V18.5C4.75 18.9142 5.08579 19.25 5.5 19.25H18.5C18.9142 19.25 19.25 18.9142 19.25 18.5V9.95823L20.75 8.45823V18.5C20.75 19.7426 19.7426 20.75 18.5 20.75H5.5C4.25736 20.75 3.25 19.7426 3.25 18.5V5.5C3.25 4.25736 4.25736 3.25 5.5 3.25Z" fill="#5864ff"/>
                  </svg>
                  
              </div>
              <div className="content">
                <h3>Intuitive Tools</h3>
                <p>
                  ImagineX includes an editor that’s easy to use yet powerful, so you can refine your creations without hassle.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-feature">
              <div className="icon">
                <svg width="80" height="80" viewBox="0 0 24 25" fill="#5864ff" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 2.125C12.2851 2.125 12.5459 2.28707 12.6722 2.54308L15.3264 7.9211L21.2614 8.78351C21.5439 8.82456 21.7786 9.02244 21.8669 9.29395C21.9551 9.56546 21.8815 9.86351 21.6771 10.0628L17.3825 14.249L18.3963 20.16C18.4445 20.4414 18.3289 20.7257 18.0979 20.8936C17.867 21.0614 17.5608 21.0835 17.3081 20.9506L11.9996 18.1598L6.69122 20.9506C6.43853 21.0835 6.13233 21.0614 5.90137 20.8936C5.67041 20.7257 5.55475 20.4414 5.603 20.16L6.61682 14.249L2.32222 10.0628C2.11779 9.86351 2.04421 9.56546 2.13243 9.29395C2.22065 9.02244 2.45536 8.82456 2.73788 8.78351L8.67288 7.9211L11.3271 2.54308C11.4534 2.28707 11.7142 2.125 11.9996 2.125ZM11.9996 4.56966L9.84348 8.93853C9.73423 9.15989 9.52306 9.31331 9.27878 9.34881L4.45745 10.0494L7.94619 13.4501C8.12296 13.6224 8.20362 13.8706 8.16189 14.1139L7.33831 18.9158L11.6506 16.6487C11.8691 16.5338 12.1302 16.5338 12.3486 16.6487L16.661 18.9158L15.8374 14.1139C15.7957 13.8706 15.8763 13.6224 16.0531 13.4501L19.5418 10.0494L14.7205 9.34881C14.4762 9.31331 14.2651 9.15989 14.1558 8.93853L11.9996 4.56966Z" fill="#5864ff"/>
                  </svg>
                  
                                 
              </div>
              <div className="content">
                <h3>High-Resolution</h3>
                <p>
                  Unlike other tools, ImagineX allows you to download and save your images at their full resolution without added cost.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-feature">
              <div className="icon">
                <svg width="80" height="80" viewBox="0 0 25 24" fill="#5864ff" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                  <path d="M8.25016 10.5C7.5598 10.5 7.00016 11.0596 7.00016 11.75C7.00016 12.4404 7.5598 13 8.25016 13H8.26016C8.95051 13 9.51016 12.4404 9.51016 11.75C9.51016 11.0596 8.95051 10.5 8.26016 10.5H8.25016Z" fill="#5864ff"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75016 5.5C7.75016 4.25736 8.75751 3.25 10.0002 3.25H19.0002C20.2428 3.25 21.2502 4.25736 21.2502 5.5V14.5C21.2502 15.7426 20.2428 16.75 19.0002 16.75H17.2502V18.5C17.2502 19.7426 16.2428 20.75 15.0002 20.75H6.00016C4.75751 20.75 3.75016 19.7426 3.75016 18.5V17.6916C3.74995 17.6814 3.74995 17.6712 3.75016 17.6611V9.5C3.75016 8.25736 4.75751 7.25 6.00016 7.25H7.75016V5.5ZM15.7502 9.5V15.9558L13.4851 13.8525C12.789 13.206 11.7619 13.0665 10.9186 13.5037L5.25016 16.4421L5.25016 9.5C5.25016 9.08579 5.58594 8.75 6.00016 8.75H15.0002C15.4144 8.75 15.7502 9.08579 15.7502 9.5ZM5.25016 18.5V18.1317L11.6089 14.8354C11.89 14.6896 12.2324 14.7362 12.4644 14.9516L15.7502 18.0028V18.5C15.7502 18.9142 15.4144 19.25 15.0002 19.25H6.00016C5.58594 19.25 5.25016 18.9142 5.25016 18.5ZM9.25016 7.25H15.0002C16.2428 7.25 17.2502 8.25736 17.2502 9.5V15.25H19.0002C19.4144 15.25 19.7502 14.9142 19.7502 14.5V5.5C19.7502 5.08579 19.4144 4.75 19.0002 4.75H10.0002C9.58594 4.75 9.25016 5.08579 9.25016 5.5V7.25Z" fill="#5864ff"/>
                  </svg>                  
              </div>
              <div className="content">
                <h3>Effortless Images</h3>
                <p>
                  Say goodbye to complex design tools. With ImagineX, generate 1-4 images instantly based on your preferences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-feature">
              <div className="icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#5864ff" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                  <path d="M9.74902 2.75C9.74902 2.33579 10.0848 2 10.499 2H13.499C13.9132 2 14.249 2.33579 14.249 2.75C14.249 3.16421 13.9132 3.5 13.499 3.5H10.499C10.0848 3.5 9.74902 3.16421 9.74902 2.75Z" fill="#5864ff"/>
                  <path d="M11.2485 13.2507C11.2485 13.6649 11.5843 14.0007 11.9985 14.0007C12.4128 14.0007 12.7485 13.6649 12.7485 13.2507V8.49454C12.7485 8.08033 12.4128 7.74454 11.9985 7.74454C11.5843 7.74454 11.2485 8.08033 11.2485 8.49454V13.2507Z" fill="#5864ff"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.999 4.50192C7.16707 4.50192 3.25 8.41899 3.25 13.2509C3.25 18.0829 7.16707 22 11.999 22C16.831 22 20.748 18.0829 20.748 13.2509C20.748 11.1048 19.9753 9.13916 18.6929 7.61704L20.0316 6.27838C20.3244 5.98548 20.3244 5.51061 20.0316 5.21772C19.7387 4.92482 19.2638 4.92482 18.9709 5.21772L17.6322 6.55644C16.1102 5.2744 14.1448 4.50192 11.999 4.50192ZM4.75 13.2509C4.75 9.24742 7.99549 6.00192 11.999 6.00192C16.0025 6.00192 19.248 9.24742 19.248 13.2509C19.248 17.2545 16.0025 20.5 11.999 20.5C7.99549 20.5 4.75 17.2545 4.75 13.2509Z" fill="#5864ff"/>
                  </svg>
                  
              </div>
              <div className="content">
                <h3>Fast Creation</h3>
                <p>
                  Speed matters. ImagineX generates stunning images within seconds, helping you meet tight deadlines.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-feature">
              <div className="icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#5864ff" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                  <path d="M15.3086 2C15.7228 2 16.0586 2.33579 16.0586 2.75V2.91898C16.807 3.10815 17.3609 3.78601 17.3609 4.59323C17.3609 5.00744 17.0251 5.34323 16.6109 5.34323C16.1967 5.34323 15.8609 5.00744 15.8609 4.59323C15.8609 4.46796 15.7594 4.36641 15.6341 4.36641H15.2391C14.9724 4.36641 14.7563 4.58257 14.7563 4.84921C14.7563 5.05046 14.8811 5.2306 15.0695 5.30127L16.0744 5.67811C16.8482 5.96833 17.3609 6.70814 17.3609 7.53464C17.3609 8.39065 16.8185 9.11996 16.0586 9.39759V9.63372C16.0586 10.0479 15.7228 10.3837 15.3086 10.3837C14.8944 10.3837 14.5586 10.0479 14.5586 9.63372V9.46488C13.8101 9.2757 13.2563 8.59785 13.2563 7.79062C13.2563 7.37641 13.5921 7.04062 14.0063 7.04062C14.4205 7.04062 14.7563 7.37641 14.7563 7.79062C14.7563 7.91589 14.8578 8.01744 14.9831 8.01744H15.3781C15.6448 8.01744 15.8609 7.80129 15.8609 7.53464C15.8609 7.3334 15.7361 7.15326 15.5477 7.08259L14.5428 6.70575C13.7689 6.41552 13.2563 5.67571 13.2563 4.84921C13.2563 3.99321 13.7987 3.2639 14.5586 2.98626V2.75C14.5586 2.33579 14.8944 2 15.3086 2Z" fill="#5864ff"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4266 11.0844C20.0839 10.5513 21.0447 10.6316 21.6044 11.2664C22.1114 11.8415 22.1317 12.6979 21.6525 13.2964L17.7859 18.125C17.4104 18.5938 16.8423 18.8667 16.2417 18.8667H10.0685C9.8825 18.8667 9.70317 18.9358 9.56527 19.0606L9.04042 19.5355C9.14503 19.864 9.01125 20.2324 8.7004 20.4119L6.1238 21.8995C5.76508 22.1066 5.30638 21.9837 5.09928 21.625L2.10061 16.4311C1.8935 16.0724 2.01641 15.6137 2.37513 15.4066L4.95173 13.919C5.18986 13.7815 5.47206 13.7895 5.69546 13.9153L7.38764 12.5626C7.94114 12.1201 8.64057 11.8151 9.41278 11.8116C10.2262 11.8079 11.5119 11.8799 12.6754 12.3045H15.2732C15.9345 12.3045 16.512 12.6637 16.8212 13.1975L19.4266 11.0844ZM8.55886 17.9483L8.2864 18.1948L6.53627 15.1635L8.32425 13.7342C8.66549 13.4614 9.04628 13.3133 9.41955 13.3116C10.1887 13.3081 11.296 13.3834 12.222 13.7363C12.3365 13.7799 12.4613 13.8045 12.5912 13.8045H15.2732C15.432 13.8045 15.5608 13.9333 15.5608 14.0922C15.5608 14.1589 15.5381 14.2203 15.5 14.2691L15.4269 14.3284C15.4184 14.3352 15.4102 14.3422 15.4021 14.3494C15.3633 14.3688 15.3195 14.3798 15.2732 14.3798H12.5383C12.1241 14.3798 11.7883 14.7156 11.7883 15.1298C11.7883 15.544 12.1241 15.8798 12.5383 15.8798H15.2732C15.7583 15.8798 16.1984 15.6865 16.5205 15.3728L20.3715 12.2494C20.404 12.223 20.4515 12.227 20.4792 12.2584C20.5043 12.2868 20.5053 12.3292 20.4816 12.3588L16.615 17.1874C16.5242 17.3007 16.3869 17.3667 16.2417 17.3667H10.0685C9.51056 17.3667 8.97255 17.574 8.55886 17.9483ZM3.77464 16.3307L6.02332 20.2255L7.30088 19.4879L5.05221 15.5931L3.77464 16.3307Z" fill="#5864ff"/>
                  </svg>
                  
              </div>
              <div className="content">
                <h3>Completely Free</h3>
                <p>
                  Get full access to core features like fast generation, unlimited downloads, and editing, all for free. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-feature">
              <div className="icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#5864ff" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8227 4.77124L12 4.94862L12.1773 4.77135C14.4244 2.52427 18.0676 2.52427 20.3147 4.77134C22.5618 7.01842 22.5618 10.6616 20.3147 12.9087L13.591 19.6324C12.7123 20.5111 11.2877 20.5111 10.409 19.6324L3.6853 12.9086C1.43823 10.6615 1.43823 7.01831 3.6853 4.77124C5.93237 2.52417 9.5756 2.52417 11.8227 4.77124ZM10.762 5.8319C9.10073 4.17062 6.40725 4.17062 4.74596 5.8319C3.08468 7.49319 3.08468 10.1867 4.74596 11.848L11.4697 18.5718C11.7625 18.8647 12.2374 18.8647 12.5303 18.5718L19.254 11.8481C20.9153 10.1868 20.9153 7.49329 19.254 5.83201C17.5927 4.17072 14.8993 4.17072 13.238 5.83201L12.5304 6.53961C12.3897 6.68026 12.199 6.75928 12 6.75928C11.8011 6.75928 11.6104 6.68026 11.4697 6.53961L10.762 5.8319Z" fill="#5864ff"/>
                  </svg>
                  
              </div>
              <div className="content">
                <h3>Easy to Use</h3>
                <p>
                  Just enter your prompt, and our AI takes care of the rest, delivering professional-quality visuals instantly.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </section>
      <section id="about" className="about-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-img">
                <img src={AboutImage1} alt="" className="w-100" />
                <img
                  src={Aboutleft}
                  alt=""
                  className="shape shape-1"
                />
                <img
                  src={Aboutdots1}
                  alt=""
                  className="shape shape-2"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Your Vision, Instantly Realized
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    ImagineX isn't just a tool; it's your creative assistant.
                    Born from a passion for design and technology,
                    we created ImagineX to bring sophisticated image generation
                    and editing into an accessible platform. Now, anyone can bring
                    their visions to life without advanced design skills.
                    Join thousands of satisfied users who trust ImagineX
                    to create content that stands out.
                  </p>
                </div>
                <button
                  className="main-btn btn-hover"
                  data-wow-delay=".6s"
                  >Discover More</button
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-section pt-150">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="about-content">
              <div className="section-title mb-30">
                <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                  Easy to Use with Tons of Awesome Features
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  ImagineX empowers you to visualize your ideas in minutes. Ready to make your creative visions a reality? Start generating, editing, and saving your unique images with ImagineX today!
                </p>
              </div>
              <ul>
                <li>Quick Access</li>
                <li>Easily to Manage</li>
                <li>24/7 Support</li>
              </ul>
              <button
                href="#"
                className="main-btn btn-hover"
                data-wow-delay=".6s"
                >Learn More</button
              >
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-first order-lg-last">
            <div className="about-img-2">
              <img src={AboutImage2} alt="" className="w-100" />
              <img
                src={Aboutright}
                alt=""
                className="shape shape-1"
              />
              <img
                src={Aboutdots2}
                alt=""
                className="shape shape-2"
              />
            </div>
          </div>
        </div>
      </div>
      </section>
    </section>
  );
};

export default About;
