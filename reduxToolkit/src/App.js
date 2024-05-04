import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <main className="App">
      <PostList/>
      <AddPostForm/>
    </main>
  );
}

export default App;
