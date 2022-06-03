import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { contains } from "cypress/types/jquery";

When("I click on the button {string}", (btnText: string) => {
    cy
        .contains(btnText)
        .filter(`button, input[value=button], input[type=submit]`)
        .eq(0)
        .click();
})

When("I click on the button {string} if it exists", (btnText: string) => {
    cy
        .get(`button, input[value=button], input[type=submit]`)
        .then(buttons => {
            if(buttons.length > 0 && buttons.find(`:contains(${btnText})`).length > 0) {
                buttons.find(`:contains(${btnText})`).trigger('click')
            }
        })
})