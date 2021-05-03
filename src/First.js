import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, ListGroup, ListGroupItem, Button, Nav, Image, Carousel } from 'react-bootstrap';
import './First.css';
import "./Popup.css";
import Popup from './Popup1';


// import Details from './Details';

function First() {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <div className="First">
      <div className="container">
        <Card style={{ width: '48rem', height: "37rem" }}>
          <Card.Body>
            <div className="row">
              <div className="col-4">

                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      className="ab" src="https://www.vhplindia.com/images/products/product-1-700x700.jpg" style={{ width: "70%" }}
                      alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/products/product-1-2.jpg"
                      alt="Second slide"
                    />
                    
                  </Carousel.Item>
                </Carousel>
              {/* <Button variant="outline-danger" className="fou"><img  className="ab" src="https://www.vhplindia.com/images/products/product-1-700x700.jpg" style={{ width: "70%" }}/>
              </Button>  */}
               
               <>
               <Button  className="fou"onClick={() => setModalShow(true)} variant="light"> <img src="https://www.vhplindia.com/images/products/product-1-700x700.jpg" style={{ width: "70%" }}/></Button> 
               <Button className="fo"onClick={() => setModalShow(true)} variant="light"> <img src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/products/product-1-2.jpg"style={{ width: "70%" }}/></Button> 
      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
              
      
    </div>
            
              {/* <img className="ab" src="https://www.vhplindia.com/images/products/product-1-700x700.jpg" style={{ width: "70%" }} ></img>
              </div> */}
              <div className="col-8" id="gh">
                <Card.Title><h4>Brandix Spark Plug Kit ASR-400</h4></Card.Title>
                <p>Many philosophical debates that began in ancient times are still debated today.In one general sense, philosopy is associated with wisdom, indellectual culture and asearch of knowledge.</p>
                <Card.Subtitle className="mb-2 text-muted">Key Features:</Card.Subtitle>
                <Card.Text>
                  <li>Speed: 750 RPM</li>

                  <li>Power Source: Cordless-Electric</li>

                  <li>Battery Cell Type: Lithium</li>
                  <li>Voltage: 20 Volts</li>
                  <li>Battery Capacity: 2 Ah</li>
                </Card.Text>

                <hr />
                <Card.Link href="#" >See Full Secification</Card.Link>


               

              </div>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem', marginLeft: '70%', height: '39rem', marginTop: "-53.5%" }}>

          <Card.Body>
            <Card.Title >
              <div className="row">
                <div className="col-6"><h3>QAR 19.00</h3>
                  <text id="cd">QAR 38.00 </text><text id="ef"><b>50% off</b></text></div>

                <div className="col-6">

                  <div className="form-group">
                    <button className="bbn">In Stock (25)</button>

                  </div>
                </div>
              </div>

            </Card.Title>
            <Card.Text>
              <pre class="tab"> SKU                   140-10440-B</pre>
              <hr />
              <pre class="tab">Brand                   <Card.Link href="#">Brandix</Card.Link> </pre>
              <hr />
              <pre class="tab"> Location                Qatar</pre>
            </Card.Text>
          </Card.Body>

          <ListGroup className="list-group-flush" style={{ height: "12rem", marginTop: "11%" }}>

            <ListGroupItem >
              <label for="">size</label><br />
              <Button variant="outline-danger" className="four">S</Button> <Button className="four" variant="outline-danger">M</Button> <Button className="four" variant="outline-danger">L</Button> <Button className="four" variant="outline-danger">XL</Button>
              <br /><br />
              <div className="form-group">
                <label for="">color</label><br />
                <button className="bu"></button>  <button className="but"></button>  <button className="butt"></button>  <button className="butto"></button>
              </div>
            </ListGroupItem>

          </ListGroup>
          <Card.Body style={{ marginTop: "-4%" }}>
            <form action="/action_page.php" style={{ marginLeft: '-60%' }}>
              <label for="points" >Qty:</label>
              <input type="number" style={{ width: "24%" }} id="points" name="points" step="1" />

            </form>

            <Button type="submit" id="one"><b>Add To Cart</b></Button>




          </Card.Body>
          <ListGroupItem style={{ height: "8rem", marginTop: "-2%" }}><b >SOLD BY</b>

            <Card.Body className="three">
              <Card.Link href="#">  <Image className="two" style={{ height: "70px", width: "70px", borderStyle: "solid" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGZT8wd0HqUz8Rh5zk_v4FCfSbBZ4cEQUOQ&usqp=CAU" roundedCircle /></Card.Link>
              <Card.Link href="#"><b style={{ color: "black" }}>Roak Power Limited.</b><p style={{ marginLeft: "35%", marginTop: "-9%", color: "black" }}>Location Address</p></Card.Link>

            </Card.Body>
          </ListGroupItem>
        </Card>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Card style={{ marginTop: "-50%", width: "105%", height: "40%" }}>
              <Card.Header >
                <Nav variant="tabs" defaultActiveKey="#first" style={{ borderColor: "red" }}>
                  <Nav.Item>
                    <Nav.Link href="#first" style={{ color: "black" }}>Description</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#second" style={{ color: "black" }}>Secification</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link" style={{ color: "black" }}>Location Map</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
    </Card.Text>

              </Card.Body>
            </Card>
          </div>

          <Card style={{ width: '22rem', marginLeft: "70%", marginTop: "-29%" }}>

            <Card.Body>

              <Card.Text>
                <svg style={{ color: "purple", marginLeft: "-75%" }} xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </Card.Text>

              <div style={{ marginLeft: "30%", marginTop: "-19%" }}>
                <b style={{ fondSize: "-90%" }}>Free Shipping</b>
                <p>for orders from QAR50</p>
              </div>
              <svg style={{ color: "purple", marginTop: "1%", marginLeft: "-75%" }} xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-telephone-inbound" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              <div style={{ marginLeft: "30%", marginTop: "-14%" }}>
                <b style={{ fondSize: "-90%" }}>Supporting 24/7</b>
                <p>Call us any time</p>
              </div>
              <svg style={{ color: "purple", marginTop: "2%", marginLeft: "-75%" }} xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-file-lock" viewBox="0 0 16 16">
                <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z" />
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg>
              <div style={{ marginLeft: "30%", marginTop: "-14%" }}>
                <b style={{ fondSize: "-90%" }}>100% Safety</b>
                <p>Only secure payments</p>
              </div>
              <svg style={{ color: "purple", marginTop: "2%", marginLeft: "-75%" }} xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
                <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
              </svg>
              <div style={{ marginLeft: "30%", marginTop: "-14%" }}>
                <b style={{ fondSize: "-90%" }}>Hot Offers</b>
                <p>Discounts up to 90%</p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div >

    </div>
  );
}
export default First;
