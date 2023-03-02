import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
const GifApp = React.lazy(() => import('./GifApp'));




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <GifApp />
    </Suspense>
  </React.StrictMode>
)
