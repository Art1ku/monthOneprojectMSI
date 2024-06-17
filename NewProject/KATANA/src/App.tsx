import { Routes, Route } from "react-router-dom"
import { Main, NotFound, Users, Album, Posts, Photos, Comments } from "./pages"
import { Header } from "./components/Base"

function App() {

  console.log(import.meta.env.VITE_API_BASE_URL)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="users" element={<Users />}/>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="posts" element={<Posts />}></Route>
        <Route path="album" element={<Album />}></Route>
        <Route path="photos" element={<Photos />}></Route>
        <Route path="comments" element={<Comments />}></Route>
      </Routes>
    </>
  )
}

export default App
