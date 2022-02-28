const PostSummaryItem = (post) => {
    let num_tuits = `<p class='text-muted m-0'>${post.tweets} Tuits</p>`

    return(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <p class="text-muted m-0">${post.topic}</p>
              <p class="font-weight-bold m-0"><strong>${post.userName}</strong>
                ${post.verified ? "<i class='mx-1 fa-solid fa-circle-check'></i>" : ""}
                <span class="text-muted">- ${post.time}</span></p>
                <p class="m-0">${post.title}
                ${post.hasOwnProperty('tweets') ? num_tuits : ""}
            </div>
            <img src="${post.image}"
                 class="rounded wd-image-thumbnail-size-override">
          </li>
    `)
}
export default PostSummaryItem;