function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
    }
}
