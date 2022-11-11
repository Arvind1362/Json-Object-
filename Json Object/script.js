var zoo = {
    "zooanimal": [{
        "id": 1,
        "title": "Dog",
        "category": " Pet animals",
        "text": "Pet animals",
        "articleid": 1
    }, {
        "id": 2,
        "title": "Cow",
        "category": "Pet animals",
        "text": "Pet animals",
        "articleid": 1
    }, {
        "id": 3,
        "title": "Lion",
        "category": " Wild animals",
        "text": "Wild animal",
        "articleid": 2
    }, {
        "id": 5,
        "title": "Elephant ",
        "category": "Wild animals",
        "text": "Wild animal",
        "articleid": 4
    }, {
        "id": 4,
        "title": "Cat",
        "category": " Pet animals",
        "text": "Pet animals",
        "articleid": 3
    }]
};

var index = 0;
var item = zoo.zooanimal[index];

var title = document.getElementById('title');
var text = document.getElementById('text');
var previous = document.getElementById('first');
var next = document.getElementById('second');
var Reset = document.getElementById('third');

displayItem(item);

previous.addEventListener('click', function() {
    displayItem(zoo.zooanimal[--index]);
});

next.addEventListener('click', function() {
    displayItem(zoo.zooanimal[++index]);
});

Reset.addEventListener('click', function() {
    displayItem(zoo.zooanimal[0]);
});

function displayItem(item) {
    title.innerText = item.title;
    text.innerText = item.text;
    previous.disabled = index <= 0;
    next.disabled = index >= zoo.zooanimal.length -1;
    // Reset.disabled = index = 0
}