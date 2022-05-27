import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I should see a list of {int} markups with selector {string}", (quantity: number, selector: string) => {
    cy.get(selector).should('have.length', quantity);
})