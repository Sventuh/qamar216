///<reference types="cypress" />

const { should } = require("chai");

it ('User should be able to login with valid data', () => {
cy.visit('https://react-redux.realworld.io');
cy.get(':nth-child(2) > .nav-link').click();
cy.get(':nth-child(1) > .form-control').type('sventuhcorp@gmail.com').should('have.value', 'sventuhcorp@gmail.com');
cy.get(':nth-child(2) > .form-control').type('drogba10').should('have.value', 'drogba10');
cy.get('.btn').click();
cy.get(':nth-child(4) > .nav-link').contains('Sventuh').should('exist');
});
        