import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				// Tech-Trust Modern theme colors
				"tech-blue": {
					50: "#f0f7ff",
					100: "#e0eefe",
					200: "#bae0fd",
					300: "#7cc8fb",
					400: "#36aaf5",
					500: "#0c8ee7",
					600: "#0070cc",
					700: "#0059a6",
					800: "#064b87",
					900: "#0a3f70",
					950: "#072a4d",
				},
				"tech-gray": {
					50: "#f7f7f8",
					100: "#eeeef0",
					200: "#d9d9de",
					300: "#b8b9c2",
					400: "#9294a2",
					500: "#757786",
					600: "#5f616e",
					700: "#4d4f5a",
					800: "#42444c",
					900: "#3a3b42",
					950: "#25262c",
				},
				success: {
					DEFAULT: "#10b981",
					foreground: "#ffffff",
				},
				warning: {
					DEFAULT: "#f59e0b",
					foreground: "#ffffff",
				},
				error: {
					DEFAULT: "#ef4444",
					foreground: "#ffffff",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}

export default config
