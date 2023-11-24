let darkMode = true

const screenBtn = document.getElementById('toggle-mode')

screenBtn.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light') //alteranará no html a classe light

    //acessibilidade
    const mode = darkMode ? 'Light' : 'Dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})