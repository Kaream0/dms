async function fetchData() {
    return 'Data received';
}

async function fetchAndShowData(){
    try {
        const data = await fetchAndShowData();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

fetchAndShowData();