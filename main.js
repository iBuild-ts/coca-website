document.addEventListener('DOMContentLoaded', () => {

    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener('click', () => {

        const isOpen = mobileMenu.classList.toggle('open');

        menuButton.classList.toggle('active', isOpen);

        menuButton.setAttribute(
            'aria-expanded',
            isOpen ? 'true' : 'false'
        );

        menuButton.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );
    });

    // Close menu when a mobile link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {

            mobileMenu.classList.remove('open');
            menuButton.classList.remove('active');

            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute(
                'aria-label',
                'Open navigation menu'
            );
        });
    });

});