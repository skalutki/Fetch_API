import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */



fetch('https://api.github.com/users/skalutki/repos?sort=created')
.then( resp => resp.json())
.then( resp => {
    for (let repo of resp){
        const {name, html_url, description, homepage } = repo;
        const projects = document.querySelector('.projects--js');
        const myTemplate = `
        <section class="project">
            <h2 class="project__title">${name}</h2>
            <p class="project__description">${description}</p>
                <footer class="project__footer">
                    <a class="footer__link" href="${homepage}" title="Link do projektu ${name}">demo</a>
                    <a class="footer__link" href="${html_url}" title="Link do repozytorium z projektu ${name}">repozytorium</a>
                </footer>
        </section>`;
        projects.innerHTML += myTemplate;

    }
})
.catch(error => {
    console.log('Nie udało się pobrać danych z serwera');
}) 

