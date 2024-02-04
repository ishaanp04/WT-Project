// JavaScript for fetching and displaying RSS feed using AJAX

document.addEventListener("DOMContentLoaded", function () {
    const feedList = document.getElementById("feed-list");

    // Replace this with the URL of your RSS feed
            const rssFeedURL = 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml'; // New York Times RSS feed URL

    fetch(rssFeedURL)
        .then((response) => response.text())
        .then((data) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const items = xmlDoc.querySelectorAll("item");

            items.forEach((item) => {
                const title = item.querySelector("title").textContent;
                const link = item.querySelector("link").textContent;

                const li = document.createElement("li");
                li.innerHTML = `<a href="${link}" class="txt-deco-none" target="_blank" style="margin: 0 0 8px 0">${title}</a>`;

                feedList.appendChild(li);
            });
        })
        .catch((error) => {
            console.error("Error fetching RSS feed:", error);
        });
});