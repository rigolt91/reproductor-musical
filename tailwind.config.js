import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [nextui({
        themes: {
            light: {
                colors: {
                    white: "#FFFFFF",
                    black: "#000000",
                    primary: {
                        DEFAULT: "#027DA2",
                        foreground: "#FFFFFF",
                    },
                    danger: {
                        DEFAULT: "#b91c1c",
                        foreground: "#FFFFFF",
                    },
                    success: {
                        DEFAULT: "#77C343",
                        foreground: "#FFFFFF",
                    }
                }
            }
        }
    })],
};
