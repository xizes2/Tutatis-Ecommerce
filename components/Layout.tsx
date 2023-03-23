import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode | Array<ReactNode>;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Head>
        <title>Tutatis E-commerce</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;