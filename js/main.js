window.addEventListener('scroll', scrollAnimation);

function scrollAnimation() {

    const scrollHeight = window.scrollY;
    const windowHeight = window.innerHeight;

    const getOffsetTop = element => {
        let offsetTop = 0;
        while (element) {
            offsetTop += element.offsetTop;
            element = element.offsetParent;
        }
        return offsetTop;
    }

    const school1 = document.querySelector('.education li:nth-child(1)');
    const school2 = document.querySelector('.education li:nth-child(2)');
    const school3 = document.querySelector('.education li:nth-child(3)');
    const school4 = document.querySelector('.education li:nth-child(4)');

    const school1Height = school1.offsetHeight;
    const school2Height = school2.offsetHeight;
    const school3Height = school3.offsetHeight;
    const school4Height = school4.offsetHeight;

    const school1FromTop = getOffsetTop(school1);
    const school2FromTop = getOffsetTop(school2);
    const school3FromTop = getOffsetTop(school3);
    const school4FromTop = getOffsetTop(school4);

    if (scrollHeight > school1FromTop + school1Height - windowHeight) {
        school1.classList.add('active');
    }

    if (scrollHeight > school2FromTop + school2Height - windowHeight) {
        school2.classList.add('active');
    }

    if (scrollHeight > school3FromTop + school3Height - windowHeight) {
        school3.classList.add('active');
    }

    if (scrollHeight > school4FromTop + school4Height - windowHeight) {
        school4.classList.add('active');
    }


    const work1 = document.querySelector('.work li:nth-child(1)');
    const work2 = document.querySelector('.work li:nth-child(2)');
    const work3 = document.querySelector('.work li:nth-child(3)');
    const work4 = document.querySelector('.work li:nth-child(4)');

    const work1Height = work1.offsetHeight;
    const work2Height = work2.offsetHeight;
    const work3Height = work3.offsetHeight;
    const work4Height = work4.offsetHeight;

    const work1FromTop = getOffsetTop(work1);
    const work2FromTop = getOffsetTop(work2);
    const work3FromTop = getOffsetTop(work3);
    const work4FromTop = getOffsetTop(work4);

    if (scrollHeight > work1FromTop + work1Height - windowHeight) {
        work1.classList.add('active');
    }

    if (scrollHeight > work2FromTop + work2Height - windowHeight) {
        work2.classList.add('active');
    }

    if (scrollHeight > work3FromTop + work3Height - windowHeight) {
        work3.classList.add('active');
    }

    if (scrollHeight > work4FromTop + work4Height - windowHeight) {
        work4.classList.add('active');
    }

    //Skills animation on sroll
    const skills = document.querySelector('.skills');
    const skillsHeight = skills.offsetHeight;
    const skillsFromTop = skills.offsetTop;

    if (scrollHeight > skillsFromTop + skillsHeight - windowHeight) {
        skills.classList.add('active');
    }















    //Clear class active
    const sectionEducation = document.querySelector('.education').offsetTop;
    if (scrollHeight < sectionEducation - windowHeight) {
        school1.classList.remove('active');
        school2.classList.remove('active');
        school3.classList.remove('active');
        school4.classList.remove('active');
    }

    const sectionWork = document.querySelector('.work').offsetTop;
    if (scrollHeight < sectionWork - windowHeight) {
        work1.classList.remove('active');
        work2.classList.remove('active');
        work3.classList.remove('active');
        work4.classList.remove('active');
    }




}





const menu = document.querySelector('.menu');
const hamburgerIcon = document.querySelector('.fa-bars');
const xIcon = document.querySelector('.fa-times');
const nav = document.querySelector('header nav');
const a1 = document.querySelector('nav li:nth-child(1)');
const a2 = document.querySelector('nav li:nth-child(2)');
const a3 = document.querySelector('nav li:nth-child(3)');
const a4 = document.querySelector('nav li:nth-child(4)');
const a5 = document.querySelector('nav li:nth-child(5)');
const a6 = document.querySelector('nav li:nth-child(6)');
const a7 = document.querySelector('nav li:nth-child(7)');
a1.addEventListener('click', function () {
    nav.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
});
a2.addEventListener('click', function () {
    nav.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
});
a3.addEventListener('click', function () {
    nav.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
});
a4.addEventListener('click', function () {
    nav.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
});
a5.addEventListener('click', function () {
    nav.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
});
a6.addEventListener('click', function () {
    nav.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
});
a7.addEventListener('click', function () {
    nav.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
});

menu.addEventListener('click', function () {
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
    nav.classList.toggle('active');
})

const scroll = new SmoothScroll('a[href*="#"]');