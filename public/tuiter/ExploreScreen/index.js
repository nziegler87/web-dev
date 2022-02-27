import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {
    return(`
      <!-- Search Content -->
      <div class="d-flex align-items-center mb-2">
        <div class="d-flex w-100 align-items-center border rounded-pill me-2 ps-3 bg-white">
          <i class="fas fa-search text-muted" id="center-search-icon"></i>
          <input type="text" id="center-search-input " class="form-control flex-fill me-4 border-0" placeholder="Search Tuiter">
        </div>
        <!-- Cog Icon -->
        <a href="#">
          <i class="fas fa-cog text-primary fa-2x" id="center-cog-icon"></i>
        </a>
      </div>

      <!-- Nav Bar -->
      <ul class="nav nav-tabs mb-2">
        <li class="nav-item" id="center-nav-for-you">
          <a class="nav-link active" aria-current="page" href="for-you.html">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="center-nav-trending" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="center-nav-news" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="center-nav-sports" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-flex">
          <a class="nav-link" id="center-nav-entertainment" href="entertainment.html">Entertainment</a>
        </li>
      </ul>

      <!-- Banner Image -->
      <div class="position-relative">
        <img class="card-img mb-2"
             id="center-banner-image"
             src="https://static.tweaktown.com/news/8/4/84438_01_elon-musk-giving-update-on-spacexs-starship-mars-rocket-thursday.jpg"
             alt="SpaceX Starship">
        <h1 class="position-absolute bottom-0 ms-2">SpaceX's Starship</h1>
      </div>
      
      <!-- Tuit Cards -->
      ${PostSummaryList()}
    `)
}
export default ExploreComponent