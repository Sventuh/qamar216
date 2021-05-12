/// <reference types="cypress"/>

it ('First test', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('[name="username"]').type('tomsmith').should('have.value', 'tomsmith');
  cy.get('[name="password"]').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
  cy.get('button').click();
  cy.get('.icon-signout').should('contain', 'Logout');
});
it ('Next test', () => {
  cy.get('.icon-signout').click();
  cy.get('[type="submit"]').should('contain', 'Login');
});
it ('Last test', () => {
  cy.get('[name="username"]').type('InvalidUser').should('have.value', 'InvalidUser');
  cy.get('[name="password"]').type('Awesomepassword').should('have.value', 'Awesomepassword');
  cy.get('button').click();
  cy.get('[class="flash error"]').should('contain', 'Your username is invalid!');
});