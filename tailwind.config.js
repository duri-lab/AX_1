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
          hover: '#272F66', // Manual
          active: '#1E234A', // Manual
          text: '#11111F', // Manual
          error: '#fa332d', // Semantic/Error(Decrease)
        },
        gray: {
          black: "#11111f",
          100: "#f7f8fb",
          150: "#f2f4f8",
          400: "#d8dae5",
          600: "#8f95b2",
          700: "#696f8c",
          800: "#474d66",
          900: "#242946"
        },
        brand_scale: {
          point: "#00dcc2",
          50: "#ebeeff",
          100: "#c5ccf2",
          200: "#8b96cf",
          300: "#6773b4",
          400: "#4a579d",
          500: "#313e83",
          600: "#253171",
          700: "#1a2660",
          800: "#0b1448",
          900: "#000938"
        },
        semantic: {
          info: "#1890ff",
          success: "#00a925",
          warning: "#ffc107",
          error: "#fa332d"
        },
        extended: {
          info: {
            lighter: "#c7e4ff",
            light: "#6ab7ff",
            main: "#1890ff",
            dark: "#006dd2",
            darker: "#003a70"
          },
          success: {
            lighter: "#d6eddb",
            light: "#6ac77e",
            main: "#00a925",
            dark: "#00871e",
            darker: "#005012"
          },
          warning: {
            lighter: "#ffe9a9",
            light: "#ffdb71",
            main: "#ffc107",
            dark: "#a37200",
            darker: "#604801"
          },
          error: {
            lighter: "#ffd3d1",
            light: "#ff9996",
            main: "#fa332d",
            dark: "#c31c17",
            darker: "#6f0805"
          }
        },
        transparent: {
          info: {
            8: "#1890ff14",
            12: "#1890ff1f",
            16: "#1890ff29",
            24: "#1890ff3d",
            32: "#1890ff52",
            48: "#1890ff7a"
          },
          success: {
            8: "#00a92514",
            12: "#00a9251f",
            16: "#00a92529",
            24: "#00a9253d",
            32: "#00a92552",
            48: "#00a9257a"
          },
          warning: {
            8: "#ffc10714"
          }
        },
        chart_extended: {
          mint: {
            100: "#8be7db",
            200: "#4bdcca",
            300: "#1ed1ba",
            400: "#00b9a3",
            500: "#019c8a",
            600: "#008171"
          },
          orange: {
            50: "#ffc3a9",
            100: "#fdac89",
            200: "#ff986b",
            300: "#ff824d",
            400: "#eb6227",
            500: "#ba4c1d",
            600: "#873715"
          },
          teal: {
            50: "#cfd8ff",
            100: "#b5c3ff",
            200: "#94a9ff",
            300: "#728eff",
            400: "#5876f0",
            500: "#4a67dc",
            600: "#2b46b4",
            700: "#1e3699",
            800: "#061b70",
            900: "#061247"
          },
          indigo: {
            50: "#d3d4ff",
            100: "#c5c7fe",
            200: "#afb2ff",
            300: "#999cf9",
            400: "#8184f0",
            500: "#686be8",
            600: "#484bd2",
            700: "#3436b1",
            800: "#242689",
            900: "#000271"
          },
          red: {
            50: "#ffd9e0",
            100: "#ffc2ce",
            200: "#fbacbb",
            300: "#ff95a9",
            400: "#ff8199",
            500: "#fd607d",
            600: "#ff0000",
            700: "#e22e4f",
            800: "#cf1236",
            900: "#9c0622"
          },
          cyan: {
            50: "#e6f0f3",
            100: "#cbe1ec",
            200: "#b2d4e6",
            300: "#9cc3dd",
            400: "#67a8cc",
            500: "#3089b8",
            600: "#036ca7",
            700: "#005f94",
            800: "#004a73",
            900: "#003b5d"
          }
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
