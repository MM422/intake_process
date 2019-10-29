import React, { Component } from 'react';
import { Form, Button } from 'antd';
import BoWInput from "@/components/FormInputs/BoWInput";
import BoWSelect from "@/components/FormInputs/BoWSelect";
import BoWDatePicker from "@/components/FormInputs/BoWDatePicker";
import BoWUpload from "@/components/FormInputs/BoWUpload";

const moment = require("moment");

const formItemLayout = {
    labelCol: {
        xs: { span: 6 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 10 },
        sm: { span: 10 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 10,
            offset: 6,
        },
    },
};


class IntakeForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <BoWInput
                    form={this.props.form}
                    label="Requestor Name"
                    attributeName="RequestorName"
                    rules={[]}
                    placeholder="Please input the requestor name"
                    disabled={false}
                />
                <BoWSelect
                    form={this.props.form}
                    label="Tier"
                    attributeName="Tier"
                    rules={[]}
                    placeholder="Please Select the tier"
                    disabled={false}
                    options={[{ label: '1', value: '1'}, {label: '2', value: '2'}]}
                />
                <BoWDatePicker
                    form={this.props.form}
                    label="Target Final Implementation Date"
                    attributeName="TargetFinalImplementationDate"
                    rules={[]}
                    placeholder="Please select the target final implementation date"
                    disabled={false}
                />
                <BoWUpload
                    form={this.props.form}
                    label="Submission Deck"
                    attributeName="SubmissionDeck"
                    rules={[]}
                    placeholder="Please submit your deck"
                    disabled={false}
                />


                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedIntakeForm = Form.create("Intake")(IntakeForm);

export default WrappedIntakeForm;