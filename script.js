 
    function createCard(title, image, description) {
      const card = document.createElement("div");
      card.className = "col-sm-6 col-md-4 col-lg-3 mb-4";

      const imgWrapper = document.createElement("div");
      imgWrapper.className = "card-img-wrapper";
      card.appendChild(imgWrapper);

      const img = document.createElement("img");
      img.src = image;
      img.alt = title;
      img.className = "card-img-top";
      imgWrapper.appendChild(img);

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      card.appendChild(cardBody);

      const h4 = document.createElement("h4");
      h4.className = "card-title";
      h4.textContent = title;
      cardBody.appendChild(h4);

      const p = document.createElement("p");
      p.className = "card-text";
      p.textContent = description;
      cardBody.appendChild(p);

      const addButton = document.createElement("button");
      addButton.className = "btn btn-dark";
      addButton.textContent = "Watch Now";
      addButton.addEventListener("click", function () {
        console.log("Added", title, "to My List");
      });
      cardBody.appendChild(addButton);

      return card;
    }

    function search() {
      const searchInput = document.getElementById("searchInput").value.trim();
      if (!searchInput) return;

      fetch("https://imdb-api.com/API/Search/k_j1oyp2ho/${searchInput}")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const output = document.getElementById("output");
          output.innerHTML = "";
          data.results.forEach((result) => {
            const card = createCard(
              result.title,
              result.image,
              result.description
            );
            output.appendChild(card);
          });
        })
        .catch((error) => console.error(error));
    }

    function fetchAndDisplay(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const output = document.getElementById("output");
          output.innerHTML = "";
          data.items.forEach((item) => {
            const card = createCard(item.title, item.image, item.description);
            output.appendChild(card);
          });
        })
        .catch((error) => console.error(error));
    }
    function displayMostPopularTVs() {
fetchAndDisplay('https://imdb-api.com/API/MostPopularTVs/k_3e39uoq2');
}


    function displayComingSoon() {
      fetchAndDisplay("https://imdb-api.com/API/ComingSoon/k_j1oyp2ho");
    }





















