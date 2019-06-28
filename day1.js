// What floor does Santa end up on?
// ( means that Santa should go up one floor
// ) means that Santa should go down one floor.
const fs = require('fs');

function floorQuestion(){
    fs.readFile('./input1.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
        }, 0);
        console.log("floor: ", answer);
    })
}

floorQuestion();

// What is the position of the character that causes Santa to first enter the basement?

function enterBasement(){
    fs.readFile('./input1.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        counter = 0;
        accumulator = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1
            } else if (currentItem === ')') {
                accumulator -= 1
            }
            counter ++;
            return accumulator < 0;
        })
        console.log("Basement entered at: ", counter);
    })
}

enterBasement();