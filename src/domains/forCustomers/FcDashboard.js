import {  Row, Col, Button, Table, Badge, Calendar, List } from "antd";
import React from "react";
import {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import client from '../../lib/api/client'
import {  PushpinFilled } from "@ant-design/icons";




const FcDashboard = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    console.log("출력", user);
    const usernum = user.username;
    // const name = user.name;
    const [journalList, setJournalList] = useState([]);
    const [scheduleList, setScheduleList] = useState([]);
    const [getcoachname, setCoachname] = useState([]);


    useEffect(() => {
      getClassData();
      getConsultData();
      getScheduleData();
      getCoachNamadata();
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
    
    const getScheduleData = async () => {
      await client.get(`/api/schedule/consumer/${usernum}`)
      .then (
        res => {
          setScheduleList(
            res.data.map(row => ({
                  id : row._id,
                  title: row.name,
                  usernum: row.usernum,
                  manager: row.manager,
                  date : row.date,
                  startHour : row.startHour,
                  startMinute : row.startMinute,
                  memo : row.memo,
            }))
          );
        }
      );
    };

    console.log(usernum,"의 모든 일정", scheduleList);

    // const coachNum = scheduleList[0].manager;
    // console.log(coachNum);

    const getCoachNamadata = async () => {
      // await client.get(`/api/member/coach/coachnum/${coachNum}`)
      // .then (
      //   res => {
      //     setCoachname(
      //       res.data.map(row => ({
      //             coachname : row.name
      //       }))
      //     );
      //   }
      // );

    }
     
    
    console.log("코치 이름 : ", getcoachname);

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



    // 오늘 날짜 

      let now = new Date();
      let todayyear = now.getFullYear();
      let todayMonth = now.getMonth() +1;
      let todayDate = now.getDate();
      let format =  todayyear+"-"+(("00"+todayMonth.toString()).slice(-2))+"-"+(("00"+todayDate.toString()).slice(-2));


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


       

    //       const data2 = [
    //   '9:00  유시영 PT',
    //   '10:00  김지수 상담예약',
    //   '11:00  문하늘 PT',
    //   '12:00  이유민 PT',
     
    // ];
    

    let scheduledata = [];
    for (let i =0; i < scheduleList.length;i++){
      let sliceDate = scheduleList[i].date.slice(0,10);
      if (sliceDate == format){
        let time = scheduleList[i].startHour.concat(scheduleList[i].startMinute);
        scheduledata.push(time);
      }
      
    }

    // console.log("회원이름", scheduleList[0].title);
    return(
      <>
      <Row gutter={20}>
        <Col span>
           <div className="회원 이름">
              <h2>회원님, 안녕하세요!</h2>
            </div>
            <Row>
              <Col>
              <div className="container1" style={{height:"100%", width:"45vh"}}>
                <h3><PushpinFilled /> 오늘의 일정  </h3>
                <List
                  size="small"
                  bordered
                  dataSource={scheduledata}
                  renderItem={
                    (item) => <List.Item >{item}</List.Item>}
                />
              </div>
            </Col>
            </Row>
        </Col>

        <Col style={{"margin-top" : "63px", width:"800px"}} >
            <Col>
            <Table
               columns={columns}
               dataSource={journalList}
            />
            </Col>
 
        </Col>

      </Row>
        {/*  */}
            
    </>
      
    );

};

export default FcDashboard;