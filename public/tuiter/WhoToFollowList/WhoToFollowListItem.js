const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
            <img src="${who.avatarIcon}" class="rounded-circle wd-image-who-to-follow">
            <div class="ms-2">
                ${who.userName}<br/>
                @ ${who.handle}
            </div>
        </div>
        <a class="btn btn-primary btn-sm rounded-pill"
             href="#">Follow</a>
        </li>
    `)
}
export default WhoToFollowListItem;