import React, { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    useEffect(()=>{
      if (!localStorage.getItem('jwt')) {
      props.signInDirect()
    }})

  return (
    <Route>
      {
         localStorage.getItem('jwt') ?
          <Component {...props} />
          : <Redirect to="/" />
      }
    </Route>
  )
}

export default ProtectedRoute;