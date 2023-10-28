/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#9736c4",
                  
          "secondary": "#c1670d",
                  
          "accent": "#2c7ba3",
                  
          "neutral": "#191f2a",
                  
          "base-100": "#332c3f",
                  
          "info": "#80b8f4",
                  
          "success": "#2acb80",
                  
          "warning": "#eec317",
                  
          "error": "#f93734",
        },
      },
    ],
},
  plugins: [require("daisyui")],
}

