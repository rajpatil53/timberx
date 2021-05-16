const colors = require('tailwindcss/colors')

module.exports = {
    container: {
        center: true,
    },
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: colors.red[500],
                secondary: colors.gray[400],
                textColor: colors.gray[600]
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
