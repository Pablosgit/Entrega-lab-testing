import React from "react";
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import { ConfirmationDialogComponent } from "./confirmation-dialog.component"

describe('ConfirmationDialog componet spec', () => {
  it("Should display Dialog", ()=>{
    // Arrange
    const LabelProps = {
      closeButton: "close",
      acceptButton: "accept",
    }
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: "Title",
      labels: LabelProps,
    };
    // Act
    render(< ConfirmationDialogComponent {...props} />);
    const element = screen.getByRole('button');
    // Assert
    expect(element).toBeInTheDocument();
  })
})
