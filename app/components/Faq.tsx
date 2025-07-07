"use client";
import React from 'react'
import { useState } from "react";
import { Plus, X } from "lucide-react"; 

const faqs = [
    {
      question: "How does Trendtrack work?",
      answer: `It’s super simple. Once you sign up, you get access to an intuitive dashboard where you can:
  
  • Discover e-commerce stores that are performing well,  
  • See their best-sellers, ads, apps, and themes,  
  • Filter by niche, country, creation date, and more.  
  
  You can also save searches, follow specific stores, and spot product trends before others. Everything is designed to help you move fast and stay ahead.`,
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial with full access to all features.",
    },
    {
      question: "How much does Trendtrack cost?",
      answer: "Trendtrack offers pricing starting at $29/month. See our pricing page for details.",
    },
    {
      question: "How can I upgrade my membership?",
      answer: "You can upgrade from your account dashboard under the billing section.",
    },
    {
      question: "Can I request a refund on my membership?",
      answer: "Yes, refunds are available within the first 14 days if you're not satisfied.",
    },
    {
      question: "Is Trendtrack suitable for beginners or small businesses?",
      answer: "Absolutely. It's designed to help both beginners and pros spot trends and stay ahead.",
    },
  ];

function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open

  const toggleIndex = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  return (
    <div>
        <div className='max-w-7xl mx-auto flex items-start'>
            <div className='w-full'>
            <div className="mt-20  flex flex-col gap-4 items-start ">
              <div className="text-[40px] font-semibold leading-tight  text-black">
              Frequently asked <br/> questions
              </div>
              <p className="max-w-[450px] text-[18px] mt-2 leading-normal text-start text-black">
              Don’t find the anwser to your question? Contact us by clicking here.
              </p>
              <button className="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
                Start to track
              </button>
            </div>
            </div>
            <div className="max-w-2xl mx-auto py-12 px-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`transition-all duration-300 bg-white rounded-2xl shadow-sm mb-4 border border-gray-200 ${
              isOpen ? "shadow-md" : ""
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between text-left px-6 py-5 text-base font-medium text-gray-900 focus:outline-none"
            >
              <span>{faq.question}</span>
              <div className="text-gray-500 transition-transform duration-300">
                {isOpen ? <X size={20} /> : <Plus size={20} />}
              </div>
            </button>

            {/* Content */}
            <div
              className={`px-6 pt-0 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] pb-5" : "max-h-0"
              }`}
            >
              {faq.answer.split("\n").map((line, i) => (
                <p key={i} className="mb-1">
                  {line}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>

        </div>
    </div>
  )
}

export default Faq