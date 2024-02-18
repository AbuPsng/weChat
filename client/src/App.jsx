import HomePage from "./pages/home/HomePage"
import SignInPage from "./pages/signIn/SignInPage"
import SignUpPage from "./pages/signUp/SignUpPage"
import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./components/hooks/useAuthContext"

function App() {

  const { authUser } = useAuthContext()

  return (
    <>
      <div className="p-4 h-screen bg-white flex items-center justify-center bg-opacity-0" >
        <Routes>
          <Route path="/" element={authUser.username ? <HomePage /> : <Navigate to="/sign_in" />} />
          <Route path="/sign_in" element={authUser.username ? <Navigate to="/" /> : <SignInPage />} />
          <Route path="/sign_up" element={authUser.username ? <Navigate to="/" /> : <SignUpPage />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
