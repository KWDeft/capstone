
import { Badge, Calendar, Button, Modal,Table, Input, Divider,Select  } from "antd";

import React, { useState, useEffect } from "react";
// import "./CalendarMain.css";
import {useNavigate} from 'react-router';
import { PlusOutlined } from "@ant-design/icons";
import NewCalendar from "./NewCalendar.js";
import client from '../../lib/api/client';
import { startLoading } from "../../modules/loading";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { SwapRightOutlined,DownOutlined  } from '@ant-design/icons';

import { EdgesensorHighOutlined } from "../../../node_modules/@mui/icons-material/index";
import { memo } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Space, Checkbox, Form, } from "antd";
import {
    Dropdown,
    Menu,
    Typography,
    DatePicker,
    TimePicker,
    Col, Row, 
    
} from "antd";
import moment from "moment";
import CustomerSearch from "../Customers/CustomerCalendar";



  const CalendarMain = () => {
    
    const [size, setSize] = useState("large");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, SetId] = useState("");
    const [usernum, SetUsernum] = useState("");
    const [date, SetDate] = useState("");
    const [startHour, SetStartHour] = useState("");
    const [startMinute, SetStartMinute] = useState("");
    const [endHour, SetEndHour] = useState("");
    const [endMinute, SetEndMinute] = useState("");
    const [memo, SetMemo] = useState("");
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10);
    const navigate = useNavigate();

    const {TextArea} = Input;
  
    const [managerData, SetManagerData] = useState("");

    const [state, setstate] = useState([]);
    const [managerfilter, setmanagerfilter] = useState([]);
    const [loading, setloading] = useState(true);

    const manager = "박코치";
    useEffect(() => {
      getData();
      getManagerData();
      getManagerScheduleData(manager);
    }, []);
    
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
  
  
    const usernumHandler = (e) => {
      console.log("회원번호 : ", e);   
      SetUsernum(e);
    };
    
    const idHandler = (e) => {
      console.log("id값 : ", e);   
      SetId(e);
    };


    
    const dateHandler = (e) => {
      console.log("날짜 : ", e.$d);       
        SetDate(e);
    }
    
    let managerName = "";
    const managerHandler = (e) => {
      console.log("코치 : ", e);   
      managerName = e;  
        SetDate(e);
    }
    console.log("매니저 이름", managerName);

    const startHourHandler = (e) =>{
      console.log("시작시간 : ", e);
        SetStartHour(e);
      };
    
    const startMinuteHandler = (e) =>{
      console.log("시작분 : ", e);
        SetStartMinute(e);
      };
    
    const endHourHandler = (e) =>{
      console.log("종료시간 : ", e);
        SetEndHour(e);
      };
    
      const endMinuteHandler = (e) =>{
        console.log("종료분 : ", e);     
        SetEndMinute(e);
      };

      const memoHandler = (e) =>{
        console.log("메모 : ", e.target.value);
        SetMemo(e.target.value);
      };
  

  
    
    const getData = async () => {
      await client.get("/api/schedule/admin/list").then(
        res => {
          setloading(false);
          setstate(
            res.data.map(row => ({
              id : row._id,
              title: row.name,
              usernum: row.usernum,
              manager: row.manager,
              date : row.date,
              startHour : row.startHour,
              startMinute : row.startMinute,
              endHour : row.endHour,
              endMinute : row.endMinute,
              memo : row.memo,

            }))
          );

        }
      );
      };
  
      const getManagerData = async () =>{
        await client.get("/api/member/coach").then(
          res => {
            setloading(false);
            SetManagerData(
              res.data.map( row => ({
                manager: row.coachnum,
                managername : row.name
              }))
            );
          }
        )
      };


      const getManagerScheduleData = manager  =>{
        console.log(manager);
        client.get(`/api/schedule/admin/manager/${manager}`).then(
          res => {
            setloading(false);
            setmanagerfilter(
              res.data.map( row => ({
                id : row._id,
                title: row.name,
                usernum: row.usernum,
                manager: row.manager,
                date : row.date,
                startHour : row.startHour,
                startMinute : row.startMinute,
                endHour : row.endHour,
                endMinute : row.endMinute,
                memo : row.memo,
                managername : row.name
              }))
            );
          }
        )
      };
      console.log("코치의 일정", managerfilter);

      console.log('코치들 ', managerData);
      let managerList = [];
      for (let i=0; i<managerData.length; i++){
        let op = {};
        op.value = managerData[i].managername;
        op.label = managerData[i].managername;
        managerList.push(op);
      }
      console.log("managerlist임", managerList);


      

      const submitHandler = (e) => {
        e.preventDefault();
      
        let body = {
          usernum: usernum,
          date: date,
          startHour: startHour,
          startMinute: startMinute,
          endHour: endHour,
          endMinute: endMinute,
          memo: memo,
        };
        console.log(body);
        client
          .post("/api/schedule/admin", body)
          .then((res) => 
             console.log(res)
             );
        alert("일정 추가 성공");
        window.location.reload();

        };

    console.log("확인",state);
    console.log("체크",state.manager);



    

    return (
      <div>
        <>
      <h1>일정</h1>
      <div className="calDiv1">
        <Button type="primary" onClick={showModal}>
          <PlusOutlined /> 일정 추가
        </Button>
        <Modal
            title="일정 추가"
            open={isModalOpen}
            onOk={submitHandler}
            onCancel={handleCancel}
            width={1000}
          >
           <Row gutter={[100, 16]}>

<Col>
<Title level={4}>회원 검색</Title>
<CustomerSearch
  name="usernum" />
</Col>

<Col>
  <Title level={4}>수업 일시</Title>
    <Space direction="vertical" size={20}>
    <DatePicker 
      name="date"
      onChange={dateHandler}                        
      />
    </Space>
    <div>
      {" "}
      <br></br>{" "}
    </div>
    {/* <TimePicker.RangePicker /> */}
    <Select
      name="startHour"
      showSearch
      placeholder="00시"
      optionFilterProp="starthour"
      onChange={startHourHandler}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={[
        {
          value: '1시',
          label: '1시',
        },
        {
          value: '2시',
          label: '2시',
        },
        {
          value: '3시',
          label: '3시',
        },
        {
          value: '4시',
          label: '4시',
        },
        {
          value: '5시',
          label: '5시',
        },
        {
          value: '6시',
          label: '6시',
        },
        {
          value: '7시',
          label: '7시',
        },
        {
          value: '8시',
          label: '8시',
        },
        {
          value: '9시',
          label: '9시',
        },
        {
          value: '10시',
          label: '10시',
        },
        {
          value: '11시',
          label: '11시',
        },
        {
          value: '12시',
          label: '12시',
        },
        {
          value: '13시',
          label: '13시',
        },
        {
          value: '14시',
          label: '14시',
        },
        {
          value: '15시',
          label: '15시',
        },
        {
          value: '16시',
          label: '16시',
        },
        {
          value: '17시',
          label: '17시',
        },
        {
          value: '18시',
          label: '18시',
        },
        {
          value: '19시',
          label: '19시',
        },
        {
          value: '20시',
          label: '20시',
        },
        {
          value: '21시',
          label: '21시',
        },
        {
          value: '22시',
          label: '22시',
        },
        {
          value: '23시',
          label: '23시',
        },
        {
          value: '24시',
          label: '24시',
        },
      ]}
    />
    <Select
      name="startMinute"
      showSearch
      placeholder="00분"
      optionFilterProp="startminute"
      onChange={startMinuteHandler}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={[
        {
          value: '00분',
          label: '00분',
        },
        {
          value: '10분',
          label: '10분',
        },
        {
          value: '20분',
          label: '20분',
        },
        {
          value: '30분',
          label: '30분',
        },
        {
          value: '40분',
          label: '40분',
        },
        {
          value: '50분',
          label: '50분',
        },
      ]}
    />
    <SwapRightOutlined />

    <Select
      name="endHour"
      showSearch
      placeholder="00시"
      optionFilterProp="endhour"
      onChange={endHourHandler}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={[
        {
          value: '1시',
          label: '1시',
        },
        {
          value: '2시',
          label: '2시',
        },
        {
          value: '3시',
          label: '3시',
        },
        {
          value: '4시',
          label: '4시',
        },
        {
          value: '5시',
          label: '5시',
        },
        {
          value: '6시',
          label: '6시',
        },
        {
          value: '7시',
          label: '7시',
        },
        {
          value: '8시',
          label: '8시',
        },
        {
          value: '9시',
          label: '9시',
        },
        {
          value: '10시',
          label: '10시',
        },
        {
          value: '11시',
          label: '11시',
        },
        {
          value: '12시',
          label: '12시',
        },
        {
          value: '13시',
          label: '13시',
        },
        {
          value: '14시',
          label: '14시',
        },
        {
          value: '15시',
          label: '15시',
        },
        {
          value: '16시',
          label: '16시',
        },
        {
          value: '17시',
          label: '17시',
        },
        {
          value: '18시',
          label: '18시',
        },
        {
          value: '19시',
          label: '19시',
        },
        {
          value: '20시',
          label: '20시',
        },
        {
          value: '21시',
          label: '21시',
        },
        {
          value: '22시',
          label: '22시',
        },
        {
          value: '23시',
          label: '23시',
        },
        {
          value: '24시',
          label: '24시',
        },
      ]}
    />
    <Select
      name="endMinute"
      onChange={endMinuteHandler}
      showSearch
      placeholder="00분"
      optionFilterProp="endminute"
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={[
        {
          value: '00분',
          label: '00분',
        },
        {
          value: '10분',
          label: '10분',
        },
        {
          value: '20분',
          label: '20분',
        },
        {
          value: '30분',
          label: '30분',
        },
        {
          value: '40분',
          label: '40분',
        },
        {
          value: '50분',
          label: '50분',
        },
      ]}
    />
    </Col>
  <Col>
  <Title level={4}>기타 메모</Title>
  <TextArea  rows={10} placeholder="메모를 작성하세요."
  maxLength={100} 
  value={memo}
  name="memo"
  onChange={memoHandler}
showCount/>             
</Col>
</Row>
          </Modal>

      </div>
    </>
        <br />
        
        {loading ? (
          "Loading"
        ) : (
          <>
           <Select
            name="manager"
            showSearch
            placeholder="강사명"
            optionFilterProp="manager"
            onChange={managerHandler}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={managerList}
            />
    
          <FullCalendar

          
            plugins={[ dayGridPlugin ]}
            initialView = 'dayGridMonth'
            events={state}
            dayMaxEvents = {true}
            moreLinkClick = "popover"
            contentHeight = "800px"
            eventDisplay = 'list-item'
            eventBackgroundColor = "#1864ab"
            locale = "ko"
            
            eventClick={
              
             (record, index) => {
                const id = record.id;
                const name = record.name;
                const usernum = record.usernum
                const manager = record.manager;
                const date = record.date;
                const startHour = record.startHour;
                const startMinute = record.startMinute;
                const endHour = record.endHour;
                const endMinute = record.endMinute;
                const memo = record.memo;

                
                
                navigate('/calendar/update', {
                  state: {
                    id : id,
                    usernum: usernum,
                    name: name,
                    date: date,
                    manager: manager,
                    startHour : startHour,
                    startMinute : startMinute,
                    endHour : endHour,
                    endMinute : endMinute,
                    memo : memo,
                  },
                  
                });
                
                
              }
              
            }
            
         />
          </>
        )}
        
      </div>
      
    );
  };

  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  
  
  const dateFormat = "YYYY-MM-DD";
  const { RangePicker } = DatePicker;
  
  const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
  
  const { TextArea } = Input;
  const { Title } = Typography;
  
  
  dayjs.extend(customParseFormat);
  const onChange = (time) => {
    console.log("Time : ", time);
  };
  const onChange2 = (date) => {
    console.log('Date: ', date);
  };
  const onSearch = (value) => console.log(value);

  export default CalendarMain;