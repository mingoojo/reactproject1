// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  let today = new Date()  

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();// 날짜
  let all = `${year} / ${month} / ${date}`


  let [글제목1, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0])
  let [modalShow, setModal] = useState(false)
  let [title, setTitle] = useState(0)
  let [inserting, setInserting] = useState('');
  let [remove, setRemove] = useState(0);
  let [dates, setDate] = useState(all)


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
            <h4>{글제목1[i]} 
            <span onClick={()=>{
              let clone = [...따봉];
              clone[i] = clone[i] +1;
              따봉변경(clone)
            }}>👍🏻</span> 
            {따봉[i]}
             </h4>
            <p onClick={()=>{
                  if(modalShow == false){
                    setModal(true);
                    setTitle(i)
                  } else if (modalShow == true){
                    setModal(false)
                  }
            }}>2월 17일 발행</p>
            <div> {dates} </div>
            <button onClick={()=>{
              // setRemove(i)
              let foo2 = [...글제목1];
              foo2.splice(i, 1)
              글제목변경(foo2) 
            }}>삭제버튼</button>
          </div>
          )
        })
      }

      <input onChange={(e)=>{
        setInserting(e.target.value);
        console.log(inserting)
      }}/>
      <button onClick={()=>{
          if(inserting != false){
            let copy2 = [...글제목1]
            let copy3 = [...따봉]
            copy2.unshift(inserting);
            copy3.unshift(0);
            글제목변경(copy2);
            따봉변경(copy3);
          } else {
            alert('글을 입력하세요.')
          }
        }}>게시</button>

{/* 
if(inserting == true){
          let copy2 = [...글제목1]
          let copy3 = [...따봉]
          copy2.unshift(inserting);
          copy3.unshift(0);
          글제목변경(copy2);
          따봉변경(copy3);
        } else if (inserting == false){
          alert('글을 입력하세요')
        } */}

      
      {
        modalShow == true ? <Modal1 title = {title} 글제목변경 = {글제목변경} 글제목 = {글제목1}/> : null
      } 
      <Modal2/>
      
    </div>
  );
}

function Modal1(props){
  return(
        <div className='modal'>
              <h4>{props.글제목[props.title]}</h4>
              <p>날짜</p>
              <p>상세내용</p>
              <button>글수정</button>
        </div>
        
  )
}

class Modal2 extends React.Component {
  constructor(){
    super()
    this.state = {
      name : "kim",
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.age}
      <button onClick={()=>{
        this.setState({age : 21})
      }}>버튼</button>
      
      </div>
      
    )
  }
}

export default App;
