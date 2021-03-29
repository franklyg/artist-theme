import React from 'react'
import {addDecorator, addParameters} from '@storybook/react'
import { ThemeProvider } from 'theme-ui'
import theme from '../utils/theme' // theme library
import '../styles/globals.css'

addDecorator((Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
))

addParameters({
    docs: {},
    colorMode: {
        modes: {
            dark: {
                name: 'Dark'
            }
        }
    }
})
