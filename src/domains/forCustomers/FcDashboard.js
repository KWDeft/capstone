import {  Row, Col, Button, Table, Badge, Calendar, List } from "antd";
import React from "react";
import {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import client from '../../lib/api/client'

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
    const { user } = useSelector(({ user }) => ({ user: user.user }));

    const usernum = user.username;

    const [journalList, setJournalList] = useState([]);

    useEffect(() => {
      getClassData();
      getConsultData();
    }, []);

    const getClassData = async () => {
      await client
      .get(`/api/consumer/note/class/user/${usernum}`)
      .then(
          res => {
          setJournalList(
              res.data.map(row => ({
                  subject: row.subject,
                  class: row.classname,
                  date: row.date_class,
                  id : row._id,
              }))
          );
          console.log(res);
        }
      );
    };

    const getConsultData = async () => {
      await client
      .get(`/api/consumer/note/counsel/user/${usernum}`)
      .then(
          res => {
          setJournalList(
              res.data.map(row => ({
                  class: row.detail,
                  date: row.date_counsel,
                  subject: row.method,
                  id: row._id,
              }))
          );
          console.log(res);
        }
      );
    };
    
    const columns = [
        {
          title: '날짜',
          dataIndex: 'date',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: '설명',
          dataIndex: 'class',
        },
        {
          title: '제목',
          dataIndex: 'subject',
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
                        <h4>회원번호</h4>
                        <h2>{usernum}</h2>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Table
                        columns={columns}
                        dataSource={journalList}
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