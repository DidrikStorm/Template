import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";


const faqs = [
    {
        question: "Vad är klädkoden?",
        answer: `Klädkoden är .... Damer gärna i elegant klänning och herrar i kostym.
            Undvik vitt och svart. Tänk på att delar av festen är utomhus.`
    },
    {
        question: "Får man hålla tal?",
        answer: "Absolut, man får gärna hålla tal. Anmäl tal så fort som möjligt till våra toastmasters.",
        link: { text: "Hör av er till toastmaster", href: "#extra" }
    },
    {
        question: "Finns det vegetariskt/veganskt alternativ?",
        answer: "Absolut! Meddela oss om allergier eller matpreferenser när du OSA:r så ordnar vi ett underbart alternativ."
    },
    {
        question: "Kan jag ta bilder under ceremonin?",
        answer: `Självklart!
            Vi blir jätteglada om ni vill ta bilder och föreviga dagen tillsammans med oss.
            Det viktigaste för oss är att ni känner er närvarande och delar stunden med oss.`
    },
    {
        question: "Vad ska jag göra om jag har allergier?",
        answer: "Meddela oss om eventuella allergier när du OSA:r så säkerställer vi att maten passar dig."
    },
];

function FAQItem({ faq, isOpen, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-[#e8ddd0] last:border-b-0"
        >
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
        <span className="font-serif text-lg md:text-xl text-[#4a4038] group-hover:text-[#6d5f52] transition-colors pr-4">
          {faq.question}
        </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="w-5 h-5 text-[#b8a89a]" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-[#6d5f52] leading-relaxed whitespace-pre-line">
                        {faq.answer}
                        </p>
                        {faq.link && (
                            <a
                                href={faq.link.href}
                                className="inline-block pb-6 text-[#c4a67c] hover:text-[#a88a5c] underline underline-offset-2 transition-colors"
                            >
                                {faq.link.text} →
                            </a>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faqs" className="py-24 md:py-32 bg-[#f7f3ed]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#b8a89a] tracking-[0.3em] uppercase text-sm mb-4">Frågor & Svar</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#4a4038] mb-4">FAQs</h2>
                    <div className="w-20 h-px bg-[#c9b8a8] mx-auto" />
                </motion.div>

                <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-sm">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}