import React from 'react';

function ProductTile(props) {
  const { imageSrc, name, price } = props;

  return (
    <div className="card mb-4">
      <img src={imageSrc} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modal-${name}`}>Read More</button>
      </div>
    </div>
  );
}

export default ProductTile;
