/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // claude.rtf 기준 브랜드 컬러
      colors: {
        brand: {
          primary: '#313e83', // Brand/MB500*
          hover: '#272F66', // Keep existing (no direct match found in variables, maybe derived)
          active: '#1E234A', // Keep existing
          text: '#11111F', // Keep existing
          error: '#fa332d', // Semantic/Error(Decrease) matches
        },
        // Figma Variables
        gray: {
          100: '#f7f8fb', // Gray/GR100
          150: '#f2f4f8', // Gray/GR150
          200: '#edeff5', // Gray/GR200
          400: '#d8dae5', // Gray/GR400
          600: '#8f95b2', // Gray/GR600
          700: '#696f8c', // Gray/GR700
          800: '#474d66', // Gray/GR800
          850: '#303751', // Gray/GR850
          900: '#242946', // Gray/GR900
          black: '#11111f', // Gray/Black
          white: '#ffffff', // Gray/White
        },
        brand_scale: {
          50: '#ebeeff', // Brand/MB50
          100: '#c5ccf2', // Brand/MB100
          200: '#8b96cf', // Brand/MB200
          300: '#6773b4', // Brand/MB300
          400: '#4a579d', // Brand/MB400
          500: '#313e83', // Brand/MB500*
          600: '#253171', // Brand/MB600
          700: '#1a2660', // Brand/MB700
          800: '#0b1448', // Brand/MB800
          900: '#000938', // Brand/MB900
          point: '#00dcc2', // Brand/Point
        },
        semantic: {
          info: '#1890ff', // Semantic/Info(Active)
          success: '#00a925', // Semantic/Success(Increase)
          warning: '#ffc107', // Semantic/Warning(Notice)
          error: '#fa332d', // Semantic/Error(Decrease)
        },
        extended: {
          info: {
            lighter: '#c7e4ff', // Extended/Info(Active)/Lighter
            light: '#6ab7ff', // Extended/Info(Active)/Light
            main: '#1890ff', // Extended/Info(Active)/Main
            dark: '#006dd2', // Extended/Info(Active)/Dark
            darker: '#003a70', // Extended/Info(Active)/Darker
          },
          success: {
            lighter: '#d6eddb', // Extended/Success(Increase)/Lighter
            light: '#6ac77e', // Extended/Success(Increase)/Light
            main: '#00a925', // Extended/Success(Increase)/Main
            dark: '#00871e', // Extended/Success(Increase)/Dark
            darker: '#005012', // Extended/Success(Increase)/Darker
          },
          warning: {
            lighter: '#ffe9a9', // Extended/Warning(Notice)/Lighter
            light: '#ffdb71', // Extended/Warning(Notice)/Light
            main: '#ffc107', // Extended/Warning(Notice)/Main
            dark: '#a37200', // Extended/Warning(Notice)/Dark
            darker: '#604801', // Extended/Warning(Notice)/Darker
          },
          error: {
            lighter: '#ffd3d1', // Extended/Error(Decrease)/Lighter
            light: '#ff9996', // Extended/Error(Decrease)/Light
            main: '#fa332d', // Extended/Error(Decrease)/Main
            dark: '#c31c17', // Extended/Error(Decrease)/Dark
            darker: '#6f0805', // Extended/Error(Decrease)/Darker
          },
        },
        transparent: {
          info: {
            8: '#1890ff14', // Transparent/Info(Active)/8%
            12: '#1890ff1f', // Transparent/Info(Active)/12%
            16: '#1890ff29', // Transparent/Info(Active)/16%
            24: '#1890ff3d', // Transparent/Info(Active)/24%
            32: '#1890ff52', // Transparent/Info(Active)/32%
            48: '#1890ff7a', // Transparent/Info(Active)/48%
          },
          success: {
            8: '#00a92514', // Transparent/Success(Increase)/8%
            12: '#00a9251f', // Transparent/Success(Increase)/12%
            16: '#00a92529', // Transparent/Success(Increase)/16%
            24: '#00a9253d', // Transparent/Success(Increase)/24%
            32: '#00a92552', // Transparent/Success(Increase)/32%
            48: '#00a9257a', // Transparent/Success(Increase)/48%
          },
          warning: {
            8: '#ffc10714', // Transparent/Warning(Notice)/8%
            12: '#ffc1071f', // Transparent/Warning(Notice)/12%
            16: '#ffc10729', // Transparent/Warning(Notice)/16%
            24: '#ffc1073d', // Transparent/Warning(Notice)/24%
            32: '#ffc10752', // Transparent/Warning(Notice)/32%
            48: '#ffc1077a', // Transparent/Warning(Notice)/48%
          },
          error: {
            8: '#fa332d14', // Transparent/Error(Decrease)/8%
            12: '#fa332d1f', // Transparent/Error(Decrease)/12%
            16: '#fa332d29', // Transparent/Error(Decrease)/16%
            24: '#fa332d3d', // Transparent/Error(Decrease)/24%
            32: '#fa332d52', // Transparent/Error(Decrease)/32%
            48: '#fa332d7a', // Transparent/Error(Decrease)/48%
          },
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
