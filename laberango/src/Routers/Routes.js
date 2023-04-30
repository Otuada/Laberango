import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from '../Pages/Login/login'
import SignUp from '../Pages/SignUp/SignUp'
import SignUpAdress from "../Pages/SignUpAdress/signUpAdress"
import Feed from '../Pages/Feed/feed'
import Restaurants from '../Pages/Restaurants/restaurants'
import Cart from '../Pages/Cart/cart'
import Profile from '../Pages/Profile/profile'

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element = {<Login />}/>
                <Route path="/signup" element = {<SignUp />}/>
                <Route path="/signup/adress" element = {<SignUpAdress />}/>
                <Route path="/feed" element = {<Feed />}/>
                <Route path="/feed/:Id" element = {<Restaurants />}/>
                <Route path="/cart" element = {<Cart />}/>
                <Route path="/profile" element = {<Profile />}/>
            </Routes>        
        </BrowserRouter>

  )
}

