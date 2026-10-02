import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' gera caminhos relativos no build, então o mesmo `dist/`
// funciona tanto no GitHub Pages (predohenr.github.io/<repo>/)
// quanto na página do CIn (www.cin.ufpe.br/~phls2/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
