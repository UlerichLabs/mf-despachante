import React from 'react';
import { ExternalLink, Landmark, FileCheck, Anchor, Shield } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const links = [
    {
        name: "Detran RJ - Agendamento",
        url: "https://www.detran.rj.gov.br/",
        icon: <FileCheck size={24} />,
        desc: "Agende vistorias e serviços"
    },
    {
        name: "Bradesco - Boletos (GRD)",
        url: "https://banco.bradesco/html/classic/produtos-servicos/mais-produtos-servicos/pagamentos.shtm",
        icon: <Landmark size={24} />,
        desc: "Emissão de boleto IPVA/GRD"
    },
    {
        name: "Polícia Federal - Passaporte",
        url: "https://www.gov.br/pf/pt-br/assuntos/passaporte",
        icon: <Shield size={24} />,
        desc: "Agendamento e emissão"
    },
    {
        name: "Marinha do Brasil",
        url: "https://www.marinha.mil.br/dpc/",
        icon: <Anchor size={24} />,
        desc: "Serviços e normas"
    }
];

const UsefulLinks = () => {
    return (
        <section className="bg-[#161616] py-16 px-4 border-y border-white/5">
            <ScrollReveal className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Links Úteis e Consultas</h3>
                        <p className="text-gray-400 text-sm">Acesso rápido aos principais portais governamentais.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-2xl bg-mf-dark border border-gray-800 hover:border-mf-blue/50 hover:bg-[#252525] transition-all group"
                        >
                            <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:text-mf-blue group-hover:bg-mf-blue/10 transition-colors">
                                {link.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-200 text-sm group-hover:text-white">{link.name}</h4>
                                <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                            </div>
                            <ExternalLink size={16} className="ml-auto text-gray-600 group-hover:text-mf-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};

export default UsefulLinks;