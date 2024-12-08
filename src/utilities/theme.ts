import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: { value: "#996515" },
          secondary: { value: "#964B00" },
          white: { value: "#ffffff" },
          black: { value: "#000000" },
          
          50: { value: "#e6f2ff" },
          100: { value: "#e6f2ff" },
          200: { value: "#bfdeff" },
          300: { value: "#99caff" },
          950: { value: "#001a33" },
          
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