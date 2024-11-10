import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "./store/reducers/UserReducer";
import { useEffect } from "react";
import { asyncProduct } from "./store/actions/ProducsAction";


function App() {

  const {users}=useSelector((state)=>state.UserReducer);
  const {products} = useSelector((state)=>state.ProductReducer);
  
  const dispatch=useDispatch();
  // console.log(users);

  const handleDelete=(index)=>{
    dispatch(deleteUser(index));
  }

  useEffect(()=>{
    dispatch(asyncProduct());
  },[])
  
  return (
    <>
      <h1 className='text-5xl'>User List</h1>
      <div className="mt-5">
        {
          users.map((user,index)=>{
              return <h1 key={index} className="text-3xl ">{user.name}  <span onClick={()=>handleDelete(index)} className="text-red-600 text-2xl cursor-pointer font-bold">X</span></h1>
          })
        }
      </div>

      <h1 className="text-5xl mt-5">Products</h1>
      <div>
        {
          products.map((product,index)=>{
              return <h1 key={index} className="text-3xl ">{product.title}</h1>
          })
        }
      </div>
    </>
  )
}

export default App
