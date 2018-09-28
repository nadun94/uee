import React from "react";
import classnames from 'classnames';
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  Row,
  Col,
  ButtonGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Badge,
  CardTitle,
  CardText,
  CardGroup,
  Form, FormGroup, Input, Label
} from "reactstrap";

import { PanelHeader, FormInputs } from "components";
import { Slide } from 'react-slideshow-image';
import slide1 from './image/1.jpg';
import slide2 from './image/2.jpg';
import slide3 from './image/3.jpg';

const slideImages = [
  slide1, slide2, slide3
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Colombo',
      activeTab: '1',
    };
    //this.handleDate = this.handleDate.bind(this);
    this.handleattributes = this.handleattributes.bind(this);
    // this.clear=this.clear.bind(this);
    // this.check=this.check.bind(this);
    // checkerror=this.checkerror.bind(this);
  }

  // clear() {

  //     this.setState({

  //     })

  // }

  handleattributes({ target }) {
    console.log(target.value);
    this.setState({
      [target.name]: target.value
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
    
  //render start******************************************************
  render() {
    return (
      <div>
        {/* <PanelHeader size="sm" /> */}
        <div className="container-fluid">

          <Row>
            <Col md={12} xs={12}>
              <CardGroup>
                <Card>
                  <div className="card-content">
                    <CardHeader>
                      <h5 className="title"> Find the best Hotels  </h5>
                    </CardHeader>
                    <CardBody>
                      <form>
                       <div className="row">
                          <div className="col-md-5  px-5 py-3">
                            <FormGroup>
                              <Label for="exampleSelect">Location</Label>
                              <Input type="select" name="select" id="exampleSelect">
                                <option>USA</option>
                                <option>CANADA</option>
                                <option>UK</option>
                                <option>SRILANKA</option>
                                <option>AUSTRAILIA</option>
                              </Input>
                            </FormGroup>
                          </div>
                          <div className="col-md-5  px-5 py-3">
                            <FormGroup>
                              <Label for="exampleSelect">Hotel Categary</Label>
                              <Input type="select" name="select" id="exampleSelect">
                                <option>5start</option>
                                <option>4start</option>
                                <option>3start</option>
                                
                              </Input>
                            </FormGroup>
                          </div>
                        </div>

                       
                        <div className="row">
                          <div className="col-md-5  px-5 py-3">
                            <FormGroup>
                              <Label for="exampleSelect">Hotel Suggestions</Label>
                              <Input type="select" name="select" id="exampleSelect">
                                <option>Shrangila</option>
                                <option>Galadari</option>
                                <option>RoyalVillage</option>
                                <option>MountlavaniaHotel</option>
                               
                              </Input>
                            </FormGroup>
                          </div>
                          <div className="col-md-5  px-5 py-3">
                          
                          </div>
                        </div>

                        <Slide {...properties}>

                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[0]})`, height: 600,width:1000 }}  >
                            <span ></span>
                          </div>
                        </div>
                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[1]})`, height: 600 ,width:1000}}>
                            <span></span>
                          </div>
                        </div>
                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[2]})`, height: 600 ,width:1000}}>
                            <span></span>
                          </div>
                        </div>
                      </Slide>


                       <FormGroup>
                              <Label for="exampleSelect">Room Categary</Label>
                              <Input type="select" name="select" id="exampleSelect">
                                <option>Luxury</option>
                                <option>Normal</option>
                                <option>3bedromms</option>
                                <option>2bedrooms</option>
                               
                              </Input>
                            </FormGroup>

                        <FormInputs

                          ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3","col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}
                          proprieties={[
                            {
                              label: "Rooms Count",
                              inputProps: {
                                type: "text",
                              //  placeholder: "home phone number",
                                defaultValue: "",
                                name: "Travellers Count",
                                value: this.state.homephone,
                                onChange: this.handleattributes
                              }
                            },
                            {
                              label: "Travellers Count",
                              inputProps: {
                                type: "text",
                              //  placeholder: "mobile number",
                                defaultValue: "",
                                name: "mobilephone",
                                value: this.state.mobilephone,
                                onChange: this.handleattributes
                              }
                            }
                            ,{
                              label: "Check-In",
                              inputProps: {
                                type: "text",
                              //  placeholder: "home phone number",
                                defaultValue: "",
                                name: "Travellers Count",
                                value: this.state.homephone,
                                onChange: this.handleattributes
                              }
                            },
                            {
                              label: "Check-Out",
                              inputProps: {
                                type: "text",
                              //  placeholder: "home phone number",
                                defaultValue: "",
                                name: "Travellers Count",
                                value: this.state.homephone,
                                onChange: this.handleattributes
                              }
                            },
                          ]}
                        />

                        <ButtonGroup className="pull-right">

                          <Button color="secondary" size="lg" onClick={this.clear}>
                            SUBMIT
                        </Button>
                        </ButtonGroup>

                        <h3>
                          {" "}
                          <Badge color="secondary">{this.state.message}</Badge>
                        </h3>
                      </form>

                    </CardBody>
                  </div>
                </Card>
                <Card>
                  <div className="card-content">
                    <CardBody>
                      <CardHeader>
                        <h5 className="title">Click on multiple sites to get the lowest prices</h5>
                        <FormGroup>
                              <Label for="exampleSelect">Hotels</Label>
                              <Input type="select" name="select" id="exampleSelect">
                                <option>Shrangila</option>
                                <option>Galadari</option>
                                
                               
                              </Input>
                            </FormGroup>
                      </CardHeader>
                      {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                      {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.</CardText> */}
                      <Button color="primary" size="lg">
                        Compare Selected
                        </Button>
                    </CardBody>
                  </div>
                </Card>
              </CardGroup>

            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <div className="card-content">
                  <CardHeader>
                    <h5 className="title">Hotels comparission tabs and payments</h5>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <Nav tabs>
                        <NavItem>
                          <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                          >
                            Payment
            </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                          >
                            Comparission tabs
            </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <Row>
                            <Col sm="12">
                              <h4>Pay here </h4>

                              

                               <Slide {...properties}>

                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[0]})`, height: 600,width:1000 }}  >
                            <span ></span>
                          </div>
                        </div>
                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[1]})`, height: 600 ,width:1000}}>
                            <span></span>
                          </div>
                        </div>
                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[2]})`, height: 600 ,width:1000}}>
                            <span></span>
                          </div>
                        </div>
                      </Slide>

                                 <FormGroup>
                              <Label for="exampleSelect">Select Online payment method.</Label>
                              <Input type="select" name="select" id="exampleSelect">
                                <option>Visa</option>
                                <option>Master</option>
                                <option>Paypal</option>
                               
                               
                              </Input>
                            </FormGroup>

                                <FormInputs
                                
                          ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3,col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}
                          proprieties={[
                            {
                              label: "Full Name",
                              inputProps: {
                                type: "text",
                              //  placeholder: "home phone number",
                                defaultValue: "",
                                name: "Visa Card Number",
                                value: this.state.homephone,
                                onChange: this.handleattributes
                              }
                            },
                            {
                              label: "Pin number",
                              inputProps: {
                                type: "text",
                              //  placeholder: "home phone number",
                                defaultValue: "",
                                name: "Visa Card Number",
                                value: this.state.homephone,
                                onChange: this.handleattributes
                              }
                            },
                            {
                              label: "Visa Card Number",
                              inputProps: {
                                type: "text",
                              //  placeholder: "mobile number",
                                defaultValue: "",
                                name: "mobilephone",
                                value: this.state.mobilephone,
                                onChange: this.handleattributes
                              }
                            }
                          ]}
                        />
                              <ButtonGroup className="pull-right">

                          <Button color="secondary" size="lg" onClick={this.clear}>
                            SUBMIT PAYMENT
                        </Button>
                        </ButtonGroup>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="2">
                          <Row>
                            <Col sm="6">
                              <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                              </Card>
                            </Col>
                            <Col sm="6">
                              <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                              </Card>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>

        </div>
      </div>
    );
  }
}

export default Hotels;
