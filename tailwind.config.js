/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // screens
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      colors: {
        // Colors
        // Primary
        cl_Softred: "hsl(10, 79%, 65%)",
        cl_Cyan: "hsl(186, 34%, 60%)",
        //  Neutral
        cl_Darkbrown: "hsl(25, 47%, 15%)",
        cl_Mediumbrown: "hsl(28, 10%, 53%)",
        cl_Cream: "hsl(27, 66%, 92%)",
        cl_Verypaleorange: "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
}
