import React from 'react';
import './App.scss';
function App() {
    const handleCardClick = (event) => {
        const card = event.target.closest(".card");
        if (card.classList.contains("card--open")) {
            card.classList.remove("card--open");
        } else {
            const openCard = document.querySelector(".card--open");
            if (openCard) {
                openCard.classList.remove("card--open");
            }
            card.classList.add("card--open");
        }
    };

    return (
        <div className="container">
            <div className="card" onClick={handleCardClick}>
                <img className="card__img" src="https://source.unsplash.com/random/300x300" alt="" />
                <div className="card__content">
                    <h3 className="card__title">Card Title</h3>
                    <p className="card__desc">
                        Adipisicing corporis dolore cum culpa deserunt! Alias tenetur est sit explicabo dolores dolorem
                        Necessitatibus recusandae sit error consequuntur alias! Voluptatum reiciendis veritatis
                    </p>
                </div>
                <span className="card__btn"></span>
            </div>
            <div className="card" onClick={handleCardClick}>
                <img className="card__img" src="https://source.unsplash.com/random/300x300" alt="" />
                <div className="card__content">
                    <h3 className="card__title">Card Title</h3>
                    <p className="card__desc">
                        Adipisicing corporis dolore cum culpa deserunt! Alias tenetur est sit explicabo dolores dolorem
                        Necessitatibus recusandae sit error consequuntur alias! Voluptatum reiciendis veritatis
                    </p>
                </div>
                <span className="card__btn"></span>
            </div>
        </div>
    );
}

export default App;