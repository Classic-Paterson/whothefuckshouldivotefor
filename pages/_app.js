import "bootstrap/dist/css/bootstrap.min.css";
import PolicyProvider from "./components/policyProvider.js";
import "./components/css.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <PolicyProvider>
      <Component {...pageProps} />
    </PolicyProvider>
  );
}
