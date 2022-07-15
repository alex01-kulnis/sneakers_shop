function Header() {
    return (
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
    );
}

export default Header;