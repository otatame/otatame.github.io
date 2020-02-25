//Function expression to select elements
const selectElement = (s) => document.querySelector(s);

//Open the menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
    selectElement('.open').classList.add('klik');
});


selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
    selectElement('.open').classList.remove('klik');
});

$(window).on('scroll', function(){
    if($(window).scrollTop() > 120){
        $('nav').addClass('black');
    }
    else if($(window).scrollTop() < 50){
        $('nav').removeClass('black');
    }
})