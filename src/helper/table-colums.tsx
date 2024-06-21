import { Tag, Dropdown, Menu } from 'antd';
import { FilterIcon } from '../assets';
import { MoreOutlined } from '@ant-design/icons';


const menu = (
    <Menu>
        <Menu.Item key="1">
            View Details
        </Menu.Item>
        <Menu.Item key="2">
            Blacklist User
        </Menu.Item>
        <Menu.Item key="3">
            Activate User
        </Menu.Item>
    </Menu>
);

const FilterComponent = ({ setIsFilterIconClicked }: {
    setIsFilterIconClicked: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
            <img onClick={() => {
                setIsFilterIconClicked((prev: boolean) => !prev)
            }} src={FilterIcon} className='filter-icon' alt="Filter" />
    )
}

const dropdownRender = () => (
    <Dropdown overlay={menu}>
        <a className="ant-dropdown" onClick={e => e.preventDefault()}>
            <MoreOutlined style={{ fontSize: '20px', color: "#545F7D" }} />
        </a>
    </Dropdown>
);


export const columns = (setIsFilterIconClicked: React.Dispatch<React.SetStateAction<boolean>>) =>  [
    {
        title: () => (
            <div className="column-title" >
                <p>ORGANIZATION </p> <FilterComponent setIsFilterIconClicked={setIsFilterIconClicked} />
            </div>
        ),
        dataIndex: 'organization',
        key: 'organization',
    },
    {
        title: () => (
            <div className="column-title" >
                <p>USERNAME </p> <FilterComponent setIsFilterIconClicked={setIsFilterIconClicked} />
            </div>
        ),
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: () => (
            <div className="column-title" >
                EMAIL < FilterComponent setIsFilterIconClicked={setIsFilterIconClicked} />
            </div>
        ),
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: () => (
            <div className="column-title" >
                PHONE NUMBER < FilterComponent setIsFilterIconClicked={setIsFilterIconClicked} />
            </div>
        ),
        dataIndex: 'phone_number',
        key: 'phone_number',
    },
    {
        title: () => (
            <div className="column-title" >
                DATE JOINED < FilterComponent setIsFilterIconClicked={setIsFilterIconClicked} />
            </div>
        ),
        dataIndex: 'date_joined',
        key: 'date_joined',
    },
    {
        title: () => (
            <div className="column-title" >
                STATUS < FilterComponent setIsFilterIconClicked={setIsFilterIconClicked} />
            </div>
        ),
        dataIndex: 'status',
        key: 'status',
        render: (status: string) => {
            let color: string = 'geekblue';
            if (status.toLowerCase() === 'inactive') color = 'volcano';
            else if (status.toLowerCase() === 'active') color = 'green';
            else if (status.toLowerCase() === 'pending') color = 'gold';
            else if (status.toLowerCase() === "blacklisted") color = "red"
            return (
                <Tag style={{ borderRadius: "100px" }
                } color={color} > {status.toUpperCase()}
                </Tag>
            );


        },
    },
    {
        title: '',
        key: 'actions',
        render: () => dropdownRender(),
    }
];