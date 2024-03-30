const data = [
    "Атай",
    "Айбек",
    "Марсел",
    "Нуржигит",
    "Кайрат",
    "Сыймык",
    "Нурислам",
    "Адил",
    "Омурбек",
    "Бурулсун",
    "Азамат",
    "Гулида",
    "Эржан",
    "Биймырза",
    "Байыш"
];

function getDataLocal() {
    return new Promise((resolve, reject) => {
        let retrievedData = localStorage.getItem('myData');
        let parsedData = JSON.parse(retrievedData);
        if (parsedData !== null && parsedData !== undefined) {
            resolve(parsedData);
        } else {
            reject(new Error("Ошибка в получении информации!"));
        }
    });
}

function displayStudents() {
    const listElement = document.querySelector('.list-student');
    data.sort().forEach(function(student) {
        var listItem = document.createElement('li');
        listItem.textContent = student;
        listElement.appendChild(listItem);
    });
}

function getRandomStudent() {
    const randomNameElement = document.querySelector('.randomStudent');
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomStudent = data[randomIndex];
    randomNameElement.textContent = randomStudent;
}

// Вызов функций для отображения списка имен и добавления обработчика события для кнопки
document.addEventListener('DOMContentLoaded', function() {
    displayStudents();
    const randomButton = document.querySelector('.button-30');
    randomButton.addEventListener('click', getRandomStudent);
});
