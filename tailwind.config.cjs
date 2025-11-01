/** @type {import('tailwindcss').Config} */
module.exports = {
    // ESSENCIAL: Diz ao Tailwind para escanear todos os arquivos .js, .jsx, .ts, .tsx 
    // e o index.html dentro de src/ em busca de classes.
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Aqui você pode adicionar cores, fontes e tamanhos personalizados
        },
    },
    plugins: [],
}