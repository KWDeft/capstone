import { useLocation} from 'react-router-dom';
import {  useSelector  } from 'react-redux';
import React, { useState, useEffect } from "react";
import client from '../../lib/api/client';
import {Button, Modal, Divider, Input, Card} from 'antd';
import {useNavigate} from 'react-router-dom';
import Comments from '../../components/comment/Comment.js';
 
const EditCurriDetail = () => {

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

  const DeleteCurriculum = (e) => {
    Modal.confirm({
      title: "정말로 삭제하시겠습니까?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        client.delete(`/api/course/${id}`).then((res) => 
        console.log(res)
        );
        alert("삭제완료");
        navigate('/curriculum')
      },
    });
  };

  const submitHandler = (e) => {
    console.log(stateCust);

    client
      .put(`/api/course/${id}`, stateCust)
      .then((res) => 
         console.log(res)
         );
         alert("수정 완료");
         window.location.reload();
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
  if (!user) {
    return <div>로그인 하지 않으면 볼 수 없는 페이지입니다.</div>;
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
          <br></br><br></br><br></br>
          <Button type="primary" onClick={showModal}>
            수정
      </Button>
      <Modal
          title="커리큘럼 수정"
          open={isModalOpen}
          onOk={submitHandler}
          onCancel={handleCancel}
        >
          <Divider orientation="left" orientationMargin="0">
            제목
          </Divider>
          <Input
            autoComplete="title"
            name="title"
            id="title"
            value={stateCust.title}
            onChange={e => {
              let value = e.target.value;
              setstateCust({
                title: value,
                detail: stateCust.detail,
                content: stateCust.content,
                effect: stateCust.effect,
              });
            }}
          />
          <Divider orientation="left" orientationMargin="0">
            장애
          </Divider>
          <Input
            autoComplete="detail"
            name="detail"
            value={stateCust.detail}
            onChange={e => {
              let value = e.target.value;
              setstateCust({
                title: stateCust.title,
                detail: value,
                content: stateCust.content,
                effect: stateCust.effect,
              });
            }}
          />
          <Divider orientation="left" orientationMargin="0">
            운동설명
          </Divider>
          <Input
            autoComplete="content"
            name="content"
            value={stateCust.content}
            onChange={e => {
              let value = e.target.value;
              setstateCust({
                title: stateCust.title,
                detail: stateCust.detail,
                content: value,
                effect: stateCust.effect,
              });
            }}
          />
          <Divider orientation="left" orientationMargin="0">
            효과
          </Divider>
          <Input
            autoComplete="effect"
            name="effect"
            value={stateCust.effect}
            onChange={e => {
              let value = e.target.value;
              setstateCust({
                title: stateCust.title,
                detail: stateCust.detail,
                content: stateCust.content,
                effect: value,
              });
            }}
          />
        </Modal>
        <Button onClick={DeleteCurriculum}>삭제</Button>
            </Card>
        <Comments
            id = {id}
          />
    </>
  );
};


export default EditCurriDetail;
