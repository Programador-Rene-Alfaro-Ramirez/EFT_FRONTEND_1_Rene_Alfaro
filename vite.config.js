import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],
  base: '/FRONTEND1_FORMATIVA5_Rene_Alfaro/', // Nombre exacto de tu repo
build: {
    outDir: 'docs' // Guardaremos la página web aquí
}
})