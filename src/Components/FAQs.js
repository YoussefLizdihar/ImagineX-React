// FAQs.js
import React, { useState } from 'react';

const FAQs = ({ faqs }) => {
  return (
    <div className="faqs">
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        <h3>{faq.question}</h3>
        <button>{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

export default FAQs;
