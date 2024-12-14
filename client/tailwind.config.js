import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
				main_color: '#E7FAFE'
			},
			fontFamily: {
        lobster: ['Lobster', 'cursive'],
      },
  	}
  },
  plugins: [import('tailwindcss-animate')],
});

