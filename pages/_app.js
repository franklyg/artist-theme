import "../styles/globals.css";
import { ThemeProvider } from 'theme-ui'
import theme from '../utils/theme' // theme library

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
};

export default MyApp;
