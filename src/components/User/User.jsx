import { useSelector } from "react-redux"
import { selectUser } from "redux/authSelector"
import { StyledUser } from "./User.styled"

export const User = () => {

    const userItem = useSelector(selectUser)
    
  return (
    <StyledUser>
          <p>{userItem}</p>  
    </StyledUser>
  )
}

