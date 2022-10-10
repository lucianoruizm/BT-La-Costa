//Post class: represent each post
class Post{
    constructor(id, title, description, name, city, address, contact, date, check){
        this.id = id;
        this.title = title;
        this.description = description;
        this.name = name;
        this.city = city;
        this.address = address;
        this.contact = contact;
        this.date = date;
        this.check = check;
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
        const vacancyPost = document.createElement('div');
        if(post.check === false){
            vacancyPost.classList.add('post');
            console.log(post.check)
        }else{
            vacancyPost.classList.add('highlighted-offer');
            console.log(post.check)
        }
        vacancyPost.innerHTML =
        `
           <div class="post-body">
              <span>${post.date}</span> 
              <h3>${post.title}</h3>
              <p>${post.description}</p>
              <span>${post.name ? post.name : ''}</span>
              <span>${post.city ? post.city : ''}</span>
              <span>${post.address ? post.address : ''}</span>
              <span>${post.contact}</span>
           </div>
        `;
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
    const name = document.querySelector('#name').value;
    const city = document.querySelector('#city').value;
    const address = document.querySelector('#address').value;
    const contact = document.querySelector('#contact').value;
    const date = time();
    const check = checked();

    // Instatiate Post
    const post = new Post(id, title, description, name, city, address, contact, date, check);
    // Add the post to the UI post lists
    UI.addPostToList(post);
    Store.addPosts(post);
    // Delete content of inputs
    UI.clearInput();
})

// Event Search
document.querySelector('#search').addEventListener('keyup', 
function searchPost(){
    //Get value of the input
    const searchValue = document.querySelector('#search').value.toUpperCase();
    //Get all posts from the post container
    const allPosts = (document.querySelector('#vacancy-posting-container')).querySelectorAll('div > .post-body');
    //for loop #1 (used to pass all the posts)
    for(let i = 0; i < allPosts.length; i++){
        var count = 0;
        //Get all element of each line
        const postValues = allPosts[i].querySelectorAll('span, h3, p');
        for(let j = 0; j < postValues.length; j++){
            //Check if any word of the post starts with the input search string
            if((postValues[j].innerHTML.toUpperCase()).includes(searchValue)){
                count++;
            } 
        }
        if(count > 0){
            //If any element contains the search value then display block
            allPosts[i].style.display = '';
        }else{
            //Else display none
            allPosts[i].style.display = 'none';
        }
    }
})


// FUNCTIONS:

// ID generator
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

// Time/date function
function time(){
    let today = new Date();
    let now = today.toLocaleString();
    return now;
}

// Checkbox form 
function checked(){
    const checkbox = document.getElementById('checkbox').checked;
    return checkbox;
}

// Add required input
function addRequired(){
  var checkBox = document.getElementById("checkbox");
  var companyName = document.getElementById("name");
  if (checkBox.checked == true){
    companyName.setAttribute("required", "");
  } else {
    companyName.removeAttribute("required");
  }
}