import React from 'react';
import { Table } from 'antd';
import '../../styles/loans.scss';
import { LoansProps, LoanDetail } from '../../../types/user-details.types';

export const loans_data : LoanDetail[] = [
        {
            id: 1,
            loanType: 'Personal Loan',
            amount: '$5000',
            interestRate: '5%',
            status: 'Active',
            startDate: '2021-01-01',
            dueDate: '2021-12-31'
        },
        {
            id: 2,
            loanType: 'Car Loan',
            amount: '$20000',
            interestRate: '3.5%',
            status: 'Pending',
            startDate: '2022-01-10',
            dueDate: '2024-01-10'
        }
    ];
const LoansComponent: React.FC<LoansProps> = ({ loans }) => {
    const columns = [
        {
            title: 'Loan Type',
            dataIndex: 'loanType',
            key: 'loanType',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Interest Rate',
            dataIndex: 'interestRate',
            key: 'interestRate',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text: string) => (
                <span className={`loan-status ${text.toLowerCase()}`}>{text}</span>
            ),
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
            key: 'dueDate',
        }
    ];

    return (
        <div className="loans-details">
            <Table 
                columns={columns} 
                dataSource={loans} 
                rowKey="id"
                pagination={false} 
            />
        </div>
    );
};

export default LoansComponent;
