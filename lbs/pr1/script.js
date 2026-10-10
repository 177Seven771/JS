const task1 = document.getElementById("task1");
task1.addEventListener("click", () => {
    const products = [
        { name: "Тарілка", category: "Кухонні прибори", price: 79, inStock: 56 },
        { name: "Миша", category: "Аксесуари", price: 850, inStock: 45 },
        { name: "ПК", category: "Електроніка", price: 24999, inStock: 12 },
        { name: "Телефон", category: "Електроніка", price: 12999, inStock: 0 }
    ];

    function getAvailableProducts(list) {
        return list.filter(product => product.inStock > 0);
    }

    function findProductByName(list, name) {
        const f = list.find(product => product.name === name);
        if (f) {
            return f;
        } else {
            return "Товар не знайдено";
        }
    }

    const name = prompt("Введіть назву товару");
    console.log(`Масив об'єктів товарів, у яких inStock більше нуля:`, getAvailableProducts(products));
    console.log(findProductByName(products, name));
});

const task2 = document.getElementById("task2");
task2.addEventListener("click", () => {
    const students = [
        { name: "Олег", age: 18, grade: 10, group: "ПІ-23-01" },
        { name: "Вася", age: 15, grade: 6, group: "АК-26-02" },
        { name: "Петро", age: 17, grade: 8, group: "КІ-25-01" },
        { name: "Михайло", age: 16, grade: 9, group: "ІС-24-03" }
    ];

    function groupBy(list) {
        return list.reduce((acc, student) => {
            if (!acc[student.group]) {
                acc[student.group] = [];
            }
            acc[student.group].push(student);
            return acc;
        }, {});
    }

    function sortStudentsByGrade(list) {
        return list.sort((a, b) => b.grade - a.grade);
    }

    console.log(groupBy(students));
    console.log(sortStudentsByGrade(students));
});

const task3 = document.getElementById("task3");
task3.addEventListener("click", () => {
    const employees = [
        { name: "Олег", position: "Senior", salary: 70000, years: 5 },
        { name: "Надія", position: "Manager", salary: 35000, years: 3 },
        { name: "Данило", position: "Junior", salary: 30000, years: 1 },
        { name: "Петро", position: "Consultant", salary: 15000, years: 1 }
    ];

    function getAverageSalary(list) {
        const sum = list.reduce((acc, employee) => acc + employee.salary, 0);
        return sum / list.length;
    }

    function findMostExperiencedEmployee(list) {
        return list.reduce((acc, employee) => {
            return employee.years > acc.years ? employee : acc;
        });
    }

    console.log(getAverageSalary(employees));
    console.log(findMostExperiencedEmployee(employees));
});

const task4 = document.getElementById("task4");
task4.addEventListener("click", () => {
    const books = [
        { title: "Кобзар", author: "Тарас Шевченко", year: 1840, rating: 5, isRead: true },
        { title: "1984", author: "Джордж Орвелл", year: 1949, rating: 4.8, isRead: true },
        { title: "Дюна", author: "Френк Герберт", year: 1965, rating: 3.9, isRead: false },
        { title: "Володар перснів", author: "Дж. Р. Р. Толкін", year: 1954, rating: 5, isRead: false },
        { title: "Гайдамаки", author: "Тарас Шевченко", year: 1841, rating: 4.8, isRead: false }
    ];

    function getUnreadBooks(list) {
        return list.reduce((acc, book) => {
            if (!book.isRead) {
                acc.push(book.title);
            }
            return acc;
        }, []);
    }

    function getBooksByAuthor(list, name) {
        return list.reduce((acc, book) => {
            if (book.author === name) {
                acc.push(book);
            }
            return acc;
        }, []).sort((a, b) => a.year - b.year);
    }

    function getTopRatedBooks(list) {
        return list.reduce((acc, book) => {
            if (book.rating > 4) {
                acc.push(book);
            }
            return acc;
        }, []).sort((a, b) => b.rating - a.rating);
    }

    console.log(getUnreadBooks(books));
    console.log(getBooksByAuthor(books, "Тарас Шевченко"));
    console.log(getTopRatedBooks(books));
});