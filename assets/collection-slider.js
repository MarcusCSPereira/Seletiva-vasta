document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");
    let isTransitioning = false;
    let isHovered = false;
    const itemWidth = 273; // Largura do item + espaçamento

    function updateActiveItem() {
        if (isHovered) return; // Se o mouse estiver sobre outro item, não muda para o do meio

        const allItems = Array.from(carousel.children);
        allItems.forEach((item) => {
            item.classList.remove("active", "prev", "next", "hidden-left", "hidden-right");
        });

        let middleIndex = Math.floor(allItems.length / 2);
        let isOdd = allItems.length % 2 !== 0;

        if (isOdd) {
            allItems[middleIndex].classList.add("active");
        }

        if (allItems[middleIndex - 1]) allItems[middleIndex - 1].classList.add("prev");
        if (allItems[middleIndex + 1]) allItems[middleIndex + 1].classList.add("next");

        if (allItems[middleIndex - 2]) allItems[middleIndex - 2].classList.add("hidden-left");
        if (allItems[middleIndex + 2]) allItems[middleIndex + 2].classList.add("hidden-right");
    }

    function moveCarousel(direction, steps = 1) {
        if (isTransitioning) return;
        isTransitioning = true;

        carousel.style.transition = `transform ${0.4 * steps}s ease-in-out`;
        carousel.style.transform = `translateX(${direction === "next" ? `-${itemWidth * steps}px` : `${itemWidth * steps}px`})`;

        setTimeout(() => {
            for (let i = 0; i < steps; i++) {
                if (direction === "next") {
                    carousel.appendChild(carousel.firstElementChild);
                } else if (direction === "prev") {
                    carousel.prepend(carousel.lastElementChild);
                }
            }

            carousel.style.transition = "none";
            carousel.style.transform = "translateX(0)";
            updateActiveItem();
            isTransitioning = false;
        }, 400 * steps);
    }

    function centerItemOnClick(event) {
        if (isTransitioning) return;

        const clickedItem = event.currentTarget;
        const allItems = Array.from(carousel.children);
        const clickedIndex = allItems.indexOf(clickedItem);
        const middleIndex = Math.floor(allItems.length / 2);

        if (clickedIndex === middleIndex) return;

        const shiftCount = Math.abs(clickedIndex - middleIndex);
        const direction = clickedIndex > middleIndex ? "next" : "prev";

        moveCarousel(direction, shiftCount);
    }

    function handleMouseEnter(event) {
        isHovered = true;
        const hoveredItem = event.currentTarget;

        const allItems = Array.from(carousel.children);
        allItems.forEach((item) => item.classList.remove("active"));
        hoveredItem.classList.add("active");
    }

    function handleMouseLeave() {
        isHovered = false;
        updateActiveItem();
    }

    const items = Array.from(document.querySelectorAll(".collection-item"));
    items.forEach((item) => {
        item.addEventListener("click", centerItemOnClick);
        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
    });

    nextButton.addEventListener("click", function () {
        moveCarousel("next");
    });

    prevButton.addEventListener("click", function () {
        moveCarousel("prev");
    });

    updateActiveItem();
});
