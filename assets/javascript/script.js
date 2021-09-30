document.addEventListener('scroll', () => {

    // console.log(window.pageYOffset);

    let __header = document.querySelector('.new-header');



    // console.log(__logo);

    if (window.pageYOffset > 350) {

        __header.style.background = 'rgba(0,0,0,1)';

    }

    else {

        __header.style.background = 'rgba(0,0,0,0)';

    }

})