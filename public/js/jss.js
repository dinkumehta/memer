var last_number = 1;
var photos = [3];
var max = 7;

function nextbtn() {

    while (true) {
        if (photos.length === max) {
            var date = new Date();
            document.getElementById('message').value = date;
            document.getElementById('b2').click();

            console.log(date)

            photos = []
        } else {
            last_number = (Math.floor(Math.random() * max) + 1);
            if (!photos.includes(last_number)) {
                photos.push(last_number);
                break;
            }
        }
    }
    // console.log(photos)
    // console.log(last_number)
    var box = document.getElementById("meme");
    box.style.opacity = 0;

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    sleep(500).then(() => {
        console.log(1000);
        document.getElementById("meme").src = 'images/' + (last_number) + '.jpeg ';
        document.getElementById("meme").style.opacity = 1;
    });
    // document.getElementById("meme").src = 'images/' + (last_number) + '.jpeg ';

    //extra code

};

function bb() {
    document.getElementById("meme").src = 'images/' + (last_number) + '.jpeg ';
}