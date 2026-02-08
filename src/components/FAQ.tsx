'use client';

import { useState } from 'react';

const faqs = [
    {
        question: "What can I expect in our first session?",
        answer: "Our first session is about getting to know you—your history, current challenges, and what you hope to get from therapy. I'll ask questions to understand your experience, and we'll discuss whether we're a good fit to work together. There's no pressure; this is a time to see if you feel comfortable and understood."
    },
    {
        question: "Do you offer telehealth appointments?",
        answer: "Yes, I offer secure telehealth sessions for anyone located in California. Telehealth allows you to attend therapy from wherever you feel most comfortable—whether that's your home, office, or another private space. The platform I use is HIPAA-compliant and easy to access."
    },
    {
        question: "What therapeutic approaches do you use?",
        answer: "I integrate evidence-based methods including cognitive-behavioral therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), mindfulness-based practices, and body-oriented techniques. The specific approach depends on your needs and what resonates with you. My goal is to help you understand both the emotional and physiological sides of what you're experiencing."
    },
    {
        question: "How long does therapy typically last?",
        answer: "The length of therapy varies for each person. Some clients come for a specific issue and find relief within a few months. Others benefit from longer-term work, especially when addressing trauma or deeply rooted patterns. We'll regularly check in about your progress and adjust as needed."
    },
    {
        question: "What are your fees and do you accept insurance?",
        answer: "I offer private-pay sessions at a rate we can discuss during our initial consultation. While I don't accept insurance directly, I can provide a superbill for you to submit to your insurance company for potential out-of-network reimbursement. Contact me for current rates."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="section bg-[var(--background)]">
            <div className="container mx-auto px-8 max-w-3xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl font-light italic">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-[var(--color-secondary-dark)]"
                        >
                            <button
                                className="w-full py-6 flex items-center justify-between text-left"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-[var(--color-primary)] text-lg font-medium pr-8">
                                    {faq.question}
                                </span>
                                <span
                                    className={`text-[var(--color-accent)] text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''
                                        }`}
                                    aria-hidden="true"
                                >
                                    +
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-[var(--color-text-light)] text-base leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
