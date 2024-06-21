import React from 'react';
import { Skeleton, Table } from 'antd';
import { ColumnType, ColumnGroupType, ColumnsType } from 'antd/lib/table/interface';

interface User {
  id: number;
  name: string;
  email: string;
}

interface SkeletonTableProps {
  rows: number;
  columns: ColumnsType<User>; 
}

export const SkeletonTable: React.FC<SkeletonTableProps> = ({ rows, columns }) => {

  const modifiedColumns = columns.map((col): ColumnType<User> | ColumnGroupType<User> => {
    if ('children' in col) {
   
      return col;
    } else {
   
      return {
        ...col,
        dataIndex: col.dataIndex || 'id',
        render: () => <Skeleton.Input style={{ width: 100 }} active size="small" />,
      };
    }
  });

  return (
    <Table<User>
      rowKey="id"
      dataSource={Array.from({ length: rows }, (_, key) => ({
        id: key,
        name: '',
        email: ''
      }))}
      pagination={false}
      columns={modifiedColumns}
    />
  );
};

