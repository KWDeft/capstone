import {  Row, Col, DatePicker, List } from "antd";
import React from "react";
import "./Dashboard.css";
import {  PushpinFilled } from "@ant-design/icons";
import Customers from "../Customers/Customers";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const username = user.username;
    
    // 오늘 날짜 
    const today = () => {
      let now = new Date();
      let todayMonth = now.getMonth() +1;
      let todayDate = now.getDate();
      return todayMonth + "/" + todayDate;
    }

    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };

    const data = [
      '9:00  유시영 PT',
      '10:00  김지수 상담예약',
      '11:00  문하늘 PT',
      '12:00  이유민 PT',
     
    ];

    return(
      <>
        <Row>
          <Col
            xs={{
              span: 5,
            }}
            lg={{
              span: 6,
            }}
          >
            <Row>
              <div className="container1">
              <h3><PushpinFilled /> {username} 님, 오늘의 일정({today()})</h3>
              <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              </div>
            </Row>
            <br/>
            
          </Col>
          <Col
            xs={{
              span: 16,
            }}
            lg={{
              span: 17,
              offset: 1,
            }}
          >
            <h3><PushpinFilled /> 회원조회</h3>
            <Customers
            size="small"/>
          </Col>
      </Row>
      </>
      
    );
    

};

export default Dashboard;