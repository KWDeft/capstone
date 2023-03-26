import {  Row, Col, Button, Typography, Input, Modal } from "antd";
import React, {useState, useEffect} from "react";
import './NewJournal.css';
import {useLocation} from 'react-router-dom';
import client from '../../../lib/api/client'
import {useNavigate} from 'react-router';

const { Text} = Typography;
const { TextArea } = Input;
const CJournalEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const usernum = location.state.usernum;
    const id = location.state.id;
    console.log(id);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [counselList, setCounselList] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        getData();
      }, []);

      const showModal = () => {
        setIsModalOpen(true);
      };
      const editHandler = (e) => {
        client
            .patch(`/api/consumer/note/counsel/${id}`, counselList)
            .then((res) =>
                console.log(res)
            );
            alert("수정 완료");
            window.location.reload();
       };    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    

      const getData = async () => {
          await client
          .get(`/api/consumer/note/counsel/${id}`)
          .then( d =>{
              let counsel = d.data;
              setCounselList({
                purpose: counsel.purpose,
                manager: counsel.manager,
                method: counsel.method,
                reception: counsel.reception,
                detail: counsel.detail,
                date_counsel: counsel.date_counsel,
                ndate_counsel: counsel.ndate_counsel,
              })
              console.log(d);
            }
          );
        };

   const DeleteCounsel = (e) => {
    Modal.confirm({
        title: "정말로 삭제하시겠습니까?",
        okText: "Yes",
        okType: "danger",
        onOk: () => {
          client.delete(`/api/consumer/note/counsel/${id}`).then((res) => 
          console.log(res)
          );
          alert("삭제완료");
          navigate('/home/journal', 
          {
            state: {
                usernum: usernum,
            }
        });
        },
      });
   };

   console.log(counselList);

    return(
                    <>
                    <h2>상담 일지</h2>
                    <Row>
                        <Col span={2}>
                            <Text>운동목적</Text>
                        </Col>
                        <Col span={2}>
                            <Text strong>{counselList.purpose}</Text>
                        </Col>
                        <Col span={2}>
                            <Text>상담방법</Text>
                        </Col>
                        <Col span={3}>
                            <Text strong>{counselList.method}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2}>
                            <Text>상담날짜</Text>
                        </Col>
                        <Col span={2}>
                            <Text strong>{counselList.date_counsel}</Text>
                        </Col>
                        <Col span={2}>
                            <Text>다음상담</Text>
                        </Col>
                        <Col span={2}>
                            <Text strong>{counselList.ndate_counsel}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2}>
                            <Text>접수상태</Text>
                        </Col>
                        <Col span={4}>
                            <Text strong>{counselList.reception}</Text>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col span={2}>
                            <Text>상담 내용</Text>
                        </Col>
                        <Col span={11}>
                        <TextArea
                            value = {counselList.detail}
                            style={{width :550}}
                            autoSize={{
                            minRows: 4,
                            maxRows: 6,
                            }}
                        >
                        </TextArea>
                        </Col>
                    </Row>
                    <br></br>
                    <div className="btn">
                        <Button type="primary" onClick={showModal}>수정</Button>
                        <Modal
                            title="상담일지 수정"
                            open={isModalOpen}
                            onOk={editHandler}
                            onCancel={handleCancel}
                            width={1000}
                        >
                            <>
                            <Row>
                            <Col span={2}>
                                <Text>운동목적</Text>
                            </Col>
                            <Col span={3}>
                            <Input
                                    autoComplete="purpose"
                                    name="purpose"
                                    id="purpose"
                                    value={counselList.purpose}
                                    onChange={e => {
                                    let value = e.target.value;
                                    setCounselList({
                                        purpose: value,
                                        method: counselList.method,
                                        reception : counselList.reception,
                                        date_counsel: counselList.date_counsel,
                                        ndate_counsel: counselList.ndate_counsel,
                                        detail: counselList.detail,
                                    });
                                    }}
                                />
                            </Col>
                            <Col span={2}>
                            <Text>상담방법</Text>
                                </Col>
                                <Col span={3}>
                                <Input
                                    autoComplete="method"
                                    name="method"
                                    id="method"
                                    value={counselList.method}
                                    onChange={e => {
                                    let value = e.target.value;
                                    setCounselList({
                                        purpose: counselList.purpose,
                                        method: value,
                                        reception : counselList.reception,
                                        date_counsel: counselList.date_counsel,
                                        ndate_counsel: counselList.ndate_counsel,
                                        detail: counselList.detail,
                                    });
                                    }}
                                />
                                </Col>
                            </Row>
                            <Row>
                        <Col span={2}>
                            <Text>상담날짜</Text>
                        </Col>
                        <Col span={2}>
                            <Input
                                        autoComplete="date_counsel"
                                        name="date_counsel"
                                        id="date_counsel"
                                        value={counselList.date_counsel}
                                        onChange={e => {
                                        let value = e.target.value;
                                        setCounselList({
                                            purpose: counselList.purpose,
                                            date_counsel: value,
                                            method: counselList.method,
                                            reception : counselList.reception,
                                            ndate_counsel: counselList.ndate_counsel,
                                            detail: counselList.detail,
                                        });
                                        }}
                                    />
                        </Col>
                        <Col span={2}>
                            <Text>다음상담</Text>
                        </Col>
                        <Col span={2}>
                                <Input
                                                autoComplete="ndate_counsel"
                                                name="ndate_counsel"
                                                id="ndate_counsel"
                                                value={counselList.ndate_counsel}
                                                onChange={e => {
                                                let value = e.target.value;
                                                setCounselList({
                                                    purpose: counselList.purpose,
                                                    date_counsel: counselList.date_counsel,
                                                    ndate_counsel: value,
                                                    detail: counselList.detail,
                                                    method: counselList.method,
                                                    reception: counselList.reception,
                                                });
                                                }}
                                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2}>
                            <Text>접수상태</Text>
                        </Col>
                        <Col span={4}>
                        <Input
                                        autoComplete="reception"
                                        name="reception"
                                        id="reception"
                                        value={counselList.reception}
                                        onChange={e => {
                                        let value = e.target.value;
                                        setCounselList({
                                            purpose: counselList.purpose,
                                            date_counsel: counselList.date_counsel,
                                            ndate_counsel: counselList.ndate_counsel,
                                            detail: counselList.detail,
                                            reception: value,
                                            method: counselList.method,
                                        });
                                        }}
                                    />
                        </Col>
                    </Row>
                        <br></br>
                        <Row>
                            <Col span={2}>
                                <Text>수업 내용</Text>
                            </Col>
                            <Col span={11}>
                            <TextArea
                                style={{width :550}}
                                autoSize={{
                                minRows: 4,
                                maxRows: 6,
                                }}
                                autoComplete="detail"
                                        name="detail"
                                        id="detail"
                                        value={counselList.detail}
                                        onChange={e => {
                                        let value = e.target.value;
                                        setCounselList({
                                            purpose: counselList.purpose,
                                            date_counsel: counselList.date_counsel,
                                            ndate_counsel: counselList.ndate_counsel,
                                            detail: value,
                                            reception: counselList.reception,
                                            method: counselList.method,
                                        });
                                        }}
                            />
                            </Col>
                        </Row>
                        <br></br>
                        </>
                        </Modal>
                    <Button onClick={DeleteCounsel} type="primary" danger>삭제</Button>
                    </div>
        </>
    )

};

export default CJournalEdit;