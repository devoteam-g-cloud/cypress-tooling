
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"; 
import './parameters'

When("I type {string} on the input named {string}", (text: string, input: string) => {
    cy.get(`input[name=${input}]`).eq(0).type(text);
})

