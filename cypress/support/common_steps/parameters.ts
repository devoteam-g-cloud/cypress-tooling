import { defineParameterType } from "@badeball/cypress-cucumber-preprocessor";

defineParameterType({
    name: "url",
    regexp: /((?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+)/,
    transformer(urlString) {
        return urlString;
    }
})