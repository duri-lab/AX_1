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
        'Chart-Extended': {
          Mint: {
            M100: "#8be7db",
            M200: "#4bdcca",
            M300: "#1ed1ba",
            M400: "#00b9a3",
            M500: "#019c8a",
            M600: "#008171"
          },
          Orange: {
            O50: "#ffc3a9",
            O100: "#fdac89",
            O200: "#ff986b",
            O300: "#ff824d",
            O400: "#eb6227",
            O500: "#ba4c1d",
            O600: "#873715"
          },
          Teal: {
            T50: "#cfd8ff",
            T100: "#b5c3ff",
            T200: "#94a9ff",
            T300: "#728eff",
            T400: "#5876f0",
            T500: "#4a67dc",
            T600: "#2b46b4",
            T700: "#1e3699",
            T800: "#061b70",
            T900: "#061247"
          },
          Indigo: {
            IN50: "#d3d4ff",
            IN100: "#c5c7fe",
            IN200: "#afb2ff",
            IN300: "#999cf9",
            IN400: "#8184f0",
            IN500: "#686be8",
            IN600: "#484bd2",
            IN700: "#3436b1",
            IN800: "#242689",
            IN900: "#000271"
          },
          Red: {
            R50: "#ffd9e0",
            R100: "#ffc2ce",
            R200: "#fbacbb",
            R300: "#ff95a9",
            R400: "#ff8199",
            R500: "#fd607d",
            R600: "#f44667",
            R700: "#e22e4f",
            R800: "#cf1236",
            R900: "#9c0622"
          },
          Cyan: {
            C50: "#e6f0f3",
            C100: "#cbe1ec",
            C200: "#b2d4e6",
            C300: "#9cc3dd",
            C400: "#67a8cc",
            C500: "#3089b8",
            C600: "#036ca7",
            C700: "#005f94",
            C800: "#004a73",
            C900: "#003b5d"
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
