import React, {Component} from 'react';
import { Descriptions } from 'antd';
const moment = require('moment');
const numeral = require('numeral');

const currencyFormatter = (currencyValue) => {
    return typeof currencyValue !== 'undefined' ? numeral(currencyValue).format('$ 0,0[.]00') : null;
};

const dateFormatter = (date) => {
    return date ? moment(date).format('YYYY-MM-DD'): null;
};

const monthFormatter = (date) => {
    return date ? moment(date).format('YYYY-MM'): null;
};

const columnSettings = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 };

const PICIntakeReviewPage = (props) => {
    const { PICIntakeDetail } = props;
    // Presenter ACF2s:
    const { Presenter } = PICIntakeDetail;
    const presenterACF2s = Presenter.map((presenter) => presenter.ACF2).join(',');

    return (
        <div>
            <Descriptions title="PIC Intake Review:" bordered size="small" column={columnSettings}>
                <Descriptions.Item label="Requester Name">{PICIntakeDetail.RequesterName}</Descriptions.Item>
                <Descriptions.Item label="Requester Email">{PICIntakeDetail.Email}</Descriptions.Item>
                <Descriptions.Item label="LOBPIC">{PICIntakeDetail.LOBPIC}</Descriptions.Item>
                <Descriptions.Item label="PIC Date">{PICIntakeDetail.PICDate}</Descriptions.Item>
                <Descriptions.Item label="Clarity Project ID">{PICIntakeDetail.ClarityProjectID}</Descriptions.Item>
                <Descriptions.Item label="Tranche Number">{PICIntakeDetail.TrancheNumber}</Descriptions.Item>
                <Descriptions.Item label="Clarity Project Name" span={2}>{PICIntakeDetail.ClarityProjectName}</Descriptions.Item>
                <Descriptions.Item label="Methodology">{PICIntakeDetail.Methodology}</Descriptions.Item>
                <Descriptions.Item label="Project Goal">{PICIntakeDetail.Goal}</Descriptions.Item>
                <Descriptions.Item label="Tier">{PICIntakeDetail.Tier}</Descriptions.Item>
                <Descriptions.Item label="Current Phase">{PICIntakeDetail.CurrentPhase}</Descriptions.Item>
                <Descriptions.Item label="PD/AVP">{PICIntakeDetail.PortfolioDirectorName}</Descriptions.Item>
                <Descriptions.Item label="Business Owner">{PICIntakeDetail.BusinessOwner}</Descriptions.Item>
                <Descriptions.Item label="Target Final Implementation Date">{dateFormatter(PICIntakeDetail.TargetFinalImplementationDate)}</Descriptions.Item>
                <Descriptions.Item label="Current Tranche Request">{PICIntakeDetail.CurrentTrancheRequest}</Descriptions.Item>
                <Descriptions.Item label="Reason" span={2}>{PICIntakeDetail.Reason}</Descriptions.Item>
                <Descriptions.Item label="Funding Ask Cash - Base">{currencyFormatter(PICIntakeDetail.FundingAskCashBase)}</Descriptions.Item>
                <Descriptions.Item label="Funding Ask Cash - Contingency">{currencyFormatter(PICIntakeDetail.FundingAskCashContingency)}</Descriptions.Item>
                <Descriptions.Item label="Funding Ask Cash - Total">{currencyFormatter(PICIntakeDetail.FundingAskCashTotal)}</Descriptions.Item>
                <Descriptions.Item label="Current Tranche Ask Start Date">{monthFormatter(PICIntakeDetail.CurrentTrancheAskStartDate)}</Descriptions.Item>
                <Descriptions.Item label="Current Tranche Ask End Date">{monthFormatter(PICIntakeDetail.CurrentTrancheAskEndDate)}</Descriptions.Item>
                <Descriptions.Item label="In / Out of Fiscal Prioritized Plan">{PICIntakeDetail.InOutOfFiscalPrioritizedPlan}</Descriptions.Item>
                <Descriptions.Item label="Presenter(s)" span={2}>{presenterACF2s}</Descriptions.Item>
                <Descriptions.Item label="Total One-Time Cost Cash">{currencyFormatter(PICIntakeDetail.TotalOneTimeCostCash)}</Descriptions.Item>
                <Descriptions.Item label="TPI">{currencyFormatter(PICIntakeDetail.TPI)}</Descriptions.Item>
                <Descriptions.Item label="FY20 EAC Cash">{currencyFormatter(PICIntakeDetail.Financial[0].Cash)}</Descriptions.Item>
                <Descriptions.Item label="FY20 EAC P&L">{currencyFormatter(PICIntakeDetail.Financial[0].PL)}</Descriptions.Item>
                <Descriptions.Item label="FY21 EAC Cash">{currencyFormatter(PICIntakeDetail.Financial[1].Cash)}</Descriptions.Item>
                <Descriptions.Item label="FY21 EAC P&L">{currencyFormatter(PICIntakeDetail.Financial[1].PL)}</Descriptions.Item>
                <Descriptions.Item label="Total Spend to Date Cash">{currencyFormatter(PICIntakeDetail.TotalSpendToDateCash)}</Descriptions.Item>
            </Descriptions>
        </div>
    );
};

export default PICIntakeReviewPage;