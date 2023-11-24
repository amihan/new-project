import './App.css';
import logo from './assets/image/15.png'
import { useEffect, useState } from 'react';
import Cart from './components/Cart';

// export interface IItems {
//   text: string, 
//   count: number
// }
// export interface IData {
//   title: string,
//   items: IItems[]
// }

// const data:IData[] = [
//   {
//     title:'мультфильмы',items: 
//     [
//       {text:'Головоломка', count: 12 },
//       {text:'Кот в сапогах', count: 14 },
//     ]
//   },
//   {
//     title:'исторические', items: 
//     [
//       {text:'Калашников', count: 12 },
//       {text:'1941. Крылья над Берлином', count: 14 },
//     ]
//   },
//   {
//     title:'мелодрамы', items: 
//     [
//       {text:'Титаник', count: 12 },
//       {text:'Любовь и голуби', count: 14 },
//     ]
//   },
//   {
//     title:'боевики', items: 
//     [
//       {text:'Форсаж', count: 12 },
//       {text:'Люди в черном', count: 14 },
//     ]
//   },
//   {
//     title:'ужасы', items: 
//     [
//       {text:'Астрал', count: 12 },
//       {text:'Поезд в Пусан', count: 14 },
//     ]
//   }
// ]

export interface IData{
  count: string;
  id: string;
  text: string
}

function App() {

  
  const [data, setData] = useState<IData[] | null>(null);

  useEffect(() => {

    fetch('https://6560440183aba11d99d07f11.mockapi.io/new', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Можно добавить другие заголовки, если это необходимо
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.error('Ошибка при выполнении GET-запроса:', error);
      });
  },[])

  
  return (
    <div className="App">
      <div className='container'>
        <div className='nav'>
          <a href="https://site55555.nicepage.io/"><img className='App__logo' src={logo} alt="logo" /></a>
          <ul className='navbar'>
            <li className='navbar__item'><a href="https://site55555.nicepage.io/">Главная</a></li>
            <li className='navbar__item'><a href="#">Номинации</a></li>
            <li className='navbar__item'><a href="https://site55555.nicepage.io/Контакты.html">Контакты</a></li>
            <li className='navbar__item'><a href="https://site55555.nicepage.io/Расписание-эфиров.html">Расписание</a></li>
            <li className='navbar__item'><a href="https://site55555.nicepage.io/Страница-1.html">О нас</a></li>
          </ul>
        </div>
        <h2 className='App__title'>Номинации</h2>
        <div className='carts'>
          {data ? (
            data.map(item => (
              <div 
                className='cart'
                key={item.id}>
                <Cart {...item}/>
              </div>
            ))
          ) : (
            <p>Загрузка данных...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
