// import React from "react";
// import { Col, Row, Radio, Select, AutoComplete, Input, Table } from "antd";
// import {
//   Dropdown,
//   Menu,
//   Space,
//   Typography,
//   DatePicker,
//   TimePicker
// } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import { UserOutlined } from "@ant-design/icons";
// import moment from "moment";
// import "./NewCalendar.css";
// import CustomerSearch from "../Customers/CustomerSearch.js";
// import { SwapRightOutlined } from '@ant-design/icons';

// import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat'

// const NewCalendar = () => (
//   <div className="Div">
//     <Row gutter={[100, 16]}>

// <Col>
// <Title level={4}>회원 검색</Title>
// <CustomerSearch />
// </Col>

// <Col>
//   <Title level={4}>수업 일시</Title>
//     <Row >
//       <h4>날짜</h4>
//     </Row>
//     <Space direction="vertical" size={20}>
//     <DatePicker 
//       onChange={onChange2}                        
//       />
//     </Space>
//     <div>
//       {" "}
//       <br></br>{" "}
//     </div>
//     {/* <TimePicker.RangePicker /> */}
//     <Select
//       name="startHour"
//       showSearch
//       placeholder="00시"
//       optionFilterProp="starthour"
//       value={startHour}
//       onChange={startHour}
//       onSearch={onSearch}
//       filterOption={(input, option) =>
//         (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//       }
//       options={[
//         {
//           value: '1시',
//           label: '1시',
//         },
//         {
//           value: '2시',
//           label: '2시',
//         },
//         {
//           value: '3시',
//           label: '3시',
//         },
//         {
//           value: '4시',
//           label: '4시',
//         },
//         {
//           value: '5시',
//           label: '5시',
//         },
//         {
//           value: '6시',
//           label: '6시',
//         },
//         {
//           value: '7시',
//           label: '7시',
//         },
//         {
//           value: '8시',
//           label: '8시',
//         },
//         {
//           value: '9시',
//           label: '9시',
//         },
//         {
//           value: '10시',
//           label: '10시',
//         },
//         {
//           value: '11시',
//           label: '11시',
//         },
//         {
//           value: '12시',
//           label: '12시',
//         },
//         {
//           value: '13시',
//           label: '13시',
//         },
//         {
//           value: '14시',
//           label: '14시',
//         },
//         {
//           value: '15시',
//           label: '15시',
//         },
//         {
//           value: '16시',
//           label: '16시',
//         },
//         {
//           value: '17시',
//           label: '17시',
//         },
//         {
//           value: '18시',
//           label: '18시',
//         },
//         {
//           value: '19시',
//           label: '19시',
//         },
//         {
//           value: '20시',
//           label: '20시',
//         },
//         {
//           value: '21시',
//           label: '21시',
//         },
//         {
//           value: '22시',
//           label: '22시',
//         },
//         {
//           value: '23시',
//           label: '23시',
//         },
//         {
//           value: '24시',
//           label: '24시',
//         },
//       ]}
//     />
//     <Select
//       name="startMinute"
//       showSearch
//       placeholder="00분"
//       optionFilterProp="startminute"
//       value={startMinute}
//       onChange={startMinuteHandler}
//       onSearch={onSearch}
//       filterOption={(input, option) =>
//         (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//       }
//       options={[
//         {
//           value: '00분',
//           label: '00분',
//         },
//         {
//           value: '10분',
//           label: '10분',
//         },
//         {
//           value: '20분',
//           label: '20분',
//         },
//         {
//           value: '30분',
//           label: '30분',
//         },
//         {
//           value: '40분',
//           label: '40분',
//         },
//         {
//           value: '50분',
//           label: '50분',
//         },
//       ]}
//     />
//     <SwapRightOutlined />

//     <Select
//       name="endHour"
//       showSearch
//       placeholder="00시"
//       optionFilterProp="endhour"
//       value={endHour}
//       onChange={endHourHandler}
//       onSearch={onSearch}
//       filterOption={(input, option) =>
//         (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//       }
//       options={[
//         {
//           value: '1시',
//           label: '1시',
//         },
//         {
//           value: '2시',
//           label: '2시',
//         },
//         {
//           value: '3시',
//           label: '3시',
//         },
//         {
//           value: '4시',
//           label: '4시',
//         },
//         {
//           value: '5시',
//           label: '5시',
//         },
//         {
//           value: '6시',
//           label: '6시',
//         },
//         {
//           value: '7시',
//           label: '7시',
//         },
//         {
//           value: '8시',
//           label: '8시',
//         },
//         {
//           value: '9시',
//           label: '9시',
//         },
//         {
//           value: '10시',
//           label: '10시',
//         },
//         {
//           value: '11시',
//           label: '11시',
//         },
//         {
//           value: '12시',
//           label: '12시',
//         },
//         {
//           value: '13시',
//           label: '13시',
//         },
//         {
//           value: '14시',
//           label: '14시',
//         },
//         {
//           value: '15시',
//           label: '15시',
//         },
//         {
//           value: '16시',
//           label: '16시',
//         },
//         {
//           value: '17시',
//           label: '17시',
//         },
//         {
//           value: '18시',
//           label: '18시',
//         },
//         {
//           value: '19시',
//           label: '19시',
//         },
//         {
//           value: '20시',
//           label: '20시',
//         },
//         {
//           value: '21시',
//           label: '21시',
//         },
//         {
//           value: '22시',
//           label: '22시',
//         },
//         {
//           value: '23시',
//           label: '23시',
//         },
//         {
//           value: '24시',
//           label: '24시',
//         },
//       ]}
//     />
//     <Select
//       name="endMinute"
//       value={endMinute}
//       onChange={endMinuteHandler}
//       showSearch
//       placeholder="00분"
//       optionFilterProp="endminute"
//       onSearch={onSearch}
//       filterOption={(input, option) =>
//         (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//       }
//       options={[
//         {
//           value: '00분',
//           label: '00분',
//         },
//         {
//           value: '10분',
//           label: '10분',
//         },
//         {
//           value: '20분',
//           label: '20분',
//         },
//         {
//           value: '30분',
//           label: '30분',
//         },
//         {
//           value: '40분',
//           label: '40분',
//         },
//         {
//           value: '50분',
//           label: '50분',
//         },
//       ]}
//     />
//     </Col>
//   <Col>
//   <Title level={4}>기타 메모</Title>
//   <TextArea  rows={10} placeholder="메모를 작성하세요." maxLength={100} 
// showCount/>             
// </Col>
// </Row>
//   </div>
// );




// const dateNow = new Date();
// const today = dateNow.toISOString().slice(0, 10);


// const dateFormat = "YYYY-MM-DD";
// const { RangePicker } = DatePicker;

// const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;

// const { TextArea } = Input;
// const { Title } = Typography;

// dayjs.extend(customParseFormat);
// const onChange = (time) => {
//   console.log("Time : ", time);
// };
// const onChange2 = (date) => {
//   console.log('Date: ', date);
// };
// const onSearch = (value) => console.log(value);

// export default NewCalendar;
