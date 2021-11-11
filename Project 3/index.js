console.log("This is js")
//1e2bba004f794e64bd65aaa8e412aa9c

//grab the news container
let bkcNews = document.getElementById('bkcNews')
//Initialize the news parameters
// let source = ''
// let apiKey= '1e2bba004f794e64bd65aaa8e412aa9c'


let newsHTML = ""

const xhr = new XMLHttpRequest();

//Create a get request
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1e2bba004f794e64bd65aaa8e412aa9c', true);

xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText)
        let articles = json.articles
        console.log(articles)


articles.forEach(function(element, index) {
    
        console.log(articles)
        let news = `    <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
        aria-expanded="false" aria-controls="multiCollapseExample1">${element["title"]}</a>
  
        </p>
        <div class="row">
        <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
        <div class="card card-body">
        ${element["content"]} <a href="${element["url"]}" target="_blank"> Read more here</a>
        </div>
        </div>
        </div>
      
        </div>`
        newsHTML += news
    });

    bkcNews.innerHTML = newsHTML
}
else {
    console.log("Some error occured")
}
}
xhr.send()

