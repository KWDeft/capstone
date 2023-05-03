import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Input, Form, Space } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import client from '../../lib/api/client';

const MyComments = () => {
    const navigate = useNavigate();
    const [state, setState] = useState([]);

    const columns = [
        {
          key: "1",
          title: "글 제목",
          dataIndex: "title"
        },
        {
            key: "2",
            title: "작성자",
            dataIndex: "writer"
          }
      ];
  return (
    <>
      <div>
          <h2>내가 작성한 댓글</h2>
          <Table 
            columns={columns} 
            dataSource={state}
            onRow={(record, index) => {
            const name = record.name;
            const id = record.id;
            return {
                onClick: (e) => {
                console.log(id);
                console.log(name);
                navigate('/mycomments/detail', {
                    state: {
                        name: name,
                        id: id
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