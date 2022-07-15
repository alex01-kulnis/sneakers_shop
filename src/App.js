function App() {
    return (
        <div className="wrapper clear">
            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/image 4.png" />
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших красовок</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="mr-30">
                        <img width={18} height={18} src="/img/basket.png" />
                        <span>1205 рублей</span>
                    </li>
                    <li>
                        <img width={20} height={20} src="/img/user.png" />
                    </li>
                </ul>
            </header>
            <div className="content p-40">
                <h1 className="mb-40">Все кроссовки</h1>
                <div className="d-flex">
                    <div className="card">
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
                    <div className="card">
                        <img width={133} height={133} src="/img/2.jpg" alt="Sneakers"></img>
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
                    <div className="card">
                        <img width={133} height={133} src="/img/3.jpg" alt="Sneakers"></img>
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
                    <div className="card">
                        <img width={133} height={133} src="/img/4.jpg" alt="Sneakers"></img>
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
                </div>
            </div>
        </div>
    );
}

export default App;
