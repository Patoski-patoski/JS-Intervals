let btn = document.querySelector('button');
let myDiv = document.querySelector('div');
let h2 = document.querySelector('h2');


let array = ['I', ' ', 'L', 'O', 'V', 'E', ' ', 'J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T'];


let js = 'javascript'

let i = 0;

btn.addEventListener('click', myFunc)



function myFunc() {

    function removeHandler() {
        btn.removeEventListener('click', myFunc)
    }


    let int = setInterval(() => {

        myDiv.innerHTML += "<span>" + array[i].toLowerCase() + "</span>";
        i++;


        if (myDiv.innerText.length === array.length) {

            clearInterval(int);
            removeHandler();

        }

        function removeHandler() {
            btn.removeEventListener('click', myFunc)
        }



    }, 200);

    let otherInt = setInterval(() => {
        myDiv.innerHTML = 'i love justice';
        otherInt = setInterval(() => {
            myDiv.innerHTML = 'i love <span class = strike>juice</span>';
            otherInt = setInterval(() => {
                myDiv.innerHTML = 'i love <span class = red >Jesus</span>';


            }, 2000);

        }, 2000);

    }, 4000);



}
clearInterval(otherInt)
clearInterval(otherInt)
clearInterval(otherInt)

