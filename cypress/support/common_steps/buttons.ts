import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I click on the button {string}", (btnText: string) => {
    cy.contains(btnText).filter(`button, input[value=button], input[type=submit]`).eq(0).click();
})