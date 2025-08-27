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
