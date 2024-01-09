/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '데이트 코스 추천']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);


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

      {
        글제목.map(function(e,idx){
          return (
            <div className="list" key={idx}>
            <h4 onClick={()=>{setModal(!modal)}}>{ 글제목[idx] } </h4>
            <span onClick={ ()=>{
                let copy = [...따봉];
                copy[idx] = copy[idx] + 1;
                따봉변경(copy)
                } }>👍
              </span> {따봉[idx]} 
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal 글제목={글제목} 변경={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          제목변경(copy);
        }}></Modal> : null
      }

    </div>
  );
}
/*
  -동적 UI 만드는 단계
  1.html css로 미리 디자인 완성
  2. UI의 현재 상태를 state로 저장
  3. state에 따라 UI가 어떻게 보일지 작성
*/

/* 
  1. 반복되는 html을 축약할 때
  2. 큰 페이지들
  3. 자주 변경되는 것들
   -> 컴포넌트로 만들면 좋다.
*/
function Modal(props){ //대문자 시작

  return (
    <div className="modal" >
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.변경}>글수정</button>
    </div>
  );
}

export default App;
