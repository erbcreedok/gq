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
    console.log(num, activeDoor, doors.length);
    activeDoor = (activeDoor + num + doors.length) % doors.length;
    console.log(num, activeDoor, doors.length);
    var rotate = (num === 1) ? 'left' : 'right';
    var elem = $(".door-slider");
    console.log(rotate);
    $(elem).removeClass('door-slider-in-left door-slider-in-right').addClass('door-slider-out-' + rotate);
    doorTimer = setTimeout(function() {
        clearTimeout(doorTimer);
        switchDoor();
        $(elem).removeClass('door-slider-out-left door-slider-out-right').addClass('door-slider-in-' + rotate);
    }, 150);
}
