import withMT from '@material-tailwind/react/utils/withMT'
export default withMT({
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        linear_black:
          'linear-gradient(to top, rgba(112, 130, 70, 0.4) 10%, rgba(112, 130, 70, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
        linear_green:
          'linear-gradient(to top, rgba(108, 198, 63, 0.4) 10%, rgba(108, 198, 63, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
        linear_red:
          'linear-gradient(to top, rgba(204, 38, 27, 0.4) 10%, rgba(204, 38, 27, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
        linear_yellow:
          'linear-gradient(to top, rgba(240, 158, 0, 0.4) 10%, rgba(240, 158, 0, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
        linear_grey:
          'linear-gradient(to top, rgba(176, 176, 176, 0.4) 10%, rgba(176, 176, 176, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
        linear_blue:
          'linear-gradient(to top, rgba(30, 144, 255, 0.4) 10%, rgba(30, 144, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      colors: {
        main_color: '#E7FAFE',
      },
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [import('tailwindcss-animate')],
})
