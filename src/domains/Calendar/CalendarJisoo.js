import { Badge, Calendar, Button, Modal,Table,
    Input,
    Divider, } from "antd";
  import React, { useState, useEffect } from "react";
  import "./CalendarMain.css";
  import {useNavigate} from 'react-router';
  import { PlusOutlined } from "@ant-design/icons";
  import NewCalendar from "./NewCalendar.js";
  import client from '../../lib/api/client';
  import { startLoading } from "../../modules/loading";
import { EdgesensorHighOutlined } from "../../../node_modules/@mui/icons-material/index";
import { memo } from "react";
  
  
  
  const CalendarJisoo = () => {
    const [size, setSize] = useState("large");
    const [isModalOpen, setIsModalOpen] = useState(false);
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
      e.preventDefault();
      SetUsernum(e.target.value);
    };

    const dateHandler = (e) => {
        e.preventDefault();
        SetDate(e.target.value);
    }

    const startHourHandler = (e) =>{
        e.preventDefault();
        SetStartHour(e.target.value);
      };
    
    const startMinuteHandler = (e) =>{
        e.preventDefault();
        SetStartMinute(e.target.value);
      };
    
    const endHourHandler = (e) =>{
        e.preventDefault();
        SetEndHour(e.target.value);
      };
    
      const endMinuteHandler = (e) =>{
        e.preventDefault();
        SetEndMinute(e.target.value);
      };

      const memoHandler = (e) =>{
        e.preventDefault();
        SetMemo(e.target.value);
      };
  
    const [state, setstate] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      await client.get("/api/schedule/admin/list").then(
        res => {
          setloading(false);
          setstate(
            res.data.map(row => ({
              Usernum: row.usernum,
              Manager: row.manager,
              Date: row.date
            }))
          );
        }
      );
      };
  
  
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
      
        client
          .post("/api/schedule/admin", body)
          .then((res) => 
             console.log(res)
             );
        alert("일정 추가 성공");
        };
  
    const columns = [
      {
        key: "1",
        title: "Usernum",
        dataIndex: "Usernum",
      },
      {
        key: "2",
        title: "Manager",
        dataIndex: "Manager",
      },
      {
        key: "3",
        title: "Date",
        dataIndex: "Date",
      },
    ];
  
    return (
      <div>
        <br />
        <Button type="primary" onClick={showModal}>
              <PlusOutlined />
              일정 추가
        </Button>
        <Modal
            title="일정 추가"
            open={isModalOpen}
            onOk={submitHandler}
            onCancel={handleCancel}
          >
            <Divider orientation="left" orientationMargin="0">
              회원번호
            </Divider>
            <Input
              autoComplete="usernum"
              name="usernum"
              value={usernum}
              onChange={usernumHandler}
            />
            <Divider orientation="left" orientationMargin="0">
              수업날짜
            </Divider>
            <Input
              autoComplete="date"
              name="date"
              value={date}
              onChange={dateHandler}
              placeholder="YYYY-MM-DD"
            />
            <Divider orientation="left" orientationMargin="0">
              시작 시간 
            </Divider>
            <Input
              autoComplete="startHour"
              name="startHour"
              value={startHour}
              onChange={startHourHandler}
            />
            <h5>시</h5>
            <Input
              autoComplete="startMinute"
              name="startMinute"
              value={startMinute}
              onChange={startMinuteHandler}
            />
            <h5>분</h5>
            <Divider orientation="left" orientationMargin="0">
              종료시간 
            </Divider>
            <Input
              autoComplete="endHour"
              name="endHour"
              value={endHour}
              onChange={endHourHandler}
            />
            <Input
              autoComplete="endMinute"
              name="endMinute"
              value={endMinute}
              onChange={endMinuteHandler}
            />
            <Divider orientation="left" orientationMargin="0">
              메모 
            </Divider>
            <TextArea
              autoComplete="memo"
              name="memo"
              value={memo}
              onChange={memoHandler}
            />
          </Modal>
        {loading ? (
          "Loading"
        ) : (
          <>
          <Table
            columns={columns}
            dataSource={state}
            pagination={{ 
              current:page,
              pageSize: pageSize,
              total:500,
              onChange: (page,pageSize)=>{
                setPage(page);
                setPageSize(pageSize)
              }
             }}
            onRow={(record, index) => {
              const usernum = record.Usernum;
              const manager = record.Manager;
              const date = record.Date;
              return {
                onClick: (e) => {
                  console.log(usernum);
                  navigate('/calendar/edit', {
                      state: {
                        usernum: usernum,
                        date: date,
                        manager: manager,
                      },
                    });
                }
              };
            }}
          />
          </>
        )}
      </div>
    );
  
  };
  
  export default CalendarJisoo;