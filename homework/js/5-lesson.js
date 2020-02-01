let cat = document.querySelector('#ced')


cat.classList.add('se')

function createSomeDOM() {
    let imgs = document.createElement('IMG')
    let dot = document.createElement('div')
    let pas = document.createElement('h2')
    let get = document.createElement('p')
    dot.id = '1'
    imgs.src = 'https://via.placeholder.com/150'
    pas.innerText = 'Ракетка'
    get.innerText = '200p'
    dot.appendChild(imgs)
    dot.appendChild(pas)
    dot.appendChild(get)
    cat.appendChild(dot)
}
createSomeDOM()

function createSomeDOM2() {
    let imgs = document.createElement('IMG')
    let dot = document.createElement('div')
    let pas = document.createElement('h2')
    let get = document.createElement('p')
    dot.id = '2'
    imgs.src = 'https://via.placeholder.com/150'
    pas.innerText = 'Мяч'
    get.innerText = '300p'
    dot.appendChild(imgs)
    dot.appendChild(pas)
    dot.appendChild(get)
    cat.appendChild(dot)
}
createSomeDOM2()