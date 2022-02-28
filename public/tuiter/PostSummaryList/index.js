import PostSummaryItem from "./PostSummaryItem.js"
import post from "./posts.js"

const PostSummaryList = () => {
    return (`
        <div class="card" id="center-tuit-card">
            <ul class="list-group list-group-flush">
                ${post.map(posts => {
                    return(PostSummaryItem(posts));
                }).join('')
                }
            </ul>
        </div>
    `)
}

export default PostSummaryList;

