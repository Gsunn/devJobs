document.addEventListener('DOMContentLoaded', () => {
    console.log('Content loaded')
    const skills = document.querySelector('.lista-conocimientos')

    if (skills) {
        skills.addEventListener('click', agregarSkills)
    }
})

const skills = new Set()

const agregarSkills = e => {
    if (e.target.tagName === 'LI') {
        if (e.target.classList.contains('activo')) {
            e.target.classList.remove('activo')
            skills.delete(e.target.textContent)
            console.log(skills);
        } else {
            //console.log(e.target.textContent);
            skills.add(e.target.textContent)
            console.log(skills);
            e.target.classList.add('activo')
        }
    }
    const skillsArray = [...skills]
    document.querySelector('#skills').value = skillsArray

}

