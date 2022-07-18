/* eslint-disable jsx-a11y/alt-text */
import Card from './components/Card';
import Header from './components/Header';
import { Drawer } from './components/Drawer';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        axios.get('https://62d52f16d4406e523554ca5d.mockapi.io/items').then((res) => {
            setItems(res.data);
        });
        axios.get('https://62d52f16d4406e523554ca5d.mockapi.io/cart').then((res) => {
            setCartItems(res.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://62d52f16d4406e523554ca5d.mockapi.io/cart', obj);
        setCartItems((prev) => [...cartItems, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://62d52f16d4406e523554ca5d.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search" />
                        {searchValue && (
                            <img
                                onClick={() => setSearchValue('')}
                                className="cu-p clear"
                                src="/img/btn-remove.svg"
                                alt="Close"
                            />
                        )}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items
                        .filter((item) => item.name.toLowerCase().includes(searchValue))
                        .map((item) => (
                            <Card
                                key={item.name}
                                name={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
