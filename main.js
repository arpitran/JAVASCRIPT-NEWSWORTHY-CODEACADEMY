// Page Elements

const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const main = document.getElementsByTagName('main')[0];

// News API Data

const apiKey = 'bf7ac249a7c549ab9ceeec0d63768b99';
const engadgetUrl = '';
const recodeUrl = '';
const nextWebUrl = '';

// Request News Function
async function getNews(url){
  let response=await fetch(sourceUrl);
  let jsonResponse=await response.json();
  console.log(jsonResponse);
  let articlesArray=jsonResponse.articles.slice(0,5)
  console.log(articlesArray)
}

// Render Function

function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + 'article title' + '</h2>' +
      '   <h3>By ' +article.author + '</h3>' +
      '   <p> ' + article.description + '</p>' +
      '   <a href="' + article.description + '" target="_blank" class="readmore"><p>Read More</p></a>' +
      ' </div>' +
      ' <div class="share">' +
      '   <img class="storyimage" src="' + article.image + '" />' +
      '   <a href="https://twitter.com/Gclaw" target="_blank"><button type="button" class="tweet" id="tweet ' + index + '">' +
      '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>' +
      ' </div>' +
      '</div>';

    main.innerHTML += articleRow;
  });
  return articles;
}

// Post Tweet Function

function sendTweets(newsObjects) {
  let tweetButtons = document.getElementsByClassName('tweet');
  for (let i = 0; i < tweetButtons.length; i++) {
    tweetButtons[i].addEventListener('click', function() {
      Twitter.postStatus(newsObjects[i]);
      tweetButtons[i].innerHTML = "Tweeted";
    }, false);
  }
}

// Button Event Listeners

engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(engadgetUrl).then(articlesArray=>renderNews(articlesArray)).then(articles=>{sendTweets(articles)};
  // Call getNews() here
}, false);

recode.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(engadgetUrl).then(articlesArray=>renderNews(articlesArray).then(articles=>{sendTweets(articles)};
  // Call getNews() here
}, false);

nextWeb.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(engadgetUrl).then(articlesArray=>renderNews(articlesArray)then(articles=>{sendTweets(articles)};
  // Call getNews() here
}, false);
