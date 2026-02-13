import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Clock } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

// Importando o logo da pasta assets
import logoMf from '../assets/logo.png';

const Hero = ({ onOpenContact }) => {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-mf-dark pt-20">

            {/* Luzes de Fundo */}
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-mf-blue/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-mf-red/20 rounded-full blur-[120px] pointer-events-none" />

            <ScrollReveal>
                <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">

                    {/* LOGO - Agora usando a variável importada {logoMf} */}
                    <div className="mb-8 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-mf-blue to-mf-red opacity-30 group-hover:opacity-50 blur transition duration-500 rounded-full"></div>
                        <img
                            src={logoMf}
                            alt="Logo MF Despachante"
                            // AJUSTE FINAL:
                            // Mobile: w-40 (160px) -> Fica legível e não ocupa a tela toda.
                            // PC: md:w-[15rem] (240px) -> Um pouquinho maior que o 12rem pra não sumir, mas bem menor que o gigante de antes.
                            className="relative w-40 md:w-[15rem] object-contain mix-blend-screen brightness-110 contrast-125 transition-transform duration-500 hover:scale-105"
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                        />
                        {/* Fallback caso a imagem falhe */}
                        <h2 className="hidden text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-mf-blue to-mf-red border-2 border-mf-blue rounded-full p-4">MF</h2>
                    </div>

                    {/* Badge Online */}
                    <div className="inline-flex items-center gap-2 bg-[#1e1e1e] border border-mf-red/30 rounded-full px-4 py-1.5 mb-6 shadow-lg shadow-mf-red/5">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mf-red opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mf-red"></span>
                        </span>
                        <span className="text-xs text-gray-300 font-medium uppercase tracking-wider">Atendimento Online</span>
                    </div>

                    {/* Título */}
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Regularize seu veículo <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-mf-blue via-white to-mf-red">
                            sem sair de casa.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Especialistas em Detran, Marinha e Polícia Federal. <br />
                        A segurança do <span className="text-mf-blue font-medium">MF Despachante</span> direto no seu WhatsApp.
                    </p>

                    {/* Botão Principal */}
                    <div className="flex flex-col items-center gap-10 w-full">
                        <button
                            onClick={onOpenContact}
                            className="group relative px-10 py-5 bg-gradient-to-r from-mf-blue to-mf-red text-white font-bold text-xl rounded-[2rem] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(239,35,60,0.4)] flex items-center gap-3"
                        >
                            Regularizar Meu Veículo
                            <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
                        </button>

                        {/* Cards de Diferenciais */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-4">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col items-center gap-3 hover:bg-white/10 transition-colors group">
                                <Clock size={28} className="text-mf-blue group-hover:scale-110 transition-transform" />
                                <span className="text-white font-bold text-lg">Rápido</span>
                                <span className="text-sm text-gray-400">Sem filas de Detran</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col items-center gap-3 hover:bg-white/10 transition-colors group">
                                <ShieldCheck size={28} className="text-mf-red group-hover:scale-110 transition-transform" />
                                <span className="text-white font-bold text-lg">Seguro</span>
                                <span className="text-sm text-gray-400">Credenciado oficial</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col items-center gap-3 hover:bg-white/10 transition-colors group">
                                <CheckCircle size={28} className="text-mf-blue group-hover:scale-110 transition-transform" />
                                <span className="text-white font-bold text-lg">Facilitado</span>
                                <span className="text-sm text-gray-400">Parcelamento no cartão</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default Hero;