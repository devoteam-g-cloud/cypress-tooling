# cypress-tooling
Cypress + Cucumber test suite

## Purpose of this repository
The aim of this repository is to help project members write end to end tests in an easier way, even if the person does not have a technical background. This project uses [Cucumber](https://cucumber.io/) and the Gherkin language syntax to let people write tests in a natural language, without code. It is transcribed into code with helper functions that the developers can use and extend for re-use purposes.

We can break down tests in features that will contain multiple scenarios with the `Given...When...Then` syntax. The developers can match the syntax in step definition files to choose what code to execute when we encounter a specific sentence. It supports the use of parameters in the sentence.

## Setup
### Requirements
- Node.js >= 16

### Install and run
- `npm install`
- For the GUI version, `npm run open`
- For the CLI version, `npm start`

## Usage
To create new features that will run tests, you can extend the existing ones or create new ones in the root of the `cypress/integration` folder. You can read the documentation [here](https://cucumber.io/docs/gherkin/reference/) for syntaxic help. Your feature file must have the `.feature` file extension.

In order to write or extend the step definitions (eg. the functions that execute some code related to a phrase), you can write "standard" definitions in the `cypress/support/common_steps` folder. Think of this folder as a "standard library" for definitions.

Otherwise, if your step definition is tightly coupled to your feature, you can create definitions in the `cypress/integration/steps` folder, with the same file name you used for your feature. For instance : `google.feature` and `steps/google.ts`.

You will need the Cucumber Preprocessor [documentation](https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/docs) and the Cypress [documentation](https://docs.cypress.io/api/table-of-contents) to get started.
