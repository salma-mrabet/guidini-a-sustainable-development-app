import React, { useRef } from "react";
import { Modal, Form, Button } from "@themesberg/react-bootstrap";

const UpdatePublicityFormPopup = ({ show, handleClose, selectedRowData, handleEditAd }) => {
  const formRef = useRef(null); // Create a ref to the form element

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted!");

    const formData = new FormData(formRef.current); // Use the ref to access the form element
    const adData = {
      adname: formData.get("adname"),
      begin_date: formData.get("begin_date"),
      end_date: formData.get("end_date"),
    };

    console.log("Form data:", adData);

    try {
      const response = await fetch(`http://localhost:3000/ad/${selectedRowData.productId}`, {
        method: "PUT", // Use PUT method to update the advertisement
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adData),
      });

      if (response.ok) {
        console.log("Ad updated successfully");
        handleClose();
        // Perform any additional actions or updates on success
      } else {
        console.error("Failed to update ad");
      }
    } catch (error) {
      console.error("Error updating ad:", error);
    }
  };

  return (
    <Modal as={Form} show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Edit Ad</Modal.Title>
        <Button variant="close" aria-label="Close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Ad Name</Form.Label>
            <Form.Control type="text" name="adname" defaultValue={selectedRowData.adname} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Begin Date</Form.Label>
            <Form.Control type="date" name="begin_date" defaultValue={selectedRowData.begin_date} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" name="end_date" defaultValue={selectedRowData.end_date} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button type="submit" onClick={handleSubmit}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdatePublicityFormPopup;
