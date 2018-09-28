import React from "react";
import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import img_trip from '../../assets/logos/trip.png';
import img_kaya from '../../assets/logos/Cruise2.png';
import img_hot from '../../assets/logos/kaya.png';



import 'react-datepicker/dist/react-datepicker.css';
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
  Form, FormGroup,Input,Label,CustomInput
} from "reactstrap";




import { PanelHeader, FormInputs } from "components";
import { Slide } from 'react-slideshow-image';
import slide1 from './images/ab.jpg';
import slide2 from './images/b.jpg';
import slide3 from './images/c.jpg';

const slideImages = [
  slide1, slide2, slide3
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  width:200
}
class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      city: 'Colombo',
      activeTab: '1',
      PackageType: null,
      From: null,
      To: null,
      Depart: null,
      arrival: false,
      travelers: null
    };
    //this.handleDate = this.handleDate.bind(this);
    this.handleattributes = this.handleattributes.bind(this);
    // this.clear=this.clear.bind(this);
    // this.check=this.check.bind(this);
    // checkerror=this.checkerror.bind(this);
    this.onchange = this.onchange.bind(this);
    this.onchange = this.clear.bind(this);
  }

  clear() {

    this.setState({
      // startDate: moment(),
      // city: 'Colombo',
      activeTab: '1',
      PackageType: null,
      From: null,
      To: null,
      Depart: null,
      arrival: false,
      travelers: null

    })

  }

  handleattributes({ target }) {
    console.log(target.value);
    this.setState({
      [target.name]: target.value
    });
  }
  onchange({ target }) {
    if (this.state.PackageType == "Roundtrip") {
      this.setState({
        [target.arrival]: true

      });

    }
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
        <div className="container-fluid" >

          <Row>
            <Col md={12} xs={12}>
              <CardGroup>
                <Card>
                  <div className="card-content">
                    <CardHeader>
                      <h5 className="title" align="center"> Find The Chepeast Flights From Colombo {this.state.city} </h5>
                    </CardHeader>
                    <CardBody>
                      <form>
                        <div className="row">
                          <div className="col-md-5  px-5 py-3">
                            <FormGroup>
                              <Label for="exampleSelect">Package selection</Label>
                              <Input type="select" name="select" id="exampleSelect" onChange={this.onchange} >
                                <option value="oneway">one way</option>
                                <option value="Roundtrip" onChange={this.onchange}>Round trip</option>

                              </Input>
                            </FormGroup>
                          </div>
                          <div className="col-md-5  px-5 py-3">
                            <FormGroup>
                              <Label for="exampleSelect">From</Label>
                              <Input type="select" name="select" id="exampleSelect">
                                <option>Usa</option>
                                <option>Colombo</option>
                                <option>Usa</option>
                                <option>Uk</option>

                              </Input>
                            </FormGroup>
                          </div>
                          <div className="col-md-5  px-5 py-3">
                            <FormGroup>
                              <Label for="exampleSelect">To</Label>
                              <Input type="select" name="select" id="exampleSelect">
                                <option>Usa</option>
                                <option>Colombo</option>
                                <option>Usa</option>
                                <option>Uk</option>

                              </Input>
                            </FormGroup>

                          </div>
                          <div className="col-md-5  px-5 py-3">
                            <FormGroup>
                              <Label for="exampleSelect">Departure Date</Label>
                              <DatePicker selected={this.state.date}
                                onSelect={this.handleSelect} //when day is clicked
                                onChange={this.handleChange} //only when value has changed
                              />
                            </FormGroup>

                          </div>
                          {
                            this.state.arrival &&
                            <div className="col-md-5  px-5 py-3" >
                              <FormGroup>
                                <Label for="arrival">Arrival Date</Label>
                                <DatePicker selected={this.state.arrival} id="arrival"
                                  onSelect={this.handleSelect} //when day is clicked
                                  onChange={this.handleChange} //only when value has changed
                                />
                              </FormGroup>

                            </div>
                          }
                          <div className="col-md-5  px-5 py-3">
                            <FormGroup>
                              <Label for="exampleSelect">Travelers</Label>
                              <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>

                              </Input>
                            </FormGroup>

                          </div>

                        </div>





                        <ButtonGroup className="pull-right">

                          <Button color="secondary" size="lg" onClick={this.clear}>
                            Clear
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
                      </CardHeader>
                      <FormGroup>
        
        <div className="warpper">
          {/* <span className="carlogo"> <CustomInput type="checkbox" id="exampleCustomCheckbox" size="lg" /><img className="carlogo-size" src={img_autorent}  alt="fireSpot"/></span> */}
          <span className="carlogo"> <CustomInput type="checkbox" id="exampleCustomCheckbox" size="lg" /><img className="carlogo-size" src={img_trip}  alt="fireSpot"/></span>
          <span className="carlogo"> <CustomInput type="checkbox" id="exampleCustomCheckbox" size="lg" /><img className="carlogo-size" src={img_kaya}  alt="fireSpot"/></span>
          <span className="carlogo"> <CustomInput type="checkbox" id="exampleCustomCheckbox" size="lg" /><img className="carlogo-size" src={img_hot}  alt="fireSpot"/></span>
        </div>
      </FormGroup>
                      {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                      {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.</CardText> */}
                      <Button color="DarkBlack" textcolor="White" size="lg">
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
                    <h5 className="title">Cars</h5>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <Nav tabs>
                        <NavItem>
                          <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                          >
                            Tab1
            </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                          >
                            Moar Tabs
            </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <Row>
                            <Col sm="12">
                              <h4>Tab 1 Contents</h4>
                              <Slide {...properties}>

<div className="each-slide">
  <div style={{ 'backgroundImage': `url(${slideImages[0]})`, height: 300 ,width:400}}  >
    <span ></span>
  </div>
</div>
<div className="each-slide">
  <div style={{ 'backgroundImage': `url(${slideImages[1]})`, height: 300,width:400 }}>
    <span></span>
  </div>
</div>
<div className="each-slide">
  <div style={{ 'backgroundImage': `url(${slideImages[2]})`, height: 300,width:400}}>
    <span></span>
  </div>
</div>
</Slide>

                              <h4>pay here</h4>
                              <FormInputs

                                ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3","col-md-5  px-5 py-3","col-md-5  px-5 py-3","col-md-5  px-5 py-3"]}
                              
                                proprieties={[
                                  {
                                    label: "credit card details",
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
                                    label: "Postal code",
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
                                    label: "email",
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
                                    label: "address",
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

export default Flights;
