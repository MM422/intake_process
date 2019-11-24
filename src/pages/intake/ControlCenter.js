import React from 'react';
import { Table, Button, Modal } from 'antd';

const dataSource = [{
    id: '1',
    RequestorName: 'Max Mu',
    Tier: {
        value: '1',
        label: '1',
    },
    TargetFinalImplementationDate: '2019-01-01'
}, {
    id: '2',
    RequestorName: 'Xiaoyu Mu',
    Tier: {
        value: '2',
        label: '2',
    },
    TargetFinalImplementationDate: '2019-02-02'
}];

class ControlCenter extends React.Component {
    state = {
        modalVisible: false,
        activeRecordId: undefined,
    };

    handleEditVisible = (record) => {
        console.log(record);
    };

    render() {
        const columns = [
            {
                title: 'Requestor Name',
                dataIndex: 'RequestorName',
                key: 'RequestorName',
            },
            {
                title: 'Tier',
                dataIndex: 'Tier.label',
                key: 'Tier',
            },
            {
                title: 'Target Final Implementation Date',
                dataIndex: 'TargetFinalImplementationDate',
                key: 'TargetFinalImplementationDate',
            },
            {
                title: 'Actions',
                dataIndex: '',
                key: 'Actions',
                render: (value, row) => <Button size="small" onClick={() => {console.log(row.id)}}>Edit</Button>
            }
        ];
        return (
            <div>
                <Table
                    pagination={false}
                    columns={columns}
                    dataSource={dataSource}
                />
                <Modal
                    visible={false}
                >

                </Modal>
            </div>
        );
    }
}

export default ControlCenter;