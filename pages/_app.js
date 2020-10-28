import { TipserElementsProvider } from '@tipser/tipser-elements'
import { useRouter } from 'next/router'

import '@tipser/tipser-elements/dist/index.css'
import '../styles/globals.css'


const tipserElementsConfig = {
    env: "dev",
    customUrls: {
        productBaseUrl: "/product",
        checkoutUrl: "/checkout",
        checkoutConfirmationUrl: "/confirmation"
    }
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <TipserElementsProvider posId="59e86b79b8f3f60a94ecd26a" config={tipserElementsConfig} history={router}>
      <Component {...pageProps} />
    </TipserElementsProvider>
  )
}

export default MyApp
