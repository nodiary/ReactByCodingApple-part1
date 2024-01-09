/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '데이트 코스 추천']);
  let [따봉, 따봉변경] = useState(0);
 

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color: 'red', fontSize : '16px'} }>ReactBlog</h4>
      </div>
      {/* object,array의 state 변경시 
      원본 값 유지 및 깊은 복사를 활용한 값 변경 필요 
      [...originArray] or {...originObject} */}
      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        제목변경(copy);
      }}>가나다순정렬</button>
      
      <button onClick={ ()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        제목변경(copy);
      }}>변경버튼</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
