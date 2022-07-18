/* eslint-disable jsx-a11y/alt-text */
function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/image 4.png" alt="Logotype" />
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших красовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/basket.png" alt="Cart" />
                    <span>1205 рублей</span>
                </li>
                <li>
                    <img width={20} height={20} src="/img/user.png" alt="User" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
