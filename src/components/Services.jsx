import React from 'react';
import { Car, Anchor, Plane, Shield } from 'lucide-react';

// Adicionei a propriedade 'color' e 'accent' para controlar as cores de cada card
const categories = [
    {
        title: "Veículos (Detran & ANTT)",
        icon: <Car size={32} />,
        color: "text-mf-blue",
        accent: "bg-mf-blue/10 group-hover:bg-mf-blue/20 border-mf-blue/30 hover:shadow-mf-blue/10",
        items: [
            "Licenciamento Anual 2026",
            "Transferência de Propriedade",
            "Primeiro Emplacamento",
            "Vistoria INMETRO (GNV)",
            "Legalização Turbo/Rebaixado",
            "ANTT (Transporte de Cargas)",
            "CNH (Renovação e 2ª Via)"
        ]
    },
    {
        title: "Marinha do Brasil",
        icon: <Anchor size={32} />,
        color: "text-mf-red", // Rosa
        accent: "bg-mf-red/10 group-hover:bg-mf-red/20 border-mf-red/30 hover:shadow-mf-red/10",
        items: [
            "Carta Náutica Arrais Amador",
            "Carta Náutica Motonautica",
            "Transferência de Embarcação",
            "Renovação de Título"
        ]
    },
    {
        title: "Passaporte & Vistos",
        icon: <Plane size={32} />,
        color: "text-mf-blue", // Azul
        accent: "bg-mf-blue/10 group-hover:bg-mf-blue/20 border-mf-blue/30 hover:shadow-mf-blue/10",
        items: [
            "Emissão de Passaporte Brasileiro",
            "Cidadania Portuguesa",
            "Visto Americano (Assessoria)",
            "Agendamento Consular"
        ]
    },
    {
        title: "Arma de Fogo (SFPC/PF)",
        icon: <Shield size={32} />,
        color: "text-mf-red", // Rosa
        accent: "bg-mf-red/10 group-hover:bg-mf-red/20 border-mf-red/30 hover:shadow-mf-red/10",
        items: [
            "CR para Colecionador (CAC)",
            "CR para Atirador e Caçador",
            "Posse de Arma (Polícia Federal)",
            "Renovação de Registro"
        ]
    }
];

const Services = () => {
    return (
        <section className="bg-mf-dark py-24 px-4">
            <div className="container mx-auto max-w-7xl">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Soluções completas <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-mf-blue to-mf-red">além do trânsito.</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light">
                        Somos especialistas em regularização documental junto ao Detran, Marinha, Polícia Federal e Consulados.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className={`bg-[#1e1e1e] border border-white/5 rounded-[2.5rem] p-10 transition-all hover:border-opacity-100 hover:shadow-2xl group ${cat.accent.split(' ').slice(2).join(' ')}`}
                        >
                            <div className="flex items-center gap-5 mb-8">
                                <div className={`p-4 rounded-2xl transition-colors ${cat.accent.split(' ').slice(0, 2).join(' ')} ${cat.color}`}>
                                    {cat.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white">{cat.title}</h3>
                            </div>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                                        {/* Bolinha com a cor da categoria */}
                                        <div className={`w-2 h-2 rounded-full ${cat.color.replace('text-', 'bg-')}`} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;