import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from '../Pages/Login/login'
import SignUp from '../Pages/SignUp/SignUp'
import SignUpAdress from "../Pages/SignUpAdress/signUpAdress"
import Feed from '../Pages/Feed/feed'
import Restaurants from '../Pages/Restaurants/restaurants'
import Cart from '../Pages/Cart/cart'
import Profile from '../Pages/Profile/profile'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<Login/>}/>
                <Route path="/signUp" element = {<SignUp/>}/>
                <Route path="/signUp/adress" element = {<SignUpAdress/>}/>
                <Route path="/feed" element = {<Feed/>}/>
                <Route path="/feed/:Id" element = {<Restaurants/>}/>
                <Route path="/signUp" element = {<SignUp/>}/>
                <Route path="/cart" element = {<Cart/>}/>
                <Route path="/profile" element = {<Profile/>}/>
            </Routes>        
        </BrowserRouter>

  )
}

export default Router