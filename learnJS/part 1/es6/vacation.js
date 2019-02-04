function applyForVisa(documents) {
    console.log("Обрабатываем заявление...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > .5 ? resolve({v:"v"}) : reject(new Error("Недостаточно документов"));
        }, 1000);
    });
}

function bookHotel(visa) {
    console.log("Виза получена");
    console.log("Бронируем отель...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > .5 ? resolve({}) : reject(new Error("Свободных номеров нет"));
        }, 5000);
    });
}

function buyTickets(reservation) {
    console.log("Отель забронирован");
    console.log("Покупаем билеты на самолет...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > .5 ? resolve({}) : reject(new Error("Все билеты проданы"));
        }, 5000);
    });
}

function packSuitcases(tickets) {
    console.log("Билеты куплены");
    console.log("Собираем чемоданы...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > .5 ? resolve({}) : reject(new Error("Пластмассовый мир победил"));
        }, 5000);
    });
}

function done() {
    console.log("Чемоданы собраны");
    console.log("Приятного отдыха!");
}

applyForVisa({})
    .then(bookHotel)
    .then(buyTickets)
    .then(packSuitcases)
    .then(done)
    .catch(error => console.error(error.message));