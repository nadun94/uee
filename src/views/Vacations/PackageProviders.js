import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardBody,CardTitle, CardSubtitle,CardImg, CardText, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Radio,Table,Jumbotron } from "reactstrap";
import{InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import{Container } from "reactstrap";

class PackageProviders extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader tag="h4">Package Providers</CardHeader>
                                <CardBody>
                                    <Form>
                                        <div id="pacakageProviders" data-tip data-for='PackageProviderTip'>
                                        <Table borderless>
                                            <tr>
                                                <td> <Label for="adults">Hotwire</Label></td>
                                                <td><Input type="checkbox" class="form-control"></Input></td>
                                            </tr>
                                            <tr>
                                                <td> <Label for="kids">Expedia</Label></td>
                                                <td><Input type="checkbox" class="form-control"></Input></td>
                                            </tr>
                                            <tr>
                                                <td> <Label for="kids">Trip Advisor</Label></td>
                                                <td><Input type="checkbox" class="form-control"></Input></td>
                                            </tr>
                                            <tr>
                                                <td> <Label for="kids">Kayak</Label></td>
                                                <td><Input type="checkbox" class="form-control"></Input></td>
                                            </tr>
                                            <tr>
                                                <td> <Label for="kids">Travelocity</Label></td>
                                                <td><Input type="checkbox" class="form-control"></Input></td>
                                            </tr>
                                            <tr>
                                                <td> <Label for="kids">Priceline.com</Label></td>
                                                <td><Input type="checkbox" class="form-control"></Input></td>
                                            </tr>
                                        </Table>
                                        </div>
                                        <Button outline color="primary" id="compareandSearch" data-tip data-for='CompareSearchButtonTip'>Compare and Search for packages</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PackageProviders;
