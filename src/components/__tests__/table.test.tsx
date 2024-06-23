import { describe, it, expect, beforeEach, vi, beforeAll } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Table from '../table';
import { fetchData } from '../../config/api';


window.fetch = vi.fn();

  
describe('Table ', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });



  it('should return JSON data on successful fetch', async () => {
    const mockJson = { key: 'value' };
    (window.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockJson),
      status: 200,
    });

    const url = '/data/all-users.json';
    const result = await fetchData<typeof mockJson>(url, new AbortController().signal);

    expect(result).toEqual(mockJson);
    expect(fetch).toHaveBeenCalledWith(url, { signal: expect.any(AbortSignal) });
  });

  it('should throw an error on non-200 status', async () => {
    (window.fetch as vi.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const url = '/data/bad-request';

    await expect(fetchData<{}>(url, new AbortController().signal))
      .rejects
      .toThrow('HTTP error! Status: 404');
  });

  it('should handle network or fetch errors', async () => {
    (window.fetch as vi.Mock).mockRejectedValueOnce(new Error('Network failure'));

    const url = '/data/fail';

    await expect(fetchData<{}>(url, new AbortController().signal))
      .rejects
      .toThrow('Network failure');
  });

    it('renders the table and displays data after loading',  async () => {
   // const { getAllByTestId } = render(<Table />);
    

   // Check for the data presence
    // expect(screen.getByText('Tech Co')).toBeInTheDocument();
    // expect(screen.getByText('jdoe@example.com')).toBeInTheDocument();

   // check for custom components like tags
    // const statusTag = screen.getByText('ACTIVE');
    // expect(statusTag).toBeInTheDocument();
    // expect(statusTag).toHaveClass('ant-tag-green'); 

   // check for actions or links
   // expect(screen.getByText('View Details').closest('a')).toHaveAttribute('href', '/users-details');
  });

  it("Check if the filter form is opening", () => {
    //render(<Table />)
  })
});