import React from 'react';
import { MessageCircle, Search, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section className="bg-[#161616] py-24 px-4 border-y border-white/5 relative overflow-hidden">

            {/* Luz de fundo sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-mf-blue/5 to-mf-red/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-6xl text-center relative z-10">

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
                    Resolva tudo em <span className="text-transparent bg-clip-text bg-gradient-to-r from-mf-blue to-mf-red">3 passos simples</span>
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">

                    {/* Linha conectora */}
                    <div className="hidden md:block absolute top-14 left-24 right-24 h-1 bg-gradient-to-r from-mf-blue via-mf-red to-green-500 opacity-30 -z-10 rounded-full"></div>

                    {/* Passo 1 */}
                    <div className="relative flex flex-col items-center flex-1 group">
                        <div className="w-28 h-28 bg-[#1e1e1e] border-4 border-mf-blue rounded-[2rem] flex items-center justify-center text-mf-blue shadow-lg shadow-mf-blue/20 mb-8 group-hover:scale-105 transition-transform">
                            <MessageCircle size={44} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">1. Chame no WhatsApp</h3>
                        <p className="text-gray-400 px-4 leading-relaxed">
                            Fale direto com nossos especialistas. Sem robôs.
                        </p>
                    </div>

                    {/* Passo 2 - ALTERADO AQUI */}
                    <div className="relative flex flex-col items-center flex-1 group mt-8 md:mt-0">
                        <div className="w-28 h-28 bg-[#1e1e1e] border-4 border-mf-red rounded-[2rem] flex items-center justify-center text-mf-red shadow-lg shadow-mf-red/20 mb-8 group-hover:scale-105 transition-transform">
                            <Search size={44} />
                        </div>
                        {/* Título Atualizado (Sem "Gratuito") */}
                        <h3 className="text-2xl font-bold text-white mb-3">2. Análise Documental</h3>
                        {/* Descrição Atualizada (Texto do Fernando) */}
                        <p className="text-gray-400 px-4 leading-relaxed">
                            Analisamos seu documento com os melhores sistemas do mercado.
                        </p>
                    </div>

                    {/* Passo 3 */}
                    <div className="relative flex flex-col items-center flex-1 group">
                        <div className="w-28 h-28 bg-[#1e1e1e] border-4 border-green-500 rounded-[2rem] flex items-center justify-center text-green-500 shadow-lg shadow-green-500/20 mb-8 group-hover:scale-105 transition-transform">
                            <CheckCircle2 size={44} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">3. Documento na Mão</h3>
                        <p className="text-gray-400 px-4 leading-relaxed">
                            Pague parcelado e receba tudo digital ou físico.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;