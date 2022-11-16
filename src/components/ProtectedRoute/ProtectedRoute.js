import { Redirect } from 'react-router-dom';

function ProtectedRoute({ children, ...props }) {
    return props.loggedIn ? children : <Redirect to='/' />;
}

export default ProtectedRoute;