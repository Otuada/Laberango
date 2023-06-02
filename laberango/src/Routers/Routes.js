import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from '../Pages/Login/login'
import SignUp from '../Pages/SignUp/SignUp'
import SignUpAdress from "../Pages/SignUpAdress/signUpAdress"
import Feed from '../Pages/Feed/feed'
import Restaurant from '../Pages/Restaurants/restaurants'
import Cart from '../Pages/Cart/cart'
import Profile from '../Pages/Profile/profile'
import AdressEdit from "../Pages/AdressEdit/adressEdit"
import ProfileEdit from "../Pages/ProfileEdit/profileEdit"
import Home from "../Pages/Home/home"


export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/feed' element={<Feed/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/signUp/adress' element={<SignUpAdress/>}/>
                <Route path='/adressEdit/:id' element={<AdressEdit/>}/>
                <Route path='/feed/:restaurantId' element={<Restaurant/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/profile/:id' element={<ProfileEdit/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>        
        </BrowserRouter>

  )
}

