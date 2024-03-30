function getDataJson() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'data.json', true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                var names = JSON.parse(xhr.responseText);
                let jsonData = JSON.stringify(names);
                localStorage.setItem('myData', jsonData);
                resolve(names.sort());
            } else {
                reject(new Error('Failed to load data.json'));
            }
        };
        xhr.onerror = function() {
            reject(new Error('Failed to load data.json'));
        };
        xhr.send();
    });
}

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

getDataLocal()
    .then(data => {
        let listElement = document.querySelector('.list-student');
        data.sort().forEach(function(student) {
            var listItem = document.createElement('li');
            listItem.textContent = student;
            listElement.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error(error);
    });

const randomName = document.querySelector('.randomStudent') ;

function getRandomStudent() {
    getDataLocal()
    .then (data => {
        var  randomIndex = Math.floor(Math.random() * data.length) ;
        var randomStudent = data[randomIndex];
        randomName.textContent= randomStudent
    })
}