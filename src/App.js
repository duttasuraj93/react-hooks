import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function hello() {
  console.log("say hello");
  return 1;
}

const App = () => {

  // runs once
  // const [count, setCount] = useState(() => {
  //   console.log("say hello inside ");
  //   return 0;
  // });

  // runs all the time
  const [state, setCount2] = useState(() => {
    console.log("say hello inside 2");
    return {count: 2, theme: 'black'};
  });

  const stateCount = state.count;
  const stateTheme = state.theme;

  const [count, setCount] = useState(() => {
    console.log("say hello inside");
    return 0;
  });

  const increaseCount = () => {

    setCount((prevCount) => prevCount + 1)

  }

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1)
  }


  const changeFirst = () => {
    setCount2(prevState => {
      return { ...prevState, count: prevState.count + 1 }
    })
  }

  const changeSecond = () => {
    setCount2(prevState => {
      return { ...prevState, theme: 'blue' }
    })
  }




  const [resType, changeResType] = useState(() => {
    return 'posts';
  })

  const handlechangeResType = (type) => {
    // console.log(type);
    changeResType(() => {
      // console.log("called this");
      return type;
    })
  }

  useEffect(() => {
    console.log("call damn");
  }, [resType])

  // useEffect(() => {
  //   console.log("call damn2");
  // }, [])

  const [width, changeWidth] = useState(() => {
    return window.innerWidth;
  })


  useEffect(() => {

    const handleResize = () => changeWidth(() => window.innerWidth)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }

    
  }, [])


  return (
    <div className="App">

      <p>{count}</p>

      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>




      <p>{stateCount}</p>
      <p>{stateTheme}</p>

      <button onClick={changeFirst}>change one</button>
      <button onClick={changeSecond}>change two</button>




      <div>
        <p>Width: {width}</p>
      </div>



      <div>

        <p>{resType}</p>

        <button onClick={() => handlechangeResType('posts')}>Posts</button>
        <button onClick={() => handlechangeResType('books')}>Books</button>
        <button onClick={() => handlechangeResType('authors')}>Authors</button>


      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
