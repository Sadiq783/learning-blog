import blogs from "./blogs_data.js"

const articlesSection = document.querySelector("#articles")


function initialize() {
    renderArticles()
    renderCurrentPost()
    renderFooterDate()
}

function renderArticles() {
    if (!articlesSection) return

    articlesSection.innerHTML = blogs.map(article => {
        return `
                <div class="container">
                    <article data-article-id="${article.id}"   class="article">
                    <a href="blog.html?id=${encodeURIComponent(article.id)}">
                        <div class="article-img-container">
                            <img src="${article.img}" alt="${article.alt}" class="article-img">
                        </div>
                    </a>
                    <time datetime="${new Date(article.date).toLocaleDateString("en-CA")}" class="article-date">${article.date}</time>
                    <h2 class="article-title">${article.title}</h2>
                    <p class="article-preview-text">${article.previewText}</p>
                    </article>
                </div>
        `
    }).join("")
}

function renderCurrentPost() {
    const blogPostSection = document.querySelector("#blog-post")

    if (!blogPostSection) return

    const postId = new URLSearchParams(window.location.search).get("id")
    const post = blogs.find(blog => String(blog.id) === postId)
    
    document.title = `${post.title}`

    const paragraphs = post.articleText.map(text => `<p>${text}</p>`).join("")

    blogPostSection.innerHTML =
            `
                <article data-article-id="${post.id}" class="article">
                    <time datetime="${new Date(post.date).toLocaleDateString("en-CA")}" class="article-date">${post.date}</time>
                    <h1 class="article-title">${post.title}</h1>
                    <img src="${post.img}" alt="${post.alt}" class="article-img">
                    <div class="article-text">${paragraphs}</div>
                </article>
            `
}

function renderFooterDate() {
    const year = new Date().getFullYear()

    const copyrightText = document.createElement("p")
    copyrightText.classList.add("copyright-text")
    copyrightText.innerHTML = `Copyright &copy;<time datetime="${year}" class="copyright-date">${year}</time>`
    document.querySelector("footer").append(copyrightText)
}

initialize()