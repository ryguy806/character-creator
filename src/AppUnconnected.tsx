import React, {useState, ChangeEvent, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {Dispatch} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {connect, MapStateToProps, MapDispatchToProps} from 'react-redux';
import {
  saveUsername as saveUsernameAction, 
  saveUserMessage as saveUserMessageAction,
  saveUserType as saveUserTypeAction,
} from './store/user/UserActions';
import {IUser} from './store/user/UserTypes';
import {IAppState} from './store/RootReducer';

interface IAppOwnProps {
  username: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest';
}

interface IAppDispatchToProps {
  saveUsername: (user: IUser) => void;
  saveUserMessage: (user: IUser) => void;
  saveUserType: (user: IUser) => void;
}

const mapDispatchToProps: MapDispatchToProps<
  IAppDispatchToProps,
  IAppOwnProps
> = (dispatch: Dispatch, ownProps: IAppOwnProps): IAppDispatchToProps => ({
  saveUsername: (user: IUser) => {
    dispatch(saveUsernameAction(user));
  },

  saveUserMessage: (user: IUser) => {
    dispatch(saveUserMessageAction(user));
  },

  saveUserType: (user: IUser) => {
    dispatch(saveUserTypeAction(user));
  },
});

const AppUnconnected: React.FC<IAppOwnProps> = ({userType, username}): JSX.Element => {
  
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

export const App = connect<
{},
IAppDispatchToProps,
IAppOwnProps,
IAppState
>(null, mapDispatchToProps)(AppUnconnected);