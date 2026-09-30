import blogs from "./blogs_data.js"

const articlesSection = document.querySelector("#articles")


function initialize() {
    renderArticles()
    renderFooterDate()
}

function renderArticles() {
    const blogsHTML = blogs.map(article => {
        return `
                <article data-article-id="${article.id}" class="article">
                    <a href="#" data-id="${article.id}">
                        <img src="${article.img}" alt="${article.alt}" class="article-img">
                    </a>
                    <time datetime="${new Date(article.date).toLocaleDateString("en-CA")}" class="article-date">${article.date}</time>
                    <h2 class="article-title">${article.title}</h2>
                    <p class="article-preview-text">${article.previewText}</p>
                </article>
        `
    }).join("")

    articlesSection.innerHTML = blogsHTML
}

function renderFooterDate() {
    const year = new Date().getFullYear()

    const copyrightText = document.createElement("p")
    copyrightText.classList.add("copyright-text")
    copyrightText.innerHTML = `Copyright &copy;<time datetime="${year}" class="copyright-date">${year}</time>`
    document.querySelector("footer").append(copyrightText)
}

initialize()