import PokemonPage from "./pages/PokemonPage/PokemonPage";
import MainPage from "./pages/mainPage";
import Header from "./components/Header";
import {createBrowserRouter, RouterProvider}from "react-router-dom"
import Outlet from "./components/Outlet";
import Footer from "../src/components/Footer";
const App = () =>  {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet><MainPage /></Outlet>,
    },
    {
      path: "pokemon/:name",
      element: <Outlet><PokemonPage /></Outlet>,
    },
  ])

  // const currentUrl = window.location.pathname

  // console.log(currentUrl)
  return (
    <>
     <RouterProvider router={router}/>
     {/* {currentUrl === '/' ? <MainPage /> : <PokemonPage pokemonUrl={currentUrl}/>} */}
     {/* <PokemonPage /> */}
     
    </>
  );
};

export default App;
