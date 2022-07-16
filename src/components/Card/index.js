import styles from './Card.module.scss';

function Card(props) {
    const click = () => {};

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={133} src={props.imageUrl} alt="Sneakers"></img>
            <h5>{props.name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button" onClick={click}>
                    <img width={11} height={11} src="/img/plus.png" alt="Plus"></img>
                </button>
            </div>
        </div>
    );
}

export default Card;
