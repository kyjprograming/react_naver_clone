import './App.css';
import Header from './component/Header/Header';
import Navigation from './component/Nav/Navigatoin';

const MainNavigation = () => {
  return(
    <>
      <ul className="menu">
        <li className='left_box'><a href='#'>메일</a></li>
        <li className='left_box'><a href='#'>카페</a></li>
        <li className='left_box'><a href='#'>블로</a>그</li>
        <li className='left_box'><a href='#'>지식iN</a></li>
        <li className='left_box'><a href='#'>쇼핑</a></li>
        <li className='left_box'><a href='#'>Pay</a></li>
        <li className='left_box'><a href='#'>TV</a></li>
      </ul>
      <ul className='menu'>
        <li className='right_box'><a href='#'>사전</a></li>
        <li className='right_box'><a href='#'>뉴스</a></li>
        <li className='right_box'><a href='#'>증권</a></li>
        <li className='right_box'><a href='#'>부동산</a></li>
        <li className='right_box'><a href='#'>지도</a></li>
        <li className='right_box'><a href='#'>VIBE</a></li>
        <li className='right_box'><a href='#'>도서</a></li>
        <li className='right_box'><a href='#'>웹툰</a></li>
        <li className='right_box'><a href='#'>도서</a></li>
      </ul>
      <div className='animation_box'>
        <div>

        </div>
      </div>
    </>
  )
}
const MainHeader = () => {
  return(
    <>
      <img src={require('./image/logo.png')} className='logo'/>
      <input type={'text'} className='search_input'/>
      <img src={require('./image/search_icon.png')} className='search_bar'/>
    </>
  )
}
const App = () => {
  return (
    <div>
      <Header content={<MainHeader/>}/>
      <Navigation content={<MainNavigation/>}/>
    </div>
  );
}

export default App;
