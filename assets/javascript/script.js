document.addEventListener('scroll', () => {

    // console.log(window.pageYOffset);

    let __header = document.querySelector('.new-header');



    // console.log(__logo);

    if (window.pageYOffset > 350) {

        __header.style.background = 'rgba(136,198,241,1)';

    }

    else {

        __header.style.background = 'rgba(136,198,241,0)';

    }

})