import React, { Component } from 'react';
import {Form, Button, Descriptions} from 'antd';
import BoWInput from "@/components/FormInputs/BoWInput";
import BoWSelect from "@/components/FormInputs/BoWSelect";
import BoWDatePicker from "@/components/FormInputs/BoWDatePicker";
import BoWUpload from "@/components/FormInputs/BoWUpload";
import PICIntakeReviewPage from "@/components/FormInputs/PICIntakeReviewPage";
const moment = require("moment");

const mockData = {
    RequesterName: 'Max Mu',
    Email: 'max.mu@td.com',
    LOBPIC: 'EDPP',
    PICDate: '2019-11-11',
    Presenter: [{
        ACF2: 'MUM2',
        Name: 'Max Mu',
    },{
        ACF2: 'LEESEU3',
        Name: 'Seunghan Lee',
    }],
    Financial: [{
        Cash: 10000,
        PL: 1000,
    },{
        Cash: 20000,
        PL: 2000,
    }],
    ClarityProjectID: '00096662',
    TrancheNumber: '0.0',
    ClarityProjectName: 'Book of Work Test project for PIC Intake Review Page',
    Methodology: 'Agile',
    Goal: 'Project Goal Placeholder',
    Tier: 4,
    CurrentPhase: 'Active',
    PortfolioDirectorName: 'Jarrod',
    BusinessOwner: 'Jarrod',
    TargetFinalImplementationDate: '2019-11-11',
    CurrentTrancheRequest: 'AVS',
    Reason: 'This is a test purely for the PIC Intake',
    FundingAskCashBase : 100000,
    FundingAskCashContingency: 200000,
    FundingAskCashTotal: 300000,
    CurrentTrancheAskStartDate: '2019-11-01',
    CurrentTrancheAskEndDate: '2019-12-01',
    InOutOfFiscalPrioritizedPlan: 'In',
    TotalOneTimeCostCash: 100000,
    TPI: 1000000,
    TotalSpendToDateCash: 20000,
};

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
    state = {
        FinalImplementationDateDisabled: false,
    };

    componentDidMount() {
        const { form } = this.props;

        // Check Tier value:
        const tier = form.getFieldValue('Tier');
        if(tier.label === '2') {
            this.setState({
                FinalImplementationDateDisabled: true,
            })
        }
    }

    handleSelectChange = (changedValue) => {
        const { form } = this.props;
        if(changedValue.label === '2') {
            form.setFieldsValue({TargetFinalImplementationDate: undefined});
            this.setState({FinalImplementationDateDisabled: true});
        } else {
            this.setState({FinalImplementationDateDisabled: false});
        }
    };

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
                    rules={[{required: true, message: 'Requestor is required!'}]}
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
                    changeTrigger={this.handleSelectChange}
                />

                <BoWDatePicker
                    form={this.props.form}
                    label="Target Final Implementation Date"
                    attributeName="TargetFinalImplementationDate"
                    rules={[]}
                    placeholder="Please select the target final implementation date"
                    disabled={this.state.FinalImplementationDateDisabled}
                />

                <BoWUpload
                    form={this.props.form}
                    label="Submission Deck"
                    attributeName="SubmissionDeck"
                    rules={[]}
                    placeholder="Please submit your deck"
                    disabled={false}
                />
                <PICIntakeReviewPage PICIntakeDetail={mockData}/>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedIntakeForm = Form.create({
    name: 'intake_form_experiment',
    mapPropsToFields: (props) => {
        return props.initialValues ? {
            RequestorName: Form.createFormField({
                value: props.initialValues.RequestorName,
            }),
            Tier: Form.createFormField({
                value: props.initialValues.Tier,
            }),
        }: {};
    },
    onValuesChange: (props, changedValues, allValues) => {
        console.log(changedValues);
        console.log(allValues);
    }
})(IntakeForm);

export default WrappedIntakeForm;