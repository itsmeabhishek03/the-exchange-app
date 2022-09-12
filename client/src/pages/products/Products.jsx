import React from "react";
import "./product.css";
import { useNavigate } from 'react-router-dom';
import { IoIosAddCircle,IoMdRemoveCircle } from 'react-icons/Io';

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0);
  const [myNum1, setMyNum1] = React.useState(0);
  const [myNum2, setMyNum2] = React.useState(0);
  const [myNum3, setMyNum3] = React.useState(0);
  const [myNum4, setMyNum4] = React.useState(0);

  const history = useNavigate();
  
  const Check = () => {
    if(myNum === 0 && myNum1 === 0 && myNum2 === 0 && myNum3 === 0 && myNum4 === 0 ){
      alert('Please Add Atleast one Product')
    }else{
      history("/final")
    }
  }

  // return (
  // <>
  // <div className="wrap">
   
  //   <div className="home" onClick={() => history("/")}>Go to HomePage</div>
  //   <div className="title">
  //     <h1 className="text-gradient">ADD YOUR PRODUCTS</h1>
  //   </div>
  //   <div className="boxes">
   
  //   <div className="float-container">
  //     <div className="item1">Chargers </div>
  //       <button className="float-child" onClick={() => setMyNum(myNum + 1)}>
  //              <div class="green">INCR</div>
  //       </button>
  //       <span className="span">{myNum}</span>
  //       <button className="float-child" onClick={() => (myNum>0 ?setMyNum(myNum - 1): setMyNum(0))}>
  //           <div class="blue">DECR</div>
  //       </button>
  //   </div>
  //   <div className="float-container">
  //   <div className="item1">Batteries </div>
  //       <button className="float-child" onClick={() => setMyNum1(myNum1 + 1)}>
  //              <div className="green">INCR</div>
  //       </button>
  //       <span className="span">{myNum1}</span>
  //       <button className="float-child" onClick={() => (myNum1>0 ?setMyNum1(myNum1 - 1): setMyNum1(0))}>
  //           <div class="blue">DECR</div>
  //       </button>
  //   </div>
  //   <div className="float-container">
  //   <div className="item1">Cables </div>
  //       <button className="float-child" onClick={() => setMyNum2(myNum2 + 1)}>
  //              <div class="green">INCR</div>
  //       </button>
  //       <span className="span">{myNum2}</span>
  //       <button className="float-child" onClick={() => (myNum2>0 ?setMyNum2(myNum2 - 1): setMyNum2(0))}>
  //           <div class="blue">DECR</div>
  //       </button>
  //   </div>
  //   <div className="float-container">
  //   <div className="item1">Phones </div>
  //       <button className="float-child" onClick={() => setMyNum3(myNum3 + 1)}>
  //              <div class="green">INCR</div>
  //       </button>
  //       <span className="span">{myNum3}</span>
  //       <button className="float-child" onClick={() => (myNum3>0 ?setMyNum3(myNum3 - 1): setMyNum3(0))}>
  //           <div class="blue">DECR</div>
  //       </button>
  //   </div>
  //   <div className="float-container">
  //   <div className="item1">Screens </div>
  //       <button className="float-child" onClick={() => setMyNum4(myNum4 + 1)}>
  //              <div class="green">INCR</div>
  //       </button>
  //       <span className="span">{myNum4}</span>
  //       <button className="float-child" onClick={() => (myNum4>0 ?setMyNum4(myNum4 - 1): setMyNum4(0))}>
  //           <div class="blue">DECR</div>
  //       </button>
  //   </div>
  //   <button className="button2" onClick={Check}>Done</button>
  //   </div>
  // </div>
  //   </>
  // );
  return(
    <div className="product1">
      <div className="topbar1">
      <h1 className="tittle1 sm:text-5xl text-3xl" >ADD YOUR PRODUCTS</h1>
      <p className="hidden sm:block cursor-pointer home1" onClick={() => history("/")}>Go to Homepage</p>
      </div>
      

      <div className="boxes0">
        <div className="box1">
          <div className="heading"><h1>Product</h1></div>
          <div className="quantity"><h1>Quantity</h1></div>
        </div>
        <div className="box2">
          <div>Cables</div>
          <div className="rightbox">
             <IoIosAddCircle fontSize={27} cursor="pointer" onClick={() => setMyNum(myNum + 1)} />
             <span className="num">{myNum}</span>
             <IoMdRemoveCircle fontSize={27} cursor="pointer" onClick={() => (myNum>0 ?setMyNum(myNum - 1): setMyNum(0))} />
          </div>
        </div>
        <div className="box2">
          <div>Chargers</div>
          <div className="rightbox">
             <IoIosAddCircle fontSize={27} cursor="pointer" onClick={() => setMyNum1(myNum1 + 1)} />
             <span className="num">{myNum1}</span>
             <IoMdRemoveCircle fontSize={27} cursor="pointer" onClick={() => (myNum1>0 ?setMyNum1(myNum1 - 1): setMyNum1(0))}/>
          </div>
        </div>
        <div className="box2">
          <div>Phones</div>
          <div className="rightbox">
             <IoIosAddCircle fontSize={27} cursor="pointer" onClick={() => setMyNum2(myNum2 + 1)} />
             <span className="num">{myNum2}</span>
             <IoMdRemoveCircle fontSize={27} cursor="pointer" onClick={() => (myNum2>0 ?setMyNum2(myNum2 - 1): setMyNum2(0))}/>
          </div>
        </div>
        <div className="box2">
          <div>Batteries</div>
          <div className="rightbox">
             <IoIosAddCircle fontSize={27} cursor="pointer" onClick={() => setMyNum3(myNum3 + 1)}/>
             <span className="num">{myNum3}</span>
             <IoMdRemoveCircle fontSize={27} cursor="pointer" onClick={() => (myNum3>0 ?setMyNum3(myNum3 - 1): setMyNum2(0))}/>
          </div>
        </div>
        <div className="box2">
          <div>Laptops/PCs</div>
          <div className="rightbox">
             <IoIosAddCircle fontSize={27} cursor="pointer" onClick={() => setMyNum4(myNum4 + 1)}/>
             <span className="num">{myNum4}</span>
             <IoMdRemoveCircle fontSize={27} cursor="pointer" onClick={() => (myNum4>0 ?setMyNum4(myNum4 - 1): setMyNum4(0))}/>
          </div>
        </div>


        
        
    
      </div>

      <div className="text-xl cursor-pointer text-center done" onClick={Check}>Done</div>
      <p className="btn sm:hidden mt-2 cursor-pointer  block text-center"  onClick={() => history("/")}>Go to Homepage</p>
    </div>
  )
};

export default UseState;