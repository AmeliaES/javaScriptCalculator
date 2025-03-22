# Create a simple calculator in JavaScript

## Define what buttons the user can click on and what each button does

We have the following buttons on our calculator:

- **Numbers**: 0 to 9
- **Operators**: + (add), - (subtract), / (divide), * (multiply) 
- **Decimal**: . (appends a decimal place)
- **Clear**: C (clears the display)
- **Equals**: = (evalutates the inputs)

## Logic of these buttons

- **Numbers**: if a user clicks on a number then there are some options depending on a few things:
    - append that digit to the current display, ie. for making a number with multiple digits
    - replace that number, ie. after clicking an opertator or equals button
    - replace that number, if the only number in the display is zero

- **Operators**: if a user clicks on an operator:
    - append that operator to the string to evaluate only when the previous value is a number (not a decimal)
    - however the display should not change, the previous number should stay the same at this point
    - if the user clicks on the operator multiple times, ie ++++_*/ one after another then replace the last character (an operator character) with the operator that was last clicked.

- **Decimal**: if a user clicks on decimal:
    - append a decimal to string
    - but only if the previous value is a number
    - and not if there is already a decimal in the string

- **Clear**: if a user clicks on clear:
    - replace the display with "0"

- **Equals**: if a user clicks on equals:
    - evalulate that string
    - but only evaluate if the last character is a number, it cannot be a "." or an operator character.

## How do we code this logic?

We need to keep track of the previous button pressed before the current pressed value.

## Testing

Use cypress for E2E testing:
```
npm init -y
npm install cypress --save-dev
# open Cypress.io test runner
node_modules/.bin/cypress open
```

### Logic of what to test:

Let's test the most likely thing a user would do, ie. the most used paths.
- Click on a number button, click on an operator button, click on another number button, click on equals. This displays the result.
- In each of those steps we need to make sure the number is displayed when a user clicks on a new number button.
- We can't test every possible calculation with every single number key. But we could check that every number button contains the number it should, and same for the other button types.
- Then we can do some calculations on some of the number keys.
- We should also check the decimal and clear buttons behave as expected.

#### Edge cases

- Negative numbers, can the user click on "-" and then a number to create a negative number?
- Dividing by 0
- What happens if a user clicks on an operator multiple times in a row
- if a user clicks on equals multiple times in a row
- that the decimal point only occurs once in a number
- Number buttons and updating display:
    - eg. when a user clicks on a number either that number is appended to the string or if an operator button was last pressed then that number is displayed on its own.
    - number button should replace what's on the screen
    - replace whats on the screen if previous button was an empty space ie. clear display or the last button was equals

### Things i learnt:

- Writing out test cases and leaving them empty shows them as tests that have passed. 
eg. when writing the following, and leaving them empty like this, they show as passed tests, even though we have not written the test logic yet. Therefore I'm going to comment out any tests I haven't written yet, until I find out what the best practice is.
```
  it('checks numeric buttons contain the correct numbers', () => {

  })

  it('checks the operator buttons contain the correct operators', () => {
    
  })
```