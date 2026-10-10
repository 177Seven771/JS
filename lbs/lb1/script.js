const task1 = document.getElementById("task1")
task1.addEventListener("click", () => {
    alert("діалогове вікно");
    const output = document.getElementById("output");
    const fio = "Швець Олег";
    output.textContent = `Hello, ${fio}`;
})

const task2 = document.getElementById("task2")
task2.addEventListener("click", () => {
    const output = document.getElementById("output");
    const choose = confirm("Task2");
    if (choose) {
        output.textContent = "Натиснуто кнопку 'ОК'";
    }
    else {
        output.textContent = "Натиснуто кнопку 'Відміна'";
    }
})

const task3 = document.getElementById("task3")
task3.addEventListener("click", () => {
    const output = document.getElementById("output")
    output.textContent = "";
    const lastNumber = 8;

    for (let i = 1; i <= 10; i++) {
        let result = lastNumber * i;
        output.textContent += result + " ";
    }
})

const task4 = document.getElementById("task4")
task4.addEventListener("click", () => {
    function task4(a) {
        if (a % 2 == 0) {
            console.log("%cЧисло парне.", "color: green")
        }
        else {
            console.log("%cЧисло непарне.", "color: red")
        }
    }
    task4(18);
})

const task5 = document.getElementById("task5")
task5.addEventListener("click", () => {
    function generationPassword(pass, number) {
        return pass.slice(0, 3) + (number * 2)
    }

    console.log(generationPassword("Олег", 18));
})

const task6 = document.getElementById("task6")
task6.addEventListener("click", () => {
    const output = document.createElement("div");
    output.id = "18";
    function average() {
        let a = Number(prompt("Введіть оцінку 1: "));
        let b = Number(prompt("Введіть оцінку 2: "));
        let c = Number(prompt("Введіть оцінку 3: "));

        return (a + b + c) / 3
    }
    document.body.appendChild(output);
    output.textContent = "Результат: " + average();
})

const task7 = document.getElementById("task7")
task7.addEventListener("click", () => {
    const identity = prompt("Введіть кількість студентів групи: ");

    for (let i = 1; i <= identity; i++) {
        const name = prompt("Введіть прізвище та ім'я студента: ");
        console.log(`Студент: ${name}`); 
    }
})