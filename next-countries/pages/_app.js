import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import ThemeContextWrapper from '../context/ThemeWrapper'
import {ThemeContext} from '../context/ThemeContext'
import {useContext} from 'react'

function MyApp({ Component, pageProps }) {
  const {theme} = useContext(ThemeContext)

  return (
    <ThemeContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextWrapper>
  );
}

export default MyApp;
