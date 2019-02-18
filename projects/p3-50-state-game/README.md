# 50 States Game
### Out: 2/18/19 | Due: 3/04/19 11:59 PM (Deadline 9/29/18 11:59 PM for 10% reduction)

## Overview
In this project you will implement a game about the 50 states in the US.

The goal of the game is to input all 50 states within a time limit. If the user inputs all the states within the time limit, the user wins. Else, the user loses. Display the number of Spanish speakers in that state when hovered over.

## Objective
Learn how to use Javascript to interact with the DOM. Practice using AJAX to interact with APIs.

## Grading
This project will use a **feature based** grading system (out of 76 points).

Points are gained by implementing features.

Requirements must be followed and failure to follow them may result in a 0.

## Specifications:

- **[2]** Input field to enter states.
    + **[3]** State should be submitted when full state is typed. No need to hit enter.
    + **[3]** Input is case insensitive.
- **[10]** Display a continuously updated list of states the user has inputed correctly.
- **[10]** Timer set to 20 seconds displayed prominently and counts down every second. (Note: We know you are going to want to test with more than 20 seconds, but please make sure that it is 20 seconds when you submit. This will make grading easier.)
- When timer ends:
    - **[5]** Disable input field
    - **[10]** Display score (states correct / total states)
    - **[10]** Display which states the user did not get separately
- If user finishes before timer ends:
    - **[5]** Stop timer
    - **[3]** Display "You win!" or some clear indication that the user has won.
- **[15]** If a user hovers over any state name on the screen at any point, you should display the number of Spanish speakers in that state. You can choose how to display the number, but it should be easily visible. Also, print the number of Spanish speakers with commas as thousands separators (use commas every three decimal places in numbers of four or more digits, counting right to left).

## Tips:

Use the **census.gov** API to get Spanish speaker data.

Documentation for the API can be found here: [Language Statistics: ACS (2013)](https://www.census.gov/data/developers/data-sets/language-stats.html)

This URL should help you out:
https://api.census.gov/data/2013/language?get=EST,LANLABEL,NAME&for=state:06&LAN=625

In this URL, the `06` after `state:` refers to the state code. To make your lives easier, we've gone through and created an abbreviation map (`abvMap`) in the `index.js` shell code. Use it! Also, in the returned JSON, "EST" stands for estimation of the number of Spanish speakers in a particular state and corresponds to the first number that is returned.

For example, in the following JSON object that the URL returns, the number of Spanish speakers in the state with code `06` is `10105385`.
`[["EST","LAN","state"],
["10105385","625","06"]]`

Please ``READ`` comments in the Javascript file, as you will not need to implement for every state.

## Code Distribution
Clone the project folder located in this directory.

## Submission
Please zip up your `index.html` and `index.js` and submit on the [submit server](submit.cs.umd.edu).
