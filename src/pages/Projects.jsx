import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Projects() {

  const arrayLinks = [
    "https://source.unsplash.com/random/250x250/?fruit",
    "https://source.unsplash.com/random/250x250/?beach",
    "https://source.unsplash.com/random/250x250/?animal",
    "https://source.unsplash.com/random/250x250/?night"
  ]

  let currentItem = 0;

  const changeCurrentItem = (i) => {
    const current = document.querySelector('.carousel-item.current-item');

    current.classList.remove('current-item');
    const items = document.querySelectorAll('.carousel-item');

    items[i].classList.add('current-item');

    items[i].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });
    currentItem = i
  }

  const sideBarFunction = ({ target }) => {
    const maxLength = arrayLinks.length;
    const lastIndex = arrayLinks.length - 1
    console.log(target);

    if (target.ariaLabel === "Next") {
      currentItem += 1
    } else {
      currentItem -= 1
    }

    if (currentItem >= maxLength) {
      currentItem = 0
    }

    if (currentItem < 0) {
      currentItem = lastIndex
    }

    changeCurrentItem(currentItem);
  }

  return (
    <div className="projects">
      <Header />
      <div className="carousel-container">
        <button
          className="arrow-left control"
          aria-label="Previous-image"
          key="left-side-bar"
          onClick={(e) => sideBarFunction(e)}
        >
          ◀
        </button>
        <button
          className="arrow-right control"
          aria-label="Next"
          key="right-side-bar"
          onClick={(e) => sideBarFunction(e)}
        >
          ▶
        </button>
        <div className="carousel-gallery-wrapper">
          <div className="carousel-gallery">
            {arrayLinks.map((e, i) => {
              return <img
                className={i === 0 ? "carousel-item current-item" : "carousel-item"}
                id={i}
                key={i}
                onClick={() => changeCurrentItem(i)}
                src={e}
                alt=""
              >
              </img>
            })}
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}
