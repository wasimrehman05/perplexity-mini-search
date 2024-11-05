async function handleQuery() {
    const queryInput = document.getElementById("queryInput");
    const resultsSection = document.getElementById("resultsSection");
    const loader = document.getElementById("loader");
    const searchButton = document.getElementById("searchButton");

    // Clear previous results and show loader
    resultsSection.innerHTML = "";
    searchButton.style.display = "none";
    loader.style.display = "inline-block";

    const query = queryInput.value;
    if (!query) {
        alert("Please enter a query.");
        searchButton.style.display = "inline-block";
        loader.style.display = "none";
        return;
    }

    try {
        // Make a POST request to the server with the user query
        const response = await fetch("/query", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query })
        });

        if (!response.ok) throw new Error("Failed to fetch results");

        const data = await response.json();

        // Display the answer and sources
        resultsSection.innerHTML = `
            <div class="result">
                <h3 style="margin-bottom: 10px;">Answer</h3>
                <p>${data.answer}</p>
                <h4 style="margin-bottom: 10px; margin-top: 10px;">Sources</h4>
                <ul>
                    ${data.sources.map(source => `
                        <li><a href="${source.link}" target="_blank">${source.title}</a></li>
                    `).join('')}
                </ul>
            </div>
        `;
    } catch (error) {
        console.error("Error:", error);
        resultsSection.innerHTML = "<p>Error fetching results. Please try again.</p>";
    } finally {
        // Hide the loader
        loader.style.display = "none";
        searchButton.style.display = "inline-block";
    }
}
