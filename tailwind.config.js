/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mf: {
                    dark: '#0f0f0f',   // Fundo Dark Material
                    surface: '#1e1e1e', // Cor dos cards
                    blue: '#00b4d8',   // Destaque (Botões)
                    red: '#ef233c',    // Alertas/Secundário
                }
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
            }
        },
    },
    plugins: [],
}