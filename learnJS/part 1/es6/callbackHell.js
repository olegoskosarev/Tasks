function applyForVisa(documents, resolve, rejected) {
    console.info("Обрабатываем заявление...");
    setTimeout(function() {
        // resolve({});
        Math.random() > .5 ? resolve({}) : rejected("Недостаточно документов");
    }, 1000);
}

function bookHotel(visa, resolve, rejected) {
    console.info("Бронируем отель...");
    setTimeout(function() {
        // resolve({});
        Math.random() > .5 ? resolve({}) : rejected("Свободных номеров нет");
    }, 5000);
}

function buyTieckets(reservation, resolve, rejected) {
    console.info("Покупаем билеты на самолет...");
    setTimeout(function() {
        // resolve({});
        Math.random() > .5 ? resolve({}) : rejected("Все билеты проданы");
    }, 5000);
}

function packSuitcases(tickets, resolve, rejected) {
    console.log("Собираем чемоданы...");
    setTimeout(function() {
        // resolve({});
        Math.random() > .5 ? resolve({}) : rejected("Callback hell победил");
    }, 5000);
}

applyForVisa({}, function(visa) {
    console.info("Виза получена");
    bookHotel(visa, function(reservation) {
        console.info("Отель забронирован");
        buyTieckets(reservation, function(tickets) {
            console.info("Билеты на самолет куплены");
            packSuitcases(tickets, function(suitcases) {
                console.info("Чемоданы собраны");
                console.info("Приятного отдыха!");
            }, function(reaseon) {
                console.error(reaseon);
            });    
        }, function(reaseon) {
            console.error(reaseon);
        });
    }, function(reaseon) {
        console.error(reaseon);
    });
}, function(reaseon) {
    console.error(reaseon);
});