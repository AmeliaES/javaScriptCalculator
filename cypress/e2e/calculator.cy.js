describe('using calculator', () => {
  beforeEach(() => {
    cy.visit('/calculator.html'); // using baseURL in cypress.config.js
  });

  it('should load the calculator', () => {
    cy.get('[data-cy="calculator"]').should('exist');
  });

  // Check the buttons are all correctly labeled
  it('checks numeric buttons should be the correct numbers', () => {
    cy.get('[data-cy="1"]').should('have.text', '1');
    cy.get('[data-cy="2"]').should('have.text', '2');
    cy.get('[data-cy="3"]').should('have.text', '3');
    cy.get('[data-cy="4"]').should('have.text', '4');
    cy.get('[data-cy="5"]').should('have.text', '5');
    cy.get('[data-cy="6"]').should('have.text', '6');
    cy.get('[data-cy="7"]').should('have.text', '7');
    cy.get('[data-cy="8"]').should('have.text', '8');
    cy.get('[data-cy="9"]').should('have.text', '9');
    cy.get('[data-cy="0"]').should('have.text', '0');
  });

  it('checks the operator buttons should be the correct operators', () => {
    cy.get('[data-cy="add"]').should('have.text', '+');
    cy.get('[data-cy="minus"]').should('have.text', '-');
    cy.get('[data-cy="multiply"]').should('have.text', '*');
    cy.get('[data-cy="divide"]').should('have.text', '/');
  });

  it('checks the decimal button is a decimal point', () => {
    cy.get('[data-cy="decimal"]').should('have.text', '.');
  });

  it('checks the equals button is an equals sign', () => {
    cy.get('[data-cy="equals"]').should('have.text', '=');
  });

  it('checks the clear button is a clear button', () => {
    cy.get('[data-cy="clear"]').should('have.text', 'C');
  });

  // Check some basic calculations
  it('should perform basic addition of two single digit numbers', () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="add"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '3');
  });

  it('should perform basic subtraction of two single digit numbers', () => {
    cy.get('[data-cy="9"]').click();
    cy.get('[data-cy="minus"]').click();
    cy.get('[data-cy="4"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '5');
  });

  it('should perform basic multiplication of two single digit numbers', () => {
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="multiply"]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '15');
  });

  it('should perform basic division of two single digit numbers', () => {
    cy.get('[data-cy="8"]').click();
    cy.get('[data-cy="divide"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '4');
  });

  it('should not allow multiple decimal points in a single number', () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="decimal"]').click();
    cy.get('[data-cy="decimal"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '1.');
  });

  it('should clear the display if C is clicked', () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="clear"]').click();
    cy.get('[data-cy="answer"]')
      .invoke('text')
      .should('match', /^\s*$/ ); // in order to make this test not too constrained, match against any white space or empty string
  });

  it('if a user clicks on an operator multiple times in a row, the last operator should be the one that is used', () => {
    cy.get('[data-cy="6"]').click();
    cy.get('[data-cy="add"]').click();
    cy.get('[data-cy="minus"]').click();
    cy.get('[data-cy="multiply"]').click();
    cy.get('[data-cy="divide"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '3');
  });

  it('if a number is divided by zero, the display should show "Undefined"', () => {
    cy.get('[data-cy="8"]').click();
    cy.get('[data-cy="divide"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="answer"]').should('have.text', 'Undefined');
  });

  // Number button options and updating display:
  it('if user clicks on a number and previous button was a number, the number should be appended to the string', () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="4"]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '12345');
  });

  it('if user clicks on an operator and previous button was a number, the previous number should be displayed', () => {
    cy.get('[data-cy="6"]').click();
    cy.get('[data-cy="add"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '6');
  });

  it('if user clicks on a number and previous button was an operator, the number should be displayed', () => {
    cy.get('[data-cy="7"]').click();
    cy.get('[data-cy="add"]').click();
    cy.get('[data-cy="8"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '8');
  });

  it('if user clicks on a number and previous button was an equals, the number should be displayed', () => {
    cy.get('[data-cy="9"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="8"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '8');
  });

  it('if the display is clear, and a number button is clicked, the number should be displayed', () => {
    cy.get('[data-cy="clear"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '1');
  });

})