import { useSelector } from "react-redux"
import { selectUser } from "redux/authSelector"

export const User = () => {

    const userItem = useSelector(selectUser)
    
  return (
    <div>
          <p>Hello, {userItem}</p>  
    </div>
  )
}

