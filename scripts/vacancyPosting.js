//Post class: represent each post
class Post{
    constructor(id, title, description, contact, date){
        this.id = id;
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
            <span>HS MM:DD:YY</span> 
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <span>${post.contact}</span>              
        </div>`;
        vacancyPostingContainer.appendChild(vacancyPost);
    }
    static clearInput(){
        //Select all the inputs
        const inputs = document.querySelectorAll('.form-control');
        // Clear the content of each input
        inputs.forEach((input) => input.value = '');
    }
}


// Store Class: handle local storage
class Store{
    static getPosts(){
        let posts;
        if(localStorage.getItem('posts') === null){
            posts = [];
        }
        else{
            posts = JSON.parse(localStorage.getItem('posts'))
        }
        return posts;
    }
    static addPosts(post){
        const posts = Store.getPosts();
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    }
    // static removePosts(id){
    //     const posts = Store.getPosts();
    //     posts.forEach((post, index) => {
    //         if(post.id === id){
    //             posts.splice(index, 1);
    //         }
    //     });
    //     localStorage.setItem('posts', JSON.stringify(posts));
    // }
}

// Event display
document.addEventListener('DOMContentLoaded', UI.displayPosts);
// Event Add
document.querySelector('#entryForm').addEventListener('submit', (e) => {
    e.preventDefault();

    //Declare variables
    const id = generateUUID();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const contact = document.querySelector('#contact').value;

    // Instatiate Post
    const post = new Post(id, title, description, contact);
    // Add the post to the UI post lists
    UI.addPostToList(post);
    Store.addPosts(post);
    // Delete content of input's
    UI.clearInput();
})

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}