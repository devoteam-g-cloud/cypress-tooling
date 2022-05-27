
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"; 
import './parameters'

Given("I am on the page {url}", (url: string) => {
    cy.visit(url)
})

When("I visit the page {url}", (url: string) => {
    cy.visit(url)
})
