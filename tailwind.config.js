/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#191B20",
        light: "#DDDDDD",
        primary: "#ff0048", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        gradiente:"linear-gradient(90deg, rgba(246,200,92,1) 0%, rgba(243,45,30,1) 35%, rgba(53,15,80,1) 60%, rgba(18,230,208,1) 91%)"
    },
    
    backgroundImage: {
        bg:"url(/47.png)",
        
        "degrade2":"radial-gradient(30.48% 49.48% at 50.00% 0.00%, #404145 0%, #404040 0.01%, #1C1C23 100%)",
        circularLight:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
    
        circularDark:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",
    
        circularLightLg:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
    
        circularDarkLg:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",
    
        circularLightMd:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
    
        circularDarkMd:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",
    
        circularLightSm:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
    
        circularDarkSm:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
    },
    
    
    dropShadow: {
        "dark": "0.35rem 0.35rem 0.2rem rgba(0, 0, 0, 0.5)",
    },
    
    
    screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
    
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
    
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
    
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
    
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
    
        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
    },
    fontFamily: {
        lobster: 'var(--font-lob)',  
      },
      animation:{
        'spin-slow':'spin 8s linear infinite',
      },

    },
  },
  plugins: [],
}
