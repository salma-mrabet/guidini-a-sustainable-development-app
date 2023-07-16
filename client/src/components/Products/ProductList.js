import React from "react";

const ProductList = ({ products, deleteProduct, editProduct }) => {
  return (
    <table className="product-list">
      <thead>
        <tr>
          <th>ID Product</th>
          <th>Product</th>
          <th>Brand</th>
          <th>Quality in Stock</th>
          <th>Recommended Quality</th>
          <th>Offer</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.idProduct}>
            <td>{product.idProduct}</td>
            <td>{product.Product}</td>
            <td>{product.Brand}</td>
            <td>{product.qualityInStock}</td>
            <td>{product.recommendedQuantity}</td>
            <td>{product.offer}</td>
            <td>
              <button onClick={() => editProduct(product)}>Edit</button>
              <button onClick={() => deleteProduct(product.idProduct)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
