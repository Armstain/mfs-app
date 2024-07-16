import { createBrowserRouter } from 'react-router-dom'
import Root from '../layout/Root.jsx'
import Login from '../pages/Login.jsx'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [],
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])