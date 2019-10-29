import React, {Component} from 'react';
import {Form, Upload, Button, Icon} from 'antd';

class BoWUpload extends Component {
    normFile = e => {
        if (e && e.fileList && e.fileList.length > 0) {
            return e.fileList[e.fileList.length - 1].name;
        } else {
            return undefined;
        }
    };

    render() {
        const {form, label, attributeName, rules, initialValue} = this.props;
        const {getFieldDecorator} = form;
        return (
            <Form.Item label={label}>
                {getFieldDecorator(attributeName, {
                    valuePropName: 'fileList[fileList.length - 1]',
                    getValueFromEvent: this.normFile,
                })(
                    <Upload showUploadList={{showPreviewIcon: true, showRemoveIcon: false, showDownloadIcon: false}}>
                        <Button>
                            <Icon type="upload" /> Upload
                        </Button>
                    </Upload>,
                )}
            </Form.Item>
        );
    }
}

export default BoWUpload;