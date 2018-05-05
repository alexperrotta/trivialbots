class Username {
    constructor(form) {
        let storedUsername = $("#userName").val();
        let storedUsernameJSON = JSON.stringify(storedUsername);
        localStorage.setItem("Username", storedUsernameJSON);
    }
}