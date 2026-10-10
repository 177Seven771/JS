const task1 = document.getElementById("task1");
task1.addEventListener("click", () => {
    function getFullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }

    function showGreeting(fullName, age) {
        alert(`Hello, ${fullName}! You are ${age} years old.`);
    }

    let firstName = prompt("Введіть Ваше ім'я");
    let lastName = prompt("Введіть Ваше прізвище");
    let age = prompt("Введіть Ваш вік");
    
    if (firstName && lastName && age) {
        const fullName = getFullName(firstName, lastName);
        showGreeting(fullName, age);
    }
});

const task2 = document.getElementById("task2");
task2.addEventListener("click", () => {
    function getStudentInfo() {
        const name = prompt("Введіть ім'я студента");
        const score = Number(prompt("Ваш бал (0-12)"));
        return { name, score };
    }

    function checkGrade(score) {
        if (score >= 10 && score <= 12) {
            return "Excellent";
        } else if (score >= 7 && score <= 9) {
            return "Good";
        } else if (score >= 4 && score <= 6) {
            return "Satisfactory";
        } else if (score >= 0 && score < 4) {
            return "Fail";
        } else {
            return "Invalid score";
        }
    }

    function showResult(name, grade) {
        alert(`Student: ${name}\nGrade: ${grade}`);
    }

    const student = getStudentInfo();
    if (student.name && !isNaN(student.score)) {
        const grade = checkGrade(student.score);
        showResult(student.name, grade);
    }
});

const task3 = document.getElementById("task3");
task3.addEventListener("click", () => {
    let amount = Number(prompt("Введіть загальну суму рахунку"));
    
    function calculateTip(amount, percent = 10) {
        return (amount * percent) / 100;
    }

    function showResult(amount, tip) {
        const total = amount + tip;
        alert(`Bill: ${amount} грн\nTip (10%): ${tip} грн\nTotal: ${total} грн`);
    }

    if (!isNaN(amount) && amount > 0) {
        const tip = calculateTip(amount);
        showResult(amount, tip);
    }
});

const task4 = document.getElementById("task4");
task4.addEventListener("click", () => {
    function startGreetingTimer(message, seconds, callback) {
        setTimeout(() => {
            alert(message);
            callback();
        }, seconds * 1000);
    }

    startGreetingTimer("Hello World!", 4, () => { alert("Time is up!"); });
});

const task5 = document.getElementById("task5");
task5.addEventListener("click", () => {
    function calculate(a, b, operation) {
        switch (operation) {
            case "+": 
                return a + b;
            case "-": 
                return a - b;
            case "*": 
                return a * b;
            case "/": 
                return b !== 0 ? a / b : "Cannot divide by zero";
            default: 
                return "Invalid operation";
        }
    }

    function showResult() {
        const a = Number(prompt("Введіть перше число"));
        const b = Number(prompt("Введіть друге число"));
        const operation = prompt("Введіть операцію: + | - | * | /");
        
        if (!isNaN(a) && !isNaN(b)) {
            const result = calculate(a, b, operation);
            alert(`Результат операції: ${result}`);
        }
    }

    showResult();
});

const task6 = document.getElementById("task6");
task6.addEventListener("click", () => {
    function createClickCounter() {
        let count = 0;
        return function() {
            count++;
            console.log(`Count: ${count}`);
        };
    }

    const clicker = createClickCounter();
    clicker();
    clicker();
    clicker();
    alert("Перевірте консоль (F12) для перегляду результатів лічильника (Task 6).");
});