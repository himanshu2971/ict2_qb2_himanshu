import React from "react";
import Header from "./Header";
import LeftNav from "./LeftNav";
import ProductList from "./ProductList";


function Layout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <LeftNav />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <Header />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default Layout;
