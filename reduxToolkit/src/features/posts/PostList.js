import {useSelector} from 'react-redux'
import { AllPostsSelector } from './postsSlice'

function PostList () {
    const posts = useSelector(AllPostsSelector)
    const renderPosts = () => {
        const myposts = posts.map(post => (
            <div key={post.id} className='post-card'>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
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