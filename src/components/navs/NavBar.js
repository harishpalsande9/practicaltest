import React, { useState, useEffect } from "react";
import {
  Dropdown,
  Button,
  Form,
  Row,
  Col,
  Image,
  Offcanvas,
} from "react-bootstrap";
import {
  Bell,
  BorderOuter,
  CardList,
  ClockHistory,
  Journal,
  People,
  PersonCircle,
  Sliders,
  Speedometer,
} from "react-bootstrap-icons";
import logo from "./../../assets/images/logo.png";
const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="dextop-nav text-white my-1">
        <Col>
          <div className="menuBar  d-flex px-5 py-2">
            <Image src={logo} width="50" className="logo" />

            <Button className="mx-1 px-3 text-white" variant="">
              <Speedometer /> Home
            </Button>

            <Button className="mx-1 px-3 text-white" variant="">
              <BorderOuter /> About US
            </Button>

            <Button className="mx-1 px-3 text-white" variant="">
              <CardList /> Services
            </Button>
            <Button className="mx-1 px-3 text-white" variant="">
              <People /> Product
            </Button>
            <Button className="mx-1 px-3 text-white" variant="">
              <Journal /> Contact Us
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
