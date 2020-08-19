import * as reactPlugin from 'vite-plugin-react'
import { UserConfig } from 'vite'

const config: UserConfig = {
  jsx: 'react',
  plugins: [reactPlugin],
  base: '/react-ecommerce/'
}

export default config
