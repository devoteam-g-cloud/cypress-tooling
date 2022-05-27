import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should have an image with alt {string}", (altText) => {
    cy.get(`img[alt='${altText}']`).should("exist")
})