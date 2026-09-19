const birthdayCake = document.getElementById('birthday-cake');
const audio = new Audio('audio/happy-birthday-song.mp3');


birthdayCake.addEventListener('click', function(){
    birthdayCake.style.backgroundImage = 'url("images/celebrate.gif")';
    playFragment(5, 14);

    setTimeout(function() {
        audio.pause();
        birthdayCake.style.backgroundImage = 'url("images/birthdaycake.jpg")';
    }, 9000);
});




document.getElementById('happiness').addEventListener('click', function(){
    let gift = this;
    gift.style.backgroundImage = 'url("images/happiness.gif")';
    playFragment(30, 45);

    setTimeout(function() {
        audio.pause();
        gift.style.backgroundImage = 'url("images/giftbox3.jpg")';
    }, 15000);
});


document.getElementById('sante').addEventListener('click', function(){
    let gift = this;
    gift.style.backgroundImage = 'url("images/sante.gif")';
    playFragment(76, 80.2);

    setTimeout(function() {
        audio.pause();
        gift.style.backgroundImage = 'url("images/giftbox3.jpg")';
    }, 4200);
});

document.getElementById('friends').addEventListener('click', function(){
    let gift = this;
    gift.style.backgroundImage = 'url("images/friends.gif")';
    playFragment(172, 180);

    setTimeout(function() {
        audio.pause();
        gift.style.backgroundImage = 'url("images/giftbox3.jpg")';
    }, 8000);
});

document.getElementById('family').addEventListener('click', function(){
    let gift = this;
    gift.style.backgroundImage = 'url("images/family.gif")';
    playFragment(205, 215);

    setTimeout(function() {
        audio.pause();
        gift.style.backgroundImage = 'url("images/giftbox3.jpg")';
    }, 10000);
});

document.getElementById('dreams').addEventListener('click', function(){
    let gift = this;
    gift.style.backgroundImage = 'url("images/dreams.gif")';
    playFragment(235, 248);

    setTimeout(function() {
        audio.pause();
        gift.style.backgroundImage = 'url("images/giftbox3.jpg")';
    }, 13000);
});

document.getElementById('peace').addEventListener('click', function(){
    let gift = this;
    gift.style.backgroundImage = 'url("images/peace.gif")';
    playFragment(288, 293.4);

    setTimeout(function() {
        audio.pause();
        gift.style.backgroundImage = 'url("images/giftbox3.jpg")';
    }, 5400);
});


document.getElementById('love').addEventListener('click', function(){
    let gift = this;
    gift.style.backgroundImage = 'url("images/us.jpg")';
    playFragment(140,210);

    setTimeout(function() {
        audio.pause();
        gift.style.backgroundImage = 'url("images/giftbox3.jpg")';
    }, 40000);
});







function playFragment(start, end) {
    audio.pause();
    audio.currentTime = start;

    function stopAtEnd() {
        if (audio.currentTime >= end) {
            audio.pause();
            audio.currentTime = start;
            audio.removeEventListener("timeupdate", stopAtEnd);
        }
    }

    audio.addEventListener("timeupdate", stopAtEnd);
    audio.play();
}
