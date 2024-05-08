/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: '#F9FAFB',
					foreground: '#ffffff'
				},
				primary: {
					DEFAULT: '#FF6363',
					foreground: '#F9FAFB'
				},
				secondary: {
					DEFAULT: '#565656',
					foreground: '#F9FAFB'
				},
				border: {
					DEFAULT: '#D1D5DB',
					foreground: '#F9FAFB'
				}
			}
		}
	},
	plugins: []
};
