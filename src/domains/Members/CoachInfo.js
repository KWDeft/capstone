import {  Row, Col, Button, Typography, Input, Modal, InputNumber } from "antd";
import React, {useState, useEffect} from "react";
import Client from "./Client.js";
import './MemberInfo.css';
import {useNavigate} from 'react-router';
import {useLocation} from 'react-router-dom';
import client from '../../lib/api/client';

const {Text} = Typography;
const {TextArea} = Input;

const CoachInfo = () => {
    let [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.id;
    console.log(id);
    const [coachList, setCoachList] = useState([]);

    useEffect(() => {
        getData();
      }, []);

      const getData = async () => {
        await client
        .get(`/api/member/coach/${id}`)
        .then( d =>{
            let row = d.data;
            setCoachList({
              name: row.name,
              phone: row.phone,
              username: row.username,
              password: row.password,
              email: row.email,
              job: row.job,
              record: row.record,
              coachnum: row.coachnum,
            })
            console.log(d);
          }
        );
      };

      const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const Delete = (e) => {
        Modal.confirm({
            title: "정말로 삭제하시겠습니까?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
              client.delete(`/api/member/coach/${id}`).then((res) => 
              console.log(res)
              );
              alert("삭제완료");
              navigate('/members'); 
            },
          });
    };

    const editHandler = (e) => {
        client
            .patch(`/api/member/coach/${id}`, coachList)
            .then((res) =>
                console.log(res)
            );
            alert("수정 완료");
            window.location.reload();
       };    

        return( 
        <>
        <Row gutter={10}>
            <Col span={12}>
                <br></br>
                <h2 className="name">{coachList.name}</h2>
                <Row>
                    <Col span={8}>직책</Col>
                    <Col span={8}>코치</Col>
                </Row><br></br>
                <Row>
                <Col span={8}>전화번호</Col>
                <Col span={8}>{coachList.phone}</Col>
               </Row><br></br>
               <Row>
                <Col span={8}>코치번호</Col>
                <Col span={8}>{coachList.coachnum}</Col>
               </Row><br></br>
                <Row>
                    <Col span={8}>이메일</Col>
                    <Col span={8}>{coachList.email}</Col>
                </Row><br></br>
                <Row>
                    <Col span={8}>직무</Col>
                    <Col span={8}>{coachList.job}</Col>
                </Row><br></br>
                <Row>
                    <Col span={8}>이력</Col>
                    <Col span={8}>
                       {coachList.record}
                    </Col>
                </Row><br></br>
                <Row>
                    <Col span={8}>담당회원</Col>
                    <Col span={8}>
                        <Button type="dashed"
                                onClick={ () => {setVisible(!visible)}}>
                                {visible ? "닫기" : "담당회원 조회"}</Button>
                    </Col>
                </Row><br></br>
                <Col span={7}>
                {visible && <Client coachnum = {coachList.coachnum} />}
                </Col>
                <div className="div1">
                    <Button type="primary" onClick={showModal}>수정</Button>
                    <Modal
                    title="코치 정보 수정"
                    open={isModalOpen}
                    onOk = {editHandler}
                    onCancel={handleCancel}
                    width={1000}
                >
                        <>
                        <Row>
                        <Col span={12}>
                            <br></br>
                            <Row>
                            <Col span={4}>
                                <h3>이름</h3>
                            </Col>
                            <Col span={10}>
                                <Input 
                                    autoComplete="name"
                                    name="name"
                                    id="name"
                                    value={coachList.name}
                                    onChange={e => {
                                    let value = e.target.value;
                                    setCoachList({
                                        name : value,
                                        phone: coachList.phone,
                                        username: coachList.username,
                                        password: coachList.password,
                                        email: coachList.email,
                                        job: coachList.job,
                                        record: coachList.recrod,
                                        coachnum: coachList.coachnum,
                                    });
                                    }}
                                />
                            </Col>
                            </Row>
                            <br></br>
                            <Row>
                            <Col span={4}>
                                <h3>전화번호</h3>
                            </Col>
                            <Col span={10}>
                                <Input 
                                    autoComplete="phone"
                                    name="phone"
                                    id="phone"
                                    value={coachList.phone}
                                    onChange={e => {
                                    let value = e.target.value;
                                    setCoachList({
                                        name : coachList.name,
                                        phone: value,
                                        username: coachList.username,
                                        password: coachList.password,
                                        email: coachList.email,
                                        job: coachList.job,
                                        record: coachList.recrod,
                                        coachnum: coachList.coachnum,
                                    });
                                    }}
                                />
                            </Col>
                            </Row>
                            <br></br>
                            <Row>
                            <Col span={4}>
                                <h3>이메일</h3>
                            </Col>
                            <Col span={10}>
                                <Input 
                                    autoComplete="email"
                                    name="email"
                                    id="email"
                                    value={coachList.email}
                                    onChange={e => {
                                    let value = e.target.value;
                                    setCoachList({
                                        name : coachList.name,
                                        phone: coachList.phone,
                                        username: coachList.username,
                                        password: coachList.password,
                                        email: value,
                                        job: coachList.job,
                                        record: coachList.recrod,
                                        coachnum: coachList.coachnum,
                                    });
                                    }}
                                />
                            </Col>
                            </Row>
                            <br></br>
                            <Row>
                            <Col span={4}>
                                <h3>직무</h3>
                            </Col>
                            <Col span={10}>
                                <Input 
                                    autoComplete="job"
                                    name="job"
                                    id="job"
                                    value={coachList.job}
                                    onChange={e => {
                                    let value = e.target.value;
                                    setCoachList({
                                        name : coachList.name,
                                        phone: coachList.phone,
                                        username: coachList.username,
                                        password: coachList.password,
                                        email: coachList.email,
                                        job: value,
                                        record: coachList.recrod,
                                        coachnum: coachList.coachnum,
                                    });
                                    }}
                                />
                            </Col>
                            </Row>
                            <br></br>
                        </Col>
                        <Col span={12}>
                            <Row>
                            <Col span={6}>
                                <h3>코치 번호</h3>
                            </Col>
                            <Col span={10}>
                                <Input
                                    autoComplete="coachnum"
                                    name="coachnum"
                                    id="coachnum"
                                    value={coachList.coachnum}
                                    onChange={e => {
                                    let value = e.target.value;
                                    setCoachList({
                                        name : coachList.name,
                                        phone: coachList.phone,
                                        username: coachList.username,
                                        password: coachList.password,
                                        email: coachList.email,
                                        job: coachList.job,
                                        record: coachList.recrod,
                                        coachnum: value,
                                    });
                                    }}
                                />
                            </Col>
                            </Row>
                            <br></br>
                            <Row>
                            <Col span={6}>
                                <h3>이력</h3>
                            </Col>
                            <Col span={10}>
                                <TextArea
                                    autoComplete="record"
                                    name="record"
                                    id="record"
                                    value={coachList.record}
                                    onChange={e => {
                                    let value = e.target.value;
                                    setCoachList({
                                        name : coachList.name,
                                        phone: coachList.phone,
                                        username: coachList.username,
                                        password: coachList.password,
                                        email: coachList.email,
                                        job: coachList.job,
                                        record: value,
                                        coachnum: coachList.coachnum,
                                    });
                                    }}
                                />
                            </Col>
                            </Row>
                        </Col>
                        </Row>
                    </>
                </Modal>
                    <Button type="primary" danger onClick={Delete}>삭제</Button>
                </div>
            </Col>
        </Row>
        
        </>);

};

export default CoachInfo;