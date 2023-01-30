import {
    Button,
    Modal,
    Table,
    Input,
    Col, 
    Select, 
    Image, 
    Row,
    InputNumber,
    Typography,
    Radio, Checkbox
  } from "antd";
  import React, { useState, useEffect } from "react";
  import NewCustomer from "./NewCustomer.js";
  import client from '../../lib/api/client';
  import { SearchOutlined, PlusOutlined, DeleteOutlined  } from "@ant-design/icons";
  import { Link, useNavigate } from 'react-router-dom';

  const { Text } = Typography;
  const { TextArea } = Input;
  const onTextChange = (e) => {
    console.log(e);
  };

  // 오늘 날짜 
const today = () => {
  let now = new Date();
  let thisyear = now.getFullYear();
  let todayMonth = now.getMonth() +1;
  let todayDate = now.getDate();
  return thisyear + ". " + todayMonth + ". " + todayDate;
}


  // 번호, 성명, 유형, 상태, 성별, 생년월일, 담당자, 운동목적, 장애유형, 전화번호, 회원권, 결제정보, 소개정보
  const columns = [
    {
      title: "번호",
      dataIndex: "usernum"
    },
    {
      title: "성명",
      dataIndex: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name == value;
      },
    },
    {
      title: "장애",
      dataIndex: "existence",
      filters:[
        {text:'유', value:'유'},
        {text:'무', value:'무'}
      ],
      onFilter:(value, record)=>{
        return record.existence === value
      }
    },
    {
      title: "성별",
      dataIndex: "sex",
      filters:[
        {text:'남', value:'남'},
        {text:'여', value:'여'}
      ],
      onFilter:(value, record)=>{
        return record.sex === value
      }
    },
    {
      title: "담당자",
      dataIndex: "manager",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.manager == value;
      },
    },
    {
      title: "소개정보",
      dataIndex: "inflow",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.inflow == value;
      },
    },
    {
      title: "전화번호",
      dataIndex: "phone",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.phone == value;
      },
    },
    {
      title: "소개정보",
      dataIndex: "inflow",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.inflow == value;
      },
    },
    {
      title: "결제정보",
      dataIndex: "payment",
      filters:[
        {text:'실비', value:'실비'},
        {text:'바우처+실비', value:'바우처+실비'},
        {text:'바우처', value:'바우처'}
      ],
      onFilter:(value, record)=>{
        return record.payment === value
      }
    },
    {
      title: "장애유형",
      dataIndex: "obstacle_type",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.obstacle_type == value;
      },
    },
    {
      title: "소개정보",
      dataIndex: "inflow",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.inflow == value;
      },
    },
    {
      title: "회원권",
      dataIndex: "membership",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.membership == value;
      },
    },
    {
      title: "운동목적",
      dataIndex: "user_purpose",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.user_purpose == value;
      },
    },
    {
      title: "상태",
      dataIndex: "statement",
      filters:[
        {text:'이용중', value:'이용중'},
        {text:'휴면고객', value:'휴면고객'},
        {text:'상담예정', value:'상담예정'},
        {text:'상담완료', value:'상담완료'},
        {text:'단순문의', value:'단순문의'}
      ],
      onFilter:(value, record)=>{
        return record.statement === value
      }
    },
  ];

  const options = [
    {
      value: "today",
      label: "오늘"
    },
    {
      value: "yesterday",
      label: "어제"
    },
    {
      value: "thisweek",
      label: "이번 주"
    },
    {
      value: "lastweek",
      label: "지난 주"
    }
  ];
  
  const Customers = () => {
    const navigate = useNavigate();
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    const [customers, setCustomers] = useState([]);
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10);
    const [loading, setloading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [usernum, setUsernum] = useState("");
  const [userheight, setUserheight] = useState("");
  const [userwidth, setUserwidth] = useState("");
  const [sex, setSex] = useState("");
  const [existence, setExistence] = useState("");
  const [name, setName] = useState("");
  const [obstacle_type, setObstacle_type] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [memo, setMemo] = useState("");
  const [manager, setManager] = useState("");
  const [payment, setPayment] = useState("");
  const [inflow, setInflow] = useState("");
  const [statement, setStatement] = useState("");
  const [date_signup, setDate_signup] = useState("");
  const [birthday, setBirthday] = useState("");
  const [membership, setMembership] = useState("");
  const [user_purpose, setUser_purpose] = useState("");
  const [vaccinate, setVaccinate] = useState("");
  const [category, setCategory] = useState("");


  const categoryHandler = (e) => {
    setCategory(e);
  };
  console.log(category);

  const usernumHandler = (e) =>{ 
    setUsernum(e);
  };
  const userheightHandler = (e) =>{
    setUserheight(e);
  };
  const userwidthHandler = (e) =>{ 
    setUserwidth(e);
  };
  const sexHandler = (e) =>{ 
    setSex(e);
  };
  const existenceHandler = (e) =>{ 
    setExistence(e);
  };
  const nameHandler = (e) =>{ 
    e.preventDefault();
    setName(e.target.value);
  };
  const obstacle_typeHandler = (e) =>{ 
    e.preventDefault();
    setObstacle_type(e.target.value);
  };
  const phoneHandler = (e) =>{ 
    e.preventDefault();
    setPhone(e.target.value);
  };
  const addressHandler = (e) =>{ 
    e.preventDefault();
    setAddress(e.target.value);
  };
  const memoHandler = (e) =>{ 
    e.preventDefault();
    setMemo(e.target.value);
  };
  const managerHandler = (e) =>{ 
    setManager(e);
  };
  const paymentHandler = (e) =>{ 
    setPayment(e);
  };
  console.log(payment);
  
  const inflowHandler = (e) =>{
    setInflow(e);
  };
  console.log(inflow);
  const statementHandler = (e) =>{ 
    setStatement(e);
  };
  console.log(statement);
  const date_signupHandler = (e) =>{ 
    e.preventDefault();
    setDate_signup(e.target.value);
  };
  console.log(date_signup);
  const birthdayHandler = (e) =>{ 
    setBirthday(e.target.value);
  };
  console.log(birthday);
  const membershipHandler = (e) =>{ 
    setMembership(e);
  };
  console.log(membership);
  const vaccinateHandler = (e) =>{ 
    setVaccinate(e);
  };
  console.log(vaccinate);

    const showModal = () => {
      setIsModalOpen(true);
    };
    
    //신규 회원 post
    const handleOk = (e) => {
      e.preventDefault();

      let body = {
        usernum: usernum,
        userheight: userheight,
        userwidth: userwidth,
        sex: sex,
        existence: existence,
        name: name,
        phone: phone,
        obstacle_type: obstacle_type,
        address: address,
        memo: memo,
        manager: manager,

        payment: payment,
        inflow: inflow,
        statement: statement,
        date_signup: date_signup,
        birthday: birthday,
        membership: membership,
        user_purpose: user_purpose,
        vaccinate: vaccinate,
        category: category
      };

      client
        .post("/api/consumer/info/create", body)
        .then((res) =>
         console.log(res)
         );
         alert("등록 완료");
         window.location.reload();
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    }; 

    const handleChange = (e) => {
      console.log(`selected ${e}`);
      setUser_purpose(e);
    };

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      await client.get("/api/consumer/info").then(
        res => {
          setloading(false);
          setCustomers(
            res.data.map(row => ({
              usernum: row.usernum,
              userheight: row.userheight,
              userwidth: row.userwidth,
              sex: row.sex,
              existence: row.existence,
              name: row.name,
              obstacle_type: row.obstacle_type,
              phone: row.phone,
              address: row.address,
              memo: row.memo,
              manager: row.manager,
              payment: row.payment,
              inflow: row.inflow,
              statement: row.statement,
              date_signup: row.date_signup,
              birthday: row.birthday,
              membership: row.membership,
              user_purpose: row.user_purpose,
              vaccinate: row.vaccinate,
              category: row.category,
              id: row._id
            }))
          );
        }
      );
    };

  
    const [isModal2Open, setIsModal2Open] = useState(false);
    const showNMModal = () => {
      setIsModal2Open(true);
    };
    const handleOk1 = () => {
      setIsModal2Open(false);
    };
    const handleCancel1 = () => {
      setIsModal2Open(false);
    };
  
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
  
    const [value, setValue] = useState(1);
    const onChange1 = (e) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };
  
    return (
      <>
            <Button type="primary" className="newMember" onClick={showModal}>
              <PlusOutlined />신규회원 등록
            </Button>
            <Modal
            title="신규회원 추가"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
           >
            <div className="Div">
  <Row gutter={[32, 16]}>
    <div className="Col1">
      <Col>
        <Image
            width={150}
            height={150}
            src="https://pbs.twimg.com/profile_images/1459562606956793856/rMEpug4T_400x400.jpg"
        />
        <br></br><br></br>
        <Button size="small">사진 추가/변경</Button><Button size="small"><DeleteOutlined /></Button>
        <br></br><br></br>
        <h4>상담</h4>
        <Checkbox>초기 상담지</Checkbox><br></br>
        <Checkbox>계약서</Checkbox><br></br>
        <Checkbox>개인정보수집이용동의서</Checkbox><br></br>
        <br></br>
        <Row gutter={16}>
          <Col>
              <h4>결제정보</h4>
          </Col>
          <Col>
            <Select
              value = {payment}
              defaultValue="결제정보" 
              size="small" 
              onChange={paymentHandler}
              options={[
                { value: '바우처', label: '바우처' },
                { value: '실비', label: '실비' },
                { value: '바우처+실비', label: '바우처+실비'},
              ]}
            />
          </Col>
        </Row>
      </Col>
    </div>

    <div className="Col2">
      <Col>
      <Row gutter={16}>
        <Col>
            <h4>회원번호</h4>
        </Col>
        <Col>
            <InputNumber
               size="small" 
               style={{width: 80}}
               name="usernum"
               value={usernum}
               onChange={usernumHandler}
            />
        </Col>
      </Row><br></br>
      <Row gutter={16}>
        <Col>
            <h4>이름</h4>
        </Col>
        <Col>
            <Input 
                size="small" 
                style={{width: 80}}
                name="name"
                value={name}
                onChange={nameHandler}
            />
        </Col>
      </Row><br></br>
      <Row gutter={16}>
        <Col>
            <h4>성별</h4>
        </Col>
        <Col>
          {/* <Radio.Group
            value={sex}
            onChange={sexHandler}>
              <Radio 
                  value="남">남</Radio>
              <Radio 
                  value="여">여</Radio>
              </Radio.Group> */}
              <Select
                defaultValue="남" 
                value={sex}
                onChange={sexHandler}
                options={[
                  { value: '남', label: '남' },
                  { value: '여', label: '여' },
                ]}
              />
        </Col>
      </Row><br></br>
      <Row gutter={16}>
        <Col>
            <h4>생년월일</h4>
        </Col>
        <Col>
          <Input
              size="small"
              name="birthday"
              value={birthday}
              onChange={birthdayHandler}
          /> (년생)
        </Col>
      </Row><br></br>
      <Row gutter={16}>
        <Col>
          <InputNumber
            size="small" 
            style={{width: 60}}
            name="userheight"
              value={userheight}
              onChange={userheightHandler}
            /> cm /
        </Col>
        <Col>
          <InputNumber 
          size="small" 
          style={{width: 60}}
          name="userwidth"
              value={userwidth}
              onChange={userwidthHandler}
          /> kg
        </Col>
      </Row><br></br>
      <Row gutter={16}>
        <Col>
            <h4>장애 유무</h4>
        </Col>
        <Col>
        {/* <Radio.Group value ={existence} onChange={existenceHandler}>
            <Radio value="disablity">유</Radio>
            <Radio value="normal">무</Radio>
            </Radio.Group> */}
            <Select
              defaultValue="장애" 
              size="small" 
              value={existence}
              onChange={existenceHandler}
              options={[
                { value: '유', label: '유' },
                { value: '무', label: '무' },
              ]}
            />
        </Col>
      </Row><br></br>
      <Row gutter={16}>
        <Col>
            <h4>장애 유형</h4>
        </Col>
        <Col>
          <Input 
            size="small"
            name="obstacle_type"
            value={obstacle_type}
            onChange={obstacle_typeHandler}
          />
        </Col>
      </Row><br></br>
      <Row gutter={16}>
        <Col>
            <h4>예방접종</h4>
        </Col>
        <Col>
        <Select
              defaultValue="예방접종" 
              value={vaccinate}
              onChange={vaccinateHandler}
              options={[
                { value: '유', label: '유' },
                { value: '무', label: '무' },
              ]}
            />
        </Col>
      </Row><br></br>
      <Row gutter={10}>
          <Col>
              <h4>전화번호</h4>
          </Col>
          <Col>
          <Input 
            placeholder="-없이11자리" 
            size="small" 
            style={{width : 150}} 
            name="phone"
            value={phone}
            onChange={phoneHandler}
           />

          </Col>
          </Row><br></br>
    </Col>
    </div>


    <div className="Col3">
      <Col>
        <Row gutter={16}>
          <Col>
              <h4>유형</h4>
          </Col>
          <Col>
            <Select
              value = {category}
              defaultValue="오프라인" 
              size="small" 
              onChange={categoryHandler}
              options={[
                { value: '온라인', label: '온라인' },
                { value: '오프라인', label: '오프라인' },
                { value: '가정방문', label: '가정방문'},
              ]}
            />
          </Col>
        </Row><br></br>
        <Row gutter={16}>
          <Col>
              <h4>상태</h4>
          </Col>
          <Col>
            <Select
              defaultValue="이용중" 
              size="small" 
              onChange={statementHandler}
              value = {statement}
              options={[
                { value: '이용증', label: '이용중' },
                { value: '휴면고객', label: '휴면고객' },
                { value: '상담예정', label: '상담예정'},
                { value: '상담완료', label: '상담완료'},
                { value: '단순문의', label: '단순문의'},
              ]}
            />
          </Col>
        </Row><br></br>
        <Row gutter={16}>
          <Col>
              <h4>담당자</h4>
          </Col>
          <Col>
            <InputNumber
              placeholder="담당자 번호" 
              size="small" 
              style={{width : 80}} 
              name="manager"
              value={manager}
              onChange={managerHandler}
            />
          </Col>
        </Row><br></br>
        <Row gutter={16}>
          <Col>
              <h4>운동목적</h4>
          </Col>
          <Col>
            <Select
              value = {user_purpose}
              defaultValue="운동목적" 
              size="small" 
              onChange={handleChange}
              options={[
                {  value: '근력강화', label: '근력강화', },
                { value: '체형교정', label: '체형교정',},
                { value: '신체컨디셔닝', label: '신체컨디셔닝', },
                { value: '트랜스퍼', label: '트랜스퍼', },
                { value: '건강관리', label: '건강관리', },
                { value: '운동습관형성', label: '운동습관형성',},
                { value: '통증경감', label: '통증경감',},
                { value: '체력향상', label: '체력향상', },
                { value: '일상기능회복', label: '일상기능회복',},
                { value: '전문적운동지도', label: '전문적운동지도', },
                { value: '골프트레이닝', label: '골프트레이닝', },
                { value: '기타', label: '기타',},
              ]}
            />
          </Col>
        </Row><br></br>
        <Row gutter={16}>
          <Col>
              <h4>가입날짜</h4>
          </Col>
          <Col>
            <Input 
              placeholder="YYYY-MM-DD" 
              size="small" 
              style={{width : 150}} 
              name="date_signup"
              value={date_signup}
              onChange={date_signupHandler}
            />
          </Col>
        </Row><br></br>
        
        <Row gutter={16}>
          <Col>
              <h4>유입경로</h4>
          </Col>
          <Col>
            <Select
              defaultValue="소개정보" size="small" onChange={inflowHandler}
              value={inflow}
              options={[
                { value: '숨고', label: '숨고' },
                { value: '지인소개', label: '지인소개' },
                { value: '강사추천', label: '강사추천'},
                { value: '병원추천', label: '병원추천' },
                { value: '인터넷 검색', label: '인터넷 검색' },
                { value: 'SNS', label: 'SNS' },
              ]}
            />
          </Col>
        </Row><br></br>
        <Row gutter={16}>
          <Col>
              <h4>회원권</h4>
          </Col>
          <Col>
            <Select
              value={membership}
              defaultValue="회원권" 
              size="small" 
              onChange={membershipHandler}
              options={[
                { value: 'A.P.T', label: 'A.P.T' },
                { value: 'M.P.T', label: 'M.P.T' },
                { value: '입문자PT', label: '입문자PT'},
              ]}
            />
          </Col>
        </Row><br></br>
       
          <Row gutter={16}>
            <Col>
                <h4>주소</h4>
            </Col>
            <Col>
            <Input 
              placeholder="회원 주소" 
              size="small" 
              style={{width : 150}} 
              name="address"
              value={address}
              onChange={addressHandler}
               />
            </Col>
        </Row>
        <br></br>
                                <Row>
                                    <Col span={2}>
                                        <Text>메모</Text>
                                    </Col>
                                    <Col span={11}>
                                    <TextArea
                                        style={{width :550}}
                                        autoSize={{
                                        minRows: 4,
                                        maxRows: 6,
                                        }}
                                        name="memo"
                                        value={memo}
                                        onChange={memoHandler}
                                    />
                                    </Col>
                                </Row>
      </Col>
      </div>
  </Row>
  </div>
           </Modal>
        <br />
        <Table
          columns={columns}
          dataSource={customers}
          onRow={(record, index) => {
            const usernum = record.usernum;
            const userheight = record.userheight;
            const userwidth = record.userwidth;
            const sex = record.sex;
            const existence = record.existence;
            const name = record.name;
            const obstacle_type = record.obstacle_type;
            const phone = record.phone;
            const address = record.address;
            const memo = record.memo;
            const manager = record.manager;
            const payment = record.payment;
            const inflow = record.inflow;
            const statement = record.statement;
            const birthday = record.birthday;
            const user_purpose = record.user_purpose;
            const vaccinate = record.vaccinate;
            const category = record.category;
            const date_signup = record.date_signup;
            const membership = record.membership;
            const id = record.id;

            return {
              onClick: (e) => {
                console.log(id);
                navigate('/customers/info', {
                    state: {
                      usernum: usernum,
                      userheight: userheight,
                      userwidth: userwidth,
                      sex: sex,
                      existence: existence,
                      name: name,
                      obstacle_type: obstacle_type,
                      phone: phone,
                      address: address,
                      memo: memo,
                      manager: manager,
                      payment: payment,
                      inflow: inflow,
                      statement: statement,
                      birthday: birthday,
                      date_signup: date_signup,
                      membership: membership,
                      user_purpose: user_purpose,
                      vaccinate: vaccinate,
                      category: category,
                      id: id
                    },
                  });
              }
            };
          }}
        />
      </>
    );
  };
  
  export default Customers;
  