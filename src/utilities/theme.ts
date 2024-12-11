import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: { value: "#5d2c0c" },
          secondary: { value: "#b89c83" },
          white: { value: "#ffffff" },
          black: { value: "#000000" },
          
          50: { value: "#ded7d2" },
          100: { value: "#c4b9ad" },
          200: { value: "#ab9c88" },
          300: { value: "#917f63" },
          400: { value: "#77623e" },
          500: { value: "#5d2c0c" },
          600: { value: "#4a2209" },
          700: { value: "#381805" },
          800: { value: "#251101" },
          900: { value: "#130b00" },
          
          
        },

      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
    
  },
})

export const systemTheme = createSystem(defaultConfig, config)