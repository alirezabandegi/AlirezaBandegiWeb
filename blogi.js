fetch("data.json").then(function(resp){
    return resp.json();
}).then(function(data){
    
    
    
    let i = 0;
    //1
    
    while (i <= 9) {
        const createNews = document.createElement('div');
        createNews.setAttribute("id","news"+i);
        createNews.classList.add("newsCreated");
        var main = document.querySelector('main');
        main.appendChild(createNews)

        var news = document.getElementById("news"+i);
        
        const theNewsTittle = document.createElement('h1');
        theNewsTittle.setAttribute("id","newsTittle"+i);
        theNewsTittle.classList.add("newsTittleCreated");
        news.appendChild(theNewsTittle)
        document.getElementById("newsTittle"+i).innerHTML = data.news[i].newsTittle;


        const theNewsTime = document.createElement('p');
        theNewsTime.setAttribute("id","newsTime"+i);
        theNewsTime.classList.add("newsTimeCreated");
        news.appendChild(theNewsTime)
        document.getElementById("newsTime"+i).innerHTML = data.news[i].newsTime;

        const theNewsText = document.createElement('p');
        theNewsText.setAttribute("id","newsText"+i);
        theNewsText.classList.add("newsTextCreated");
        news.appendChild(theNewsText)
        document.getElementById("newsText"+i).innerHTML = data.news[i].newsText;

        console.log(i)
        i++;
    }
    
})