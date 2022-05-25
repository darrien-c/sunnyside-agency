window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    function show_navbar(event) {
        event.preventDefault();
        //document.getElementById('nav-list').style.display ='block';
        document.getElementById('nav-list').toggleAttribute('hidden');
        console.log('Click?');
    }

    document.getElementById('hamburger-menu').addEventListener('click', show_navbar);


});