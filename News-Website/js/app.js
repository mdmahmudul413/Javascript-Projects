// console.log('Hello');

// initialize the newa api parameters
let source = 'bbc-news';
let apiKey = '489a76d729ad4fcd9fb2d7a662afb144';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// create an ajax get request
const xhr = new XMLHttpRequest();

// to fetch json data
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// what to do when response is ready
    // onload means the current state is 4
    xhr.onload = function(){
        if(this.status === 200){
            let arr = JSON.parse(this.responseText);
            let articles = arr.articles;
            let newsHtml = '';

            // console.log(articles);

            // Using forEach loop
            let num = 0;
            articles.forEach(element => {
                // console.log(element);
                let news = `
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne-${num}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne-${num}" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne-${num}"><b>Breaking News ${num}:\u00A0 </b>
                                    ${element['title']}
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne-${num}" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingOne-${num}">
                                    <div class="accordion-body">
                                        ${element['content']}. <a href='${element['url']}' target='_blank'>Read more here...</a>
                                    </div>
                                </div>
                            </div>`;
                newsHtml += news;
                num++;

            });
            newsAccordion.innerHTML = newsHtml;



            // using forIn loop
            // let num = 0;
            // for(let news in articles){
            //     console.log(articles[news]);
            //     let topNews = `
            //                 <div class="accordion-item">
            //                     <h2 class="accordion-header" id="panelsStayOpen-headingOne-${num}">
            //                     <button class="accordion-button" type="button" data-bs-toggle="collapse"
            //                         data-bs-target="#panelsStayOpen-collapseOne-${num}" aria-expanded="true"
            //                         aria-controls="panelsStayOpen-collapseOne-${num}">
            //                         ${articles[news].title}
            //                     </button>
            //                     </h2>
            //                     <div id="panelsStayOpen-collapseOne-${num}" class="accordion-collapse collapse"
            //                     aria-labelledby="panelsStayOpen-headingOne-${num}">
            //                         <div class="accordion-body">
            //                         ${articles[news].content}. <a href='${articles[news].url}' target='_blank'>Read more here...</a>
            //                         </div>
            //                     </div>
            //                 </div>`;
            //     newsHtml += topNews;
            //     num++;
            // }
            // newsAccordion.innerHTML = newsHtml;

            
        }
        else{
            console.error('Some error occured');
        }

    }

    // send the get request
    xhr.send();

