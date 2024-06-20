// recuperer la div avec la classe burger

let menu = document.getElementById('menu')

// on ajoute un évenement lors d'un clic dessus
menu.addEventListener('click', () => {
    // on met les 3 barres ou bien la croix
    menu.classList.toggle('open')
})