let btn1 = document.querySelectorAll(".btnmax")
let btn2 = document.querySelectorAll('.btnmin')
let like = document.querySelectorAll(".like")


for (let i of btn1) {
    i.addEventListener('click', () => {
        let num = i.nextElementSibling
        if (num.value < 7) {
            num.value++
            total()
        }
    })
}

for (let i of btn2) {
    i.addEventListener('click', () => {
        let num = i.previousElementSibling
        if (num.value > 0) {
            num.value--
            total()
        }
        else
            num.value = 0
    })
}

function total() {
    let father = document.querySelectorAll(".media")
    let sum = 0
    for (let el of father) {
        let quantity = el.querySelector(".btn").value
        let price = el.querySelector(".price").value
        sum = sum + price * quantity
    }
    document.querySelector("#tot").innerHTML = sum
}


let close = document.querySelectorAll(".delete")

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
        total();
    })
}



for (const li of like) {
    li.addEventListener('click', (e) => {
        if (e.target.style.color == "red") {
            e.target.style.color = "black"
        }
        else { e.target.style.color = "red" }
    })
}

