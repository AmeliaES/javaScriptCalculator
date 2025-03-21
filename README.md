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

There's a few things we need to keep track of here. We need to keep track of the previous button pressed before the current pressed value.