import React from 'react';
import { Table } from 'antd';
import '../../styles/savings.scss';
import { SavingsProps, SavingsDetail } from '../../../types/user-details.types';

export const savings: SavingsDetail[] = [
        {
            id: 1,
            accountType: 'Fixed Deposit',
            balance: '$15,000',
            interestRate: '4.5%',
            status: 'Active'
        },
        {
            id: 2,
            accountType: 'Regular Savings',
            balance: '$5,000',
            interestRate: '3%',
            status: 'Pending'
        }
];
    
const SavingsComponent: React.FC<SavingsProps> = ({ savings }) => {
    const columns = [
        {
            title: 'Account Type',
            dataIndex: 'accountType',
            key: 'accountType',
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
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
                <span className={`savings-status ${text.toLowerCase()}`}>{text}</span>
            ),
        }
    ];

    return (
        <div className="savings-details">
            <Table 
                columns={columns} 
                dataSource={savings} 
                rowKey="id"
                pagination={false} 
            />
        </div>
    );
};

export default SavingsComponent;
