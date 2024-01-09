/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '데이트 코스 추천']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [발행일, set발행일] = useState(['2월 5일 발행', '2월 6일 발행', '2월 7일 발행']);

  let [modal, setModal] = useState(false);
  let [입력값, set입력값] = useState('');
  function BoardObj(제목) {
    this.제목 = 제목;
    this.따봉 = 0;
    const date = new Date();
    const issueDate = (date.getMonth()+1) + '월 ' + date.getDate() + '일 발행';
    this.발행일 = issueDate;
  }
  
  let [boardObjList, setBoardObjList] = useState([new BoardObj('남자 코트 추천'), new BoardObj('강남 우동 맛집'), new BoardObj('데이트 코스 추천') ]);
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
        // v1
        // 글제목.map(function(e,idx){
        //   return (
        //     <div className="list" key={idx}>
        //     <h4 onClick={()=>{setModal(!modal)}}>{ 글제목[idx] } 
        //       <span onClick={ (e)=>{
        //         e.stopPropagation();
        //         let copy = [...따봉];
        //         copy[idx] = copy[idx] + 1;
        //         따봉변경(copy)
        //         } }>👍
        //       </span> {따봉[idx]}
        //     </h4> 
        //     <p>{ 발행일[idx] }</p> 
        //     <button onClick={ (e) => {
        //       let copy = [...글제목];
        //       let likeCountCopy = [...따봉];
        //       let issueDateCopy = [...발행일];
        //       copy.splice(idx, 1);
        //       likeCountCopy.splice(idx, 1);
        //       issueDateCopy.splice(idx, 1);
        //       제목변경(copy);
        //       따봉변경(likeCountCopy);
        //       set발행일(issueDateCopy);
        //     }}>삭제</button>
        //     </div>
        //   )
        // })
        // v2 ()
        boardObjList.map(function(obj,idx){
          return (
            <div className="list" key={idx}>
            <h4 onClick={()=>{setModal(!modal)}}>{ obj.제목 } 
              <span onClick={ (e)=>{
                e.stopPropagation();
                let copy = [...boardObjList];
                copy[idx].따봉 = copy[idx].따봉 + 1;
                setBoardObjList(copy);
                } }>👍
              </span> {obj.따봉}
            </h4> 
            <p>{ obj.발행일 }</p> 
            <button onClick={ (e) => {
              let copy = [...boardObjList];
              copy.splice(idx, 1);
              setBoardObjList(copy);
            }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{ 
        set입력값(e.target.value); 
        console.log(입력값);
      }} />
      <button onClick={ () => {
        if(!입력값 || 입력값 == ' ') return;
        // v1
        // let titleCopy = [...글제목];
        // let likeCountCopy = [...따봉];
        // let issueDateCopy = [...발행일];

        // titleCopy.unshift(입력값);
        // likeCountCopy.unshift(0);

        // let date = new Date();
        // let newIssueDate = (date.getMonth()+1) + '월 ' + date.getDate() + '일 발행';
        // issueDateCopy.unshift(newIssueDate);
        // 제목변경(titleCopy);
        // 따봉변경(likeCountCopy);
        // set발행일(issueDateCopy);

        // v2
        let copy = [...boardObjList];
        copy.unshift(new BoardObj(입력값));
        setBoardObjList(copy);
      } }>발행</button>
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
