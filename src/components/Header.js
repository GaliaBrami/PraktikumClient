import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/action';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = () => {
 const navigate=useNavigate();
  const user = useSelector(initialState => initialState.password);
  useEffect(() => {
    if (!user) {
        navigate("/homepage");
    }
    else {
        navigate("/homepage");
    }
}, [user])

  const dispatch = useDispatch();
  return (
    <div class="header">
      <nav class="ui secondary pointing menu">
        {(user == null) ? <>
          <Link class="item" to="/login">log in</Link>
          <Link class="item" to="/signup">sign up</Link>
        </> : <>
          <Link class="item" to="/homepage">home page</Link>
          <Link class="item" to="/myrecipes">my recipes</Link>
          <Link class="item" to="/recipes">recipes</Link>
          <Link class="item" to="/shopingList">shopping list</Link>
          <Link class="item" to="/" onClick={() => dispatch({ type: actions.SET_USER, user: null })}>log out</Link>
        </>}
      </nav>
    </div>
  );
};

export default Header;
