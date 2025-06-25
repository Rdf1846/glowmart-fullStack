import React from 'react';
import Layout from '../components/Layout';

const FAQs = () => {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 3–5 business days across India."
    },
    {
      question: "Do you offer gift packaging?",
      answer: "Yes! You can choose gift wrap during checkout."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "100%. All GlowMart products are cruelty-free and safe."
    },
    {
      question: "Can I return a product?",
      answer: "Yes, you can return within 7 days if unused and sealed."
    }
  ];

  return (
    <Layout>
      <h2>Frequently Asked Questions</h2>
      <div style={{ marginTop: '2rem' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: '#a56cf0' }}>{f.question}</h4>
            <p>{f.answer}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default FAQs;
