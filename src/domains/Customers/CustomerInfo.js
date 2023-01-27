import { Col, Typography , Select, Modal, Image, Row, Button, Radio, Checkbox} from "antd";
import React from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {  DeleteOutlined } from "@ant-design/icons";
import './CustomerInfo.css';
const { Text } = Typography;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const CustomerInfo = () => {
    const location = useLocation();
    console.log('state', location.state);
    const id = location.state.id;
    const usernum = location.state.usernum;
    const userheight = location.state.userheight;
    const userwidth = location.state.userwidth;
    const sex = location.state.sex;
    const existence = location.state.existence;
    const name = location.state.name;
    const obstacle_type = location.state.obstacle_type;
    const phone = location.state.phone;
    const address = location.state.address;
    const memo = location.state.memo;
    const manager = location.state.manager;
    const payment = location.state.payment;
    const inflow = location.state.inflow;
    const statement = location.state.statement;
    const birthday = location.state.birthday;
    const date_signup = location.state.date_signup;
    const membership = location.state.membership;
    const user_purpose = location.state.user_purpose;
    const vaccinate = location.state.vaccinate;
    const category= location.state.category;

    const navigate = useNavigate();

    const deleteInfo = () => {
        Modal.error({
          title: '삭제',
          content: '해당 회원 정보를 삭제하시겠습니까?',
        });
      };

      // id, 이름, 성별, 전화번호, 생년월일, 주소, 장애유형, 유입경로, 운동목적 전달
    const move = () => {
        navigate('/customers/paymentinfo', {
            state : {
                id: id,
                usernum: usernum,
                sex: sex,
                name: name,
                phone: phone,
                birthday: birthday,
                address: address,
                obstacle_type: obstacle_type,
                inflow: inflow,
                user_purpose: user_purpose
            }
        });
    };

    
    return(
        <>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <div className="Div">
                    <Row gutter={[32, 16]}>
                        <div className="Col1">
                        <Col>
                            <Image
                                width={150}
                                height={150}
                                src="https://pbs.twimg.com/profile_images/1459562606956793856/rMEpug4T_400x400.jpg"
                            />
                            <br></br><br></br>
                            <Button size="small">사진 추가/변경</Button><Button size="small"><DeleteOutlined /></Button>
                            <br></br><br></br>
                            <h4>상담</h4>
                            <Checkbox defaultChecked="true">초기 상담지</Checkbox><br></br>
                            <Checkbox defaultChecked="true">계약서</Checkbox><br></br>
                            <Checkbox defaultChecked="true">개인정보수집이용동의서</Checkbox>
                            <br></br><br></br>
                            <Row gutter={16}>
                            <Col>
                                <h4>결제정보</h4>
                            </Col>
                            <Col>
                                <h4>{payment}</h4>
                            </Col>
                            </Row>
                            <Row gutter={16}>
                                <Button type="link" onClick={move}>결제정보 확인</Button>
                            </Row>
                        </Col>
                        </div>

                        <div className="Col2">
                        <Col>
                        <Row gutter={16}>
                            <Col>
                                <h4>회원번호</h4>
                            </Col>
                            <Col>
                            <h4>{usernum}</h4>
                            </Col>
                        </Row><br></br>
                        <Row gutter={16}>
                            <Col>
                                <h4>이름</h4>
                            </Col>
                            <Col>
                                <h4>{name}</h4>
                            </Col>
                        </Row><br></br>
                        <Row gutter={16}>
                            <Col>
                                <h4>성별</h4>
                            </Col>
                            <Col>
                                <h4>{sex}</h4>
                            </Col>
                        </Row><br></br>
                        <Row gutter={16}>
                            <Col>
                                <h4>생년월일</h4>
                            </Col>
                            <Col>
                                <h4>{birthday}</h4> 
                            </Col>
                        </Row><br></br>
                        <Row gutter={16}>
                            <Col>
                            <h4>{userheight} cm /</h4> 
                            </Col>
                            <Col>
                            <h4>{userwidth} kg</h4>
                            </Col>
                        </Row><br></br>
                        <Row gutter={16}>
                            <Col>
                                <h4>장애 유무</h4>
                            </Col>
                            <Col>
                                <h4>{existence}</h4>
                            </Col>
                        </Row><br></br>
                        <Row gutter={16}>
                            <Col>
                                <h4>장애 유형</h4>
                            </Col>
                            <Col>
                                <h4>{obstacle_type}</h4>
                            </Col>
                        </Row><br></br>
                        <Row gutter={16}>
                            <Col>
                                <h4>예방접종</h4>
                            </Col>
                            <Col>
                                <h4>{vaccinate}</h4>
                            </Col>
                        </Row><br></br>
                        <Row gutter={10}>
                            <Col>
                                <h4>전화번호</h4>
                            </Col>
                            <Col>
                                <h4>{phone}</h4>

                            </Col>
                            </Row><br></br>
                        </Col>
                        </div>
                        <div className="Col3">
                        <Col>
                            <Row gutter={16}>
                            <Col>
                                <h4>유형</h4>
                            </Col>
                            <Col>
                                <h4>{category}</h4>
                            </Col>
                            </Row><br></br>
                            <Row gutter={16}>
                            <Col>
                                <h4>상태</h4>
                            </Col>
                            <Col>
                                <h4>{statement}</h4>
                            </Col>
                            </Row><br></br>
                            <Row gutter={16}>
                            <Col>
                                <h4>담당자</h4>
                            </Col>
                            <Col>
                                <h4>{manager}</h4>
                            </Col>
                            </Row><br></br>
                            <Row gutter={16}>
                            <Col>
                                <h4>운동목적</h4>
                            </Col>
                            <Col>
                                <h4>{user_purpose}</h4>
                            </Col>
                            </Row><br></br>
                            <Row gutter={16}>
                            <Col>
                                <h4>가입일시</h4>
                            </Col>
                            <Col>
                                <h4>{date_signup}</h4>
                            </Col>
                            </Row><br></br>
                            
                            <Row gutter={16}>
                            <Col>
                                <h4>유입경로</h4>
                            </Col>
                            <Col>
                                <h4>{inflow}</h4>
                            </Col>
                            </Row><br></br>
                            <Row gutter={16}>
                            <Col>
                                <h4>회원권</h4>
                            </Col>
                            <Col>
                                <h4>{membership}</h4>                                
                            </Col>
                            </Row><br></br>
                        
                            <Row gutter={16}>
                                <Col>
                                    <h4>주소</h4>
                                </Col>
                                <Col>
                                    <h4>{address}</h4>
                                </Col>
                            </Row>
                            <br></br><br></br>
                            <div className="btns">
                                <Button type="primary" href="/customers/infoedit">수정</Button>
                                <Button type="primary" danger onClick={deleteInfo}>삭제</Button>
                            </div>
                        </Col>
                        </div>
                    </Row>
                        
                    </div>
                </Col>
                <Col span={4}></Col>
                </Row>
        </>
    );
};


export default CustomerInfo;