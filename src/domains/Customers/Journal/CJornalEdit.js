import {  Row, Col, Button, Typography, Input } from "antd";
import React, {useState, useEffect} from "react";
import './NewJournal.css';
import {useLocation} from 'react-router-dom';
import client from '../../../lib/api/client'
import {useNavigate} from 'react-router';

const { Text} = Typography;
const { TextArea } = Input;
const CJournalEdit = () => {
    const location = useLocation();
    const usernum = location.state.usernum;
    const id = location.state.id;
    console.log(id);
    const [counselList, setCounselList] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        getData();
      }, []);

      const getData = async () => {
          await client
          .get(`/api/consumer/note/counsel/${id}`)
          .then( res =>{
              console.log(res);
              setCounselList(
                res.data.map(row => ({
                    purpose: row.purpose,
                    manager: row.manager,
                    method: row.method,
                    reception: row.reception,
                    detail: row.detail,
                    date_counsel: row.date_counsel,
                    ndate_counsel: row.ndate_counsel,
                    //attachment_counsel: row.attachment_counsel
                }))
              );
            }
          );
        };

   console.log(counselList);

    return(
        <>
               <br></br>
               {counselList.map((item,index) => (
                    <>
                    <h2>상담 일지</h2>
                    <Row>
                        <Col span={2}>
                            <Text>상담 이름</Text>
                        </Col>
                        <Col span={3}>
                            <Text strong>입문자PT</Text>
                        </Col>
                        <Col span={2}>
                            <Text>운동목적</Text>
                        </Col>
                        <Col span={3}>
                            <Text strong>{item.purpose}</Text>
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
                    <div className="btn">
                        <Button type="primary" >수정</Button>
                        <Button type="primary" danger>삭제</Button>
                    </div>

                    
                    //수정
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
                <Input size="small" style={{width :550}} placeholder="1회차 수업 | 라운드 숄더 완화 스트레칭" />
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col span={2}>
                <Text>수업 내용</Text>
            </Col>
            <Col span={11}>
            <TextArea
                value={value}
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
        <div className="btn">
            <Button type="primary" danger>취소</Button>
            <Button type="primary" >완료</Button>
            
        </div>
        </>
               ))}
               
        </>
    )

};

export default CJournalEdit;