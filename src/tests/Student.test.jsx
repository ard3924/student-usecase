import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Student from '../components/Student';

const students = [{ name: 'Roy', grade: 'A' }];

describe('Student Component', () => {
  it('renders student name and grade in the table', () => {
    render(<Student student={students} />);
    expect(screen.getByText('Roy')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('updates status when button is clicked', async () => {
    render(<Student student={students} />);

    // check initial status is Absent
    expect(screen.getByText('Absent')).toBeInTheDocument();

    // click the button
    const button = screen.getByRole('button', { name: /Mark as Present/i });
    await userEvent.click(button);

    // check updated status
    expect(screen.getByText('Present')).toBeInTheDocument();
  });
});