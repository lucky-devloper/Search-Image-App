const accesskey = "Eeu5IEUCx6gnHVfjiFQ1a7gzAlTWXwfHXCI6tUCphNk";
const formE1 = document.querySelector("form")
const inputE1 = document.querySelector("#imagename")
const results = document.querySelector(".search-result")
const Showmorebtn = document.querySelector("button")

let page = 0;

async function searchimage(inputvalue) {

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputvalue}&client_id=${accesskey}`;
    const response = await fetch(url)
    const data = await response.json()
    const iamgeinfo = data.results

    if (page === 1) {
        results.innerHTML = ''
    }
    iamgeinfo.map((imagedata) => {
        console.log(imagedata);
        const imagewapper = document.createElement('div');
        imagewapper.classList.add('image');
        const ImageTag = document.createElement('img')
        ImageTag.src = imagedata.urls.small;
        ImageTag.alt = imagedata.alt_description;
        const Imagelink = document.createElement('a')
        Imagelink.href = imagedata.links.html;
        Imagelink.target = "_blank"
        Imagelink.textContent = imagedata.alt_description

        imagewapper.appendChild(ImageTag)
        imagewapper.appendChild(Imagelink)
        results.appendChild(imagewapper)

    })
    page++;
    if (page > 1) {
        Showmorebtn.style.display = "block"
    }

}

formE1.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputvalue = inputE1.value
    searchimage(inputvalue)
    page = 1;
})

Showmorebtn.addEventListener('click', () => {
    searchimage();
})