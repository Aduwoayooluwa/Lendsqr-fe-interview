import { Button, Divider, Spin, Skeleton } from "antd"
import { BackToUsersIcon, UserDetailsIcon } from "../../assets"
import "../styles/user-details.scss"
import { UserResponse } from "../../types/user-details.types"
import { useGetUserDetails } from "../../hooks/use-user"
import React, { useState } from "react"
import GeneralDetailsComponent from "./components/general-details"
import { motion } from 'framer-motion';
import documentData from "../../helper/document-data"
import DocumentDetails from "./components/documents"
import BankDetails, { bankDetails_ } from "./components/bank-details"
import Loans, { loans_data } from "./components/loans"
import Savings, { savings } from "./components/savings"
import AppSystem, { appSystemDetails } from "./components/app-and-system"
import { Link } from "@tanstack/react-router"
import TransitionWrapper from "../../template"


interface TabsProps {
    manageCurrentTab: string;
    setManageCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<TabsProps> = ({ manageCurrentTab, setManageCurrentTab }) => {
    const tabs = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];
    
    const findTabIndex = (tabName: string) => tabs.findIndex(tab => tab.toLowerCase() === tabName);
    const underlineStyle = {
        left: `${findTabIndex(manageCurrentTab) * (100 / tabs.length)}%`,
        width: `${100 / tabs.length}%`
    };

    return (
        <div className="tabs-details">
            {tabs.map(tab => (
                <button
                    key={tab}
                    type="button"
                    onClick={() => setManageCurrentTab(tab.toLowerCase())}
                    className={manageCurrentTab === tab.toLowerCase() ? "active" : ""}
                >
                    {tab}
                </button>
            ))}
            <motion.div
                className="underline"
                style={underlineStyle}
                initial={{ left: 0, width: `0%` }}
                animate={{ left: underlineStyle.left, width: underlineStyle.width }}
                transition={{ duration: 0.3 }}
            />
        </div>
    );
};

export const BasicDetailsCard: React.FC<{details: UserResponse, manageCurrentTab: string, isLoading: boolean, setManageCurrentTab: React.Dispatch<React.SetStateAction<string>>}> = ({ details, setManageCurrentTab, manageCurrentTab, isLoading }) => {
    // const { name, id, tier, stars, balance, bank } = details.data;

    return (
        <div data-testid="basic-details" className="details-card">
        <div className="basic-details-card">
            <div className="user-icon-profile">
                <img src={UserDetailsIcon} alt="icon" />
            </div>
            
            <div className="user-info">
                <div className="user-details">
                    <div className="user-name">{isLoading ? (<Skeleton.Input />)  : details?.data.name}</div>
                    <div className="user-id">{isLoading ? (<Skeleton.Input />)  : details?.data.id}</div>
                </div>
            </div>

            <Divider type="vertical" className="border-divider" />
            <div className="user-tier" data-testid="user-tier">
                <p>User&apos;s tier</p>

                <p className="star">{isLoading ? (<Skeleton.Input />) : '★'.repeat(details?.data.stars)}</p>
            </div>

            <Divider type="vertical" className="border-divider" />

            <div className="user-balance">
               <p className="balance-user"> {isLoading ? (<Skeleton.Input />) : details?.data.balance}</p>
                <div className="bank-details">{isLoading ? (<Skeleton.Input />)  : details?.data.bank.account_number}/{isLoading ? (<Skeleton.Input />)  : details?.data.bank.bank_name}</div>
            </div>
        </div>

            {/* tabs for switching */}
            <div className="tab-menu-switch">
                <Tabs manageCurrentTab={manageCurrentTab} setManageCurrentTab={setManageCurrentTab} />
            </div>
        </div>
    );
}


export default function UserInfo() {
    const { userDetails, isFetchingDetails } = useGetUserDetails();
    const [manageCurrentTab, setManageCurrentTab] = useState("general details")
    
    return (
        <div className="user-details">

            {/* header  */}
            <header>
                <Link to="/user" style={{textDecoration: "none"}}>
                    <div className="previous-icon-el">
                        {/* back to users table page */}
                        <img src={BackToUsersIcon} alt="back icon" />
                        <p style={{color:"#545F7D", marginLeft: "15px"}}>Back to Users</p>
                    </div>
                </Link>

                <div className="header-action">
                    <p className="text-title">User Details</p>

                    <div className="action-btn">
                        <Button className="blacklist-btn">Blacklist User</Button>
                        <Button className="activate-btn">Activate User</Button>
                    </div>
                </div>
            </header>

            <main>
                <TransitionWrapper>
                    <BasicDetailsCard manageCurrentTab={manageCurrentTab} setManageCurrentTab={setManageCurrentTab} details={userDetails!} isLoading={isFetchingDetails} />
                </TransitionWrapper>
                <div>
                    {isFetchingDetails ? (<div className="align-spin">
                        <Spin size="large" />
                    </div>) : manageCurrentTab.toLowerCase() === "general details" && <GeneralDetailsComponent details={userDetails!} />}
                    {manageCurrentTab.toLowerCase() === "documents" && <DocumentDetails documents={documentData!} />}
                    {manageCurrentTab.toLowerCase() === "bank details" && <BankDetails bankDetails={bankDetails_} />}
                    {manageCurrentTab.toLowerCase() === "loans" && <Loans loans={loans_data} />}
                    {manageCurrentTab.toLowerCase() === "savings" && <Savings savings={savings} />}
                    {manageCurrentTab.toLowerCase() === "app and system" && <AppSystem appSystemDetails={appSystemDetails} />}
                </div>
                
            </main>
        </div>
    )
}
