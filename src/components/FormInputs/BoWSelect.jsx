import React, {Component} from 'react';
import {Form, Select} from 'antd';

const BoWSelect = (props) => {
    const {form, label, attributeName, rules, placeholder, disabled, initialValue, options} = props;
    const {getFieldDecorator} = form;
    return (
        <Form.Item label={label}>
            {getFieldDecorator(attributeName, {
                rules,
                initialValue,
            })(
                <Select disabled={disabled} placeholder={placeholder}>
                    {
                        options.map((option) => <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>)
                    }
                </Select>,
            )}
        </Form.Item>
    );
};

export default BoWSelect;