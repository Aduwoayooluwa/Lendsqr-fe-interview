import React from 'react';
import { Table, Button } from 'antd';
import '../../styles/documents.scss';
import toast from 'react-hot-toast/headless';


interface Document {
    id: number;
    name: string;
    date: string;
    type: string;
    status: string;
}

interface DocumentDetailsProps {
    documents: Document[];
}

const DocumentDetails: React.FC<DocumentDetailsProps> = ({ documents }) => {
    const columns = [
        {
            title: 'Document Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Date Uploaded',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <span className={status.toLowerCase()}>{status}</span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Button type="link" onClick={() => {
                    toast.success("Document downloaded!")
                }}>View</Button>
            ),
        },
    ];

    return (
        <div className="document-details">
            <Table dataSource={documents} columns={columns} pagination={false} rowKey="id" />
        </div>
    );
};

export default DocumentDetails;
