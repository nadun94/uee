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
  Form, FormGroup,Input,Label
} from "reactstrap";

import { PanelHeader, FormInputs } from "components";
class Cars extends React.Component {
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
                    <h5 className="title"> Find the best rental car rates in {this.state.city} </h5>
                  </CardHeader>
                  <CardBody>
                    <form>
                      <FormInputs
                        ncols={[
                          "col-md-5 px-5 py-3",
                          "col-md-5 px-5 py-3"
                       
                        ]}
                        proprieties={[
                          {
                            label: "Student Id",

                            inputProps: {
                              name: "studentID",
                              type: "text",
                              disabled: false,
                              placeholder: "ITxxxxxx",
                              value: this.state.studentID,
                              onChange: this.handleattributes,


                            }

                          },
                          {
                            label: "Student Name",
                            inputProps: {
                              type: "text",

                              placeholder: "name",
                              name: "stdname",
                              value: this.state.stdname,
                              onChange: this.handleattributes
                            }
                          }
                        ]}
                      />
                     <div className="row">
                        <div className="col-md-5  px-5 py-3">
                        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
                        </div>
                        <div className="col-md-5  px-5 py-3">
                        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        </div>
        </div>
                   

                      <FormInputs

                        ncols={["col-md-5  px-5 py-3", "col-md-5 px-5 py-3"]}
                        proprieties={[
                          {
                            label: "home phone number",
                            inputProps: {
                              type: "text",
                              placeholder: "home phone number",
                              defaultValue: "",
                              name: "homephone",
                              value: this.state.homephone,
                              onChange: this.handleattributes
                            }
                          },
                          {
                            label: "mobile number",
                            inputProps: {
                              type: "text",
                              placeholder: "mobile number",
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

export default Cars;
