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
                    dark: '#0f0f0f',
                    surface: '#1e1e1e',
                    blue: '#00b4d8',
                    red: '#ef233c',
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