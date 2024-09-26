import Header from "./components/Header"
import MainPage from "./pages/MainPage"
import Container from "./components/Conteainer"
import Footer from "./components/Footer"
import {createBrowserRouter, RouterProvider}from "react-router-dom"
import Outlet from "./components/Outlet/Outlet"
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import AboutUs from "./pages/AboutUS"
import Work from "./pages/Work"
import Contacts from "./pages/Contacts"
import News from "./pages/News"
import Services from "./pages/Services"
import AvalPosit from "./pages/AvalPosit"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet><MainPage /></Outlet>,
    },
    {
      path: "/about",
      element: <Outlet><AboutUs /></Outlet>,
    },
    {
      path: "/Services",
      element: <Outlet><Services /></Outlet>,
    },
    {
      path: "/Work",
      element: <Outlet><Work /></Outlet>,
    },
    {
      path: "/News",
      element: <Outlet><News /></Outlet>,
    },
    {
      path: "/Contacts",
      element: <Outlet><Contacts /></Outlet>,
    },
    {
      path: "/AvalPosit",
      element: <Outlet><AvalPosit /></Outlet>,
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
      {/* <Container>
        <Header />
      </Container>
      <MainPage />
      <Footer/> */}
    </>
  )
}

export default App
