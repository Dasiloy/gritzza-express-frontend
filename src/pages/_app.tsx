import React from "react";
import type { AppProps } from "next/app";
import {
  QueryClient,
  Hydrate,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRoot } from "components/root/app-root";
import ProtectedRoute from "components/root/protected-route";
import type { IAuth } from "types/auth";

//==> react hot toast base component
import AppToaster from "components/root/toast-container";

//==> next js progress bar for navigation
import NextNProgress from "nextjs-progressbar";

// ===> Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// ==> Styles
import "../styles/globals.css";
import "react-lazy-load-image-component/src/effects/blur.css"; // lazy-load image styles
import "aos/dist/aos.css"; // Aos animation library

// add auth to the app
interface AppPropExtra extends AppProps {
  Component: React.ComponentType<any> & IAuth;
}

function MyApp({ Component, pageProps }: AppPropExtra) {
  const [showing, setShowing] = React.useState(false);
  const [queryClient] = React.useState(
    () => new QueryClient()
  );

  React.useEffect(() => {
    setShowing(true);
  }, []);

  // always return null for first ssr
  if (!showing) {
    return null;
  }

  // ensure nothing renders until window is defined
  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AppRoot>
            <AppToaster />
            <NextNProgress color="#f3ae3f" />
            {Component.auth ? (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            ) : (
              <Component {...pageProps} />
            )}
          </AppRoot>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
