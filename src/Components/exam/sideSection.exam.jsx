import {useState} from "react";
import Image from 'react-bootstrap/Image'
import {Badge, Button, ButtonGroup, Col, Row} from "react-bootstrap";
const SideSectionExam=()=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [answered,setAnswered] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [marked,setMarked] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [notVisted,setNotVisted]=useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [markedAnswered,setMarkedAnswered]=useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [notAnswered,setNotAnswered]=useState(0);

    const numbers = []
    for(let i=1;i<=25;i++){
        numbers.push(i)
    }


    return(
        <>

            <section >
            <div style={{background:"gray"}}>
                <div style={{padding:20,color:"white"}}>
                    <Image style={{height:50}} roundedCircle={true} src="https://www.w3schools.com/w3images/avatar2.png" />
                    XYZ
                </div>
                <div style={{padding:20,color:"white"}}>
                    <Row>
                        <Col>
                            <Badge bg="success">{answered}</Badge>
                            Answered
                        </Col>
                        <Col>
                            <Badge bg="primary">{marked}</Badge>
                            Marked
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={6}>
                            <Badge bg="secondary">{notVisted}</Badge>
                            Not Visited
                        </Col>
                        <Col xs={6}>
                            <Badge bg="primary">{markedAnswered}</Badge>
                            Marked and answered
                        </Col>
                        <Col >
                            <Badge bg="danger">{notAnswered}</Badge>
                            Not answered
                        </Col>
                    </Row>
                </div>

                <div>
                    <div style={{background:"darkgray",padding:10}}>
                        SECTION: Test
                    </div>
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" style={{padding:20,color:"white"}}>
                         {
                                numbers.map((number) =>
                                    <div className="col-sm">
                                    <Button key={number} variant="secondary">{number}</Button>
                                    </div>
                                )
                            }
                    </div>
                </div>

                <div className="text-center ">
                    <hr/>
                    <div>
                        <Button variant="primary m-2">Question Paper</Button>
                        <Button variant="primary m-2">Instruction</Button>
                    </div>
                    <Button variant="info m-2" >Submit Test</Button>
                </div>



                </div>

            </section>
        </>
    )

}

export default SideSectionExam;
