import Header from './components/Header';
import { Drawer } from './components/Drawer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import AppContext from './context';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const itemResp = await axios.get('https://62d52f16d4406e523554ca5d.mockapi.io/items');
            const cartResp = await axios.get('https://62d52f16d4406e523554ca5d.mockapi.io/cart');
            const favoritesResp = await axios.get('https://62d52f16d4406e523554ca5d.mockapi.io/favorites');

            setIsLoading(false);

            setCartItems(cartResp.data);
            setFavorites(favoritesResp.data);
            setItems(itemResp.data);
        }
        fetchData();
    }, []);

    const onAddToCart = (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://62d52f16d4406e523554ca5d.mockapi.io/cart/${obj.id}`);
                setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post('https://62d52f16d4406e523554ca5d.mockapi.io/cart', obj);
                setCartItems((prev) => [...cartItems, obj]);
            }
        } catch (error) {}
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://62d52f16d4406e523554ca5d.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://62d52f16d4406e523554ca5d.mockapi.io/favorites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
            } else {
                const { data } = await axios.post('https://62d52f16d4406e523554ca5d.mockapi.io/favorites', obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {}
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id));
    };

    return (
        <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened }}>
            <div className="wrapper clear">
                {cartOpened && (
                    <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
                )}

                <Header onClickCart={() => setCartOpened(true)} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                items={items}
                                cartItems={cartItems}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                onAddToFavorite={onAddToFavorite}
                                onAddToCart={onAddToCart}
                                isLoading={isLoading}
                            />
                        }
                        exact
                    />

                    <Route path="/favorites" element={<Favorites />} exact />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
