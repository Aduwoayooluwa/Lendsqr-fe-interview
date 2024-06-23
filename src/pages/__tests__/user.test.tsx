import { describe, it, vi, expect } from "vitest";
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserStatCard } from "../users/users";
describe("User Dashboard", () => {

     const mockProps = {
     icon: "path/to/icon.svg",
     title: "Users",
     number: 1000
 };
    it("Should show to user stat cards", () => {                          
        const { getByTestId, queryByTestId } = render(<UserStatCard {...mockProps} />);
        expect(getByTestId('skeleton-loader')).toBeInTheDocument();

        //  checks that the content is not visible yet
        expect(queryByTestId('number-stat')).toBeNull();                       

    })

    it("Displays the value after loading", () => {
         vi.useFakeTimers();

        const {getByText } = render(<UserStatCard {...mockProps} />);

        act(() => {
            vi.advanceTimersByTime(2000);
        })
        expect(getByText("1,000")).toBeInTheDocument();

         vi.useRealTimers(); 
    })

    it("Should display the table", () => {
        
    })
})