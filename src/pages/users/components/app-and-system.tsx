// src/components/AppSystemComponent.tsx
import React from 'react';
import { List } from 'antd';
import '../../styles/app-and-system.scss';
import { AppSystemProps, AppSystemDetail } from '../../../types/user-details.types';

export const appSystemDetails: AppSystemDetail[] = [
        {
            feature: 'Application Version',
            status: '1.2.5',
            lastUpdated: '2024-06-15'
        },
        {
            feature: 'Database Sync',
            status: 'Active',
            lastUpdated: '2024-05-18'
        },
        {
            feature: 'System Backup',
            status: 'Completed',
            lastUpdated: '2024-04-20'
        }
];
    
const AppSystem: React.FC<AppSystemProps> = ({ appSystemDetails }) => {
    return (
        <div className="app-system-details">
            <List
                itemLayout="horizontal"
                dataSource={appSystemDetails}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="javascript:void(0);">{item.feature}</a>}
                            description={`Status: ${item.status} - Last updated: ${item.lastUpdated}`}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default AppSystem;
