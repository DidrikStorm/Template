import { motion } from "framer-motion";
import {Car, Plus, Heart, LucideMartini, LucideUtensils, MicVocal, Plane} from "lucide-react";
import coupleImg from "/src/components/IMG_0682.jpeg";

export default function Extra() {
    return (
        <section id="extra" className="py-24 md:py-32 bg-[#fdfbf7]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#b8a89a] tracking-[0.3em] uppercase text-sm mb-4"></p>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#4a4038] mb-4">Extra Information</h2>
                    <div className="w-20 h-px bg-[#c9b8a8] mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-6 mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#f7f3ed] rounded-2xl p-8 text-center"
                    >
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <MicVocal className="w-6 h-6 text-[#c4a67c]" />
                        </div>
                        <h3 className="font-serif text-xl text-[#4a4038] mb-3">Toastmasters</h3>
                        <p className="text-[#6d5f52] text-sm leading-relaxed mb-4">
                            Vi har den stora äran att presentera vårt värdpar, Mathilda och Jakob! Mathilda är inte bara en av
                            brudparets närmaste vänner, utan också den levande Amors pil som såg till att Alice och Didrik överhuvudtaget
                            fann varandra. Vid hennes sida har hon Jakob – brudens bror och Didriks blivande svåger – som har stenkoll på
                            familjeanekdoterna. Tillsammans kommer de att guida oss genom denna oförglömliga dag!<br/>
                            <a
                                href="mailto:Toastmaster.ad@gmail.com"
                                className="underline hover:opacity-80"
                            >
                                Toastmaster.AD@gmail.com
                            </a>

                        </p>
                        <p className="text-[#8a7968] text-xs">

                        </p>
                        <img
                            src={coupleImg}
                            alt="Alice och Didrik"
                            className="w-full rounded-lg mt-8 mb-4"
                        />
                    </motion.div>

                    {/* Gift options */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#f7f3ed] rounded-2xl p-8 text-center"
                        >
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <LucideMartini className="w-6 h-6 text-[#c4a67c]" />
                            </div>
                            <h3 className="font-serif text-xl text-[#4a4038] mb-3">Alkohol</h3>
                            <p className="text-[#6d5f52] text-sm leading-relaxed mb-4">
                                Efter middagen finns det möjlighet att köpa dryck i baren.
                            </p>
                            <p className="text-[#8a7968] text-xs">

                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-[#f7f3ed] rounded-2xl p-8 text-center"
                        >
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <Car className="w-6 h-6 text-[#c4a67c]" />
                            </div>
                            <h3 className="font-serif text-xl text-[#4a4038] mb-3">Parkering</h3>
                            <p className="text-[#6d5f52] text-sm leading-relaxed mb-4">

                            </p>
                            <p className="text-[#8a7968] text-xs">
                                "Ja, det finns gott om parkering vid lokalen. Det kommer finnas skyltar som visar vägen."

                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-[#f7f3ed] rounded-2xl p-8 text-center"
                        >
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <Plus className="w-6 h-6 text-[#c4a67c]" />
                            </div>
                            <h3 className="font-serif text-xl text-[#4a4038] mb-3">Extra Information</h3>
                            <p className="text-[#6d5f52] text-sm leading-relaxed mb-4">

                            </p>
                            <p className="text-[#8a7968] text-xs">
                                "Mer info kommer."

                            </p>
                        </motion.div>
                    </div>

                </motion.div>
                {/* Thank you note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Heart className="w-6 h-6 text-[#c4a67c] mx-auto mb-4 fill-[#c4a67c]/30" />
                    <p className="text-[#8a7968] italic">

                    </p>
                </motion.div>
            </div>
        </section>
    );
}