import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// function that returns a color based on an interval of numbers

import { PanelHeader, CardCategory } from "components";
import { Slide } from 'react-slideshow-image';
import slide1 from '../../assets/img/p1.jpg';
import slide2 from '../../assets/img/bg4.jpg';
import slide3 from '../../assets/img/n1.jpg';

const slideImages = [
  slide1, slide2, slide3
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

class Home extends React.Component {
  render() {
    return (
      <div>
       
        <div className="content">
        {/* <PanelHeader
          size="sm" /> */}
          <Row>
            <Col xs={12} md={15}>
            <div className="chart-area">
                    <div id="slide1" >
                      <Slide {...properties}>

                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[0]})`, height: 800 }}  >
                            <span ></span>
                          </div>
                        </div>
                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[1]})`, height: 800 }}>
                            <span></span>
                          </div>
                        </div>
                        <div className="each-slide">
                          <div style={{ 'backgroundImage': `url(${slideImages[2]})`, height: 800 }}>
                            <span></span>
                          </div>
                        </div>
                      </Slide>
                     
                  </div>
                    </div>  
              {/* <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Industrial Training Unit</CardCategory>
                  <CardTitle tag="h4">Internship program management</CardTitle>
                </CardHeader>
                <CardBody>
  
                 
                </CardBody>
              </Card> */}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
