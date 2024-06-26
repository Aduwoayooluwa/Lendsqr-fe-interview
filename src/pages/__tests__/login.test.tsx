// login.test.tsx
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import AuthProvider from '../../context/auth-context.tsx';
import Login from '../auth/login';

interface AuthContextModule {
  AuthProvider: React.ComponentType<{ children: React.ReactNode }>;

}

vi.mock('../../context/auth-context', async (importOriginal) => {
  const actual: AuthContextModule = await importOriginal();
  return {
    ...actual,
      AuthProvider: () => ({ children }: {
        children: React.ReactNode
    }) => <>{children}</>,
  };
});

// vi.mock('../../context/auth-context.tsx', () => ({
    //   useAuth: () => ({
    // setIsUserLoggedIn: vi.fn(),
    // setUserData: vi.fn(),
//   }),
// }));

describe('Login Component', () => {
  it('should handle form submission correctly', async () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await new Promise(resolve => setTimeout(resolve, 100));

  });
});