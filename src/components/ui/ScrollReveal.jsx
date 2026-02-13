import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, variant = "default", className = "" }) => {

    const variants = {
        default: {
            hidden: { opacity: 0, y: 30, scale: 0.98 },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1] // Curva suave e cinemática
                }
            }
        },
        container: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1
                }
            }
        },
        item: {
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                }
            }
        }
    };

    return (
        <motion.div
            variants={variants[variant] || variants.default}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
