// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        bgSecondary: "#111827",
        bgElevated: "#0F172A",
        textPrimary: "#E5E7EB",
        textSecondary: "#9CA3AF",
        textMuted: "#6B7280",
        accent: "#22D3EE",
      },
    },
  },
  plugins: [],
}
