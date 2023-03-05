// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let [글제목1, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0])
  let [modalShow, setModal] = useState(false)

  function toggle(){
    if(modalShow == false){
      setModal(true);
    } else if (modalShow == true){
      setModal(false)
    }
  }




  return (
    <div className="App">
      <div className='black-nav'>
        <h4> ReactBlog </h4>
      </div>

      {
        글제목1.map(function(e, i){
          
          return (
            <div className='list1 list'>
            <p> 글번호 : {i+1}</p>
            <h4>{글제목1[i]} <span onClick={()=>{
              let clone = [...따봉];
              clone[i] = clone[i] +1;
              따봉변경(clone)
            }}>👍🏻</span> {따봉[i]} </h4>
            <p onClick={toggle}>2월 17일 발행</p>
          </div>
          )
        })
      }
      <Modal1 글제목 = {글제목1}/>

      {/* {
        modalShow == true ?  : null
      }  */}
      
    </div>
  );
}

function Modal1(props){
  return(
        <div className='modal'>
            <h4>{props.글제목[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
  )
}

export default App;
