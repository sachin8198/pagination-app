import './App.css';
import { useState, useEffect } from 'react';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([])
  const [currentNum, setCurrentNum] = useState(0)

  const handleClick = () => {
    fetch(`https://give-me-users-forever.vercel.app/api/users/${currentNum}/next`)
      .then(res => res.json())
      .then(data => setUsers(data.users))
      .catch(er => console.log(er))
  }


  const handleNext = () => {
    setCurrentNum(prev => prev + 10)

  }

  const handlePrev = () => {
    currentNum !== 0 && currentNum !== undefined &&
      setCurrentNum(prev => prev - 10)
  }

  useEffect(() => {
    handleClick()
  }, [currentNum])


  return (
    <div >
      <div className='app'>
        {
          users.length > 0 ? users?.slice(0, 10).map((user, i) => <User key={user.ID} {...user} />)
            : <div><span class="loader"></span>
              <h4>Loading...</h4>
            </div>
        }
      </div>
      <div className='bottomSection' >
        <button className={`btn ${!currentNum && "disable"} `} onClick={handlePrev}>
          Previous
        </button>
        <button onClick={handleNext} className='btn'>Next 10 users</button>
      </div>
    </div>
  );
}

export default App;
