/* eslint-disable jsx-a11y/alt-text */
import Card from './components/Card';
import Header from './components/Header';
import { Drawer } from './components/Drawer';

const arr = [
    {
        name: 'Мужские Кроссовки Nike Air Max 270',
        price: 12999,
        imageUrl: '/img/1.jpg',
    },
    {
        name: 'Мужские Кроссовки Rangers',
        price: 13999,
        imageUrl: '/img/2.jpg',
    },
    {
        name: 'Мужские Кроссовки Adidas',
        price: 14999,
        imageUrl: '/img/3.jpg',
    },
    {
        name: 'Мужские Кроссовки Nb',
        price: 15999,
        imageUrl: '/img/4.jpg',
    },
];

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />

            <Header />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="d-flex">
                    {arr.map((x) => (
                        <Card key={x.name} name={x.name} price={x.price} imageUrl={x.imageUrl} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
