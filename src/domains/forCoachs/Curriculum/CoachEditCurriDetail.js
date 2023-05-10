import { useLocation} from 'react-router-dom';
import {  useSelector  } from 'react-redux';
import React, { useState, useEffect } from "react";
import client from '../../../lib/api/client';
import {Button, Modal, Divider, Input, Card, Col} from 'antd';
import {useNavigate} from 'react-router-dom';
import Comments from '../../../components/comment/Comment.js';
 
const { TextArea } = Input;

const EditCurriDetail = () => {
  const { auth } = useSelector(({ auth }) => ({ auth: auth.auth }));


  const navigate = useNavigate();
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, SetTitle] = useState("");
  const [detail, SetDetail] = useState("");
  const [content, SetContent] = useState("");
  const [effect, SetEffect] = useState("");

  const location = useLocation();
  console.log('state', location.state);
  const id = location.state.id;

  const [stateCust, setstateCust] = useState({});
  useEffect(() => {
    getCurriculumById(id);
  }, []);

  const getCurriculumById = id => {
    console.log(id);
    client.get(`/api/course/${id}`)
      .then(d => {
        let curriculum = d.data;
        setstateCust({
          id: id,
          title : curriculum.title,
          detail: curriculum.detail,
          content: curriculum.content,
          effect: curriculum.effect,
        });
      })
      .catch(err => alert(err));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const columns = [
    {
      title: "Title",
      dataIndex: "Title",
    },
    {
      title: "Detail",
      dataIndex: "Detail",
    },
    {
      title: "Content",
      dataIndex: "Content",
    },
    {
      title: "Effect",
      dataIndex: "Effect",
    },
    {
      title : "ID",
      dataIndex: "id",
    },
  ];

  const user = localStorage.getItem('user');
  const auth_ = localStorage.getItem('auth')

  if (!user) {
    return <div>로그인 하지 않으면 볼 수 없는 페이지입니다.</div>;
  }
  if (auth_!='"coach"'){
    return <div>코치만 볼 수 있는 페이지입니다.</div>;
  // }
}

  return (
    <>
          <Card
              title={stateCust.title}
              bordered={false}
              // style={{
              //   width: 300,
              // }}
            >
              <Divider orientation="left" orientationMargin="0">
        <h5>장애</h5>
      </Divider>
      <p>
        {stateCust.detail}
      </p>
      <Divider orientation="left" orientationMargin="0">
        <h5>운동설명</h5>
      </Divider>
      <p>
        {stateCust.content}
      </p>
      <Divider orientation="left" orientationMargin="0">
        <h5>효과</h5>
      </Divider>
      <p>
        {stateCust.effect}
      </p>
            </Card>
        <Comments
            id = {id}
          />
    </>
  );
};


export default EditCurriDetail;
