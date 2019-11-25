import React, { Component } from 'react';
import { Form, Input } from 'antd';
const { TextArea } = Input;

const BoWTextArea = (props) => {
    const {form, label, attributeName, rules, placeholder, disabled, initialValue, autoSize} = props;
    const {getFieldDecorator} = form;
    return (
        <Form.Item label={label}>
            {getFieldDecorator(attributeName, {
                rules,
                initialValue,
            })(<TextArea placeholder={placeholder} disabled={disabled} autoSize={autoSize} />)}
        </Form.Item>
    );
};

export default BoWTextArea;