import { Route, Routes } from "react-router-dom"

import { History } from "./pages/History/index"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./layouts/DefaultLayout/Index"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
