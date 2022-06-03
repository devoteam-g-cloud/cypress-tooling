import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { contains } from "cypress/types/jquery";

When("I click on the button {string}", (btnText: string) => {
    cy
        .contains(btnText)
        .filter(`button:visible, input[value=button]:visible, input[type=submit]:visible`)
        .eq(0)
        .click();
})

When("I click on the button {string} if it exists", (btnText: string) => {
    cy
        .get(`button:visible, input[value=button]:visible, input[type=submit]:visible`)
        .then(buttons => {
            if(buttons.length > 0 && buttons.text().includes(btnText)) {
                buttons.find(`:contains(${btnText})`).trigger('click')
            }
        })
})