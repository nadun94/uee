import React from "react";
import classnames from 'classnames';
import {
  InputGroup, InputGroupAddon, InputGroupText,
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
import{Container } from "reactstrap";
class VacationFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        destination: null,
        activeTab: '1',
    };
    this.handleattributes = this.handleattributes.bind(this);
    this.handleChange = this.handleChange(this);

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
      destination:''
  });
}

toggle(tab) {
  if (this.state.activeTab !== tab) {
      this.setState({
          activeTab: tab
      });
  }
}
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
                                    <h5 className="title" align="center"> Find the best rental Vacation rates in {this.state.destination} </h5>
                                </CardHeader>
                                <CardBody>
<Form><FormGroup>
<Label for="arrivaldate">Arrival Date</Label>
<InputGroup>
<Input type="date">Arrival Date</Input>
<InputGroupAddon addonType="append"><InputGroupText>To the Right!</InputGroupText></InputGroupAddon>
</InputGroup>
</FormGroup>
<FormGroup>
<Label for="deaparturedate">Departure Date</Label>
<InputGroup>
<Input type="date">Departure Date</Input>
<InputGroupAddon addonType="append"><InputGroupText>To the Right!</InputGroupText></InputGroupAddon>
</InputGroup>
</FormGroup>
<FormGroup inline>
<Label for="arrivaldate">Vacation period</Label>
<InputGroup>
<Input type="text"></Input>
<InputGroupAddon addonType="append"><InputGroupText>To the Right!</InputGroupText></InputGroupAddon>
</InputGroup>
<Label for="Days">Days</Label>
<InputGroup>
<Input type="text"></Input>
<InputGroupAddon addonType="append"><InputGroupText>To the Right!</InputGroupText></InputGroupAddon>
</InputGroup>
<Label for="Days">Months</Label>
<InputGroup>
<Input type="text"></Input>
<InputGroupAddon addonType="append"><InputGroupText>To the Right!</InputGroupText></InputGroupAddon>
</InputGroup>
<Label for="Days">Destination</Label>
<Input type="select">
<option value="Africa">Select Destination</option>
                                                                <option value="Africa">Canada - New England</option>
                                                                <option value="Africa">Caribbean</option>
                                                                <option value="Africa">Caribbean - Eastern</option>
                                                                <option value="Africa">Caribbean - Southern</option>
                                                                <option value="Africa">Caribbean - Western</option>
</Input>
</FormGroup>
</Form>
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
                                <h5 className="title">Vacations</h5>
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
export default VacationFinder