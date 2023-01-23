import {Col, Container, Row} from "react-bootstrap";
import QuesExam from "./ques.exam";
import NavigationExam from "./navigation.exam";
import SideSectionExam from "./sideSection.exam";

const Exam=()=>{

    return(
        <>
            <Container>
                <Row>
                    <NavigationExam/>
                    <hr/>
                    <div className="col">
                        <QuesExam/>
                    </div>
                    <div className="col-3">
                        <SideSectionExam/>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Exam;
