import React, { Component } from "react";
import { Form, Button, Divider } from "antd";
import BoWInput from "@/components/FormInputs/BoWInput";
import BoWSelect from "@/components/FormInputs/BoWSelect";
import BoWDatePicker from "@/components/FormInputs/BoWDatePicker";
import BoWUpload from "@/components/FormInputs/BoWUpload";
import PICIntakeReviewPage from "@/components/FormInputs/PICIntakeReviewPage";
import BoWTextArea from "@/components/FormInputs/BoWTextArea";

const moment = require("moment");

const mockData = {
  RequesterName: "Max Mu",
  Email: "max.mu@td.com",
  LOBPIC: "EDPP",
  PICDate: "2019-11-11",
  Presenter: [
    {
      ACF2: "MUM2",
      Name: "Max Mu"
    },
    {
      ACF2: "LEESEU3",
      Name: "Seunghan Lee"
    }
  ],
  Financial: [
    {
      Cash: 10000,
      PL: 1000
    },
    {
      Cash: 20000,
      PL: 2000
    }
  ],
  ClarityProjectID: "00096662",
  TrancheNumber: "0.0",
  ClarityProjectName: "Book of Work Test project for PIC Intake Review Page",
  Methodology: "Agile",
  Goal: "Project Goal Placeholder",
  Tier: 4,
  CurrentPhase: "Active",
  PortfolioDirectorName: "Jarrod",
  BusinessOwner: "Jarrod",
  TargetFinalImplementationDate: "2019-11-11",
  CurrentTrancheRequest: "AVS",
  Reason: "This is a test purely for the PIC Intake",
  FundingAskCashBase: 100000,
  FundingAskCashContingency: 200000,
  FundingAskCashTotal: 300000,
  CurrentTrancheAskStartDate: "2019-11-01",
  CurrentTrancheAskEndDate: "2019-12-01",
  InOutOfFiscalPrioritizedPlan: "In",
  TotalOneTimeCostCash: 100000,
  TPI: 1000000,
  TotalSpendToDateCash: 20000
};

const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 10 },
    sm: { span: 10 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 10,
      offset: 6
    }
  }
};

class IntakeForm extends Component {
  state = {
    FinalImplementationDateDisabled: false,
    userUnAuthorized: false
  };

  componentDidMount() {
    const isAuthorizedUser = true;
    if (!isAuthorizedUser) {
      this.setState({
        userUnAuthorized: true
      });
    }
  }

  // componentDidMount() {
  //     const { form } = this.props;
  //     // Check Tier value:
  //     const tier = form.getFieldValue('Tier');
  //     if(tier.label === '2') {
  //         this.setState({
  //             FinalImplementationDateDisabled: true,
  //         })
  //     }
  // }

  // handleSelectChange = (changedValue) => {
  //     const { form } = this.props;
  //     if(changedValue.label === '2') {
  //         form.setFieldsValue({TargetFinalImplementationDate: undefined});
  //         this.setState({FinalImplementationDateDisabled: true});
  //     } else {
  //         this.setState({FinalImplementationDateDisabled: false});
  //     }
  // };
  //
  // handleSubmit = (e) => {
  //     e.preventDefault();
  //     this.props.form.validateFields((err, values) => {
  //         if (!err) {
  //             console.log('Received values of form: ', values);
  //         }
  //     });
  // };

  handleCommentSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values from Comment form: ", values);
      }
    });
  };

  render() {
    const userUnAuthorized = this.state.userUnAuthorized;
    return (
      <div>
        {/*<Form {...formItemLayout} onSubmit={this.handleSubmit}>*/}
        {/*    <BoWInput*/}
        {/*        form={this.props.form}*/}
        {/*        label="Requestor Name"*/}
        {/*        attributeName="RequestorName"*/}
        {/*        rules={[{required: true, message: 'Requestor is required!'}]}*/}
        {/*        placeholder="Please input the requestor name"*/}
        {/*        disabled={false}*/}
        {/*    />*/}

        {/*    <BoWSelect*/}
        {/*        form={this.props.form}*/}
        {/*        label="Tier"*/}
        {/*        attributeName="Tier"*/}
        {/*        rules={[]}*/}
        {/*        placeholder="Please Select the tier"*/}
        {/*        disabled={false}*/}
        {/*        options={[{ label: '1', value: '1'}, {label: '2', value: '2'}]}*/}
        {/*        changeTrigger={this.handleSelectChange}*/}
        {/*    />*/}

        {/*    <BoWDatePicker*/}
        {/*        form={this.props.form}*/}
        {/*        label="Target Final Implementation Date"*/}
        {/*        attributeName="TargetFinalImplementationDate"*/}
        {/*        rules={[]}*/}
        {/*        placeholder="Please select the target final implementation date"*/}
        {/*        disabled={this.state.FinalImplementationDateDisabled}*/}
        {/*    />*/}

        {/*    <BoWUpload*/}
        {/*        form={this.props.form}*/}
        {/*        label="Submission Deck"*/}
        {/*        attributeName="SubmissionDeck"*/}
        {/*        rules={[]}*/}
        {/*        placeholder="Please submit your deck"*/}
        {/*        disabled={false}*/}
        {/*    />*/}

        {/*    <Form.Item {...tailFormItemLayout}>*/}
        {/*        <Button type="primary" htmlType="submit">*/}
        {/*            Submit*/}
        {/*        </Button>*/}
        {/*    </Form.Item>*/}
        {/*</Form>*/}
        <PICIntakeReviewPage PICIntakeDetail={mockData} />
        <Divider />
        <Form {...formItemLayout} onSubmit={this.handleCommentSubmit}>
          <BoWSelect
            form={this.props.form}
            label="Response to this request"
            attributeName="Approval"
            rules={[
              {
                required: true,
                message: "Please select your response!"
              }
            ]}
            placeholder="Please choose to approve or decline"
            disabled={userUnAuthorized}
            options={[
              { label: "Approve", value: "Approve" },
              { label: "Decline", value: "Decline" }
            ]}
            changeTrigger={this.handleApprovalSelectChange}
          />
          <BoWTextArea
            form={this.props.form}
            label="Review comment"
            attributeName="ReviewComment"
            rules={[
              {
                required: true,
                message: "Please input your reject comments!"
              }
            ]}
            placeholder="Please input the comment on you decision"
            disabled={userUnAuthorized}
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={userUnAuthorized}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedIntakeForm = Form.create({
  name: "intake_form_experiment"
})(IntakeForm);

export default WrappedIntakeForm;
