import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './providers/Authprovider'


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
)
