import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import firebaseConfig from './pages/Firebase/Firebase.jsx'
import { Provider } from 'react-redux'
import { store } from './Components/Store/Store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

   <Provider store={store}> 
     <App />
   </Provider>

)
