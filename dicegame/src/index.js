import ReactDOM from 'react-dom/client';
import App from './App';

const product = 'MacBook';
const model = 'Air';
const item = product + model;
const imageUrl =
'https://blog.kakaocdn.net/dn/bkT3AD/btqWsIvcynd/W6muV8gEPSuPkcLqgIjJkk/img.png'

function handleClick() {
  alert('곧 도착합니다!');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>나만의 {item} 주문하기</h1>
    <img src={imageUrl} alt="제품 사진"></img>
    <button onClick={handleClick}>확인</button>
    <App></App>
  </>
);
