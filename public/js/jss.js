var last_number = 1;
var photos = [];
var max = 7;

function nextbtn() {

    while (true) {
        if (photos.length === max) {
            photos = []
        } else {
            last_number = (Math.floor(Math.random() * max) + 1);
            if (!photos.includes(last_number)) {
                photos.push(last_number);
                break;
            }
        }
    }
    console.log(photos)
    console.log(last_number)
    document.getElementById("meme").src = 'images/' + (last_number) + '.jpeg ';


};

function bb() {
    document.getElementById("meme").src = 'images/' + (last_number) + '.jpeg ';
}