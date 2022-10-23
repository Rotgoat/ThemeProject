const link = '';

const fetchData = async() => {
    const result = await fetch(link);
    const data = await result.json();

    console.log(data);
}

fetchData();