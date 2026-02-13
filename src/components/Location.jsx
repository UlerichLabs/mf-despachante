import React from 'react';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const Location = () => {
    return (
        <section className="bg-mf-dark py-24 px-4 relative overflow-hidden">

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mf-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal className="container mx-auto max-w-6xl">
                <div className="bg-[#1e1e1e] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 flex flex-col lg:flex-row group hover:border-mf-blue/30 transition-all duration-500">

                    <div className="lg:w-2/5 p-10 flex flex-col justify-center gap-8 relative z-10 bg-[#1e1e1e]">

                        <div>
                            <div className="inline-block px-4 py-1 rounded-full bg-mf-blue/10 border border-mf-blue/20 text-mf-blue text-xs font-bold uppercase tracking-wider mb-4">
                                Sede Própria
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Visite nosso escritório
                            </h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="p-3 bg-mf-blue/10 rounded-2xl text-mf-blue shrink-0">
                                        <MapPin size={26} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Alto da Serra</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Rua Padre Feijó, Nº 46 - Loja 5<br />
                                            Petrópolis - RJ, 25630-011
                                        </p>
                                        <a
                                            href="https://maps.google.com/?q=MF+Despachante+Documentalista"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 text-mf-blue text-sm font-bold mt-2 hover:underline"
                                        >
                                            Ver rota no GPS <ArrowUpRight size={14} />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="p-3 bg-mf-blue/10 rounded-2xl text-mf-blue shrink-0">
                                        <Clock size={26} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Horário de Atendimento</h4>
                                        <p className="text-gray-400">
                                            <span className="block text-white">Segunda a Sexta:</span>
                                            10:00 às 17:00
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1">
                                            (Pausa para almoço: 12:00 às 13:00)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="p-3 bg-mf-blue/10 rounded-2xl text-mf-blue shrink-0">
                                        <Phone size={26} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Telefones</h4>
                                        <p className="text-gray-400 text-lg tracking-wide">
                                            (24) 2231-0028
                                        </p>
                                        <p className="text-gray-400 text-lg tracking-wide">
                                            (24) 97402-8591
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => window.open('https://maps.google.com/?q=MF+Despachante+Documentalista', '_blank')}
                            className="w-full py-4 bg-mf-blue hover:bg-cyan-400 text-mf-dark font-bold text-lg rounded-2xl transition-all shadow-[0_0_20px_rgba(0,180,216,0.2)] hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] mt-2"
                        >
                            Traçar Rota Agora
                        </button>
                    </div>

                    <div className="lg:w-3/5 min-h-[450px] relative bg-gray-900">
                        <iframe
                            title="Mapa MF Despachante"
                            src="https://maps.google.com/maps?q=MF+Despachante+Documentalista+Petropolis&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.9)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>

                        <div className="absolute inset-0 bg-mf-blue/10 pointer-events-none mix-blend-overlay"></div>
                    </div>

                </div>
            </ScrollReveal>
        </section>
    );
};

export default Location;