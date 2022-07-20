import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../../hooks/useCart';
import Info from '../Info';
import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const Drawer = ({ onClose, onRemove, items = [], opened }) => {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://62d52f16d4406e523554ca5d.mockapi.io/orders', {
                items: cartItems,
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://62d52f16d4406e523554ca5d.mockapi.io/cart/' + item.id);
                await delay(1000);
            }
        } catch (error) {
            alert('Ошибка при создании заказа');
        }
        setIsLoading(false);
    };

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30 ">
                    Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
                </h2>

                {items.length > 0 ? (
                    <div className="d-flex flex-column flex">
                        <div className="items flex">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
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
                                        alt="remove"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice}.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{(totalPrice * 5) / 100}руб.</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                        description={
                            isOrderComplete
                                ? `Ваш заказ ${orderId} скоро будет передан курьерской доставке`
                                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
                        }
                        image={isOrderComplete ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
                    />
                )}
            </div>
        </div>
    );
};