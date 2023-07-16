import React, { useState } from "react";

const ProductForm = ({ addProduct, updateProduct, productToEdit }) => {
  const [formData, setFormData] = useState({
    idProduct: "",
    Product: "",
    Brand: "",
    qualityInStock: "",
    recommendedQuality: "",
    offer: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (productToEdit) {
      updateProduct(formData);
    } else {
      addProduct(formData);
    }
    setFormData({
      idProduct: "",
      Product: "",
      Brand: "",
      qualityInStock: "",
      recommendedQuality: "",
      offer: "",
    });
  };

  return (
    <div className="form-popup">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2>{productToEdit ? "Edit Product" : "Add Product"}</h2>
        <div className="form-group">
          <label htmlFor="idProduct">ID Product:</label>
          <input
            type="text"
            id="idProduct"
            name="idProduct"
            value={formData.idProduct}
            onChange={handleChange}
            placeholder="Enter ID Product"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Product">Product:</label>
          <input
            type="text"
            id="Product"
            name="Product"
            value={formData.Product}
            onChange={handleChange}
            placeholder="Enter Product"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Brand">Brand:</label>
          <input
            type="text"
            id="Brand"
            name="Brand"
            value={formData.Brand}
            onChange={handleChange}
            placeholder="Enter Brand"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualityInStock">Quality in Stock:</label>
          <input
            type="text"
            id="qualityInStock"
            name="qualityInStock"
            value={formData.qualityInStock}
            onChange={handleChange}
            placeholder="Enter Quality in Stock"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="recommendedQuality">Recommended Quality:</label>
          <input
            type="text"
            id="recommendedQuality"
            name="recommendedQuality"
            value={formData.recommendedQuality}
            onChange={handleChange}
            placeholder="Enter Recommended Quality"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="offer">Offer:</label>
          <input
            type="text"
            id="offer"
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            placeholder="Enter Offer"
            required
          />
        </div>
        <button type="submit">{productToEdit ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default ProductForm;
