import { useState } from 'react';
import styles from './Card.module.scss';

function Card({ name, price, imageUrl, onPlus }) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickPlus = () => {
        onPlus({ name, price, imageUrl });
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src={isFavorite ? '/img/unliked.svg' : '/img/liked.svg'} alt="Heart" />
            </div>
            <img width={133} height={133} src={imageUrl} alt="Sneakers"></img>
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    // src="/img/plus.svg"
                    src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'}
                    alt="Plus"
                    onClick={onClickPlus}
                ></img>
            </div>
        </div>
    );
}

export default Card;
