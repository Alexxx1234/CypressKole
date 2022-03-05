///<reference types = "cypress"/>

it('Log in', function(){
    cy.visit('https://bbb.testpro.io')

    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type('pogosovalex@gmail.com');
    cy.get('[type="password"]').clear();
    cy.get('[type="password"]').type('te$t$tudent');
    cy.get('button').click();
    cy.get('.home').click();
    cy.get('[data-cy="btnLogOut"] > .fa').click();
    cy.get('[data-cy="loginForm"]');
    cy.get('.login-wrapper').click();
    cy.get('.login-wrapper').click();
    cy.get('[data-cy="loginForm"]').should('have.attr', 'data-cy', 'loginForm');
    
})