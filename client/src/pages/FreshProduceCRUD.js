import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { Card, Button, Table, ButtonGroup, Pagination, Nav } from "@themesberg/react-bootstrap";
import { Breadcrumb } from "antd";

const TableRow = (props) => {
  const { productname, brand, quantityInStock, quantityRecommended, category, _id } = props;

  return (
    <tr>
      <td>{productname}</td>
      <td className="fw-bold">{brand}</td>
      <td>{quantityInStock}</td>
      <td>{quantityRecommended}</td>
      <td>{category}</td>
      <td>
        <ButtonGroup>
          <Button variant="secondary">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" /> View
          </Button>
          <Button variant="secondary">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" /> Edit
          </Button>
          <Button variant="danger">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" /> Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export const FreshProduceCRUD = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProductData = async () => {
    try {
      const response = await fetch("http://localhost:3000/product");
      const data = await response.json();
      const freshProduceProducts = data.filter((product) => product.category === "Fresh Produce");
      setFilteredProducts(freshProduceProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
        
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            {/* <Breadcrumb.Item>Volt</Breadcrumb.Item> */}
            <Breadcrumb.Item active>Categories</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Fresh Produce:</h4>
          {/* <p className="mb-0">Your web analytics dashboard template.</p> */}
        </div>
        
      </div>
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Quantity in Stock</th>
              <th>Quantity Recommended</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <TableRow key={`product-${product._id}`} {...product} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          
        </Card.Footer>
      </Card.Body>
    </Card>
    </div>
  );
};
