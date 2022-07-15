function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={133} src="/img/1.jpg" alt="Sneakers"></img>
            <h5>Мужские кроссовки Nike Blazer Mid</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.png" alt="Plus"></img>
                </button>
            </div>
        </div>
    );
}

export default Card;
