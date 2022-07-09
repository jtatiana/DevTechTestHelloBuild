import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import AppRouting from '../../routes/routes'

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>

      <Router>
        <Routes>
          {
            AppRouting.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))
          }
          <Route path='*' element={<Navigate to={AppRouting[0].to} replace />} />
        </Routes>
      </Router>
    </Suspense>
  )
}
