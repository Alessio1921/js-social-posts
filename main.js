const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "",
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Mark Zuckerberg",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 69,
        "created": "2021-06-25"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=1",
        "author": {
            "name": "Loredana Bertè",
            "image": "https://unsplash.it/300/300?image=1"
        },
        "likes": 79,
        "created": "2021-06-25"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=2",
        "author": {
            "name": "Vittorio Frame",
            "image": "https://unsplash.it/300/300?image=2"
        },
        "likes": 49,
        "created": "2021-06-25"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=3",
        "author": {
            "name": "Paperella Simpatica",
            "image": "https://unsplash.it/300/300?image=3"
        },
        "likes": 39,
        "created": "2021-06-25"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=4",
        "author": {
            "name": "Natasha Silav",
            "image": "https://unsplash.it/300/300?image=4"
        },
        "likes": 99,
        "created": "2021-06-25"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=5",
        "author": {
            "name": "Valeria Ferrigno",
            "image": "https://unsplash.it/300/300?image=5"
        },
        "likes": 89,
        "created": "2021-06-25"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=6",
        "author": {
            "name": "Lorenzo Petralia",
            "image": "https://unsplash.it/300/300?image=6"
        },
        "likes": 101,
        "created": "2022-01-22"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=7",
        "author": {
            "name": "Alessio Napoli",
            "image": "https://unsplash.it/300/300?image=7"
        },
        "likes": 93,
        "created": "2021-01-05"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=8",
        "author": {
            "name": "Giulio Gulizia",
            "image": "https://unsplash.it/300/300?image=8"
        },
        "likes": 104,
        "created": "2021-03-10"
    },
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=10",
        "author": {
            "name": "Giovanni Lamborghini",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 71,
        "created": "2021-10-20"
    },
];
posts.forEach(element => {
    let imageProfile=`<img class="profile-pic" src="${element.author["image"]}" alt="${element.author["name"]}"> `
    if (element.author["image"]=="") {
        imageProfile=`<div class="profile-pic-default">
                    <span>${initials(element.author["name"])}</span>
                </div>`
    }
    document.getElementById("container").innerHTML+=`
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${imageProfile}    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author["name"]}</div>
                    <div class="post-meta__time">${dateIt(element.created)}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
        <div class="post__image">
            <img src="${element.media}" alt="${element.author["name"]}">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`;
    
});
let like=document.querySelectorAll(".like-button");
let likeTotal=document.querySelectorAll(".js-likes-counter");
const likedPost=[];
console.log(like);
let clicked=false;
// loop that adds the event to the click and adds or removes the like
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener("click", function() {
        if (clicked==false) {
            like[i].classList.add("like-button--liked");
            posts[i].likes++;
            console.log(posts[i].likes);
            likeTotal[i].innerHTML=posts[i].likes;
            likedPost.push(posts[i].id);
            clicked=true;
        }
        else{
            like[i].classList.remove("like-button--liked");
            posts[i].likes--;
            console.log(posts[i].likes);
            likeTotal[i].innerHTML=posts[i].likes;
            likedPost.pop();
            clicked=false;
        }
        console.log(likedPost);
    });
};

/**
 * function that returns the date formatted in Italian
 * @param {*} date 
 * @returns 
 */
function dateIt(date) {
    const day=date.split("-").reverse().join("-");
    return day;
}

/**
 * function that returns the initials
 * @param {*} name 
 * @returns 
 */
function initials(name) {
    const nameSurname= name.split(" ");
    let initial="";
    for (let i = 0; i < nameSurname.length; i++) {
        initial+= nameSurname[i].charAt(0);
    }
    return initial;
}