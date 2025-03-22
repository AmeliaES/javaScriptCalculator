describe('using calculator', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculator.html');
  })

  it('should load the calculator', () => {
    cy.get('[data-cy="calculator"]').should('exist');
  })

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
  })

  it('checks the operator buttons should be the correct operators', () => {
    cy.get('[data-cy="add"]').should('have.text', '+');
    cy.get('[data-cy="minus"]').should('have.text', '-');
    cy.get('[data-cy="multiply"]').should('have.text', '*');
    cy.get('[data-cy="divide"]').should('have.text', '/');
  })

  it('checks the decimal button is a decimal point', () => {
    cy.get('[data-cy="decimal"]').should('have.text', '.');
  })

  it('checks the equals button is an equals sign', () => {
    cy.get('[data-cy="equals"]').should('have.text', '=');
  })

  it('checks the clear button is a clear button', () => {
    cy.get('[data-cy="clear"]').should('have.text', 'C');
  }) 

  // Check some basic calculations
  it('should perform basic addition of two single digit numbers', () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="add"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '3');
  })

  it('should perform basic subtraction of two single digit numbers', () => {
    cy.get('[data-cy="9"]').click();
    cy.get('[data-cy="minus"]').click();
    cy.get('[data-cy="4"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '5');
  })

  it('should perform basic multiplication of two single digit numbers', () => {
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="multiply"]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '15');
  })

  it('should perform basic division of two single digit numbers', () => {
    cy.get('[data-cy="8"]').click();
    cy.get('[data-cy="divide"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="answer"]').should('have.text', '4');
  })

})