
import React from 'react';
import '../../styles/bank-details.scss';
import { BankDetailsProps, Bank_Details } from '../../../types/user-details.types';

export const bankDetails_: Bank_Details = {
        accountNumber: '5234560890',
        bankName: 'Sterling Bank',
        branchCode: '32A4',
        accountType: 'Checking',
        currency: 'NGN'
    };
const BankDetailsComponent: React.FC<BankDetailsProps> = ({ bankDetails }) => {
    return (
        <div className="bank-details-card">
            <div className="bank-details-content">
                <h2>Bank Details</h2>
                <div className="details">
                    <div>
                        <strong>Bank Name</strong>
                        <p>
                           {bankDetails.bankName}
                        </p>
                    </div>

                    <div>
                        <strong>Account Number</strong> 
                        <p>{bankDetails.accountNumber}</p>
                    </div>
                    
                    <div>
                        <strong>Branch Code</strong>
                        <p> {bankDetails.branchCode}</p>
                    </div>

                    <div>
                            <strong>Account Type</strong>
                            <p> {bankDetails.accountType}</p>
                    </div>
                    
                    <div>
                        <strong>Currency</strong> 
                        <p>{bankDetails.currency}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankDetailsComponent;
