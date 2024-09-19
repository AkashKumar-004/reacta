
import {useSelector} from 'react-redux'
import { selectuser } from '../redux/UserSlice'
const NavBar=()=>{
    const data=useSelector(selectuser)
    return(
        <>
        <div>{data?.name || "hi"}</div>
        </>
    )
}
export default NavBar