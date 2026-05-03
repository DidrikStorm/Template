import { motion } from "framer-motion";
import {Church, Utensils, Music, Sparkles, GlassWater, Cake, Camera, BedDouble} from "lucide-react";
import { Icon } from '@iconify/react';

const scheduleItems = [
    {
        time: "15:30",
        title: "Vigsel",
        description: "Ceremonin äger rum i den trevliga trädgården.",
        icon: Church,
    },
    {
        time: "16:00",
        title: "Gruppbild",
        description: "Innan minglet samlas vi alla och tar en gruppbild.",
        icon: Camera,
    },
    {
        time: "16:15",
        title: "Mingel & Fördrink",
        description: "Välkomstdrink och mingel i trädgården.",
        icon: GlassWater,
    },
    {
        time: "18:00",
        title: "Middag",
        description: "Middag serveras i ladan.",
        icon: Utensils,
    },
    {
        time: "20:00",
        title: "Dessert",
        description: "Det bjuds på hemmagjord dessert.",
        icon: Cake,
    },
    {
        time: "22:00",
        title: "Fest & Dans",
        description: "Middagen dukas av och dansgolvet öppnas.",
        icon: Sparkles,
    },
    {
        time: "00:00",
        title: "Vickning",
        description: "Det bjuds på korv.",
        icon: (props) => <Icon icon="mdi:food-hot-dog" {...props} />,
    },
    {
        time: "02:00",
        title: "Slut",
        description: "Läggdags.",
        icon: BedDouble,
    },
];

export default function Schedule() {
    return (
        <section id="schema" className="py-24 md:py-32 bg-[#fdfbf7]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#b8a89a] tracking-[0.3em] uppercase text-sm mb-4">Programmet</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#4a4038] mb-4">Schema</h2>
                    <div className="w-20 h-px bg-[#c9b8a8] mx-auto" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {scheduleItems.map((item, index) => (
                        <motion.div
                            key={item.time}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex gap-6 md:gap-10 mb-12 last:mb-0"
                        >
                            {/* Time */}
                            <div className="w-20 md:w-24 flex-shrink-0 text-right">
                                <span className="font-serif text-2xl md:text-3xl text-[#c4a67c]">{item.time}</span>
                            </div>

                            {/* Line and dot */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-[#f7f3ed] border-2 border-[#c9b8a8] flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-[#8a7968]" />
                                </div>
                                {index < scheduleItems.length - 1 && (
                                    <div className="w-px h-full min-h-[60px] bg-gradient-to-b from-[#c9b8a8] to-[#e8ddd0]" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-8">
                                <h3 className="font-serif text-xl md:text-2xl text-[#4a4038] mb-2">{item.title}</h3>
                                <p className="text-[#6d5f52] leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}