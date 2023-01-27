import { Col, Row, Input, Typography, Tag, Space, Table, Button} from "antd";

import React, {useState, useEffect} from "react";
import "./PaymentInfo.css";
import {  PushpinFilled } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import client from '../../lib/api/client';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const { Text } = Typography;


const columns = [
    {
      title: '결제 일시',
      dataIndex: 'pay_date',
      key: 'pay_date',
      sorter: (a, b) => a.age - b.age,
    },
    {
        title: '상품 이름',
        dataIndex: 'product',
        key: 'product',
        render: (text) => <a>{text}</a>,
      },
    {
      title: '결제 금액',
      dataIndex: 'pay_amount',
      key: 'pay_amount',
    },
    {
      title: '결제 정보',
      dataIndex: 'pay_method',
      key: 'pay_method',
    },    
  ];
  const data = [
    {
      key: '1',
      date: '2023.01.21 12:50:12',
      commodity: "A.P.T 5회",
      payment: 250000,
      tags: ['실비'],
    },
    {
      key: '2',
      date: '2023.01.18 10:50:12',
      commodity: "A.P.T 5회",
      payment: 250000,
      tags: ['실비', '바우처'],
    },
    {
      key: '3',
      date: '2022.12.21 16:56:12',
      commodity: "A.P.T 5회",
      payment: 250000,
      tags: ['바우처'],
    },
    {
        key: '4',
        date: '2022.11.15 12:50:12',
        commodity: "A.P.T 2회",
        payment: 100000,
        tags: ['실비'],
      },
  ];


const PaymentInfo = () => {
    const location = useLocation();
    console.log('state', location.state);
    const userId = location.state.id;
    const usernum = location.state.usernum;
    const name = location.state.name;
    const sex = location.state.sex;
    const phone = location.state.phone;
    const birthday = location.state.birthday;
    const address = location.state.address;
    const obstacle_type = location.state.obstacle_type;
    const inflow = location.state.inflow;
    const user_purpose = location.state.user_purpose;

    const [state, setstate] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      await client.get(`/api/consumer/payment/user/${usernum}`).then(
        res => {
          setloading(false);
          setstate(
            res.data.map(row => ({
              pay_amount: row.pay_amount,
              usernum: row.usernum,
              product: row.product,
              pay_method: row.pay_method,
              pay_date: row.pay_date,
              id: row._id
            }))
          );
        }
      );
    };
  
    return(
      <>
        <Row>
            <Search placeholder="조회할 회원의 이름을 입력하세요" onSearch={onSearch} style={{ width: 300 }} />
        </Row>
        <br></br>
        <Row>
            <div className="con1">
                <Text type="secondary">회원 정보</Text>
                <Row>
                    <Col span={6}>
                        <Row>
                            <h2>{name}</h2>
                            <Tag color="purple" style={{ height:25, width:25}}>{sex}</Tag>
                        </Row>
                    </Col>
                    <Col span={6} >
                        <h5>전화번호</h5>
                        <h5>{phone}</h5>
                        <br></br>
                        <h5>장애유형</h5>
                        <h5>{obstacle_type}</h5>
                    </Col>
                    <Col span={6}>
                        <h5>생년월일</h5>
                        <h5>{birthday}</h5>
                        <br></br>
                        <h5>유입경로</h5>
                        <h5>{inflow}</h5>
                    </Col>
                    <Col span={6}>
                        <h5>주소</h5>
                        <h5>{address}</h5>
                        <br></br>
                        <h5>운동목적</h5>
                        <h5>{user_purpose}</h5>
                    </Col>
                </Row>
            </div>
        </Row>
        <br></br>
        <Row>
            <div className="con2">
                <Text type="secondary">결제 정보</Text>
                <Button type="link">결제정보 추가</Button>
                <Table columns={columns} dataSource={state} />
            </div>

        </Row>
      </>
      
    );
    

};

export default PaymentInfo;