import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import colors from './src/components/ui/color/color';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss({
      config: {
        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        theme: {
          extend: {
            colors: {
              primary: colors.primary,
              accent: colors.accent,
              neutral: colors.neutral,
              success: colors.success,
              warning: colors.warning,
              error: colors.error,
            },
          },
        },
      },
    }),
  ],
});
