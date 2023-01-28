import {  Row, Col, Button, Typography, Input, } from "antd";
import React, {useState} from "react";
const { Text} = Typography;
const { TextArea } = Input;


const FcJournal = () => {
    const [value, setValue] = useState('');

    return(
        <>
            <br></br>
            <h2>수업 일지</h2>
            <Row>
                <Col span={2}>
                    <Text>수업 이름</Text>
                </Col>
                <Col span={3}>
                    <Text strong>입문자PT</Text>
                </Col>
                <Col span={2}>
                    <Text>운동목적</Text>
                </Col>
                <Col span={3}>
                    <Text strong>근력강화</Text>
                </Col>
                <Col span={1}>
                    <Text>날짜</Text>
                </Col>
                <Col span={3}>
                    <Text strong>2022.12.27</Text>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col span={2}>
                    <Text>수업 제목</Text>
                </Col>
                <Col span={10}>
                    <Text strong>1회차 수업 | 라운드 숄더 완화 스트레칭</Text>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col span={2}>
                    <Text>수업 내용</Text>
                </Col>
                <Col span={11}>
                <TextArea
                    value={"굽은 어깨 교정을 위한 기본 자세 알려드림"}
                    style={{width :550}}
                    onChange={(e) => setValue(e.target.value)}
                    autoSize={{
                    minRows: 4,
                    maxRows: 6,
                    }}
                />
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col span={2}>
                    <Text>첨부파일</Text>
                </Col>
                <Col span={3}>
                    
                    <div>

                    </div>
                </Col>
            
            </Row>
        </>
    )

};

export default FcJournal;