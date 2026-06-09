import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, Mail } from "lucide-react";

export default function Grillkvall() {
    return (
        <section id="grillkvall" className="py-24 md:py-32 bg-[#fdfbf7]">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#b8a89a] tracking-[0.3em] uppercase text-sm mb-4">Dagen innan bröllopet</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#4a4038] mb-4">Grillkväll 🌿🔥</h2>
                    <div className="w-20 h-px bg-[#c9b8a8] mx-auto" />
                </motion.div>

                <div className="space-y-8">
                    {/* Welcome text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8ddd0]"
                    >
                        <p className="text-[#4a4038] text-lg leading-relaxed mb-4">
                            Välkommen på grillfest! Dagen innan bröllopet vill vi gärna välkomna alla som redan tagit sig till Öland och bjuda på en avslappnad grillkväll på Alice sommarställe i Kårehamn. Vi kommer ställa fram spel och lekar men framför allt ser vi fram emot att hinna umgås lite mer än bara på bröllopsdagen.
                        </p>
                        <p className="text-[#6d5f52] leading-relaxed">
                            Det här blir en enkel och härlig kväll/eftermiddag utan klädkod och utan sittande middag – kom som du är! Vi bjuder på grillad korv och dryck, och vi kommer att vara utomhus oavsett väder, så klä dig efter förutsättningarna.
                        </p>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8ddd0] text-center">
                            <Calendar className="w-6 h-6 text-[#c4a67c] mx-auto mb-3" />
                            <p className="text-[#b8a89a] text-xs tracking-widest uppercase mb-1">När</p>
                            <p className="font-serif text-[#4a4038] text-lg">Fredag 31/7</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8ddd0] text-center">
                            <Clock className="w-6 h-6 text-[#c4a67c] mx-auto mb-3" />
                            <p className="text-[#b8a89a] text-xs tracking-widest uppercase mb-1">Tid</p>
                            <p className="font-serif text-[#4a4038] text-lg">Drop in 17:00</p>
                            <p className="text-[#6d5f52] text-sm">Avslut senast 22:00</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8ddd0] text-center">
                            <MapPin className="w-6 h-6 text-[#c4a67c] mx-auto mb-3" />
                            <p className="text-[#b8a89a] text-xs tracking-widest uppercase mb-1">Var</p>
                            <p className="font-serif text-[#4a4038] text-lg">Kårehamn</p>
                            <p className="text-[#6d5f52] text-sm">Elsa kåresväg 27</p>
                        </div>
                    </motion.div>

                    {/* Parking & Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8ddd0]"
                    >
                        <h3 className="font-serif text-2xl text-[#4a4038] mb-3">Parkering & vägbeskrivning</h3>
                        <p className="text-[#6d5f52] leading-relaxed mb-6">
                            Det är svårt att få plats med alla bilar utanför huset, så vi önskar att man parkerar nere i hamnen och följer sedan kartan nedan för att hitta rätt. Vi kommer också sätta ut skyltar så att det är lätt att hitta.
                        </p>
                        <img
                            src="https://media.base44.com/images/public/69774f667531e8f31040bb02/014d48cee_Vgbeskrivningparkering.png"
                            alt="Vägbeskrivning och parkering Kårehamn"
                            className="w-full rounded-xl border border-[#e8ddd0]"
                        />
                    </motion.div>

                    {/* Good to know */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="bg-[#f7f3ed] rounded-2xl p-8 border border-[#e8ddd0]"
                    >
                        <h3 className="font-serif text-2xl text-[#4a4038] mb-4">Bra att veta</h3>
                        <ul className="space-y-3 text-[#6d5f52] leading-relaxed">
                            <li>🚽 Stugan har endast en förbränningstoalett som inte klarar alltför många gäster, så kom nykissad för säkerhets skull. Om det krisar löser vi det såklart!</li>
                            <li>🏖️ Om det är fint väder och man kommit till Öland tidigare än kl. 17 finns en väldigt fin badstrand för den som söker någonstans att spendera lite tid innan tillställningen.</li>
                        </ul>
                    </motion.div>

                    {/* RSVP */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8ddd0] text-center"
                    >
                        <Mail className="w-7 h-7 text-[#c4a67c] mx-auto mb-3" />
                        <h3 className="font-serif text-2xl text-[#4a4038] mb-2">OSA</h3>
                        <p className="text-[#6d5f52] leading-relaxed mb-2">
                            Anmäl er senast <strong>31 juni</strong> så att vi kan räkna hur mycket korv som behöver köpas.<br/>
                            <a href="mailto:aliceochdidrik2026@gmail.com" className="text-[#c4a67c] hover:underline">
                                aliceochdidrik2026@gmail.com
                            </a>
                        </p>
                        <p className="text-[#4a4038] font-medium">Varmt välkomna 💕</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}