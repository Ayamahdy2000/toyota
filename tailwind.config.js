/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
     
   
      padding: {
        'DEFAULT': '1rem',
        'sm': '30px',
        'lg': '40px',
        'xl': '60px',

      },
    },
    extend: {
      colors: {
        primary: {
          500: '#C00F23',
        },
        grey: "#EFEFF0",
        lightBlack: "#252627"
      },
      fontFamily: {
        inter: ["Inter-Regular"],
        interBold: ["Inter-Bold"],
        interMedium: ["Inter-Medium"],
      },
      borderRadius: {
        md:'5px'
      },
      fontSize: {
        sm: ['14px', '17px'],
        lg: ["18px", '22px'],
        md: ["16px", '20px']
      }
    },
  },
  plugins: [],
}