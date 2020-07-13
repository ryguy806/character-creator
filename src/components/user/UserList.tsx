import React, { useEffect, useState } from 'react';
import {Dispatch, AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {MapDispatchToProps, MapStateToProps, connect} from 'react-redux';
import {IAppState} from '../../store/RootReducer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {IUser} from '../../store/user/UserTypes';
import {getFriendList as getFriendListAction} from '../../store/user/UserActions'

interface IUserListDispatchToProps {
    getFriendList: (url: string) => void;
}

interface IUserListStateToProps {
    user: IUser,
}

interface IUserListOwnProps {

}

 const CenterContent = styled.div`
    text-align: center;
`;

type IUserList = IUserListStateToProps & IUserListDispatchToProps & IUserListOwnProps

const UserListUnconnected: React.FC<IUserList> = 
({
    user,
    getFriendList
}): JSX.Element => {
    const [fetchFriends, setFetchFriends] = useState<boolean>(true);

    useEffect(() => {
        if( fetchFriends ) {
            getFriendList('https://jsonplaceholder.typicode.com/users');
            setFetchFriends(false);
        }
    }, [fetchFriends]);
    

    return (
        <CenterContent>
            <p>
                Retrieved Username: {user.username ? user.username : 'No username found'}
            </p>
            <p>
                Retrieved User Message: {user.userMessage ? user.userMessage : 'No message found'}
            </p>
            <p>
                Retrieved User Type: {user.userType ? user.userType : 'No user type provided.'}
            </p>
            <p>
                UserList
            </p>
            <Link
                to='/'
            >
                Home
            </Link>
        </CenterContent>
    );
}

const mapStateToProps: MapStateToProps<
    IUserListStateToProps,
    IUserListOwnProps, 
    IAppState
 > = (state: IAppState, ownProps: IUserListOwnProps): IUserListStateToProps => ({
    user: state.user,
    ...ownProps
 });

 const mapDispatchToProps: MapDispatchToProps<
 IUserListDispatchToProps,
 IUserListOwnProps
> = (dispatch: ThunkDispatch<{}, {}, AnyAction>, ownProps: IUserListOwnProps) => ({
 getFriendList: async (url: string) => {
     dispatch(getFriendListAction(url));
 }
});

export const UserList = connect<
    IUserListStateToProps,
    IUserListDispatchToProps,
    IUserListOwnProps,
    IAppState
>(mapStateToProps, mapDispatchToProps)(UserListUnconnected);