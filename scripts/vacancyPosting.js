//Post class: represent each post
class Post{
    constructor(title, description, contact, date){
        this.title = title;
        this.description = description;
        this.contact = contact;
        this.date = date;
    }
}

//UI class: handle user interface tasks
class UI{
    static displayPosts(){
        const posts = Store.getPosts(); //Store.getPosts(): from class Store getting posts from the localstorage
        posts.forEach((post) => UI.addPostToList(post));
    }
    static addPostToList(post){
        const vacancyPostingContainer = document.querySelector('#vacancy-posting-container');
        const vacancyPost = document.querySelector('.post');
        vacancyPost.innerHTML =
        `<div class="post-body">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <span>${post.contact}</span>              
        </div>`;
        vacancyPostingContainer.appendChild(vacancyPost);
    }
}