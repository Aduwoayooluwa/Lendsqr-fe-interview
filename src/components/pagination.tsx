import React, { useState } from 'react';
import { Select, Pagination } from 'antd';
import { SelectProps } from 'antd/es/select';
import "./styles/pagination.scss"

interface CustomPaginationProps {
  totalItems: number;
  defaultPageSize?: number;
  pageSizeOptions?: Array<number>;
}

export const CustomPagination: React.FC<CustomPaginationProps> = ({
  totalItems,
  defaultPageSize = 10,
  pageSizeOptions = [10, 20, 50, 100]
}) => {
  const [pageSize, setPageSize] = useState<number>(defaultPageSize);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageSizeChange: SelectProps<number>['onChange'] = value => {
    setPageSize(value);
    setCurrentPage(1); 
  };

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
        pageSize={pageSize}
        current={currentPage}
        showSizeChanger={false} 
        onChange={page => setCurrentPage(page)}
        style={{ marginLeft: 'auto' }} 
      />
    </div>
  );
};

