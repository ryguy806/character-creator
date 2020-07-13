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

const mapStateToProps: MapStateToProps<
IUserListStateToProps,
 IUserListOwnProps, 
 IAppState> = (state: IAppState, ownProps: IUserListOwnProps): IUserListStateToProps => ({
    user: state.user,
    ...ownProps
 });

 const CenterContent = styled.div`
    text-align: center;
`;

const UserListUnconnected: React.FC<IUserListOwnProps> = ():JSX.Element => {
    return (
        <CenterContent>
            <p>
                UserList
            </p>

            <Link to='/'>
                Home
            </Link>
        </CenterContent>
    );
}

export const UserList = connect<
    IUserListStateToProps,
    {},
    IUserListOwnProps,
    IAppState
>(mapStateToProps)(UserListUnconnected);