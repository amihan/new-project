import './App.css';
import Carts from './components/Carts';
import logo from './assets/image/15.png'

export interface IItems {
  text: string, 
  count: number
}
export interface IData {
  title: string,
  items: IItems[]
}

const data:IData[] = [
  {
    title:'мультфильмы',items: 
    [
      {text:'Головоломка', count: 12 },
      {text:'Код в сапогах', count: 14 },
    ]
  },
  {
    title:'исторические', items: 
    [
      {text:'Калашников', count: 12 },
      {text:'1941. Крылья над Берлином', count: 14 },
    ]
  },
  {
    title:'мелодрамы', items: 
    [
      {text:'Титаник', count: 12 },
      {text:'Любовь и голуби', count: 14 },
    ]
  },
  {
    title:'боевики', items: 
    [
      {text:'Форсаж', count: 12 },
      {text:'Люди в черном', count: 14 },
    ]
  },
  {
    title:'ужасы', items: 
    [
      {text:'Астрал', count: 12 },
      {text:'Поезд в Пусан', count: 14 },
    ]
  }
]


function App() {


  
  return (
    <div className="App">
      <div className='container'>
        <img className='App__logo' src={logo} alt="logo" />
        <h2 className='App__title'>Номинации</h2>
        <div className='carts'>
          {data.map(item => <div key={item.title}>
            <Carts items={item.items} title={item.title}/>
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
