import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";


export default function EnvelopeIntro({ onOpen }) {
    const [isOpening, setIsOpening] = useState(false);

    const handleOpen = () => {
        setIsOpening(true);
        setTimeout(() => {
            onOpen();
        }, 1500);
    };

    // Heart particles
    const hearts = Array.from({ length: 55 });

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
                style={{
                    background: "linear-gradient(180deg, #f5f0eb 0%, #ebe4dc 100%)",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E"), linear-gradient(180deg, #f5f0eb 0%, #ebe4dc 100%)`
                }}
            >

                {/* ❤️ Heart burst animation */}
                {isOpening && (
                    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[60]">
                        {hearts.map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                    x: 0,
                                    y: 0
                                }}
                                animate={{
                                    opacity: [1, 1, 0],
                                    scale: [1, 1.4, 1],
                                    x: (Math.random() - 0.5) * 1000,
                                    y: -300 - Math.random() * 400
                                }}
                                transition={{
                                    duration: 3,
                                    ease: "easeOut",
                                    delay: Math.random() * 0.2
                                }}
                                className="absolute left-1/2 top-1/2 text-red-500"
                                style={{
                                    fontSize: `${Math.random() * 20 + 20}px`
                                }}
                            >
                                <Heart fill="red" color="red"
                                       width={Math.random() * 40 + 40}   // bigger hearts
                                       height={Math.random() * 40 + 40} />
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Decorative light rays */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
                     style={{
                         background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)"
                     }}
                />

                <div className="relative flex flex-col items-center">

                    {/* Text above envelope */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <p className="text-[#8a7a6d] tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
                            Stort Välkomna till
                        </p>
                        <h1 className="font-serif text-4xl md:text-6xl text-[#5a4a3d] italic">
                            Bröllop för Alice och Didrik
                        </h1>
                    </motion.div>

                    {/* Envelope */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="relative cursor-pointer"
                        onClick={handleOpen}
                    >
                        {/* Envelope body */}
                        <motion.div
                            animate={isOpening ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div
                                className="w-72 h-48 md:w-96 md:h-64 rounded-lg shadow-2xl relative"
                                style={{
                                    background: "linear-gradient(145deg, #e8c4c4 0%, #ddb8b8 50%, #d4a8a8 100%)"
                                }}
                            >
                                {/* Envelope flap */}
                                <motion.div
                                    initial={{ rotateX: 0 }}
                                    animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
                                    className="absolute top-0 left-0 right-0 z-20"
                                >
                                    <div
                                        className="w-72 md:w-96 h-28 md:h-36"
                                        style={{
                                            background: "linear-gradient(145deg, #ddb8b8 0%, #d4a8a8 100%)",
                                            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                                            backfaceVisibility: "hidden"
                                        }}
                                    />
                                </motion.div>

                                {/* Inner fold lines */}
                                <div
                                    className="absolute bottom-0 left-0 w-full h-full opacity-30"
                                    style={{
                                        background: "linear-gradient(135deg, transparent 48%, #c49898 50%, transparent 52%), linear-gradient(225deg, transparent 48%, #c49898 50%, transparent 52%)"
                                    }}
                                />

                                {/* Wax seal */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                    <div
                                        className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(145deg, #c9b8a8 0%, #b8a898 100%)"
                                        }}
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#a89888]/30" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Click to open text */}
                    {!isOpening && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="mt-10 md:mt-14 text-[#8a7a6d] tracking-[0.3em] uppercase text-xs"
                        >
                            Tryck för att öppna
                        </motion.p>
                    )}

                    {/* White fade */}
                    {isOpening && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.7 }}
                            className="fixed inset-0 bg-white z-50"
                        />
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
