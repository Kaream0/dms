function fetchData(callback) {
    setTimeout(() => { // Simulates fetching data from a server
        callback('Data received');
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Date received
});