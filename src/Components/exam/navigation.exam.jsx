import {Button, Col, Container, Row} from "react-bootstrap";
import Countdown from 'react-countdown';

const NavigationExam=()=>{
    return(<>

        <Row >
            <Col lg={6}>
                <p className="h5 m-2">PHSY- Exam </p>
            </Col>
            <Col>
                <p className="m-2" >
                Timer Left: <Countdown date={Date.now() + 1000000} />
                </p>
            </Col>
            <Col className="text-end">
                <Button variant="outline-info m-2" >Switch to Full Screen</Button>
                <Button variant="outline-info mt-2 mb-2">Pause</Button>
            </Col>
        </Row>



    </>)
}
export default NavigationExam;
