window.onload = function () {
    const nine = document.querySelector('.nine');
    const eight = document.querySelector('.eight');
    const seven = document.querySelector('.seven');
    const six = document.querySelector('.six');
    const five = document.querySelector('.five');
    const four = document.querySelector('.four');
    const three = document.querySelector('.three');
    const two = document.querySelector('.two');
    const one = document.querySelector('.one');
    const zero = document.querySelector('.zero');
    const screen = document.querySelector('.screen');

    const numbers = [nine, eight, seven, six, five, four, three, two, one, zero]

    numbers.forEach(element => {
        element.onclick = function () {
            console.log(element.innerHTML);
            screen.innerHTML += element.innerHTML;
        }

    });


}
