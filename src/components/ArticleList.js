import Article from "./Article";

function ArticleList({posts}) {

    const articleComponents = posts.map(post => (<Article 
        key={post.id} 
        title={post.title} 
        date={post.date} 
        preview={post.preview} 
        minutes={post.minutes}
    />))

    return (
        <main>
        {articleComponents}
        </main>
    )
}


export default ArticleList;