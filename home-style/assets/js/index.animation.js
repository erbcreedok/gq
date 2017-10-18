//Doors
var doors = [
    {
        information: '<p class="upper">КАТЕГОРИЯ <span class="door-type">X</span></p>',
        src: 'assets/images/door.jpg'
    },
    {
        information: '<p class="upper">КАТЕГОРИЯ <span class="door-type">U</span></p>',
        src: 'assets/images/doorU.jpg'
    },
    {
        information: '<p class="upper">КАТЕГОРИЯ <span class="door-type">D</span></p>',
        src: 'assets/images/doorD.jpg'
    }
];
var activeDoor = 0;
var doorTimer;
function switchDoor() {
    $('.doorActiveHere').attr('src', doors[activeDoor].src);
    $('.doorInformationHere').html(doors[activeDoor].information);
    $('.activeDoorNumberHere').html(activeDoor+1);
    $('.doorsLengthHere').html(doors.length);
}
function onDoorPressed(num) {
    activeDoor = (activeDoor + num + doors.length) % doors.length;
    var rotate = (num === 1) ? 'left' : 'right';
    var elem = $('.door-slider');
    console.log(rotate);
    $(elem).removeClass('door-slider-in-left door-slider-in-right').addClass('door-slider-out-' + rotate);
    doorTimer = setTimeout(function() {
        clearTimeout(doorTimer);
        switchDoor();
        $(elem).removeClass('door-slider-out-left door-slider-out-right').addClass('door-slider-in-' + rotate);
    }, 150);
}


//Workers
var workers = [
    {
        information: '<h2>Наш директор</h2><p class="cursive gray">Принцип нашей работы</p><p class="gray">Так же можно получить как дополнение к самой двери на выбор или заказать отдельно к же можно получить как дополнение к самой двери на выбор или заказать отдельно олнение к самой двери на выбор или заказать отдельно</p> <img src="assets/images/handwrite.png" style="margin: -10px 0px 0px 10px" width="125px">',
        src: 'assets/images/director.jpg'
    },
    {
        information: '<h2>Мираш Байжуманова</h2><p class="cursive gray">Принцип нашей работы</p><p class="gray">Так же можно получить как дополнение к самой двери на выбор или заказать отдельно к же можно получить как дополнение к самой двери на выбор или заказать отдельно олнение к самой двери на выбор или заказать отдельно</p> <img src="assets/images/handwrite.png" style="margin: -10px 0px 0px 10px" width="125px">',
        src: 'assets/images/team2.jpg'
    },
    {
        information: '<h2>Исполнительный директор</h2><p class="cursive gray">Принцип нашей работы</p><p class="gray">Так же можно получить как дополнение к самой двери на выбор или заказать отдельно к же можно получить как дополнение к самой двери на выбор или заказать отдельно олнение к самой двери на выбор или заказать отдельно</p> <img src="assets/images/handwrite.png" style="margin: -10px 0px 0px 10px" width="125px">',
        src: 'assets/images/team3.jpg'
    }
];
var activeWorker = 0;
var workerTimer;
function switchWorker() {
    $('.workerInformationHere').html(workers[activeWorker].information);
    $('.workerImageHere').css({'background-image' : 'url(' + workers[activeWorker].src + ')'});
    var circles = $('.workerCircles');
    $(circles).html('');
    for (var i = 0; i < workers.length; i++) {
        $(circles).append('<i class="fa fa-circle" onclick="animateWorker(' + i + ')"></i>');
    }
    $('.workerCircles i').eq(activeWorker).addClass('active');
}
function animateWorker(num) {
    var rotate = '';
    if (typeof num === 'number') {
        num = (num + workers.length) % workers.length;
        rotate = (num > activeWorker ) ? 'left' : 'right';
        activeWorker = num;
    } else {
        rotate = num;
        activeWorker = (activeWorker + (num === 'left' ? 1 : -1) + workers.length) % workers.length;
    }
    var elem = $('.worker-slider');
    $(elem).removeClass('door-slider-in-left door-slider-in-right').addClass('door-slider-out-' + rotate);
    workerTimer = setTimeout(function() {
        clearTimeout(workerTimer);
        switchWorker();
        $(elem).removeClass('door-slider-out-left door-slider-out-right').addClass('door-slider-in-' + rotate);
    }, 150);
}
$(document).on('click', '.workerArrowLeft, .workerArrowRight', function(){
    animateWorker($(this).hasClass('workerArrowLeft') ? 'right' : 'left');
});
$(document).on('swipeleft', '.worker-slider-container', function(event) {
    animateWorker('left');
});
$(document).on('swiperight', '.worker-slider-container', function(event) {
    animateWorker('right');
});
switchWorker();


//History
var story = [
    'Разрешите приветствовать Вас от имени компании «HomeStyle Distribution» с пожеланиями благополучия и процветания!Мы предлагаем Вам продукцию производства одного из самых известных российских производителей дверей - компании «Profil Doors».',
    'Межкомнатные двери данного завода – это ни только высочайшее качество европейского уровня и экологичность,но и огромное разнообразие моделей по размерам,стилям от классики до хай-тек, которое позволяет удовлетворить вкус любого самого взыскательного покупателя.',
    'Все двери компании «Profil Doors» производятся на современном, высокотехнологичном европейском оборудовании. Важным условием является использование лучших импортных материалов, в результате чего исключены любые производственные дефекты готовой продукции.',
    'Мы будем рады помочь Вам с выбором модели межкомнатных дверей, чтобы они радовали Вас на протяжении долгих лет своим исключительным дизайном, непревзойдённым качеством, приятными воспоминаниями о цене и сотрудничестве с нашей компанией!'
];
var activeStory = 0;
var storyTimer = 0;
function switchStory() {
    $('.storyTextHere').html(story[activeStory]);
    $('.activeStoryNumHere').html(activeStory+1);
    $('.storyCountHere').html(story.length);
}
function animateStory(num) {
    activeStory = (num + story.length) % story.length;
    var elem = $('.storyTextHere').removeClass('door-slider-in-left').addClass('door-slider-out-left');
    storyTimer = setTimeout(function() {
        clearTimeout(storyTimer);
        switchStory();
        $(elem).removeClass('door-slider-out-left').addClass('door-slider-in-left');
    }, 150);
}
function onStoryChangePressed() {
    animateStory(activeStory + 1);
}
