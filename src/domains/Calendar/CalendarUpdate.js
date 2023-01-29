import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space, Checkbox, Form, Modal, Button,
  Col, Row, Radio, AutoComplete, Table} from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import {
    Dropdown,
    Menu,
    Typography,
    DatePicker,
    TimePicker, Select
} from "antd";
  import moment from "moment";

import { useLocation, Link, useNavigate } from 'react-router-dom';
import React, {useEffect,useState} from "react";
import "./CalendarUpdate.css";
import { SwapRightOutlined } from '@ant-design/icons';
import client from '../../lib/api/client';



const { Search } = Input;
const onSearch = (value) => console.log(value);



const CalendarUpdate = () => {
  const location = useLocation();
console.log('state', location.state);
const id = location.state.id;


const [stateCust, setstateCust] = useState({});

useEffect(() => {
  getscheduleById(id);
}, []);

const getscheduleById = id => {
  console.log(id);
  client.get(`/api/schedule/admin/id/${id}`)
    .then(d => {
      let schedule = d.data;
      setstateCust({
        id: schedule.id,
        name : schedule.name,
        usernum : schedule.usernum,
        manager : schedule.manager,
        date : schedule.date,
        startHour : schedule.startHour,
        startMinute : schedule.startMinute,
        endHour : schedule.endHour,
        endMinute : schedule.endMinute,
        
      });
    })
    .catch(err => alert(err));
};
  // const location = useLocation();
  // console.log('state', location.state);
  // const name = location.state.name;
  // const usernum = location.state.usernum
  // const manager = location.state.manager;
  // const date = location.state.date;
  // const startHour = location.state.startHour;
  // const startMinute = location.state.startMinute;
  // const endHour = location.state.endHour;
  // const endMinute = location.state.endMinute;

  const deleteInfo = () => {
    Modal.error({
      title: '삭제',
      content: '해당 회원 정보를 삭제하시겠습니까?',
    });
  };

  return(
    <Space direction="vertical">
         

         
        <Row gutter={[400, 16]} style={{"width":"900vh"}}>
         <div className="Col1">
              <Col span>
                <Title level={4}>회원 정보</Title>
                <Space direction="vertical" size={20}>
                  <Row >
                    <Col>
                      <h4>회원번호</h4>
                    </Col>
                    <Col>
                      {/* <h4>{usernum}</h4> */}
                    </Col>
                  </Row>
                  <Row >
                    <Col>
                      <h4>이름</h4>
                    </Col>
                    <Col>
                      {/* <h4>{name}</h4> */}
                    </Col>
                  </Row>
                  <Row >
                    <Col>
                      <h4>장애유형</h4>
                    </Col>
                    <Col>
                      <h4>{}</h4>
                    </Col>
                  </Row>
                  <Row >
                    <Col>
                      <h4>전화번호</h4>
                    </Col>
                    <Col>
                      <h4>{}</h4>
                    </Col>
                  </Row>
                  <Row >
                    <Col>
                      <h4>담당자</h4>
                    </Col>
                    <Col>
                      {/* <h4>{manager}</h4> */}
                    </Col>
                  </Row>
                </Space>
                
                <br></br><br></br>
            <Title level={4}>진행 여부</Title>
            <br></br>
             <Checkbox onChange={onChange2}>수업 완료</Checkbox>
                
              </Col>
           </div>

           <br></br>
          
          <div className="Col2">
          <Col>
            <Title level={4}>수업 일시</Title>
                <Row >
                  <h4>날짜</h4>
                </Row>
                <Space direction="vertical" size={20}>
                  <DatePicker
                    onChange={onChange2}                        
                    />
                </Space>
                <div>
                  {" "}
                  <br></br>{" "}
                </div>
                {/* <TimePicker.RangePicker /> */}

                <Row >
                <Select
                  showSearch
                  placeholder="00시"
                  optionFilterProp="starthour"
                  onChange={onChange}
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
                  showSearch
                  placeholder="00분"
                  optionFilterProp="startminute"
                  onChange={onChange}
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
                  showSearch
                  placeholder="00시"
                  optionFilterProp="endhour"
                  onChange={onChange}
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
                  showSearch
                  placeholder="00분"
                  optionFilterProp="endminute"
                  onChange={onChange}
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
                </Row>
                <br></br><br></br><br></br>
            <Title level={4}>기타 메모</Title>
            <TextArea  rows={10} placeholder="메모를 작성하세요." maxLength={100} 
            showCount/>
        

            
          </Col> 
        </div>
          </Row>
           
           
         <br></br><br></br>
         <div className="btns" style={{float:"left"}}>
             <Button type="primary" href="/customers/infoedit">수정</Button>
             <Button type="primary" danger onClick={deleteInfo}>삭제</Button>
         </div>
       </Space>

  );
};


const onChange2 = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

;
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};



const dateNow = new Date();
const today = dateNow.toISOString().slice(0, 10);

const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";
const weekFormat = "MM-DD";
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${moment(value).startOf("week").format(weekFormat)} ~ ${moment(value)
    .endOf("week")
    .format(weekFormat)}`;
const { TextArea } = Input;
const { Title } = Typography;


export default CalendarUpdate;
