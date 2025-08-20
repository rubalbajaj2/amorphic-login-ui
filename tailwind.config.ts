import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					50: 'var(--primary-50)',
					100: 'var(--primary-100)',
					200: 'var(--primary-200)',
					300: 'var(--primary-300)',
					400: 'var(--primary-400)',
					500: 'var(--primary-500)',
					600: 'var(--primary-600)',
					700: 'var(--primary-700)',
					800: 'var(--primary-800)',
					900: 'var(--primary-900)',
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					50: 'var(--secondary-50)',
					100: 'var(--secondary-100)',
					200: 'var(--secondary-200)',
					300: 'var(--secondary-300)',
					400: 'var(--secondary-400)',
					500: 'var(--secondary-500)',
					600: 'var(--secondary-600)',
					700: 'var(--secondary-700)',
					800: 'var(--secondary-800)',
					900: 'var(--secondary-900)',
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				gray: {
					50: 'var(--gray-50)',
					100: 'var(--gray-100)',
					200: 'var(--gray-200)',
					300: 'var(--gray-300)',
					400: 'var(--gray-400)',
					500: 'var(--gray-500)',
					600: 'var(--gray-600)',
					700: 'var(--gray-700)',
					800: 'var(--gray-800)',
					900: 'var(--gray-900)',
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				sidebar: {
					DEFAULT: 'var(--sidebar-background)',
					foreground: 'var(--sidebar-foreground)',
					primary: 'var(--sidebar-primary)',
					'primary-foreground': 'var(--sidebar-primary-foreground)',
					accent: 'var(--sidebar-accent)',
					'accent-foreground': 'var(--sidebar-accent-foreground)',
					border: 'var(--sidebar-border)',
					ring: 'var(--sidebar-ring)'
				}
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '130%' }],
				'xxs': ['0.625rem', { lineHeight: '100%' }],
				'base': ['0.875rem', { lineHeight: '145%' }],
				'md': ['1rem', { lineHeight: '150%' }],
				'heading-xs': ['1.5rem', { lineHeight: '120%' }],
				'heading-md': ['2rem', { lineHeight: '115%' }],
				'heading-2xl': ['3rem', { lineHeight: '110%' }],
				'display-xl': ['4.5rem', { lineHeight: '100%' }],
			},
			boxShadow: {
				'xxs': '0 1px 2px oklch(0.266 0.055 261.6 / 0.12)',
				'xs': '0 4px 16px -2px oklch(0.266 0.055 261.6 / 0.06)',
				'sm': '0 4px 32px -2px oklch(0.266 0.055 261.6 / 0.06)',
				'md': '0 16px 48px -4px oklch(0.266 0.055 261.6 / 0.06)',
				'xl': '0 32px 80px -4px oklch(0.266 0.055 261.6 / 0.12)',
				'xxl': '0 64px 80px -4px oklch(0.266 0.055 261.6 / 0.12)',
				'primary-2px': '0px 0px 2px 2px oklch(0.835 0.155 264.2 / 1)',
				'primary-4px': '0px 0px 0px 4px oklch(0.919 0.090 262.6 / 1)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
