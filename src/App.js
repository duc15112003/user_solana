import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./component/route/index";
import { DefaultLayout } from "./component/DefaultLayout/index";
import { AuthLayout } from "./component/AuthLayout";

import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
require('@solana/wallet-adapter-react-ui/styles.css');

const App = () => {
  return (
        <Router>
          <div className="">
            <Routes>
              {publicRoutes.map((route, index) => {
                let Layout = DefaultLayout;
                if (
                  route.path === "user/register" ||
                  route.path === "user/login" ||
                  route.path === "user/forgotpassword"
                ) {
                  Layout = AuthLayout;
                }
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
  );
}

    const Wallet = () => {
        const wallets = [new PhantomWalletAdapter()];
        return (
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <App />
            </WalletModalProvider>
          </WalletProvider>
        );
      };

export default Wallet;
