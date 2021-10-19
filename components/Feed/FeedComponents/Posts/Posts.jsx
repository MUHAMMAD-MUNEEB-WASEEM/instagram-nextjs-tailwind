import Post from "./Post"

const posts = [
    {
        id: '123',
        username: "leadastairianA",
        userImg: "https://links.papareact.com/3ke",
        img: 'https://links.papareact.com/3ke',
        caption: "This is lit!"
    },
    {
        id: '456',
        username: "leadastairianA",
        userImg: "https://whatsapp-mern-fullstack.web.app/static/media/my%20image3jpg.f2592b34.jpg",
        img: 'https://links.papareact.com/3ke',
        caption: "This is lit!"
    }
]

function Posts() {
    return (
        <div>
        {posts.map((post)=>(
            <Post
            key={post.id}
            username={post.username}
            userImg={post.userImg}
            id={post.id}
            img={post.img}
            caption={post.caption}
            />
        ))}

            
        </div>
    )
}

export default Posts
