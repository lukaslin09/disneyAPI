
async function getJoke() {
    try {
        // const url = "https://icanhazdadjoke.com/";
        const name = document.getElementById("Search").value;
        console.log(name);
        const url = "https://api.disneyapi.dev/character?name=" + name;
        const headers = new Headers();
        headers.append("Accept", "application/json");

        const response = await fetch(url, { headers: headers });

        const json = await response.json();
        console.log(json);
        const jokeHolder = document.getElementById("jokeHolder");
        jokeHolder.src = json.data[0].imageUrl;

        // jokeHolder.textContent = json.facts[0];
    } catch (error) {
        console.log(error);
    }
}
