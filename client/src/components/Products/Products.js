import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import "./Products.css";
import { jsPDF } from "jspdf";
import MyComponent from "../MenuSideBar/Sidebar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isReportGenerating, setIsReportGenerating] = useState(false);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.idProduct !== id));
  };

  const editProduct = (product) => {
    setProductToEdit(product);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.idProduct === updatedProduct.idProduct ? updatedProduct : product
      )
    );
    setProductToEdit(null);
  };

  const generatePDFReport = () => {
    setIsReportGenerating(true);
    const doc = new jsPDF();
    doc.text("Product Report", 10, 10);
    // Add your logic to format and add data to the PDF document
    doc.save("product_report.pdf");
    setIsReportGenerating(false);
  };

  return (
    <div className="flex">
      <div>
      <MyComponent />
      </div>
      
      <div className="product-management">
  <div className="flex items-center">
    <div style={{marginLeft:'-400px'}}>
    <h1 >Recommendations</h1>
    <p style={{  fontSize: "25px", color: "gray" }}>
      Follow up with Consumers
    </p>
    </div>
    
  
  <div style={{marginLeft:'500px'}}  className="flex">
    <button
      style={{ marginRight: "50px", marginTop: "10px",backgroundColor:'#047857' }}
      onClick={() => setIsFormVisible(!isFormVisible)}
    >
      {isFormVisible ? "Hide Form" : "+ Add Product"}
    </button>
    <button
      style={{ marginRight: "10px", marginTop: "10px" }}
      onClick={generatePDFReport}
      disabled={isReportGenerating}
    >
      {isReportGenerating ? "Generating Report..." : "Download PDF Report"}
    </button>
    </div>
  </div>
  {isFormVisible && (
    <ProductForm
      addProduct={addProduct}
      updateProduct={updateProduct}
      productToEdit={productToEdit}
    />
  )}
  <ProductList
    products={products}
    deleteProduct={deleteProduct}
    editProduct={editProduct}
  />
</div>

    </div>
  );
};

export default Products;
