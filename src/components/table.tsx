
import { SelectProps, Table as Tabl } from 'antd';
//import 'antd/dist/antd.css'; 
import { CustomPagination } from "./pagination"
import './styles/table.scss';
import { fetchData } from '../config/api';
import { useEffect, useState } from 'react';
import { SkeletonTable } from './skeleton';
import { columns } from '../helper/table-colums';
import { FilterForm } from './filter-form';
import { Filters } from '../types/filter-form.types';


type UserDataProps = {
    organization: string
    username: string
    email: string
    phone_number: string
    date_joined: string
    status: string
    [key: string]: string | Date;
}

type UserResponse = {
    data: UserDataProps[]
}




const Table = () => {
    const url: string = "/data/all-users.json"
    const [isFetchingUsers, setIsFetchingUsers] = useState<boolean>(false);
    const [users, setUsers] = useState<UserDataProps[] | null>([]);


    // manage filter icon click
    const [isFilterIconClicked, setIsFilterIconClicked] = useState<boolean>(false)

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);

    const [filteredUsers, setFilteredUsers] = useState<UserDataProps[]>([]);

    //  api to fetch data or get the users. 
    useEffect(() => {
        setIsFetchingUsers(true);
        const abortController = new AbortController();

        const fetchUsers = async () => {
            try {
                const users = await fetchData<UserResponse>(url, abortController.signal)
                setUsers(users.data)
                setFilteredUsers(users.data);

            }
            catch (error) {
                return error
            }
            finally {
                setIsFetchingUsers(false);
            }
        }

        const timer = setTimeout(() => {
            fetchUsers();
        }, 2000)


        return () => {
            abortController.abort()
            clearTimeout(timer)
        }

    }, [])

    //const currentData = users?.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleFilterTable = (filters: Filters): void => {
    const filtered = users!.filter((user: UserDataProps) => {
        return Object.entries(filters).every(([key, value]) => {
            if (!value) return true; 
            
            
            if (key === 'date_joined' && value instanceof Date) {
                return new Date(user.date_joined).toDateString() === value.toDateString();
            }

           
            return user[key]?.toString().toLowerCase().includes(value.toString().toLowerCase());
        });
    });
    setFilteredUsers(filtered);
    setCurrentPage(1); 
};

const handleResetFilter = (): void => {
    setFilteredUsers(users!);
};



    const handlePageSizeChange: SelectProps<number>['onChange'] = (value) => {
        setPageSize(value);
        setCurrentPage(1);
    };

    if (isFetchingUsers) return (
        <div data-testid="loader" className="table">
            <SkeletonTable columns={columns(setIsFilterIconClicked)!} rows={10} />
        </div>
    )



    return (
        <div className="table-component">
            <FilterForm onReset={handleResetFilter}  onSubmit={handleFilterTable} isVisible={isFilterIconClicked} />
            <Tabl className='table customPagination' columns={columns(setIsFilterIconClicked)}
                dataSource={filteredUsers!.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                // dataSource={users!.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                pagination={false} />
            <CustomPagination
                totalItems={filteredUsers!.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onChangePage={setCurrentPage}
                onChangePageSize={setPageSize}
                handlePageSizeChange={handlePageSizeChange}
            />
        </div>
    )
};

export default Table;
