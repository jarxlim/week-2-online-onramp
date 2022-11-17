const text = document.querySelectorAll('.box')

const btnOne = document.querySelector('.btn1')
const btntwo = document.querySelector('.btn2')

function checkAllBoxes() {
for (let index = 0; index < text.length; index++) {
    let element = text[index];
    if (element.value.length==0) {
        alert(`all input boxes must be filled`)
    }else{
        alert(`welcome user`)
    }
}

}
btntwo.addEventListener('click',checkAllBoxes())