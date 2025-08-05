import { useEffect, useState } from "react";
import Header from "./components/Header";
import { checkAuthRedirect } from "@/utils/checkAuthRedirect";

export default function App({ Component, pageProps }) {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const noHeaderRoutes = ["/authentication/login"];

      setShowHeader(!noHeaderRoutes.includes(path));
      checkAuthRedirect();
    }
  }, []);

  return (
    <>
      {showHeader && <Header />}

      <div
        style={{
          marginTop: showHeader ? "70px" : "0px", // adjust based on header height
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
