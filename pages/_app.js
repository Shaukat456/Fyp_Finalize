import { SidebarComponent } from "@/Components/SidebarComponent";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex">
        <SidebarComponent />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
