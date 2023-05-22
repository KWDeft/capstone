import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Input, Form, Space } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import client from '../../lib/api/client';
import { useSelector } from "react-redux";

const MyComments = () => {
   
    const navigate = useNavigate();
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const [state, setState] = useState([]);
    const [commentList, setCommentList] = useState([]);
    
    
    
    // 입력한 댓글 내용

    const columns = [
        {
          key: "1",
          title: "작성 날짜",
          dataIndex: "date"
        },
        {
            key: "2",
            title: "댓글",
            dataIndex: "content"
          }
      ]

      const username = user.username;
      console.log(username);
        
    const getCommentList = async () => {
      
        client.get(`/api/course/comment/setting/${username}`).then(
            res => {
                console.log(res);
                setCommentList(
                res.data.map(row => ({
                  courseId: row.courseId,
                  content: row.content,
                  date: row.date,
                  id: row._id
                }))
              );
            }
          );
    };

    useEffect(() => {
         getCommentList();
    }, []);

   
  return (
    <>
      <div>
          <h2>내가 작성한 댓글</h2>
            <Table
              columns={columns}
              dataSource={state}
              onRow={(record, index) => {
                const date = record.date;
                const content = record.Content;
                return {
                  onClick: (e) => {
                    navigate('/home/curriculum/edit', {
                        state: {
                          content: content,
                          date: date,
                        },
                      });
                  }
                };
              }}
              size="middle" 
            />
      </div>
    </>
  );
};

export default MyComments;