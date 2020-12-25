async function fetchNews() {
    let response = await fetch('http://localhost:3000/api/news', {
        method : 'POST'
    })

    let data = await response.json();

    let mainDiv = document.querySelector('.main');

    data.forEach(x => {
        mainDiv.innerHTML += 
        `
            <a target='blank_' class="news" href='${x.url}'>
                <div class="top">
                    <p class="title">${x.title}</p>
                    <h6 class="time">${x.publishedAt}</h6>
                </div>

                <div class="middle">
                    <img src="${x.imageUrl}" alt="">

                    <p> ${x.summary} </p>
                </div>

                <div class="bottom">

                </div>
            </a>
        `         
    });
}



fetchNews();