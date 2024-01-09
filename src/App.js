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
      <div className="list">
        <span onClick={ ()=>제목변경(['여자 코트 추천',글제목[1],글제목[2]]) }>변경버튼</span>
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
