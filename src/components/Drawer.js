import React from 'react';

export const Drawer = ({ onClose, onRemove, items = 0 }) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30 ">
                    Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
                </h2>

                {items.length > 0 ? (
                    <div>
                        {' '}
                        <div className="items">
                            {items.map((obj) => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <div
                                        style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                        className="cartItemImg"
                                    ></div>
                                    <div className="mr-20">
                                        <p className="mb-5">{obj.name}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className="removeBtn"
                                        src="/img/btn-remove.svg"
                                        alt="Remove"
                                    />
                                </div>
                            ))}
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>21 498 руб.</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>1074 руб.</b>
                                    </li>
                                </ul>
                                <button className="greenButton">
                                    Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty Cart" />
                        <h2>Пустая корзина</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/img/arrow.svg" alt="Arrow" />
                            Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
