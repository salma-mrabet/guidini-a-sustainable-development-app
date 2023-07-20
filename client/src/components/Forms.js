// GeneralInfoForm.js
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import ProfileCover from "../assets/img/cover.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { ProfileCardWidget } from "./Widgets";

export const GeneralInfoForm = ({ marketId }) => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  // const { title, photo } = props;
  const [logo, setLogo] = useState(null);
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Retrieve the token from local storage
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/supermarket/${marketId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token in the request headers
            },
          }
        );
    
        // Update the form fields with the user data
        const { marketname, email, phone, area, description, logo, address } =
          response.data;
        setCompanyName(marketname);
        setEmail(email);
        setPhone(phone);
        setArea(area);
        setDescription(description);
        setLogo(logo);
        setAddress(address);
      } catch (error) {
        console.error("Error fetching user data:", error);
    
        // Check if error.response exists and contains a message
        if (error.response && error.response.data && error.response.data.message) {
          setErrorMessage("Error fetching user data: " + error.response.data.message);
        } else {
          setErrorMessage("Unknown error occurred while fetching user data.");
        }
      }
    };
    
   

    // Call the fetchUserData function to get the user data
    fetchUserData();
  }, [token]);

  const handleUpdate = async () => {
    const phoneAsNumber = parseInt(phone);
    try {
      const response = await axios.put(
        `http://localhost:3000/supermarket/${marketId}`,
        {
          marketname: companyName,
          email,
          phone: phoneAsNumber,
          area,
          description,
          logo,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('Response Data:', response.data);
     

      setSuccessMessage('Market updated successfully');
      setErrorMessage('');
  
      console.log('Market updated successfully:', response.data,response.data.area,response.data.address);
    } catch (error) {
      // Log the entire error object for more information
      console.error('Error updating market:', error);
  
      // Handle error, e.g., show an error message
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage('Error updating market: ' + error.response.data.message);
      } else {
        setErrorMessage('Unknown error occurred during update.');
      }
      setSuccessMessage('');
    }
  };
  const postDetails = (pics) => {
    // setLoading(true);
    if (!pics) {
      console.log('orzon')
      // toast({
      //   title: 'Please select an image!',
      //   status: 'warning',
      //   duration: 5000,
      //   isClosable: true,
      //   position: 'bottom',
      // });
      // setLoading(false);
      return;
    }

    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/jpg" ||
      pics.type === "image/png"
    ) {
      const data = new FormData();
  
      data.append("file", pics);
      data.append("upload_preset", "RasMsgApp");
      data.append("cloud_name", "raslen");
      axios
        .post("https://api.cloudinary.com/v1_1/raslen/image/upload", data)
        .then((res) => {
          // Set the correct logo URL obtained from Cloudinary
          setLogo(res.data.url.toString());
          console.log(res.data);
          // console.log('orzon')
          // setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          // setLoading(false);
          // toast({
          //   title: 'Error uploading image.',
          //   status: 'error',
          //   duration: 5000,
          //   isClosable: true,
          //   position: 'bottom',
          // });
        });
    } else {
      // toast({
      //   title: 'Please select an image!',
      //   status: 'warning',
      //   duration: 5000,
      //   isClosable: true,
      //   position: 'bottom',
      // });
      // setLoading(false);
      return;
    }
  };
 
  return (
    <div>
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="marketname">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                name="marketname"
                  required
                  value={companyName}
                  type="text"
                  placeholder="Enter your Company name"

                />
              </Form.Group>
            </Col>
            {/* <Col md={6} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  value = {address}
                  type="text"
                  placeholder="Also your Address"
                />
              </Form.Group>
            </Col> */}
          </Row>
          {/* <Row className="align-items-center">
            
          </Row> */}
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  name="email"
                  value={email}
                  type="email"
                  placeholder="name@company.com"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                name="phone"
                  required
                  value={phone}
                  type="string"
                  placeholder="+216 ** *** ***"
                  onChange={(e) => setPhone(e.target.value)} // Add onChange event handler

                />
              </Form.Group>
            </Col>
          </Row>
          <h5 className="my-4">Description</h5>
          <Row>
          <Col md={12} className="mb-3">
              <Form.Group id="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  name="description"
                  value={description}
                  type="text"
                  placeholder="description"
                  onChange={(e) => setDescription(e.target.value)} // Add onChange event handler

                />
              </Form.Group>
            </Col>
            </Row>
          <h5 className="my-4">Address</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  name="address"
                  value={address}
                  type="text"
                  placeholder="Enter your home address"
                  onChange={(e) => setAddress(e.target.value)} // Add onChange event handler

                />
              </Form.Group>
            </Col>
            <Col sm={3} className="mb-3">
              <Form.Group id="Area">
                <Form.Label>Area</Form.Label>
                <Form.Control 
                name="area"
                required type="text" placeholder="Area" value={area}
                onChange={(e) => setArea(e.target.value)} // Add onChange event handler

                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={9} className="mb-3">
            <Form.Group id="logo">
  <Form.Label>Picture</Form.Label>
  <Form.Control
    required
    name="logo"
    type="file"
   
    placeholder="Enter your Logo"
    onChange={(e) => postDetails(e.target.files[0])}
  />
</Form.Group>
            </Col>
           
          </Row>
          
          <div className="mt-3">
            {successMessage && (
              <div className="text-success">{successMessage}</div>
            )}
            {errorMessage && <div className="text-danger">{errorMessage}</div>}
            <Button variant="primary" type="button" onClick={handleUpdate}>
              Save All
            </Button>{" "}
          </div>
        </Form>
      </Card.Body>
      
    </Card>
     <Card border="light" className="text-center p-0 mb-4">
     <div style={{ backgroundImage: `url(${ProfileCover})` }} className="profile-cover rounded-top" />
     <Card.Body className="pb-5">
       <Card.Img src={logo} alt="Neil Portrait" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" />
       <Card.Title>{companyName}</Card.Title>
       <Card.Text className="text-gray mb-4">Tunisia</Card.Text>

       {/* <Button variant="primary" size="sm" className="me-2">
         <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Connect
       </Button>
       <Button variant="secondary" size="sm">Send Message</Button> */}
     </Card.Body>
   </Card>
   </div>
  );
};
