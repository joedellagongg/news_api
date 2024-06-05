async function News(searchTerm) {
    const newsList = document.getElementById('news-list');

    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        const searchInput = document.getElementById('search-input');
        const searchTerm = searchInput.value;
        News(searchTerm);
    });

    const generalNews = document.getElementById('genral');
    generalNews.addEventListener('click', () => {
        News('genral');
    });

    const businessNews = document.getElementById('business');
    businessNews.addEventListener('click', () => {
        News('business');
    });

    const technologyNews = document.getElementById('technology');
    technologyNews.addEventListener('click', () => {
        News('technology');
    });

    const sportNews = document.getElementById('sport');
    sportNews.addEventListener('click', () => {
        News('sport');
    });

    const entertainmentNews = document.getElementById('entertainment');
    entertainmentNews.addEventListener('click', () => {
        News('entertainment');
    });

    const philippineNews = document.getElementById('ph');
    philippineNews.addEventListener('click', () => {
        News('ph');
    });

    try {

        const apiKey = '8442bc27619e4708802636b1be751daa'; 
        const apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
            newsList.innerHTML = '';
            data.articles.forEach(article => {
                const listItem = document.createElement('li');
                listItem.className = 'news-article';

                const container = document.createElement('a');
                container.href = article.url;
                container.target = '_blank';
                container.style.textDecoration = "none"
                container.innerHTML = `
                    <img src="${article.urlToImage}" />
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                `;

                listItem.appendChild(container);

                const readMoreLink = document.createElement('a');
                readMoreLink.href = article.url;
                readMoreLink.target = '_blank';
             

                listItem.appendChild(readMoreLink);

                newsList.appendChild(listItem);
            });
        } else {
            newsList.innerHTML = 'No news found.';
            // var notfound = document.createElement('notfound');
            // img.src =  "error_404_V1.png";
        }

    } catch (error) {
        var img = document.createElement("img");
        img.src = "giphy.gif";
        newsList.innerHTML = 'FETCHING ERROR.';
        img.setAttribute("width", "1200"); 
        img.setAttribute("height", "500");

        var errorMessage = document.createElement("p");
        newsList.innerHTML = '';
        newsList.appendChild(img);
        newsList.appendChild(errorMessage);

        console.error(error);
    }
}


News();


// async function News() {
    



//     const newsList = document.getElementById('news-list');
//     const searchFunction = document.getElementById('search-form');
//     const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";
//     const API = "eb76452c922f4f939d738d775321c37c"
//     const searchBtn = document.getElementById("searchBtn");

//     searchBtn.addEventListener("click",function(){
//         newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
//         fetchQueryNews();
//     });
    
    

//     try {
//         const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=eb76452c922f4f939d738d775321c37c');
//         const data = await response.json();

//         if (data.articles && data.articles.length > 0) {
//             data.articles.forEach(article => {
//                 const listItem = document.createElement('li');
//                 listItem.className = 'news-article';
//                 listItem.innerHTML = `
//                     <img href="${article.url}" src="${article.urlToImage}" />
//                     <h2>${article.title}</h2>
//                     <p>${article.description}</p>
//                     <a href="${article.url}" target="_blank">Read More</a>
//                 `
//                 newsList.appendChild(listItem);
//             });
//         } else {
//             newsList.innerHTML = 'No news found.';
//         }
//     } catch (error) {

//         var img = document.createElement("img");
//         img.src = "error_404.png";
//         img.setAttribute("width", "1360"); 
//         img.setAttribute("height", "450");
               
//         var errorMessage = document.createElement("p");
//         // errorMessage.textContent = 'An error occurred while fetching news. Please Refresh to Reload the News';
        
//         newsList.appendChild(img);
//         newsList.appendChild(errorMessage);
        
//         console.error(error);

    
//     }
// }


// News();