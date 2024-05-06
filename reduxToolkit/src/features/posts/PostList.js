import {useSelector} from 'react-redux'
import { AllPostsSelector } from './postsSlice'
import PostAuthor from './PostAuthor'

function PostList () {
    const posts = useSelector(AllPostsSelector)
    const renderPosts = () => {
        const myposts = posts.map(post => (
            <div key={post.id} className='post-card'>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>by <PostAuthor userId={post.userId}/></p>
            </div>
        ))
        return myposts
    }
    return(
        <>
            <section>
                <h1>
                    POSTS:
                </h1>
                {renderPosts()}
            </section>
        </>
    )
}
export default PostList