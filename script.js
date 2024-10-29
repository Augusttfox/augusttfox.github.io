function welcomeUser() {
    var name = document.getElementById('nameInput').value;
    document.getElementById('welcomeMessage').innerText = "user@hacker:~$ Welcome, " + name + "!";
}
