import React, { useState } from "react";

export default function Contact3() {
  const faqs = [
    {
      question: "What Sector have we built for?",
      answer:
        "We have built products across various sectors including Finance, Health, Telco, Agriculture, Fashion, Transportation, data management, and more.",
    },
    {
      question: "Can we build a product for your industry?",
      answer:
        "We are not industry-specific. We can build any type of software for your company regardless of the industry.",
    },
    {
      question: "Are our developers freelancer?",
      answer:
        "No, our developers are full-time employees. They work with dedicated project development teams to build technology solutions for clients.",
    },
    {
      question: "What's the assurance that we can execute your project?",
      answer:
        "We understand how essential solid technology is for a business’ growth. That’s why we work with a Pay-by-milestone structure. Your project will be broken down into deliverables tied to deadlines. These will be your milestones. You review the project at the scheduled milestone and we can move on to the next one.",
    },

      {
      question: "What has been the average timeline for our past projects?",
      answer:
        "Every project is unique and no two products are the same. Your timeline is tailored to your project scope and needs. We will consider the timeline you are working with and create the best development strategy for you.",
    },

      {
      question: "What is Corestream payment model structured? happens if we don`t meet your timeline?",
      answer:
        "No up-front payment. No bulk payment. No fear of you paying so much to end up with no product because you pay ONLY as we deliver. Our payment model is structured for the client to have the most advantage. You pay per milestone and only after we’ve delivered what we agreed on in the milestone document at the start of the project you don’t have to pay. It’s zero risk for our client.",
    },

      {
      question: "How do i know if my idea is protected?",
      answer:
        "The experts working at Corestream understand the importance of protecting client information. Our entire business is dependent on our clients' trust in us. Protecting your ideas protects us because your success is our success.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-xl font-medium tracking-tight mt-4 text-gray-100">
          Providing answers and clarity on some of our most asked questions.
        </p>
      </div>

      
      <div className="max-w-3xl mx-auto space-y-4 pb-20">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/90 rounded-xl overflow-hidden shadow-sm"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left font-medium text-gray-800 hover:bg-white transition"
            >
              <span>{faq.question}</span>
              <span
                className={`text-2xl transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
