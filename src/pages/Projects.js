import React from 'react';
import Footer from './Footer';
import Header from './Header';
// import '../styles/pages/login.css';

const arrayLinks = [
  "https://source.unsplash.com/random/250x250/?fruit",
  "https://source.unsplash.com/random/250x250/?beach",
  "https://source.unsplash.com/random/250x250/?animal",
  "https://source.unsplash.com/random/250x250/?night"
]

const handleClickNext = ({ target }) => {
  let currentItem = 0;
  const maxLength = arrayLinks.length;
  const lastIndex = arrayLinks.length - 1

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

  const items = document.querySelectorAll('.carousel-item');
  items.forEach((e) => e.classList.remove('current-item'));
  items[currentItem].classList.add('current-item');

  items[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "center"
  });
}

export default function Projects() {
  return (
    <div className="projects">
      <Header />
      <div className="carousel-container">
        <button
          className="arrow-left control"
          aria-label="Previous-image"
          onClick={(e) => handleClickNext(e)}
        >
          ◀
        </button>
        <button
          className="arrow-right control"
          aria-label="Next"
          onClick={(e) => handleClickNext(e)}
        >
          ▶
        </button>
        <div className="carousel-gallery-wrapper">
          <div className="carousel-gallery">
            {arrayLinks.map((e, i) => {
              return <img
                className={i === 0 ? "carousel-item current-item" : "carousel-item"}
                id={i}
                src={`${e}`}
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
