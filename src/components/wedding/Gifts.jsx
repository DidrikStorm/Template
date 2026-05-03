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

                    <p className="font-serif text-2xl md:text-3xl text-[#6d5f52] mb-6 leading-relaxed italic">
                        Er närvaro är den finaste gåvan vi kan tänka oss.

                        Vi har allt vi behöver så därför har vi ingen lång present lista. Men vill ni ändå uppmärksamma vår dag med en gåva så har vi två förslag:
                    </p>

                    <p className="text-[#6d5f52] leading-relaxed text-base mb-10">

                        Som många vet håller vi sakta men säkert på att renovera vårat hus. Det blir lätt kostsamt, så vi vore tacksamma för en gåva (stor eller liten) så att vi har möjlighet att uppgradera några val som vi annars inte gjort.

                        Efter bröllopet blir det bröllopsresa till Italien. Tycker man att renovering är jättetråkigt så är vi även tacksamma för en gåva som skulle gå till en lite trevligare semester. (Alice är sjukt snål annars)
                    </p>

                    <p className="text-[#6d5f52] leading-relaxed text-base mb-10">
                        Om ni vill ge en gåva så får man gärna sätta in på konto< br/>  Banknr: 6690 - 490 658 911 Kontoinnehavare: Karin Fogelberg. <br/>Alice föräldrar har hand om kontot och lämnar över pengarna samt en sammanställning av gåvorna efter bröllopet. Märk överföringen med personerna gåvan är från samt vad ni önskar att det ska användas till.

                    </p>

                    <p className="text-[#6d5f52] leading-relaxed text-base mb-10">
                        Vi vet att vissa gärna vill köpa en fysisk present (typ Karin Fogelberg). Därför har vi gjort en kort lista på saker vi önskar oss. Bocka av presenten som du köpt så att vi inte råkar få dubletter.<br/>
                        Lista kommer snart...

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