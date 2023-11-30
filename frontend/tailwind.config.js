// eslint-disable-next-line @typescript-eslint/no-var-requires
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = ['./index.html', './src/**/*.vue', './src/**/*.ts']
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Inter var', ..._fontFamily.sans],
    },
  },
}
// eslint-disable-next-line no-undef
export const plugins = [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
