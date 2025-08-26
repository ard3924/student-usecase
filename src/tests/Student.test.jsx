import { render, screen } from '@testing-library/react';
import Student from '../components/Student';

const student = { name: 'Alice', grade: 'A' };

describe('Student Component', () => {

  it('renders student name and grade', () => {
    render(<Student student={student} />);
    const info = screen.getByTestId('student-info');
    expect(info).toHaveTextContent('Alice - A');
  });

});