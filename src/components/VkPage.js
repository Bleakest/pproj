import React from "react";
import "../styles/VkPage.css";

import me from "../img/me.jpeg";
import harry from "../img/harry.jpeg";
import jon from "../img/jon.jpeg";
import jony from "../img/jony.jpeg";
import khabib from "../img/khabib.jpeg";
import kresh from "../img/kresh.jpeg";
import riana from "../img/riana.jpeg";



import { Button } from "react-bootstrap";

export function VkPage() {
  function dopInfo() {
    const dopinfo = document.querySelector(".dopinfo");
    dopinfo.classList.toggle("hide");
  }

  return (
    <div className="d-flex vkpage">
      <div>
        <div className="page-photo bg-dark rounded-4">
          <img src={me} width="250px" height="275px" className="rounded-4" />
          <Button variant="danger" className="photo-btn">
            Fix that
          </Button>
        </div>

        <div className="page-friends bg-dark rounded-3 m-3">
          <div className="d-flex p-3">
            <div className="me-1">Friends</div>
            <p className="text-muted">6</p>
          </div>
          <div className='d-flex justify-content-evenly px-2'>
            <div className="flex-fill p-2">
              <a href="#" className="text-decoration-none text-light">
                <img
                  src={jon}
                  width="60px"
                  height="60px"
                  className="rounded-circle"
                ></img>
                <p>Jon</p>
              </a>
            </div>
            <div className="flex-fill p-2">
              <a href="#" className="text-decoration-none text-light">
                <img
                  src={harry}
                  width="60px"
                  height="60px"
                  className="rounded-circle"
                ></img>
                <p>Harry</p>
              </a>
            </div>
            <div className="flex-fill p-2">
              <a href="#" className="text-decoration-none text-light">
                <img
                  src={jony}
                  width="60px"
                  height="60px"
                  className="rounded-circle"
                ></img>
                <p>Johny</p>
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-evenly px-2">
            <div className="flex-fill p-2">
              <a href="#" className="text-decoration-none text-light">
                <img
                  src={khabib}
                  width="60px"
                  height="60px"
                  className="rounded-circle"
                ></img>
                <p >Khabib</p>
              </a>
            </div>
            <div className="flex-fill p-2">
              <a href="#" className="text-decoration-none text-light">
                <img
                  src={kresh}
                  width="60px"
                  height="60px"
                  className="rounded-circle"
                ></img>
                <p>Cristiano</p>
              </a>
            </div>
            <div className="flex-fill p-2">
              <a href="#" className="text-decoration-none text-light">
                <img
                  src={riana}
                  width="60px"
                  height="60px"
                  className="rounded-circle"
                ></img>
                <p>Rihanna</p>
              </a>
            </div>
          </div>

          <div className="d-flex p-3 border-top">
            <div className="me-1">Online</div>
            <p className="text-muted">3</p>
          </div>
          <div className='d-flex justify-content-evenly flex-wrap'>
            <div className="flex-fill p-2">
              <a href="#" className="text-decoration-none text-light">
                <img
                  src={jon}
                  width="60px"
                  height="60px"
                  className="rounded-circle"
                ></img>
                <p>Jon</p>
              </a>
            </div>
            <div className="flex-fill p-2">
              <a href="#" className="text-decoration-none text-light">
                <img
                  src={harry}
                  width="60px"
                  height="60px"
                  className="rounded-circle"
                ></img>
                <p>Harry</p>
              </a>
            </div>
            <div className="flex-fill p-2">
              <a href="#" className="text-decoration-none text-light">
                <img
                  src={jony}
                  width="60px"
                  height="60px"
                  className="rounded-circle"
                ></img>
                <p>Johny</p>
              </a>
            </div>
            <div className="flex-fill p-2">
              <a href="#" className="text-decoration-none text-light">
                <img
                  src={khabib}
                  width="60px"
                  height="60px"
                  className="rounded-circle"
                ></img>
                <p>Khabib</p>
              </a>
            </div>
          </div>
        </div>
        
      </div>

      <div>
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
            <p>4 august 2000.</p>
          </div>
          <div className="page-contact d-flex">
            <p>Stack:</p>
            <p>Js/React</p>
          </div>
          <div className="page-contact d-flex">
            <p>Contact:</p>
            <p>tg: falsesolution</p>
          </div>
          <Button
            variant="dark"
            className="w-100 bg-dark text-danger fs-5"
            onClick={dopInfo}
          >
            Show more information
          </Button>
          <div className="dopinfo hide">
            <div className="mt-3">
              <p className="fs-5">Basic information</p>
            </div>
            <div className="page-contact d-flex">
              <p>Language:</p>
              <p>Russian/English/Javascript</p>
            </div>
            <div className="page-contact d-flex">
              <p>City:</p>
              <p>Krasnodar</p>
            </div>
          </div>
        </div>

        <div className="bq">hello</div>
      </div>
    </div>
  );
}
