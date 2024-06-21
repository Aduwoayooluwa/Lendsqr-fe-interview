import { ActiveUser, UserWithLoanIcon, UserWithSavingsIcon, UsersIcon } from "../assets";

export interface UserStat {
    id: string;
    title: string;
    count: number;
    icon: string;
    color: string;
}

export const userStats: UserStat[] = [
    {
        id: 'users',
        title: 'USERS',
        count: 2453,
        icon: UsersIcon,
        color: '#2D9CDB'
    },
    {
        id: 'activeUsers',
        title: 'ACTIVE USERS',
        count: 2453,
        icon: ActiveUser,
        color: '#9B51E0'
    },
    {
        id: 'usersWithLoans',
        title: 'USERS WITH LOANS',
        count: 12453,
        icon: UserWithLoanIcon,
        color: '#EB5757'
    },
    {
        id: 'usersWithSavings',
        title: 'USERS WITH SAVINGS',
        count: 102453,
        icon: UserWithSavingsIcon,
        color: '#F2994A'
    }
];
