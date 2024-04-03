import { useEffect, useState } from "react";
import Cart from "../../components/Cart/Cart";
import CartInfo from "../CartInfo/CartInfo";
import {apiService} from "../../api/axios.api";
import { useAuth } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import UpdateForm from "../UpdateForm/UpdateForm";

const Purchase = () => {
  const [data, setData] = useState([])
  const {isAuth, setIsAuth} = useAuth()
  const [state, setState] = useState(true)

  useEffect(() => {
    const getData = async() => {
      try {
        const res = await apiService.get("/petition/allPetitions")
        setData(res.data)
        console.log(res);
      } catch (error) {
        console.log(error);
      }

    }
    getData()

  }, [state])

  console.log(data)

  const deleteData = async(id) => {
    try {
      const res = await apiService.delete(`/petition/delete/${id}`,{
        headers: {
          Authorization: `Bearer ${isAuth}`
        }
      })
      console.log(res)
      setState(!state)
    } catch (error) {
      console.log (error);
    }
  }

    return (
        <section>
            {data.map((el) => (
              <div key={el.id}>
                <Cart data={el}/>
                <button onClick={ () => deleteData(el.id)}>Delete</button>
                <NavLink to={`/updateForm/${el.id}`}>
                   <button>Update</button>
                </NavLink>
              </div>
            ) ) }
        </section>

     );
};
    
export default Purchase;