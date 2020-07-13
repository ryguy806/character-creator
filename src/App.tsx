import React, {useState, ChangeEvent, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

interface IAppOwnProps {
  username: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest';
}

const App: React.FC<IAppOwnProps> = ({userType, username}): JSX.Element => {
  
  const [time, setTime] = useState<Date>(new Date(Date.now()));
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()))
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [username])

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, {username ? username : 'Mysterious Entity'},
         your user type is {userType ? userType : 'irrelevant because I do not know you.'} </h1>
      </header>
      <p>{time.toUTCString()}</p>
      <input
        type='text'
        placeholder='Enter your message here'
        value={message}
        onChange={handleTextChange}
      />
      <p>You message: {message || ""}</p>
      <div>
        <Link to='/userList'>
          User List
        </Link>
      </div>
      <div>
        <Link to='/character'>
          Character
        </Link>
      </div>
    </div>
  );
}

export default App;
