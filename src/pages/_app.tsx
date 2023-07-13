import { store } from "@/redux/store";
// import "@/styles/globals.scss";
// import "primereact/resources/themes/lara-light-indigo/theme.css"; // Light Theme
// import "primereact/resources/themes/bootstrap4-dark-purple/theme.css"; //dark Theme
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
