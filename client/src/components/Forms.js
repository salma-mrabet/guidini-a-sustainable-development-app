
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const GeneralInfoForm = () => {
  const [email, setEmail] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="companyname">
                <Form.Label>Company Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your Company name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" placeholder="Also your Address" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            {/* <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setEmail}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                        placeholder="mm/dd/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col> */}
            {/* <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Gender</option>
                  <option value="1">Female</option>
                  <option value="2">Male</option>
                </Form.Select>
              </Form.Group>
            </Col> */}
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="name@company.com" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control required type="number" placeholder="+216 ** *** ***" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Address</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" placeholder="Enter your home address" />
              </Form.Group>
            </Col>
            <Col sm={3} className="mb-3">
              <Form.Group id="addressNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control required type="number" placeholder="No." />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" placeholder="City" />
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select state</Form.Label>
                <Form.Select id="state" defaultValue="0">
                  <option value="0">State</option>
                  <option value="TUN">Tunis</option>
                  <option value="ARI">Ariana</option>
                  <option value="BEN">Ben Arous</option>
                  <option value="MAN">Manouba</option>
                  <option value="NAB">Nabeul</option>
                  <option value="ZAG">Zaghouan</option>
                  <option value="BIZ">Bizerte</option>
                  <option value="BEJ">Béja</option>
                  <option value="JEN">Jendouba</option>
                  <option value="KEF">Kef</option>
                  <option value="SIL">Siliana </option>
                  <option value="KAI">Kairouan </option>
                  <option value="KAS">Kasserine </option>
                  <option value="SBO">Sidi Bouzid</option>
                  <option value="SOU">Sousse</option>
                  <option value="MON">Monastir</option>
                  <option value="MAH">Mahdia</option>
                  <option value="SFA">Sfax</option>
                  <option value="GAB">Gabés</option>
                  <option value="MED">Medenine</option>
                  <option value="TAT">Tataouine</option>
                  <option value="TOZ">Tozeur </option>
                  <option value="KEB">Kebili </option>
                  
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group id="zip">
                <Form.Label>ZIP</Form.Label>
                <Form.Control required type="tel" placeholder="ZIP" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
