import "./theme/src/assets/css/theme.css";
import "./theme/dist/assets/libs/bootstrap-icons/font/bootstrap-icons.min.css";
import "./globals.css";
import Script from "next/script";
import Providers from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";
// dkjhkdj

// /shskjh

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <ClerkProvider>
          <Providers>{children}</Providers>
        </ClerkProvider>
        <Script src="/js/vendors/typed.umd.js" />
        <Script src="/js/vendors/popper.min.js" />
        <Script src="/js/vendors/bootstrap.min.js" />
        <Script src="/js/vendors/simplebar.min.js" />
        <Script src="/js/vendors/odometer.min.js" />
        {/* <Script src="/js/vendors/theme.min.js" /> */}
        {/* <Script src="/js/vendors/tiny-slider.js" /> */}
        <Script src="/js/vendors/tippy-bundle.umd.min.js" />
        {/* <Script type="module" src="/js/vendors/tiny-slider.js" /> */}
        <Script src="/js/vendors/tooltip.js" />
        <Script src="/js/main.js" />
      </body>
    </html>
  );
}
