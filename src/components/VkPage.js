import React from "react";
import "../styles/VkPage.css";
import me from "../img/me.jpeg";
import { Button } from "react-bootstrap";

export function VkPage() {
  return (
    <div className="d-flex vkpage">
      <div className="page-photo bg-dark rounded-4">
        <img src={me} width="250px" height="275px" className="rounded-4" />
        <Button variant="danger" className="photo-btn">
          Fix that
        </Button>
      </div>
      <div className="page-info bg-dark rounded-3">
        <h3>Дмитрий Колесников</h3>
        <select class="form-select" id="inputGroupSelect01">
          <option selected>Set status</option>
          <option value="1">Working</option>
          <option value="2">Lunch</option>
          <option value="3">Vacation</option>
        </select>
        <div className="page-birthday">
          <p>Day of birth:</p>
          <p>4 august 2000</p>
        </div>
        <div className="page-contact d-flex">
          <p>Stack:</p>
          <p>Js/React</p>
        </div>
        <div className="page-contact d-flex">
          <p>Contact:</p>
          <p>tg: falsesolution</p>
        </div>
      </div>
    </div>
  );
}
