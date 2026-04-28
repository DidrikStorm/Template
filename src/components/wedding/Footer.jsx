import { motion } from "framer-motion";
import { Heart, Mail, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-16 bg-[#4a4038] text-white/80">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Names */}
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">
                        Alice & Didrik
                    </h3>
                    <p className="text-white/60 mb-8">1 Augusti 2026</p>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-16 h-px bg-white/20" />
                        <Heart className="w-4 h-4 text-[#c4a67c] fill-[#c4a67c]/50" />
                        <div className="w-16 h-px bg-white/20" />
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                        <a
                            href="mailto:aliceochdidrik2026@gmail.com"
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            aliceochdidrik2026@gmail.com
                        </a>
                        {/* <a
                            href="https://www.instagram.com/alicelyftervikter"
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                        >
                            <Instagram className="w-4 h-4" />
                            @alicelyftervikter
                        </a>*/}
                    </div>

                    {/* Hashtag */}
                    <p className="text-[#c4a67c] font-medium tracking-wide mb-8">
                        #AliceOchDidrik2026
                    </p>

                    {/* Copyright */}
                    <p className="text-white/40 text-sm">
                        Med kärlek skapat för vår stora dag
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}