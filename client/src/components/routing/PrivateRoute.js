// import React, { useContext } from "react";
// import { Route, useNavigate } from "react-router-dom";
// import AuthContext from "../../context/auth/authContext";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const authContext = useContext(AuthContext);
//     const { isAuthenticated, loading } = authContext;

//     const navigate = useNavigate();

//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 !isAuthenticated && !loading ? (
//                     navigate("/login")
//                 ) : (
//                     <Component {...props} />
//                 )
//             }
//         />
//     );
// };

// export default PrivateRoute;

import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import Login from "../auth/Login";


const PrivateRoute = (props) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, user } = authContext;

    return isAuthenticated && user ? props.children : <Login/>;
};

export default PrivateRoute;
