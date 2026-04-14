import { motion } from "framer-motion";
import {Gift, Heart, Home, LucideToilet, Plane, Gem} from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Gifts() {
    return (
        <section id="presenter" className="py-24 md:py-32 bg-[#f7f3ed]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#b8a89a] tracking-[0.3em] uppercase text-sm mb-4">Med kärlek</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#4a4038] mb-4">Presenter</h2>
                    <div className="w-20 h-px bg-[#c9b8a8] mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    {/* Main message */}
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 rounded-full bg-[#c4a67c]/20 flex items-center justify-center mx-auto mb-6">
                            <Gift className="w-7 h-7 text-[#c4a67c]" />
                        </div>
                        <p className="text-[#6d5f52] leading-relaxed text-lg max-w-xl mx-auto">
                            Vi har bestämt oss att vi inte ska några presenter <br />
                            Vi vill hellre att man isåfall bidrar till bröllopet och bröllopsresa med en slant
                        </p>
                    </div>

                    {/* Gift options */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white border border-[#e8ddd0] rounded-2xl p-8 text-center"
                        >
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <Gem className="w-6 h-6 text-[#c4a67c]" />
                            </div>
                            <h3 className="font-serif text-xl text-[#4a4038] mb-3">Bröllop</h3>
                            <p className="text-[#6d5f52] text-sm leading-relaxed mb-4">
                                Bröllopet <br/>

                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white border border-[#e8ddd0] rounded-2xl p-8 text-center"
                        >
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <Plane className="w-6 h-6 text-[#c4a67c]" />
                            </div>
                            <h3 className="font-serif text-xl text-[#4a4038] mb-3">Resa</h3>
                            <p className="text-[#6d5f52] text-sm leading-relaxed mb-4">
                                Bröllopsresa
                            </p>
                        </motion.div>
                    </div>

                    {/* Bank details */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white border border-[#e8ddd0] rounded-2xl p-8 text-center"
                    >
                        <h4 className="font-medium text-[#4a4038] mb-4">Bankuppgifter</h4>
                        <div className="space-y-2 text-[#6d5f52] text-sm">
                            <p>Handelsbanken: </p>
                            <p>Mottagare: Alice Fogelberg & Didrik Storm</p>
                            <p className="text-[#8a7968]">Märk gärna överföringen med ert namn</p>
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
                            Tack för att ni firar med oss!
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}