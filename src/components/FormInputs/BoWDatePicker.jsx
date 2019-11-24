import React, {Component} from 'react';
import {Form, Input, DatePicker} from 'antd';

const BoWDatePicker = (props) => {
    const {form, label, attributeName, rules, placeholder, disabled, initialValue} = props;
    const {getFieldDecorator} = form;
    return (
        <Form.Item label={label}>
            {getFieldDecorator(attributeName, {
                rules,
                initialValue,
            })(<DatePicker allowClear={false} placeholder={placeholder} disabled={disabled} style={{ width: "100%" }}/>)}
        </Form.Item>
    );
};

export default BoWDatePicker;