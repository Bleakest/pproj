import React from "react";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import vk from "../img/vk.svg.png";
import "../styles/Header.css";
import ring from "../img/ring.png";
import me from'../img/me.jpeg'

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bolder">
            <img src={vk} width="30px" height="30px" />
            &nbsp; вконтакте
          </Navbar.Brand>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 header-input w-25"
            aria-label="Search"
          />
          <Nav className="me-auto header-links">
            <Nav.Link>

              <OverlayTrigger
                trigger="click"
                key="bottom"
                placement="bottom"
                overlay={
                  <Popover id="popover-positioned-bottom">
                    <Popover.Header as="h2">Your notifications</Popover.Header>
                    <Popover.Body>
                        <p><strong>New notification</strong> from Jon</p>
                        <p><strong>New notification</strong> from Lena</p>
                        <p><strong>New notification</strong> from Paul</p>
                    </Popover.Body>
                  </Popover>
                }>
                <img src={ring} width="30px" height="30px"></img>
              </OverlayTrigger>

            </Nav.Link>
            <img src={me} width='45px' height='45px' className="rounded-circle"></img>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
