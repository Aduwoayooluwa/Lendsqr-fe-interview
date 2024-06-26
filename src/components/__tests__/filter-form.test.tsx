import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterForm } from '../filter-form'; 

describe('FilterForm Component', () => {
  const mockSubmit = vi.fn();
  const mockReset = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render correctly when isVisible is true', () => {
    render(<FilterForm onSubmit={mockSubmit} onReset={mockReset} isVisible={true} />);

    expect(screen.getByPlaceholderText('User')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();
  });

  it('should not render when isVisible is false', () => {
    render(<FilterForm onSubmit={mockSubmit} onReset={mockReset} isVisible={false} />);

    expect(screen.queryByText('Filter')).toBeNull();
  });

  it('should call onSubmit with form values on form submission', async () => {
    render(<FilterForm onSubmit={mockSubmit} onReset={mockReset} isVisible={true} />);

    await userEvent.type(screen.getByPlaceholderText('User'), 'john');
    await userEvent.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await userEvent.click(screen.getByText('Filter'));


    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({
      username: 'john',
      email: 'john@example.com'
    }));
});



  it('should reset the form fields when reset button is clicked', async () => {
      const { rerender } = render(<FilterForm onSubmit={mockSubmit} onReset={mockReset} isVisible={true} />);
    
    const inputUser = screen.getByPlaceholderText('User');
    await userEvent.type(inputUser, 'john');
    expect(inputUser).toHaveValue('john');

    await userEvent.click(screen.getByText('Reset'));

    await new Promise(resolve => setTimeout(resolve, 0))

    rerender(<FilterForm onSubmit={mockSubmit} onReset={mockReset} isVisible={true} />)
    expect(inputUser).toHaveValue('');
  });
});
