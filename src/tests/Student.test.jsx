<<<<<<< HEAD
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
=======
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Student from '../components/Student'; 

const students = [{ name: 'Roy', grade: 'A', status: 'Absent' }];

describe('Student Component', () => {
  
    it('renders student name and grade in the table', () => {
        render(<Student students={students} />);
        expect(screen.getByText('Roy')).toBeInTheDocument();
        expect(screen.getByText('A')).toBeInTheDocument();
    });

    
    it('updates status when button is clicked', async () => {
        render(<Student students={students} />);
        expect(screen.getByText('Roy')).toBeInTheDocument();
        expect(screen.getByText('A')).toBeInTheDocument();
    })

    // test case to check for the 'Present' text after the button click.
    it('marks a student as "Present" when the button is clicked', async () => {
        // Render the Student component with the test data.
        render(<Student students={students} />)
        const presentButton = screen.getByRole('button', { name: /Mark as Present/i });
        await userEvent.click(presentButton);
        const presentText = await screen.findByText('Present');
        expect(presentText).toBeInTheDocument();
    });
});
>>>>>>> d4d00d9ba8a5303de6517dafbe2750569b1fc6c9
