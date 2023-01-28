import {  Row, Col, Button, Table, Badge, Calendar } from "antd";
import React from "react";
import './FcDashboard.css';

const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 7:
        listData = [
          {
            type: "warning",
            content: "1시 홍길동"
          },
        ];
        break;
        case 10:
            listData = [
                {
                type: "warning",
                content: "3시 홍길동"
                },
            ];
            break;
      case 14:
        listData = [
          {
            type: "warning",
            content: "1시 홍길동"
          },
        ];
        break;
      case 21:
        listData = [
          {
            type: "warning",
            content: "1시 홍길동"
          },
        ];
        break;
      default:
    }
    return listData || [];
  };

const FcDashboard = () => {
    const columns = [
        {
          title: '날짜',
          dataIndex: 'date',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: '수업',
          dataIndex: 'class',
        },
        {
          title: '제목',
          dataIndex: 'title',
        },
        ];
        const data = [
          {
            key: '3',
            date: '2023-1-11 23:12:00',
            class: '입문자PT',
            title: '2회차 수업', 
          },
          {
            key: '2',
            date: '2023-1-10 23:12:00',
            class: '입문자PT',
            title: '1회차 수업',  
          },
          {
            key: '1',
            date: '2023-1-8 23:12:00',
            class: '입문자PT',
            title: '0회차 상담일지',  
          },
        ];

        const dateCellRender = (value) => {
            const listData = getListData(value);
            return (
              <ul className="events">
                {listData.map((item) => (
                  <li key={item.content}>
                    <Badge status={item.type} text={item.content} />
                  </li>
                ))}
              </ul>
            );
          };

    return(
      <>
        <Row gutter={12}>
            <Col span={9}>
                <Row>
                    <Col span={18}>
                        <div className="회원 이름">
                        <h2>곰도리 님, 안녕하세요!</h2>
                    </div>
                    </Col>
                    <Col span={6}>
                        <h4>남은 수업 횟수</h4>
                        <h2>9회</h2>
                        <Button type="primary">연장 결제</Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Table
                        columns={columns}
                        dataSource={data}
                        className="table1"
                    />
                </Row>
            </Col>
            <Col span={15}>
                <Calendar
                    dateCellRender={dateCellRender}
                />
            </Col>
        </Row>
            
      </>
      
    );

};

export default FcDashboard;