const response = await fetch(
    "https://staywise-ai-backend-6vue.onrender.com/api/search/search",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            location: "Mumbai"
        })
    }
);


const data = await response.json();

console.log(data);