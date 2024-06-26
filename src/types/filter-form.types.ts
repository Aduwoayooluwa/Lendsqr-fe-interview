export interface UserDataProps {
    organization: string;
    username: string;
    email: string;
    phone_number: string;
    date_joined: string;
    status: string;
}

export type FilterValues = {
    organization?: string;
    username?: string;
    email?: string;
    phone_number?: string;
    date_joined?: Date | string;
    status?: string;
}

export interface Filters {
    [key: string]: string | Date | undefined;
}
