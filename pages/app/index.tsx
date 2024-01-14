import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../../src/pages/app/App'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App a={1} b={'qwe'} />
    <a href='./index.html'>去首页</a>
  </React.StrictMode>
)