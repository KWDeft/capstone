import { useLocation} from 'react-router-dom';
import {  useSelector  } from 'react-redux';
import React, { useState, useEffect } from "react";
import client from '../../lib/api/client';
import {Button, Modal, Divider, Input, Card, Col} from 'antd';
import {useNavigate} from 'react-router-dom';
import Comments from '../../components/comment/Comment.js';
 
const { TextArea } = Input;

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
        navigate('/home/curriculum')
      },
    });
  };
  
const [fileList, setFileList] = useState([]);

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setFileList(e.target.files);
};

// 👇 files is not an array, but it's iterable, spread to get an array of files
const files = fileList ? [...fileList] : [];

const fileSubmitHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  
  const attachment = new FormData();
  files.forEach((file, i) => {
    attachment.append(`file-${i}`, file, file.name);
  });

  await client({
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: `/api/course/file/upload/${id}`, 
    method: "PATCH",
    data: attachment
    }).then((res) => 
       console.log(res)
       );
       alert("첨부파일 업로드 완료");
      //  window.location.reload();
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
              bordered={false}
              // style={{
              //   width: 300,
              // }}
            >
              <h2>커리큘럼 상세</h2>
                <Divider orientation="left" orientationMargin="0">
                 <h5>제목</h5>
               </Divider>
               <Col span={4}>
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
                
               </Col>
              <Divider orientation="left" orientationMargin="0">
        <h5>장애</h5>
      </Divider>
      <Col span={4}>
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
          </Col>
      <Divider orientation="left" orientationMargin="0">
        <h5>운동설명</h5>
      </Divider>
      <TextArea
            style={{height :500}}
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
        <h5>효과</h5>
      </Divider> 
      <TextArea
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
        <Divider orientation="left" orientationMargin="0">
        <h5>첨부파일</h5>
      </Divider> 
        <input onChange={handleFileChange} multiple />

        <ul>
          {files.map((file, i) => (
            <li key={i}>
              {file.name} - {file.type}
            </li>
          ))}
        </ul>
        <Button onClick ={fileSubmitHandler}>첨부파일 업로드</Button>
          <br></br><br></br><br></br>
        <Button onClick={DeleteCurriculum}>삭제</Button>
        <Button type="primary" onClick={submitHandler}>
            수정
        </Button>
            </Card>
        <Comments
            id = {id}
          />
    </>
  );
};


export default EditCurriDetail;
