import { Table as Tabl } from 'antd';
//import 'antd/dist/antd.css'; 
import { CustomPagination } from "./pagination"
import './styles/table.scss';
import { fetchData } from '../config/api';
import { useEffect, useState } from 'react';
import { SkeletonTable } from './skeleton';
import { columns } from '../helper/table-colums';
import { FilterForm } from './filter-form';


type UserDataProps = {
    organization: string
    username: string
    email: string
    phone_number: string
    date_joined: string
    status: string
}

type UserResponse = {
    data: UserDataProps[]
}



const Table = () => {
    const url: string = "/data/all-users.json"
    const [isFetchingUsers, setIsFetchingUsers] = useState<boolean>(false);
    const [users, setUsers] = useState<UserDataProps[] | null>(null);

    // manage filter icon click
    const [isFilterIconClicked, setIsFilterIconClicked] = useState<boolean>(false)

    //  api to fetch data or get the users. 
    useEffect(() => {
        setIsFetchingUsers(true);
        const abortController = new AbortController();

        const fetchUsers = async () => {
            try {
                const users = await fetchData<UserResponse>(url, abortController.signal)
                setUsers(users.data)

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

    const handleFilterTable = () => {

    }

    if (isFetchingUsers) return (
        <div data-testid="loader" className="table">
            <SkeletonTable columns={columns(setIsFilterIconClicked)!} rows={10} />
        </div>
    )



    return (
        <div className="table-component">
            <FilterForm onSubmit={handleFilterTable} isVisible={ isFilterIconClicked } />
            <Tabl className='table customPagination' columns={columns(setIsFilterIconClicked)}
                dataSource={users!}
                // dataSource={users!.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                pagination={false} />
            <CustomPagination totalItems={100} />
        </div>
    )
};

export default Table;
