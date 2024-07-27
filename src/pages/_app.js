import { Footer, FooterAdmin, Header, HeaderAdmin } from "@/components";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  let path = ""
  useEffect(() => {
    
    const path = localStorage.getItem("token");
    setToken(path);
  }, [])
  const [token, setToken] = useState(path ?? "");
  return (
   
  <>

<<<<<<< HEAD
      {token ? "" : <Header />}
=======
      {token ? <HeaderAdmin /> : <Header />}
>>>>>>> f31c6eeb94704d74a3f3acbeee8c5dce5cc5f28d
      <Component {...pageProps} />
      {token ? <FooterAdmin /> : <Footer />}
    </>
      
  );
}