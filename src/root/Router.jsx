import {Route, Routes} from "react-router-dom";
import Regist from "../pages/Regist/Regist.jsx";
import Login from "../pages/Login/Login.jsx";
import Purchase from "../pages/Purchase/Purchase.jsx";
import Button from "../components/LogOutButton/Button.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import CartInfo from "../pages/CartInfo/CartInfo.jsx";
import Form from "../components/Form/Form.jsx";
import UpdateForm from "../pages/UpdateForm/UpdateForm.jsx";
import Header from "../components/Header/Header.jsx";

const Router = () => {
    const {isAuth, setIsAuth} = useAuth()
    console.log(isAuth)
    return (
        <>
        <Header/>
            <Routes>
                {!isAuth?
                    <>
                        <Route path={"/register"} element={<Regist />}/>
                        <Route path={"/login"} element={<Login />}/>
                    </> :
                    <>
                        <Route path={"/purchase"} element={<Purchase />}/> ///
                        <Route path={"/cartInfo/:id"} element={<CartInfo />}/>
                        <Route path={"/form"} element={<Form />}/>  ///
                        <Route path={"/updateForm/:formId"} element={<UpdateForm />}/>  
               </>
                }
           </Routes>
        </>
    );
};

export default Router;