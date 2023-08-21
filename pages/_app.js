// @ts-nocheck
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if(typeof window!== undefined){
    return <Component {...pageProps} />
  }
}

export default MyApp
