import React from 'react';
import '../../styles/general-details.scss';
import { UserResponse } from '../../../types/user-details.types';
import { Divider } from 'antd';


interface GeneralDetailsComponentProps {
    details: UserResponse;
}

const GeneralDetailsComponent: React.FC<GeneralDetailsComponentProps> = ({ details }) => {
    return (
        <div className="general-details">
            {/* Personal Information */}
            <div className="section">
                <h2>Personal Information</h2>
                <div className="content">
                    <div>
                        <strong>Full Name</strong>
                        <p> {details?.personal_information.full_name}</p>
                    </div>
                    <div>
                        <strong>Phone Number</strong>
                        <p> {details?.personal_information.phone_number}</p>
                    </div>

                    <div>
                        <strong>Email Address</strong>
                        <p>{details?.personal_information.email_address}</p>
                    </div>

                    <div>
                        <strong>BVN</strong>
                        <p>{details?.personal_information.bvn}</p>
                    </div>

                    <div>
                        <strong>Gender</strong>
                        <p>{details?.personal_information.gender}</p>
                    </div>

                    <div>
                        <strong>Marital Status</strong>
                        <p> {details?.personal_information.marital_status}</p>
                    </div>
                    <div>
                        <strong>Children:</strong>
                        <p>{details?.personal_information.children}</p>
                    </div>

                    <div>
                        <strong>Type of Residence:</strong>
                        <p> {details?.personal_information.type_of_residence}</p>
                    </div>
                </div>
            </div>

            <Divider />
            {/* Education and Employment */}
            <div className="section">
                <h2>Education and Employment</h2>
                <div className="content">
                    <div>
                        <strong>Level of Education:</strong>
                        <p>{details?.education_and_employment.level_of_education}</p>
                    </div>
                    <div>
                        <strong>Employment Status:</strong>
                        <p>{details?.education_and_employment.employment_status}</p>
                    </div>
                    <div>
                        <strong>Sector of Employment:</strong>
                        <p>{details?.education_and_employment.sector_of_employment}</p>
                    </div>
                    <div>
                        <strong>Duration of Employment:</strong>
                        <p>{details?.education_and_employment.duration_of_employment}</p>
                    </div>
                    <div>
                        <strong>Office Email:</strong>
                        <p>{details?.education_and_employment.office_email}</p>
                    </div>
                    <div>
                        <strong>Monthly Income:</strong>
                        <p>{details?.education_and_employment.monthly_income}</p>
                    </div>
                    <div>
                        <strong>Loan Repayment:</strong>
                        <p>{details?.education_and_employment.loan_repayment}</p>
                    </div>
                </div>
            </div>

            <Divider />

            {/* Socials */}
            <div className="section">
                <h2>Socials</h2>
                <div className="content">
                    <div>
                        <strong>Twitter:</strong>
                        <p>{details?.socials.twitter}</p>
                    </div>
                    <div>
                        <strong>Facebook:</strong>
                        <p>{details?.socials.facebook}</p>
                    </div>
                    <div>
                        <strong>Instagram:</strong>
                        <p>{details?.socials.instagram}</p>
                    </div>
                </div>
            </div>

            <Divider />
            
            {/* Guarantor */}
            <div className="section">
                <h2>Guarantor</h2>
                <div className="content">
                    <div>
                        <strong>Full Name:</strong>
                        <p>{details?.guarantor.full_name}</p>
                    </div>
                    <div>
                        <strong>Phone Number:</strong>
                        <p>{details?.guarantor.phone_number}</p>
                    </div>
                    <div>
                        <strong>Email Address:</strong>
                        <p>{details?.guarantor.email_address}</p>
                    </div>
                    <div>
                        <strong>Relationship:</strong>
                        <p>{details?.guarantor.relationship}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GeneralDetailsComponent;
