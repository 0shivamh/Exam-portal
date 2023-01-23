import {useState} from "react";
import {Alert, Badge, Button, Form, Row} from "react-bootstrap";
import Countdown from "react-countdown";
const QuesExam=()=>{

    const [ques,setQues]=useState("Number of primitive data types in Java are?");
    const [option,setOption]=useState([]);

    const options=[6,7,8,9]

    return (
        <>

            <Form>
                <Row>
                    <div className="col-6">
                        <p><b>Question no: 1</b></p>
                    </div>
                    <div className="col">
                        Marks <br/>
                        <Badge bg="success">
                            2+
                        </Badge>
                        <Badge bg="danger">
                            -0.5
                        </Badge>
                    </div>
                    <div className="col">
                        Time  <Countdown date={Date.now() + 30000} />
                    </div>
                    <div className="col-2">
                        View In
                        <Form.Select aria-label="Default select example">
                            <option value="eng">English</option>
                            <option value="hin">Hindi</option>
                        </Form.Select>
                    </div>
                    <div className="col">
                        <p>
                            <span className="material-icons">warning</span>
                            <span className="mb-2">Report</span>
                        </p>
                    </div>
                </Row>


                <Form.Group className="mb-3" >
                    <Form.Label><b>{ques}</b></Form.Label>
                </Form.Group>

                <Form.Group className="mb-3 d-flex flex-column" >
                    <Form.Check
                        inline
                        label={options[0]}
                        name="group1"
                        type="radio"
                        value={options[0]}
                    />
                    <Form.Check
                        inline
                        label={options[1]}
                        name="group1"
                        type="radio"
                        value={options[1]}
                    />
                    <Form.Check
                        inline
                        label={options[2]}
                        name="group1"
                        type="radio"
                        value={options[2]}
                    />
                    <Form.Check
                        inline
                        label={options[3]}
                        name="group1"
                        type="radio"
                        value={options[3]}
                    />
                </Form.Group>

            </Form>
        </>
    )
}
export default QuesExam;
