"use client";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Modal({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
