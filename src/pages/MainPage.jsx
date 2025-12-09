import React from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Home from "./Home";
import Collections from "./Collections";
import TrendingProducts from "./TrendingProducts";
import Bestseller from "./Bestseller";
import Category from "./Category";
import ShopByGender from "./ShopByGender";
import CustomerReviews from "./CustomerReviews";
import Updates from "./Updates";
import NewsletterSignup from "./NewsletterSignup";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Copyright from "../components/Copyright";
function MainPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#F8F8F8]">
      <Home />
      <Collections />
      <TrendingProducts />
      <Bestseller />
      <Category />
      <ShopByGender />
      <CustomerReviews />
      <Updates />
      <NewsletterSignup />
      <FAQ />
      <Footer />
      <Copyright />
    </div>
  );
}

export default MainPage;
