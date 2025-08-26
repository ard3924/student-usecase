import { render, screen } from '@testing-library/react';
import App from '../App';


describe('App Component', () => {

  it('renders Header and all StudentCards', () => {
    render(<App/>);

    // Header
    const headerTitle = screen.getByText(/Student Dashboard/i);
    expect(headerTitle).toBeInTheDocument();

    // Students
    const students = ['Roy - A', 'Anna - A', 'Sam - B'];
    students.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });



});