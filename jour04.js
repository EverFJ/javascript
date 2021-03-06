// COURS OBJECT

let user = {
    "name": "Janson",
    "email": "blabla@blublu.com",
    "age": 35,
    "isAdmin": false,
}

let user2 = {
    "firstName": "François",
    "isAdmin": true


}
console.log(user);
Object.assign(user, user2)
console.log(user);

//Object.values(user)
//Object.keys(user)

console.log(Object.entries(user));
console.log("\n\n\n")

// 01 OBJECT

let cat = {
    "name": "Garfield",
    "age": 3,
    "isCute": true
}

console.log(cat);
console.log(`Age du chat : ${cat.age}`)

function cuteCheck(thing) {
    if (thing.isCute === true) {
        return "So cute !"
    }
}

console.log(cuteCheck(cat));
console.log("\n\n");


// 02 Combine

let cat2 = {
    "name": "Truc",
    "age": 5,
    "isCute": false
}

let cats = [cat, cat2];

console.log(cats);
console.log(`Age de cat : ${cats[0].age}`)
console.log(`cat2 is cute : ${cats[1].isCute} \n\n`)


// 03 Even


function checkIfEven(num) {
    if (num % 2 === 0) {
        return num + " is Even"
    } else {
        return num + " is Odd"
    }
}

console.log(checkIfEven(8));
console.log(checkIfEven(11));
console.log("\n\n")

// 04 Compare 

function compare(num1, num2) {
    if (num1 > num2) {
        return `num1 (${num1}) is bigger`
    }
    if (num1 < num2) {
        return `num2 (${num2}) is bigger`
    } else {
        return "Both are the same"
    }
}

console.log(compare(5, 10));
console.log(compare(55, 10));
console.log(compare(11, 11) + "\n\n");

// 05 Add up 

function addUp(num) {
    let result = 0;
    for (i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(addUp(12) + "\n\n");

// 06 Time NOT FINISHED !!!

console.log("Time : ");

function format(num) {

    let heures = Math.floor(num / 3600);
    let minutes = Math.floor(num % 3600 / 60);
    let secondes = Math.floor(num % 3600 % 60);
    return `${heures} : ${minutes} : ${secondes}`;
}

console.log(format(3700));
console.log("\n\n");

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}


// BONUS 1

// A-Z = 65-90 ASCII
console.log("Password generator")

function generatePassword(num) {
    if (num < 6 || num > 15) {
        return "error";
    }
    let passwordArray = [];
    for (i = 0; i <= num; i++) {
        passwordArray.push(String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65)))
    }
    password = passwordArray.join("");
    return password;
}

console.log(generatePassword(10));
console.log("\n\n")

// Unnecessary complicated solution

function generatePassword2(num) {
    max = 122;
    min = 48;
    if (num < 6 || num > 15) {
        console.log("Error")
    }
    let password = "";
    for (let i = 0; i < num; i++) {
        let randomIndex = Math.floor(Math.random() * (max - min + 1) + min);

        while (randomIndex <= 64 && randomIndex >= 58) {
            randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        } // Exclude some symbols, but not all
        let letter = String.fromCharCode(randomIndex);
        password += letter;
    }
    return password
}

console.log("Password 2 :")
console.log(generatePassword(14) + "\n\n");


// Bonus 2 

function launchDice(numberOfDice) {
    let sum = 0;
    for (i = 0; i < numberOfDice; i++) {
        sum += Math.floor(Math.random() * 6 + 1);
    }
    return sum;
}

let player1Score = launchDice(5);
let player2Score = launchDice(5);
// console.log("1 : " + player1Score, "2 : " + player2Score);

if (player1Score > player2Score) {
    console.log(`Player 1 wins with ${player1Score}`)
} else if (player2Score > player1Score) {
    console.log(`Player 2 wins with ${player2Score}`)
} else {
    console.log(`It's a tie with ${player1Score}`)
}


// 