import {  Row, Col, DatePicker, List } from "antd";
import React, {useEffect} from "react";
import "./Dashboard.css";
import {  PushpinFilled } from "@ant-design/icons";
import Customers from "../Customers/Customers";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const auth_ = localStorage.getItem('auth')

// console.log("이건진짜",auth.role);
  if (!user) {
    return <div>로그인 하지 않으면 볼 수 없는 페이지입니다.</div>;
  }
  if(auth_!='"admin"'){
    return <div>관리자만 볼 수 있는 페이지입니다.</div>;
}
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
          <Col xs={{ span: 24 }} sm={{ span:24}} md={{ span:24 }} lg={{ span: 24 }} xl={{span:5}}>
            <body style={{height:"100vh", width:"36vh"}}>
            <Row>
              <div className="container1" style={{width:"36vh"}}>
              <h3><PushpinFilled /> {username} 님, 오늘의 일정({today()})</h3>
              <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              </div>
            </Row>
            </body>
            <br/>
            
          </Col>
          <Col
            xs={{ span: 24 }} sm={{ span:24 }} md={{ span:24 }} lg={{ span: 20, }} xl={{ span: 18, offset:1}}
          >
            <div className="read">
              <h3><PushpinFilled /> 회원조회</h3>
                <Customers/>                
            </div>
          </Col>
      </Row>
      </>
      
    );
    

};

export default Dashboard;