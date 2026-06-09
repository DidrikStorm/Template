import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import WelcomeHero from "@/components/wedding/WelcomeHero";
import Schedule from "@/components/wedding/Schedule";
import Grillkvall from "@/components/wedding/Grillkvall";
import FAQs from "@/components/wedding/FAQs";
import TravelAccommodation from "@/components/wedding/TravelAccommodation";
import Gifts from "@/components/wedding/Gifts";
import Extra from "@/components/wedding/Extra";
import Footer from "@/components/wedding/Footer";
import EnvelopeIntro from "@/components/wedding/EnvelopeIntro";

export default function Home() {
    const [showEnvelope, setShowEnvelope] = useState(true);

    return (
        <div className="min-h-screen bg-[#fdfbf7]">
            <AnimatePresence>
                {showEnvelope && (
                    <EnvelopeIntro onOpen={() => setShowEnvelope(false)} />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showEnvelope ? 0 : 1 }}
                transition={{ duration: 0.8 }}
            >
                <Navigation />
                <WelcomeHero />
                <Schedule />
                <Grillkvall />
                <FAQs />
                <TravelAccommodation />
                <Gifts />
                <Extra />
                <Footer />
            </motion.div>
        </div>
    );
}