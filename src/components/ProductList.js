import React from "react";
import ProductTile from "./ProductTile";
import ModalPopup from "./ModalPopup";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      imageSrc: "product1.jpg",
      price: 10.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquet enim.",
    },
    {
      id: 2,
      name: "Product 2",
      imageSrc: "product2.jpg",
      price: 15.99,
      description:
        "Vivamus quis finibus augue, sit amet luctus nisl. Aliquam fermentum velit a ipsum posuere.",
    },
    {
      id: 3,
      name: "Product 3",
      imageSrc: "product3.jpg",
      price: 8.99,
      description:
        "Suspendisse euismod dolor nec sem elementum, vel vehicula velit imperdiet.",
    },
  ];

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
          <ProductTile
            imageSrc={product.imageSrc}
            name={product.name}
            price={product.price}
          />
          <ModalPopup name={product.name} description={product.description} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
