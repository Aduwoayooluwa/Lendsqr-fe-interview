type BankDetails = {
    account_number: string;
    bank_name: string;
}

type PersonalInformation = {
    full_name: string;
    phone_number: string;
    email_address: string;
    bvn: string;
    gender: string;
    marital_status: string;
    children: string;
    type_of_residence: string;
}

type EducationAndEmployment = {
    level_of_education: string;
    employment_status: string;
    sector_of_employment: string;
    duration_of_employment: string;
    office_email: string;
    monthly_income: string;
    loan_repayment: string;
}

type Socials = {
    twitter: string;
    facebook: string;
    instagram: string;
}

type Guarantor = {
    full_name: string;
    phone_number: string;
    email_address: string;
    relationship: string;
}

type UserData = {
    id: string;
    name: string;
    tier: number;
    stars: number;
    balance: string;
    bank: BankDetails;
}

export type UserResponse = {
    data: UserData;
    personal_information: PersonalInformation;
    education_and_employment: EducationAndEmployment;
    socials: Socials;
    guarantor: Guarantor;
}


export interface Bank_Details {
    accountNumber: string;
    bankName: string;
    branchCode?: string;
    accountType: string;
    currency: string;
}

export interface BankDetailsProps {
    bankDetails: Bank_Details;
}

export interface LoanDetail {
    id: number;
    loanType: string;
    amount: string;
    interestRate: string;
    status: string;
    startDate: string;
    dueDate: string;
}

export interface LoansProps {
    loans: LoanDetail[];
}

export interface SavingsDetail {
    id: number;
    accountType: string;
    balance: string;
    interestRate: string;
    status: string;
}

export interface SavingsProps {
    savings: SavingsDetail[];
}

export interface AppSystemDetail {
    feature: string;
    status: string;
    lastUpdated: string;
}

export interface AppSystemProps {
    appSystemDetails: AppSystemDetail[];
}
