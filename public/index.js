const socket = io('/');
function play_guitar(){
    // var guitar=document.createElement('div');
    // guitar.setAttribute('id', 'guitar_instrument');
    // var i=document.querySelector('.instruments');
    // i.append(guitar);
    var p=document.querySelector('.guitar').style.display;
    if (p == 'none') { 
        document.querySelector('.guitar').style.display = 'flex';
    }
    else {
        document.querySelector('.guitar').style.display = 'none';
    }
} 
function play_piano(){
    var p=document.querySelector('.piano').style.display;
    if (p == 'none') {
        document.querySelector('.piano').style.display = 'flex';
    }
    else {
        document.querySelector('.piano').style.display = 'none';
    }
    
}

function click_red(){
    console.log("Clicking red")
    socket.emit('red');
}
socket.on('press a',()=>{
    console.log("Client red");
    let element = document.createElement('div');
   element.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'}));
   element.remove();

})
function click_blue(){
    console.log("Clicking blue")
    socket.emit('blue');
}
socket.on('press s',()=>{
    let element = document.createElement('div');
   element.dispatchEvent(new KeyboardEvent('keydown', {'key': 's'}));
   element.remove();

})
function click_green(){
    console.log("Clicking green")
    socket.emit('green');
}
socket.on('press d',()=>{
    let element = document.createElement('div');
   element.dispatchEvent(new KeyboardEvent('keydown', {'key': 'd'}));
   element.remove();

})
function click_yellow(){
    console.log("Clicking yellow")
    socket.emit('yellow');
}
socket.on('press f',()=>{
    let element = document.createElement('div');
   element.dispatchEvent(new KeyboardEvent('keydown', {'key': 'f'}));
   element.remove();

})