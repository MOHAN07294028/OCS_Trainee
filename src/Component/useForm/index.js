import React from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Button } from "antd";
import "../Styles/custom.css";
import CompoField from "../common/FormCommonFields";

const InitialForm = () => {
  const { control, handleSubmit, register, formState } = useForm({});
  const onSave = (values) => {
    console.log(values, "enter");
    alert(JSON.stringify(values))
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSave)}>
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <Row>
              <Col span={24} className="loginContainer">
                <Row>
                  <Col span={24} className="textStyles">
                    Login
                  </Col>
                </Row>
                <Row>
                  <Col span={24} style={{ marginTop: "5%" }}>
                    <CompoField
                      name="userName"
                      control={control}
                      render="input"
                      label="User Name"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={24} style={{ marginTop: "5%" }}>
                    <CompoField
                      name="password"
                      control={control}
                      render="password"
                      label='Password'
                    />
                  </Col>
                </Row>
                <Row style={{ marginTop: "5%" }}>
                  <Col
                    span={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button type="primary" htmlType="submit">
                      Login
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={8}></Col>
        </Row>
      </form>
    </div>
  );
};

export default InitialForm;
