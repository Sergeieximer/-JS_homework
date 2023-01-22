const blockHeaderItemWrappers = document.getElementsByClassName("block-header-item");
const sliderNavigationRadio = document.getElementsByClassName("slider_navigation_radio");
const sliderNext = document.querySelector(".slider_navigation_next");
const sliderPrev = document.querySelector(".slider_navigation_prev");
const slides = document.querySelectorAll(".right-desktop-img-wrapper");
const leftPartOptionsItemData = document.querySelectorAll('.left-part-options-item-data');

let currentIndex = 0;

const data = [
    {
        city: 'Rostov-on-Don LCD Admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request'
    },
    {
        city: 'Sochi     Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },
    {
        city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    },
];


function updateData(index) {
    leftPartOptionsItemData[0].textContent = data[index].city;
    leftPartOptionsItemData[1].textContent = data[index].area;
    leftPartOptionsItemData[2].textContent = data[index].time;
    leftPartOptionsItemData[3].textContent = data[index].cost;
}

for (let i = 0; i < blockHeaderItemWrappers.length; i++) {
    blockHeaderItemWrappers[i].addEventListener("click", function () {
        updateActiveClasses(i);
    });

    sliderNavigationRadio[i].addEventListener("click", function () {
        updateActiveClasses(i);
    });
}

sliderPrev.addEventListener('click', function () {
    slides[currentIndex].classList.remove('right-desktop-img-wrapper-active');
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    slides[currentIndex].classList.add('right-desktop-img-wrapper-active');
    updateActiveClasses(currentIndex);
});

sliderNext.addEventListener('click', function () {
    slides[currentIndex].classList.remove('right-desktop-img-wrapper-active');
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slides[currentIndex].classList.add('right-desktop-img-wrapper-active');
    updateActiveClasses(currentIndex);
});


function updateActiveClasses(index) {
    for (let j = 0; j < blockHeaderItemWrappers.length; j++) {
        blockHeaderItemWrappers[j].classList.remove("block-header-item-active");
    }

    for (let j = 0; j < sliderNavigationRadio.length; j++) {
        sliderNavigationRadio[j].classList.remove("slider_navigation_radio_active");
    }

    blockHeaderItemWrappers[index].classList.add("block-header-item-active");
    sliderNavigationRadio[index].classList.add("slider_navigation_radio_active");

    slides[currentIndex].classList.remove('right-desktop-img-wrapper-active');
    currentIndex = index;
    slides[currentIndex].classList.add('right-desktop-img-wrapper-active');
    updateData(index);
}


