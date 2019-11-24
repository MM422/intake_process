import React, {Component} from 'react';
import {Form, Select} from 'antd';

class BoWSelect extends React.Component {

    handleChangeTrigger = (value) => {
        const {changeTrigger} = this.props;
        if(changeTrigger) {
            changeTrigger(value);
        }
    };

    render() {
        const {form, label, attributeName, rules, placeholder, disabled, initialValue, options} = this.props;
        const {getFieldDecorator} = form;
        return (
            <Form.Item label={label}>
                {getFieldDecorator(attributeName, {
                    rules,
                    initialValue,
                })(
                    <Select onChange={this.handleChangeTrigger} disabled={disabled} placeholder={placeholder} labelInValue={true}>
                        {
                            options.map((option) => <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>)
                        }
                    </Select>,
                )}
            </Form.Item>
        );
    }
};

export default BoWSelect;