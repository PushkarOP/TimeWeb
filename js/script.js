function printTime() {
    document.getElementById('Clock').innerHTML = Date();
}
setInterval(printTime, 1000);
