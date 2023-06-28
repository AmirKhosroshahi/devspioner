import React, {useEffect} from "react";

import anime from "animejs";
import Styles from "../components/Header/Header.module.scss";

const activeHover = (active) => {
    const getLink = document.querySelectorAll(".nav>ul>li");
    getLink.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            const activeHover = document.querySelector('.bor');
            !active ? activeHover.style = `width:0;height:0;border-bottom: 2px solid #3719c9;position:absolute;bottom:0;left:${item.offsetLeft}px;transition: all 0.2s;` : activeHover.style = `width:${e.target.clientWidth}px;height:2px;border-bottom: 2px solid #3719c9;position:absolute;bottom:10px;left:${item.offsetLeft}px;transition: all 0.2s;`
        })
    })
    getLink.forEach(item => {
        item.addEventListener('mouseleave', (e) => {
            const activeHover = document.querySelector('.bor');
            !active ? activeHover.style = `width:0;height:0;border-bottom: 2px solid #3719c9;position:absolute;bottom:0;left:${item.offsetLeft}px;transition: all 0.2s;` : activeHover.style = `width:${e.target.clientWidth}px;transform: scale(0);height:2px;border-bottom: 2px solid #3719c9;position:absolute;bottom:10px;left:${item.offsetLeft}px;transition: all 0.6s;`

        })
    })
}

const backgroundHeader = () => {
    let getTagHeader = document.querySelector(".header")
    window.addEventListener("scroll", e => {
        if (window.scrollY > 0) {
            getTagHeader.style = 'position:fix;background:rgba(2, 2, 31, 0.87) none repeat scroll 0% 0%;padding-top: 10px;z-index:2'
        } else {
            getTagHeader.style = 'padding: 10px;'
        }

    })
}

/* Effect Anime */
const effectScrollHome = (tagName) => {
    const logoAnimation = anime.timeline({
        autoplay: true,
        delay: 100
    })
    logoAnimation
        .add({
            targets: `.${tagName}`,
            translateY: [-100, 0],
            opacity: [0, 1],
            elasticity: 600,
            duration: 1600,
            easing: 'easeOutExpo',
        })
}

function effectScrollProject() {
    const getAllTagProject = document.querySelectorAll('.parent-image');
    getAllTagProject.forEach(item => {
        item.addEventListener('mousemove', function (e) {
            let attrPosition = item.getBoundingClientRect();
            let posY = Math.abs(Math.floor(attrPosition.y));
            const dataIud = item.dataset.iud;
            item.style = '';
        })
    })

}

const transformEffect = (transform) => {
    let tar = 0;
    let tagAllProject = transform.current;
    window.addEventListener('scroll', function (e) {
        if (tar !== null && tagAllProject !== null) {
            window.scrollY <= tagAllProject?.offsetTop ? tar++ : tar = 0;
            window.scrollY <= tagAllProject?.offsetTop || window.scrollY <= tagAllProject?.offsetTop / 2 && (tar = 0)
            window.scrollY <= tagAllProject?.offsetTop ? tagAllProject.style = `transform:translateX(${tar >= 1000 ? 0 : -tar * 2}px);` : tagAllProject.style = `transform:translateX(${tar}px);`;
        }
    })

}

const movCircleHandler = (event, CircleLeft, CircleRight) => {
    /* Left && Right Mov */
    const allWidth = window.innerWidth;
    if (allWidth / 2 <= event.clientX) {
        CircleRight.current.style = `left:80px;`;
        CircleLeft.current.style = `right:40px;`;
    } else {
        CircleRight.current.style = `left:40px;`;
        CircleLeft.current.style = `right:100px;`;
    }


}

const odd = (number) => {
    let style = ''
    for (let i = 0; i <= number; i++) {
        i % 2 === 0 ? style = 'row' : style = 'row-reverse'
    }
    return style;
}

const cursorPointer = (tagPointer, rightEye, leftEye, nose) => {
    window.addEventListener('mousemove', function (event) {
        tagPointer.style = `
            width:35px;
            height:35px;
            background: #fff;
            border: 1px solid #fff;
            position:fixed;
            top:${event.clientY - 5}px;
            left:${event.clientX - 9}px;
            border-radius:50%;
            transform: matrix(1, 0, 0, 1, 0, 0);
            border-width: 2px;`;
        const allWidth = window.innerWidth;
        if (allWidth / 2 <= event.clientX) {
            rightEye.style.right = '3px';
            leftEye.style.left = '5px';
            nose.style.left = '2px';
        } else {
            rightEye.style.right = '6px';
            leftEye.style.left = '3px';
            nose.style.left = '-5px';
        }

    })

}

const openMenu = (setActiveClick, activeClick) => {
    setActiveClick(privState => !privState);
    const openMenuIcon = document.querySelector('.open');
    const closeMenuIcon = document.querySelector('.close');
    const Menu = document.querySelector('.nav>ul');

    if (activeClick) {
        openMenuIcon.style.display = 'none';
        closeMenuIcon.style.display = 'block';
    } else {
        openMenuIcon.style.display = 'block';
        closeMenuIcon.style.display = 'none';
    }
    Menu.classList.toggle(Styles['open']);


}
const blink = (rightEye, leftEye) => {

    setInterval(() => {
        rightEye.style.transform = `rotateX(100deg)`;
        leftEye.style.transform = `rotateX(100deg)`;

    }, 5000)
    setInterval(() => {
        rightEye.style.transform = `rotateX(0)`;
        leftEye.style.transform = `rotateX(0)`;
    }, 3000)
}

const checkAdminLogin = (router) => {
    const getAdmin = +localStorage.getItem('adm');
    if (!getAdmin) {
        router.push('loginadmin');
    } else if (router.route === '/loginadmin') {
        router.push('dashboardamircv');
    }
}


export {
    odd,
    effectScrollHome,
    effectScrollProject,
    activeHover,
    backgroundHeader,
    movCircleHandler,
    cursorPointer,
    blink,
    transformEffect,
    openMenu,
    checkAdminLogin,
};