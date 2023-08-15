import Navbar from "@/Components/Navbar";
import { SidebarComponent } from "@/Components/SidebarComponent";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [pageTitle, setPageTitle] = useState();
  const [pageDescription, setPageDescription] = useState();

  const [modal, setModal] = useState();

  const router = useRouter();

  const pathname = router.pathname;
  useEffect(() => {
    switch (pathname) {
      case "/ChequesEntry":
        setPageTitle("Cheques Entry");
        setPageDescription("Scan and Upload Cheque");
        break;
      case "/Iban":
        setPageTitle("Cheques Entry");
        setPageDescription("Scan and Upload Cheque");
        break;
      case "/login":
        setPageTitle("Cheques Entry");
        setPageDescription("Scan and Upload Cheque");
        break;
      case "/Confrim":
        setPageDescription("Verify the scanned data");
        setPageTitle("Cheques Detail");
        break;
      case "/Manage":
        setPageDescription("Manage and Organize uploaded cheques");
        setPageTitle("Manage Cheques");
        break;
      // case "/Home":
      // setPageDescription("Manage and Organize uploaded cheques");
      // setPageTitle("Manage Cheques");
      // break;
      default:
        break;
    }
  }, [router.pathname]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto  max-w-5xl p-4 pb-5">
          {pathname !== "/Login" && (
            <Navbar description={pageDescription} pageTitle={pageTitle} />
          )}
        </div>

        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
