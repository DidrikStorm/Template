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
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-[#c4a67c]/20 flex items-center justify-center mx-auto mb-8">
                        <Gift className="w-7 h-7 text-[#c4a67c]" />
                    </div>

                    <p className="font-serif text-2xl md:text-3xl text-[#4a4038] mb-6 leading-relaxed italic">
                        Er närvaro är den finaste gåvan vi kan tänka oss.
                    </p>

                    <p className="text-[#6d5f52] leading-relaxed text-lg mb-8">
                        Vi har valt att inte önska oss några presenter. Men om ni ändå vill ge oss något
                        att minnas dagen med, kommer det vid presentbordet finnas en Swish QR-kod.
                    </p>

                    <p className="text-[#6d5f52] leading-relaxed text-base mb-10">
                        Ni är varmt välkomna att skriva i meddelandet vart ni vill att bidraget ska gå —
                        det kan vara till bröllopsresan, en renovering eller bara till det gemensamma hemmet.
                        Varje liten tanke värmer oerhört.
                    </p>

                    <p className="text-[#6d5f52] leading-relaxed text-base mb-10">
                        Men här är en lista i med några presenter om man måster
                        excel...
                        Så om man köper något av detta checka gärna i det så vi inte får massa dubbletter.
                    </p>

                    <div className="w-32 h-px bg-[#c9b8a8] mx-auto mb-10" />

                    <Heart className="w-6 h-6 text-[#c4a67c] mx-auto mb-4 fill-[#c4a67c]/30" />
                    <p className="text-[#8a7968] italic text-base">
                        Tack för att ni firar med oss!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}