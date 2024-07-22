// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-xl max-w-2xl mx-auto">Feel free to reach out for collaborations or just a friendly chat.</p>
        <a href="mailto:your-email@example.com" className="mt-4 inline-block bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700">Email Me</a>
      </div>
    </section>
  );
};

export default Contact;
