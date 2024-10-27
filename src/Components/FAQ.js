// App.js
import React from 'react';
import FAQs from './FAQs';

function FAQ() {
  const faqData = [
    { question: 'What is ImagineX?', answer: 'ImagineX is a cutting-edge AI image generator that allows users to create stunning visuals from text prompts. Utilizing advanced algorithms from OpenAI, it transforms your ideas into high-quality images.' },
    { question: 'How does ImagineX work?', answer: 'Yes, we ship to multiple countries...' },
    { question: 'What is your return policy?', answer: 'Our return policy lasts 30 days...' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship to multiple countries...' },
    { question: 'What is your return policy?', answer: 'Our return policy lasts 30 days...' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship to multiple countries...' },
    { question: 'What is your return policy?', answer: 'Our return policy lasts 30 days...' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship to multiple countries...' },
    { question: 'What is your return policy?', answer: 'Our return policy lasts 30 days...' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship to multiple countries...' },
    // Add more FAQs as needed
  ];

  return (
    <div className="faqs-container">
      <h1>FAQs</h1>
      <FAQs faqs={faqData} />
    </div>
  );
}

export default FAQ;
