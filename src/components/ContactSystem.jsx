import React from 'react';
import { MessageCircle, X, Instagram, Phone, ExternalLink } from 'lucide-react';

const ContactSystem = ({ isOpen, onClose, onOpen }) => {
    const attendants = [
        {
            name: "Atendimento WhatsApp",
            role: "Online Agora",
            action: () => window.open(`https://wa.me/5524974028591?text=Olá, vim pelo site e preciso de um serviço.`, '_blank'),
            icon: <MessageCircle size={22} />,
            color: "bg-green-500 text-white shadow-green-500/20"
        },
        {
            name: "Ligar no Escritório",
            role: "(24) 2231-0028",
            action: () => window.location.href = "tel:2422310028",
            icon: <Phone size={22} />,
            color: "bg-mf-blue text-mf-dark shadow-mf-blue/20"
        },
        {
            name: "Instagram",
            role: "@mfdespachantedocumentalista",
            action: () => window.open("https://instagram.com/mfdespachantedocumentalista", '_blank'),
            icon: <Instagram size={22} />,
            color: "bg-gradient-to-tr from-purple-500 via-mf-red to-orange-500 text-white shadow-mf-red/20"
        }
    ];

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
                <button
                    onClick={onOpen}
                    className="group flex items-center gap-3 bg-[#1e1e1e] border border-mf-blue/30 text-white px-6 py-4 rounded-[2rem] shadow-xl hover:bg-mf-blue hover:border-mf-blue hover:text-black hover:scale-105 transition-all font-bold tracking-wide"
                >
                    <MessageCircle size={24} className="text-mf-blue group-hover:text-black transition-colors" />
                    <span className="hidden md:inline">Atendimento</span>
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-4">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
                        onClick={onClose}
                    />

                    <div className="relative bg-[#1e1e1e]/95 w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl border border-white/10 animate-in slide-in-from-bottom-10 duration-300 backdrop-blur-xl">

                        <div className="w-16 h-1.5 bg-gray-600/50 rounded-full mx-auto mb-8 sm:hidden" />

                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-bold text-white pl-2">Canais de Atendimento</h3>
                            <button onClick={onClose} className="p-3 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors bg-white/5">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {attendants.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={item.action}
                                    className="w-full group relative overflow-hidden rounded-[2rem] bg-[#2d2d2d]/50 hover:bg-[#3d3d3d] p-5 transition-all border border-white/5 hover:border-mf-blue/50 text-left flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={`p-4 rounded-2xl ${item.color} shadow-lg`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg">{item.name}</p>
                                            <p className="text-gray-400 group-hover:text-mf-blue font-medium text-sm transition-colors">{item.role}</p>
                                        </div>
                                    </div>
                                    <ExternalLink size={20} className="text-gray-600 group-hover:text-mf-blue transition-colors" />
                                </button>
                            ))}
                        </div>

                        <p className="text-center text-gray-500 font-medium text-sm mt-8">
                            MF Despachante Documentalista <br/> Petrópolis - RJ
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactSystem;