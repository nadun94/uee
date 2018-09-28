import React from "react";
import classnames from 'classnames';
// import img_autorent from '../../assets/logos/autorentals.png';
import img_trip from '../../assets/logos/Cruise1.png';
import img_kaya from '../../assets/logos/Cruise2.png';
import img_hot from '../../assets/logos/Cruise3.png';
import cruise1 from '../../assets/img/cruises.jpg';
import star4 from '../../assets/img/4star.png';
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
    Form, FormGroup, Input, Label, CustomInput
} from "reactstrap";
import { Slide } from 'react-slideshow-image';
// import slide1 from './images/slide_cruise.jpg';
import slide2 from './images/ship.jpg';
import slide3 from './images/slide_cruise4.jpg';

const slideImages = [
  slide2, slide3
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

// import { PanelHeader, FormInputs } from "components";
class Cruises extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: null,
            activeTab: '1',
            show_tab: false,
        };
        this.handleattributes = this.handleattributes.bind(this);
        this.handleChange = this.handleChange(this);
        this.selectRates = this.selectRates(this);

    }

    // clear() {

    //     this.setState({

    //     })

    // }

    selectRates() {
        console.log('sd');
        this.setState({ show_tab: true });
    }

    handleattributes({ target }) {
        console.log(target.name);
        this.setState({
            [target.name]: target.value
        });
    }

    handleChange(target) {
        console.log(target.value);
        console.log('sdf');
        this.setState({
            destination: ''
        });
    }

    onclear() {
        this.setState({
            destination: ''
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
<div className="chart-area">
                    <div id="slide" >
                      <Slide {...properties}>

                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[0]})`, height: 400, width: 400}}>
                            <span></span>
                          </div>
                        </div>
                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[1]})`, height: 500, width: 70}}>
                            <span></span>
                          </div>
                        </div>
                      </Slide>

                  </div>
                    </div>
</Row>
                    <Row>
                        <Col md={12} xs={12}>
                            <CardGroup>
                                <Card>
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title" align="center"> Find the best rental Cruise rates for {this.state.destination} </h5>
                                        </CardHeader>
                                        <CardBody>
                                        
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-10  px-5 py-3">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">Select Destination: </Label>
                                                            <Input type="select" name="destination" id="exampleSelect" onChange={this.handleChange}>
                                                                <option name="destination" value="Africa" onSelected={this.handleChange}>Select Destination</option>
                                                                <option name="destination" value="Africa" onSelected={this.handleChange}>Africa</option>
                                                                <option value="Africa">Alaska</option>
                                                                <option value="Africa">Asia</option>
                                                                <option value="Africa">Australia / New Zealand</option>
                                                                <option value="Africa">Bahamas</option>
                                                                <option value="Africa">Bermuda</option>
                                                                <option value="Africa">Canada - New England</option>
                                                                <option value="Africa">Caribbean</option>
                                                                <option value="Africa">Caribbean - Eastern</option>
                                                                <option value="Africa">Caribbean - Southern</option>
                                                                <option value="Africa">Caribbean - Western</option>
                                                                <option value="Africa">Europe</option>
                                                                <option value="Africa">Hawaii</option>
                                                                <option value="Africa">Mediterranean</option>
                                                                <option value="Africa">Mediterranean - Eastern</option>
                                                                <option value="Africa">Mediterranean - Western</option>
                                                                <option value="Africa">Mexico</option>
                                                                <option value="Africa">Nowhere (no port stops)</option>
                                                                <option value="Africa">Panama Canal</option>
                                                                <option value="Africa">South America</option>
                                                                <option value="Africa">South Pacific</option>
                                                                <option value="Africa">Transatlantic</option>
                                                                <option value="Africa">United States &amp; Canada</option>
                                                                <option value="Africa">US Pacific Coast</option>
                                                                <option value="Africa">World</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-10  px-5 py-3">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">Length of Cruise: </Label>
                                                            <Input type="select" name="legnth" id="exampleSelect">
                                                                <option>Any Length in Nights</option>
                                                                <option value="1">1-2 nights</option>
                                                                <option value="2">3-6 nights</option>
                                                                <option value="3">7-9 nights</option>
                                                                <option value="4">10-14 nights</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-5  px-5 py-3">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">Departure Month: </Label>
                                                            <Input type="select" name="month" id="exampleSelect">
                                                                <option>Select Month: </option>
                                                                <option value="1">January</option>
                                                                <option value="2">February</option>
                                                                <option value="3">March</option>
                                                                <option value="4">April</option>
                                                                <option value="5">May</option>
                                                                <option value="6">June</option>
                                                                <option value="7">July</option>
                                                                <option value="8">August</option>
                                                                <option value="9">September</option>
                                                                <option value="10">October</option>
                                                                <option value="11">November</option>
                                                                <option value="12">December</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                    <div className="col-md-5  px-5 py-3">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">Year: </Label>
                                                            <Input type="select" name="year" id="exampleSelect">
                                                                <option>Select year: </option>
                                                                <option value="2018">2018</option>
                                                                <option value="2019">2019</option>
                                                                <option value="2020">2020</option>
                                                                <option value="2021">2021</option>
                                                                <option value="2022">2022</option>
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

                                                <div>
                                                    {/* <span className="carlogo"> <CustomInput type="checkbox" id="exampleCustomCheckbox" size="lg" /><img className="carlogo-size" src={img_autorent}  alt="fireSpot"/></span> */}
                                                    <span className="carlogo"> <CustomInput type="checkbox" id="exampleCustomCheckbox" size="lg" /><img className="carlogo-size" src={img_trip} alt="fireSpot" /></span>
                                                    <span className="carlogo"> <CustomInput type="checkbox" id="exampleCustomCheckbox" size="lg" /><img className="carlogo-size" src={img_kaya} alt="fireSpot" /></span>
                                                    <span className="carlogo"> <CustomInput type="checkbox" id="exampleCustomCheckbox" size="lg" /><img className="carlogo-size" src={img_hot} alt="fireSpot" /></span>
                                                </div>
                                            </FormGroup>

                                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                                            {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.</CardText> */}
                                            <Button color="primary" size="lg" onClick={this.selectRates}>
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
                            {this.state.show_tab &&
                                <Card>
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title">Cruises</h5>
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
                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                    <TabPane tabId="2">
                                                        <Row>
                                                            <Col sm="6">
                                                                <Card body>
                                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                                    <div className="cars-img">
                                                                        <img className="carlogo-size" src={cruise1} alt="fireSpot" /> <star4 />
                                                                    </div>
                                                                </Card>
                                                            </Col>
                                                            <Col sm="6">
                                                                <Card body>
                                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                                    <div className="cars-img">
                                                                        <img className="carlogo-size" src={cruise1} alt="fireSpot" />
                                                                        <img className="carlogo-size" src={star4} alt="fireSpot" />
                                                                        <br />
                                                                    </div>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                </TabContent>
                                            </div>
                                        </CardBody>
                                    </div>
                                </Card>
                            }
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}

export default Cruises;
