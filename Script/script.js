let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let post = document.getElementById('post');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click');

    formValidation();
})

let formValidation = () => {
    msg.innerHTML = "";
    acceptData();
}

let data = {};

let acceptData = () => {
    data['text'] = input.value;
    console.log(data)
    createPost();
}

let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `
    input.value = ""
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {

}
