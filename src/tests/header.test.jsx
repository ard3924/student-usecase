import Header from '../components/Header';
import { render, screen } from '@testing-library/react';

describe("Sample Component", () => {
    it('renders Sample component with input and button', () => {
        render( <Header /> );
        const header = screen.getByText(/Student DashBoard/i)
        expect (header).toBeInTheDocument();

    });
});


    // it("displays message only after clicking the button", async () => {
    //     // Arrange
    //     render(<Sample />);
    //     const input = screen.getByPlaceholderText("Name");
    //     const button = screen.getByRole("button", { name: /Click me/i });

    //     // Action: typing into input field
    //     await userEvent.type(input, "Aravind");

    //     // Assert: before clicking, greeting should not show
    //     expect(screen.queryByText("Aravind")).not.toBeInTheDocument();

    //     // Action: clicking the button
    //     await userEvent.click(button);

    //     // Assert: after clicking the button the textField below to be as shown
    //     expect(screen.getByText("Hello, Aravind")).toBeInTheDocument();
    // })

