import './App.css';
import Container from './component/Container/Container';
import Header from './component/Header/Header';
import Navigation from './component/Nav/Navigatoin';

const NoSupportScreen = (props) => {
  return(
    <div style={{width: window.innerWidth, height: window.innerHeight, justifyContent: 'center', display: 'flex', alignItems: 'center', fontSize: 40}}>
      <span>지원하지 않는 {props.text}입니다.</span>
    </div>
  )
}
const App = () => {
  const { detect } = require('detect-browser');
  const browser = detect();
  if (!browser.os.includes('Android') && !browser.os.includes("Ios")) {
    if(!browser.name.includes('samsung') && window.innerWidth > 1200){
      return (
        <div id='home'>
          <Header />
          <Navigation />
          <Container />
        </div>
      );
    } else if(window.innerWidth <= 1200){
      return(
        <NoSupportScreen text='모드'/>
      )
    } else {
      return(
        <NoSupportScreen text='브라우저'/>
      )
    }
  } else {
    return(
      <NoSupportScreen text='OS'/>
    )
  }
}

export default App;
