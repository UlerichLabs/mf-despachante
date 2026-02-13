import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import UsefulLinks from './components/UsefulLinks'; // NOVO
import Location from './components/Location';       // NOVO
import ContactSystem from './components/ContactSystem';

function App() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="bg-mf-dark min-h-screen text-white selection:bg-mf-blue selection:text-black font-sans">

            <header className="absolute top-0 w-full z-30 p-6 container mx-auto left-0 right-0">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2">
                        <span>MF<span className="text-mf-blue">.</span></span>
                    </div>
                    {/* Link discreto para contato no header */}
                    <button onClick={() => setIsContactOpen(true)} className="hidden md:block text-sm font-medium hover:text-mf-blue transition-colors">
                        Fale Conosco
                    </button>
                </div>
            </header>

            <main>
                <Hero onOpenContact={() => setIsContactOpen(true)} />
                <HowItWorks />
                <Services />
                <UsefulLinks />
                <Location />
            </main>

            <footer className="bg-black py-12 px-4 text-center border-t border-white/5 relative overflow-hidden">
                {/* Luz de fundo no rodapé (Agora com a SUA cor - Azul Ulerich) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>

                <div className="flex flex-col items-center gap-6 mb-8 relative z-10">
                    <h2 className="text-3xl font-bold text-white">MF<span className="text-mf-blue">.</span></h2>
                    <p className="text-gray-400 text-lg max-w-md font-light leading-relaxed">
                        Agilidade e confiança para sua documentação.<br />
                        <span className="text-white font-medium">(24) 2231-0028 • (24) 97402-8591</span> <br />
                        Petrópolis, RJ
                    </p>
                </div>

                <div className="text-gray-600 text-sm flex flex-col gap-3 relative z-10">
                    <p>© 2026 MF Despachante Documentalista. Todos os direitos reservados.</p>

                    <p className="flex items-center justify-center gap-2">
                        Desenvolvido por
                        <motion.a
                            href="https://lucas-ulerich.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-base font-extrabold tracking-wide hover:opacity-80 transition-opacity cursor-pointer"
                            animate={{
                                scale: [1, 1.05, 1],
                                filter: [
                                    "hue-rotate(0deg) brightness(1)",
                                    "hue-rotate(90deg) brightness(1.2)",
                                    "hue-rotate(0deg) brightness(1)"
                                ],
                                textShadow: [
                                    "0px 0px 0px rgba(0,180,216,0)",
                                    "0px 0px 10px rgba(0,180,216,0.5)",
                                    "0px 0px 0px rgba(0,180,216,0)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                            }}
                        >
                            UlerichLabs
                        </motion.a>
                    </p>
                </div>
            </footer>

            <ContactSystem
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                onOpen={() => setIsContactOpen(true)}
            />
        </div>
    );
}

export default App;