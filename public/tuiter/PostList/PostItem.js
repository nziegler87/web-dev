const PostItem = (post) => {

    return(`
        <div class="d-flex justify-content-start border-bottom border-secondary py-2">
        <!-- User image -->
        <img src="${post.userImage}"
             class="rounded-circle wd-image-who-to-follow me-3">
        <!-- To Hold Main Tuit Content -->
        <div>
            <!-- To hold user name and elipsis -->
            <div class="d-flex justify-content-between">
                <p class="m-0 text-white">${post.displayName}<span class="text-dark ms-1">${post.userName} • ${post.time}</span></p>
                <a href="#">
                    <i class="fas fa-ellipsis-h text-dark"></i>
                </a>
            </div>
            <p class="m-0 text-white">${post.title}</p>
            <div class="border border-secondary mt-2 mb-1 overflow-hidden wd-border-radius-10">
                <img src="${post.cardImage}"
                     class="img-fluid" >
                <div class="p-2 border-top border-secondary ${post.imageOnly === true ? "d-none" : ""}"" >
                    <h6>${post.cardTitle}</h6>
                    <p class="m-0">${post.cardBody}</p>
                    <a href="${post.cardLink}" class="text-secondary"><span class="me-2 ${post.cardLink === "" ? "d-none" : ""}">&#128279</span>${post.cardLinkText}</a>
                </div>
            </div>
            <!-- Container to hold icons -->
            <div class="d-flex justify-content-between w-75">
                <a href="#">
                    <i class="far fa-comment text-dark"></i>
                    <span class="text-dark">${post.comments}</span>
                </a>
                <a href="#">
                    <i class="fas fa-retweet text-dark"></i>
                    <span class="text-dark">${post.retuits}</span>
                </a>
                <a href="#">
                    <i class="fas fa-heart text-dark"></i>
                    <span class="text-dark">${post.likes}</span>
                </a>
                <a href="#">
                    <i class="fas fa-upload text-dark"></i>
                </a>
            </div>
        </div>
    </div>
    `)
}
export default PostItem;