

function Article({title, date="January 1, 1970", minutes, preview}) {

    function emojiIndicator(minutes) {
        
        const interval = minutes < 30 ? 5 : 10
        const emoji = minutes < 30 ? "☕️" : "🍱"

        let emojis = ""
        for (let count = 0; count < minutes; count = count + interval) {
            emojis = emojis + emoji
        }
        
        return emojis;
    }



    return(
        <article>
            <h3>{title}</h3>
            <small>{date} • {emojiIndicator(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;