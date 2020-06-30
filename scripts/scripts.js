const modalOverlay =  document.querySelector(".modal-overlay")
const receitas = document.querySelectorAll('.card')
const close = document.querySelector('.close')

for(let receita of receitas){
    const id = receita.getAttribute("id")
    const nome = receita.querySelector("h3").innerText
    const autor = receita.querySelector("p").innerText

    receita.addEventListener('click', function(){
        modalOverlay.classList.add('active')
        document.getElementById('image').src = `/assets/${id}.png`
        document.getElementById('nome-receita').textContent = `${nome}`
        document.getElementById('autor').textContent = `${autor}`

    })
    close.addEventListener('click',function(){
        modalOverlay.classList.remove('active')
    })
}

