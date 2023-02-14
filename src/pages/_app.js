import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import "aos/dist/aos.css"; // Import AOS CSS
import '@/styles/globals.css'
import { useEffect } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />
}
