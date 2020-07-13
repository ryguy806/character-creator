import React from 'react';
import {Dispatch, AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {MapDispatchToProps, MapStateToProps, connect} from 'react-redux';
import {IAppState} from '../../store/RootReducer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {IUser} from '../../store/user/UserTypes';

interface IUserListStateToProps {
    user: IUser,
}

interface IUserListOwnProps {

}

 const CenterContent = styled.div`
    text-align: center;
`;

const UserListUnconnected: React.FC<IUserListOwnProps & IUserListStateToProps> = ({
    user
}):JSX.Element => {
    return (
        <CenterContent>
            <p>
                Retrieved Username: {user.username ? user.username : 'No username found'}
            </p>
            <p>
                Retrieved User Message: {user.userMessage ? user.userMessage : 'No message found'}
            </p>
            <p>
                Retrieved User Type: {user.userType ? user.userType : "No user type provided."}
            </p>
            <p>
                UserList
            </p>

            <Link to='/'>
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

export const UserList = connect<
    IUserListStateToProps,
    {},
    IUserListOwnProps,
    IAppState
>(mapStateToProps)(UserListUnconnected);