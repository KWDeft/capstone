import {
    Col,
    Typography,
    Select,
    Modal,
    Image,
    Row,
    Button,
    Radio,
    Checkbox
  } from "antd";
  import React from "react";
  import { DeleteOutlined } from "@ant-design/icons";
  import "./CustomerInfo.css";
  const { Text } = Typography;
  
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const CustomerInfo = () => {
    const deleteInfo = () => {
      Modal.error({
        title: "삭제",
        content: "해당 회원 정보를 삭제하시겠습니까?"
      });
    };
  
    return (
      <>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <div className="Div">
              <Row gutter={[32, 16]}>
                <div className="Col1">
                  <Col>
                    <Image
                      width={150}
                      height={150}
                      src="https://pbs.twimg.com/profile_images/1459562606956793856/rMEpug4T_400x400.jpg"
                    />
                    <br></br>
                    <br></br>
                    <Button size="small">사진 추가/변경</Button>
                    <Button size="small">
                      <DeleteOutlined />
                    </Button>
                    <br></br>
                    <br></br>
                    <h4>상담</h4>
                    <Checkbox defaultChecked="true">초기 상담지</Checkbox>
                    <br></br>
                    <Checkbox defaultChecked="true">계약서</Checkbox>
                    <br></br>
                    <Checkbox defaultChecked="true">
                      개인정보수집이용동의서
                    </Checkbox>
                  </Col>
                </div>
  
                <div className="Col2">
                  <Col>
                    <Row gutter={16}>
                      <Col>
                        <h4>회원번호</h4>
                      </Col>
                      <Col>
                        <h4>486</h4>
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>이름</h4>
                      </Col>
                      <Col>
                        <Text>곰도리</Text>
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>성별</h4>
                      </Col>
                      <Col>
                        <Radio.Group defaultValue={1}>
                          <Radio value={1}>남</Radio>
                          <Radio value={2}>여</Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>나이</h4>
                      </Col>
                      <Col>
                        <Text>2001(년생)</Text>
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <Text>165 cm /</Text>
                      </Col>
                      <Col>
                        <Text>60 kg</Text>
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>장애 유무</h4>
                      </Col>
                      <Col>
                        <Radio.Group defaultValue={"normal"}>
                          <Radio value="disablity">유</Radio>
                          <Radio value="normal" defaultChecked="true">
                            무
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>장애 유형</h4>
                      </Col>
                      <Col>
                        <Select
                          defaultValue="lucy"
                          size="small"
                          style={{ width: 100 }}
                          onChange={handleChange}
                          options={[
                            {
                              value: "jack",
                              label: "Jack"
                            },
                            {
                              value: "lucy",
                              label: "Lucy"
                            },
                            {
                              value: "Yiminghe",
                              label: "yiminghe"
                            }
                          ]}
                        />
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>예방접종</h4>
                      </Col>
                      <Col>
                        <Select
                          defaultValue="lucy"
                          size="small"
                          style={{ width: 100 }}
                          onChange={handleChange}
                          options={[
                            { value: "jack", label: "Jack" },
                            { value: "lucy", label: "Lucy" },
                            { value: "Yiminghe", label: "yiminghe" }
                          ]}
                        />
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={10}>
                      <Col>
                        <h4>전화번호</h4>
                      </Col>
                      <Col>
                        <Text>010-1234-1234</Text>
                      </Col>
                    </Row>
                    <br></br>
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
                          defaultValue="오프라인"
                          size="small"
                          onChange={handleChange}
                          options={[
                            { value: "온라인", label: "온라인" },
                            { value: "오프라인", label: "오프라인" },
                            { value: "가정방문", label: "가정방문" }
                          ]}
                        />
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>상태</h4>
                      </Col>
                      <Col>
                        <Select
                          defaultValue="이용중"
                          size="small"
                          onChange={handleChange}
                          options={[
                            { value: "이용증", label: "이용중" },
                            { value: "휴면고객", label: "휴면고객" },
                            { value: "상담예정", label: "상담예정" },
                            { value: "상담완료", label: "상담완료" },
                            { value: "단순문의", label: "단순문의" }
                          ]}
                        />
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>담당자</h4>
                      </Col>
                      <Col>
                        <Select
                          defaultValue="김광운"
                          size="small"
                          onChange={handleChange}
                          options={[
                            { value: "김광운", label: "김광운" },
                            { value: "문하늘", label: "문하늘" },
                            { value: "김지수", label: "김지수" }
                          ]}
                        />
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>운동목적</h4>
                      </Col>
                      <Col>
                        <Select
                          defaultValue="근력강화"
                          size="small"
                          onChange={handleChange}
                          options={[
                            { value: "근력강화", label: "근력강화" },
                            { value: "체형교정", label: "체형교정" },
                            { value: "신체컨디셔닝", label: "신체컨디셔닝" },
                            { value: "트랜스퍼", label: "트랜스퍼" },
                            { value: "건강관리", label: "건강관리" },
                            { value: "운동습관형성", label: "운동습관형성" },
                            { value: "통증경감", label: "통증경감" },
                            { value: "체력향상", label: "체력향상" },
                            { value: "일상기능회복", label: "일상기능회복" },
                            { value: "전문적운동지도", label: "전문적운동지도" },
                            { value: "골프트레이닝", label: "골프트레이닝" },
                            { value: "기타", label: "기타" }
                          ]}
                        />
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>가입일시</h4>
                      </Col>
                      <Col>
                        <h4>2023.01.13</h4>
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>결제정보</h4>
                      </Col>
                      <Col>
                        <Select
                          defaultValue="바우처"
                          size="small"
                          onChange={handleChange}
                          options={[
                            { value: "바우처", label: "바우처" },
                            { value: "실비", label: "실비" },
                            { value: "바우처+실비", label: "바우처+실비" }
                          ]}
                        />
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>소개정보</h4>
                      </Col>
                      <Col>
                        <Select
                          defaultValue="강사추천"
                          size="small"
                          onChange={handleChange}
                          options={[
                            { value: "지인소개", label: "지인소개" },
                            { value: "강사추천", label: "강사추천" },
                            { value: "병원추천", label: "병원추천" },
                            { value: "숨고", label: "숨고" },
                            { value: "인터넷 검색", label: "인터넷 검색" },
                            { value: "SNS", label: "SNS" }
                          ]}
                        />
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col>
                        <h4>회원권</h4>
                      </Col>
                      <Col>
                        <Select
                          defaultValue="입문자PT"
                          size="small"
                          onChange={handleChange}
                          options={[
                            { value: "A.P.T", label: "A.P.T" },
                            { value: "M.P.T", label: "M.P.T" },
                            { value: "입문자PT", label: "입문자PT" }
                          ]}
                        />
                      </Col>
                    </Row>
                    <br></br>
  
                    <Row gutter={16}>
                      <Col>
                        <h4>주소</h4>
                      </Col>
                      <Col>
                        <Text>서울시 노원구 월계동</Text>
                      </Col>
                    </Row>
  
                    <div className="btns">
                      <Button type="primary" href="/customers/infoedit">
                        수정
                      </Button>
                      <Button type="primary" danger onClick={deleteInfo}>
                        삭제
                      </Button>
                    </div>
                  </Col>
                </div>
              </Row>
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
      </>
    );
  };
  
  export default CustomerInfo;
  