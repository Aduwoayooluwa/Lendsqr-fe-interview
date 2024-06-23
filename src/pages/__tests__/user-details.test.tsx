import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import userEvent from '@testing-library/user-event';

import GeneralDetailsComponent from '../users/components/general-details';
import "../styles/general-details.scss"
import { BasicDetailsCard } from '../users/user-details';
import { UserDetailsIcon } from '../../assets';

const mockDetails = {
  personal_information: {
    full_name: "Grace Effiom",
    phone_number: "07086708922",
    email_address: "grace@gmail.com",
    bvn: "07086708922",
    gender: "Female",
    marital_status: "Single",
    children: "None",
    type_of_residence: "Parent's Apartment"
  },
  education_and_employment: {
    level_of_education: "B.Sc",
    employment_status: "Employed",
    sector_of_employment: "FinTech",
    duration_of_employment: "2 years",
    office_email: "grace@lendsqr.com",
    monthly_income: "₦200,000.00 - ₦400,000.00",
    loan_repayment: "40,000"
  },
  socials: {
    twitter: "@grace_effiom",
    facebook: "Grace Effiom",
    instagram: "@grace_effiom"
  },
  guarantor: {
    full_name: "Debby Ogana",
    phone_number: "07086708922",
    email_address: "debby@gmail.com",
    relationship: "Sister"
    }, data: {
        "id": "LGSFB7890",
        "name": "Grace Effiom",
        "tier": 2,
        "stars": 3,
        "balance": "₦200,000.00",
        "bank": {
                "account_number": "992345789",
                "bank_name": "Providus Bank"
        }
  }
};

describe('User Details', () => {

  it("Should render the basic details component", () => {
      const setManageCurrentTab = vi.fn();
        const { getByRole , getByText} = render (<BasicDetailsCard  manageCurrentTab="general details"
            isLoading={false}  setManageCurrentTab={setManageCurrentTab} details={mockDetails}
        />)

        //const getBasicDetails = getByTestId("basic-details");

        const img = getByRole('img', { name: /icon/i})
        // check if img displays correctly ;
        expect(img).toBeInTheDocument()

        expect(img).toHaveAttribute('src', UserDetailsIcon);

        expect(img).toHaveAttribute('alt', 'icon');

      expect(getByText("User's tier")).toBeInTheDocument();

    })

    it("should switch tabs correctly", async () => {
        const setManageCurrentTab = vi.fn();
        const initialTab = "general details";
        
        const { getByRole } = render(<BasicDetailsCard manageCurrentTab={initialTab} setManageCurrentTab={setManageCurrentTab} details={mockDetails} isLoading={false} />);

       
        const tabs = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];

        for (const tab of tabs) {
            const tabButton = getByRole('button', { name: tab });
            await userEvent.click(tabButton);
            expect(setManageCurrentTab).toHaveBeenCalledWith(tab.toLowerCase());
            setManageCurrentTab.mockClear(); 
        }
    });
  
    it('Check if h2 tags are present with correct titles', () => {
        const { getByTestId, getByText } = render(<GeneralDetailsComponent details={mockDetails} />);

       // debug();
        // Check for general layout styles
        const generalDetails = getByTestId('general_details');
        expect(generalDetails).toHaveClass('general-details');

        expect(getByText('Personal Information')).toBeInTheDocument();
        expect(getByText('Education and Employment')).toBeInTheDocument();
        expect(getByText('Socials')).toBeInTheDocument();
        expect(getByText('Guarantor')).toBeInTheDocument(); 

        //const contentDivs = getAllByTestId(/content-/i);    
    })
})