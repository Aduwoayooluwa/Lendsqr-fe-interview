import React from 'react';
import {Select, Pagination } from 'antd';
import './styles/pagination.scss';
import { DefaultOptionType } from 'antd/es/select';

interface CustomPaginationProps {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    onChangePage: (page: number) => void;
    onChangePageSize: (size: number) => void;
  handlePageSizeChange: (value: number, option: DefaultOptionType | DefaultOptionType[]) => void;
}

export const CustomPagination: React.FC<CustomPaginationProps> = ({
    totalItems,
    currentPage,
    pageSize,
    onChangePage,
    onChangePageSize,
    handlePageSizeChange
}) => {

  const pageSizeOptions = [10, 20, 50, 100]

  
    return (
        <div className="custom-pagination" style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '8px', fontSize: "14px" }}>Showing</div>
    <Select<number>
      defaultValue={pageSize}
      style={{ width: 60 }}
      onChange={handlePageSizeChange}
    >
      {pageSizeOptions.map(size => (
        <Select.Option key={size} value={size}>{size}</Select.Option>
      ))}
    </Select>
    <div style={{ marginLeft: '8px', fontSize: "14px" }}>out of {totalItems}</div>
            <Pagination
                total={totalItems}
                current={currentPage}
                pageSize={pageSize}
                onChange={onChangePage}
                onShowSizeChange={onChangePageSize}
                showSizeChanger
          pageSizeOptions={['10', '20', '50', '100']}
          style={{ marginLeft: 'auto' }} 
            />
        </div>
    );
};
