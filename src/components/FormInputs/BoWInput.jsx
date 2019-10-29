import React, {Component} from 'react';
import {Form, Input} from 'antd';

const BoWInput = (props) => {
    const {form, label, attributeName, rules, placeholder, disabled, initialValue} = props;
    const {getFieldDecorator} = form;
    return (
        <Form.Item label={label}>
            {getFieldDecorator(attributeName, {
                rules,
                initialValue,
            })(<Input placeholder={placeholder} disabled={disabled}/>)}
        </Form.Item>
    );
};

export default BoWInput;