import {
    GuarantorsIcon, LoansIcon, DecisionModelsIcon, SavingsIcon, WhitelistIcon,
    TransactionsIcon, LoanRequestIcon, KarmaIcon, SavingsProductIcons, FeesAndCharges,
    ServicesIcon, ServiceAccountIcon, SettlementIcon, ReportsIcon, PreferencesIcon, FeesAndPricingIcon,
    AuditLogIcon, OrganizationIcon, LoanProductsIcon,
    UserSidebarIcon,
    SystemMessagesIcon
} from "../assets"

type SidebarOptions = {
    id: string;
    name: string;
    icon: string;
};

export const customers: SidebarOptions[] = [
    { id: 'users', name: 'Users', icon: UserSidebarIcon },
    { id: 'guarantors', name: 'Guarantors', icon: GuarantorsIcon },
    { id: 'loans', name: 'Loans', icon: LoansIcon },
    { id: 'decisionModels', name: 'Decision Models', icon: DecisionModelsIcon },
    { id: 'savings', name: 'Savings', icon: SavingsIcon },
    { id: 'loanRequests', name: 'Loan Requests', icon: LoanRequestIcon },
    { id: 'whitelist', name: 'Whitelist', icon: WhitelistIcon },
    { id: 'karma', name: 'Karma', icon: KarmaIcon }
];

export const businesses: SidebarOptions[] = [
    { id: 'organization', name: 'Organization', icon: OrganizationIcon },
    { id: 'loanProducts', name: 'Loan Products', icon: LoanProductsIcon },
    { id: 'savingsProducts', name: 'Savings Products', icon: SavingsProductIcons },
    { id: 'feesAndCharges', name: 'Fees and Charges', icon: FeesAndCharges },
    { id: 'transactions', name: 'Transactions', icon: TransactionsIcon },
    { id: 'services', name: 'Services', icon: ServicesIcon },
    { id: 'serviceAccount', name: 'Service Account', icon: ServiceAccountIcon },
    { id: 'settlements', name: 'Settlements', icon: SettlementIcon },
    { id: 'reports', name: 'Reports', icon: ReportsIcon }
];

export const settings: SidebarOptions[] = [
    { id: 'preferences', name: 'Preferences', icon: PreferencesIcon },
    { id: 'feesAndPricing', name: 'Fees and Pricing', icon: FeesAndPricingIcon },
    { id: 'auditLog', name: 'Audit Log', icon: AuditLogIcon },
    { id: "systemmessages", name: "System Messages", icon: SystemMessagesIcon }
];
