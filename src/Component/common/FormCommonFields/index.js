import { Input, DatePicker, Row, Col } from "antd";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const CompoField = ({ name, control, render, label, ...rest }) => {
  const components = {
    input: Input,
    password: Input.Password,
    dateField: DatePicker,
  };
  const RenderComponent = components[render];
  return (
    <div>
      <Row>
        <Col span={5} >
          {label}
        </Col>
        <Col span={19}>
          <Controller
            name={name}
            control={control}
            render={({ field }) => <RenderComponent {...field} {...rest} />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CompoField;
