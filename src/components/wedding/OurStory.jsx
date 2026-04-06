import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const storyMilestones = [
    {
        year: "2018",
        title: "Första mötet",
        description: "Vi träffades på en midsommarfest hos gemensamma vänner. Didrik spillde punch på Alices klänning - inte den romantiska starten man kanske drömmer om!",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop"
    },
    {
        year: "2019",
        title: "Första dejten",
        description: "Efter månader av sms:ande tog Didrik äntligen mod till sig och bjöd ut Alice på middag. Det blev italienskt och ett samtal som aldrig ville ta slut.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
    },
    {
        year: "2020",
        title: "Vi flyttade ihop",
        description: "Mitt i pandemin insåg vi att vi ville tillbringa varje dag tillsammans. Vi hittade vår drömlilla lägenhet på Södermalm.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
    },
    {
        year: "2023",
        title: "Frieriet",
        description: "Under en vandring i fjällen, med utsikt över hela dalen, gick Didrik ner på knä. Alice sa ja innan han ens hunnit ställa frågan!",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop"
    },
    {
        year: "2026",
        title: "Vi gifter oss",
        description: "Nu är det äntligen dags att fira kärleken med alla vi håller kära. Vi kan inte vänta på att se er alla!",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
    }
];

export default function OurStory() {
    return (
        <section id="story" className="py-24 md:py-32 bg-[#f7f3ed]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#b8a89a] tracking-[0.3em] uppercase text-sm mb-4">Vår resa</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#4a4038] mb-4">Vår Berättelse</h2>
                    <div className="w-20 h-px bg-[#c9b8a8] mx-auto" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {storyMilestones.map((milestone, index) => (
                        <motion.div
                            key={milestone.year}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                                index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Image */}
                            <div className="md:w-1/2">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-[#c4a67c]/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                                    <img
                                        src={milestone.image}
                                        alt={milestone.title}
                                        className="relative w-full h-64 object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="md:w-1/2 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-[#c4a67c] font-serif text-3xl">{milestone.year}</span>
                                    <Heart className="w-4 h-4 text-[#c4a67c] fill-[#c4a67c]/30" />
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl text-[#4a4038] mb-4">
                                    {milestone.title}
                                </h3>
                                <p className="text-[#6d5f52] leading-relaxed">
                                    {milestone.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mt-20 max-w-2xl mx-auto"
                >
                    <div className="w-px h-16 bg-gradient-to-b from-[#c9b8a8] to-transparent mx-auto mb-8" />
                    <p className="font-serif text-2xl md:text-3xl text-[#4a4038] italic leading-relaxed">
                        " - Have you ever considered divore?.<br/>
                        - oh heavens no, never! <br/>
                        Murder, every single day"
                    </p>
                </motion.div>
            </div>
        </section>
    );
}