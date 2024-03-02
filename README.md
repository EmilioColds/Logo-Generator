## Introduction
For this challenge, my objective was to create a logo generator. The logo is fairly simple, it consists of either a circle, triangle or square with a solid color and a maximum of 3 characters as text. To achieve these images, I used inquirer to prompt the user with different questions and to be able to read the input given. The shapes were created using OOP tools. Also, the shape generation was given a testing file using JEST. The user story and acceptance criteria of this project is the following: 

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Links to video and repo

Repo link: https://github.com/EmilioColds/Logo-Generator

Video link: https://youtu.be/Q7cTXxoCMYY