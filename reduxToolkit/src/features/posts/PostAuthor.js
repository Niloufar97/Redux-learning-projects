import { useSelector } from "react-redux"
import { AllUsersSelector } from "../users/usersSlice"

const PostAuthor = ({userId}) => {
    const users = useSelector(AllUsersSelector)
    const author = users.find(user => user.id === userId)
  return (
    <span>
      {author? author.name: "unknown author"}
    </span>
  )
}

export default PostAuthor
