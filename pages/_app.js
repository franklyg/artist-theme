import "../styles/globals.css";
import { ThemeProvider } from 'theme-ui'
import theme from '../utils/theme' // theme library

function MyApp({ Component, pageProps, dataJSON }) {
  console.log(dataJSON)
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
};

export default MyApp;
