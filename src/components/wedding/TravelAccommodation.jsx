import { motion } from "framer-motion";
import { MapPin, Hotel, Train, Car, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function TravelAccommodation() {
    return (
        <section id="resa" className="py-24 md:py-32 bg-[#fdfbf7]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#b8a89a] tracking-[0.3em] uppercase text-sm mb-4">Praktisk information</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#4a4038] mb-4">Resa & Boende</h2>
                    <div className="w-20 h-px bg-[#c9b8a8] mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Venue Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-[#f7f3ed] rounded-2xl p-8 md:p-10 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#c4a67c]/20 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-[#c4a67c]" />
                                </div>
                                <h3 className="font-serif text-2xl text-[#4a4038]">Vigsel & Festlokalen</h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                <p className="text-[#4a4038] font-medium text-lg">Lokal</p>
                                <p className="text-[#6d5f52]">
                                    Adress<br />
                                    Göteborg
                                </p>
                                <p className="text-[#6d5f52] leading-relaxed">
                                    Info.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-medium text-[#4a4038]">Hur tar man sig dit?</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <Car className="w-5 h-5 text-[#8a7968] mt-0.5" />
                                        <p className="text-[#6d5f52] text-sm">
                                            <span className="font-medium">Med bil:</span> Parkering finns vid lokalen.
                                        </p>
                                    </div>
                                    {/*
                                    <div className="flex items-start gap-3">
                                        <Train className="w-5 h-5 text-[#8a7968] mt-0.5" />
                                        <p className="text-[#6d5f52] text-sm">
                                            <span className="font-medium">Kollektivt:</span> .
                                        </p>
                                    </div>
                                    */}
                                    <div className="mt-8 flex justify-center">
                                    <Button
                                        variant="outline"
                                        className="border-[#c9b8a8] text-[#6d5f52] hover:bg-[#c9b8a8]/10"
                                        onClick={() =>{
                                            window.open("https://www.google.com/maps/search/?api=1&query=S%C3%B6dviks+G%C3%A4stgivareg%C3%A5rd", "_blank"
                                            );
                                        }}
                                    >
                                        <ExternalLink></ExternalLink>
                                        Visa på karta

                                    </Button>
                                    </div>
                                    <div className="location">
                                        <img
                                            className="wedding-image"
                                            src="test"
                                            alt="Bröllops lokal"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hotels */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#c4a67c]/20 flex items-center justify-center">
                                <Hotel className="w-5 h-5 text-[#c4a67c]" />
                            </div>
                            <h3 className="font-serif text-2xl text-[#4a4038]">Boende</h3>
                        </div>
                        <div className="mt-8 p-6 bg-[#c4a67c]/10 rounded-xl">
                            <p className="text-[#6d5f52] text-sm flex items-start gap-2">
                                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>
                                    Kontakta oss om ni har frågor kring boende på <br />
                                    <a href="mailto:mail@gmail.com" className="text-[#c4a67c] hover:underline">
                                        mail@gmail.com
                                    </a>
                                </span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}