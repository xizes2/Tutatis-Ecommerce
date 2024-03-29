import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export interface IChildrenProps {
  children: ReactNode | Array<ReactNode>;
}

function Layout({ children }: IChildrenProps) {
  return (
    <div className="layout">
      <Head>
        <title>Tutatis E-commerce</title>
      </Head>
      <header className="sticky left-0 right-0 top-0 z-10 ">
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
