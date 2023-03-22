<script>
    import "../app.css";
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">Berkeley B-Side</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/news">News</a></li>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <li tabindex="0">
                <a href="/reviews">
                    Reviews
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul class="p-2 bg-base-100">
                    <li><a href="/live-events">Live Event Reviews</a></li>
                    <li><a href="/albums">Album Reviews</a></li>
                </ul>
            </li>
            <li><a href="/multimedia">Multimedia</a></li>
            <li><a href="/interviews">Interviews</a></li>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <li tabindex="0">
                <a href="/about">
                    About
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul class="p-2 bg-base-100">
                    <li><a href="/staff">Staff</a></li>
                    <li><a href="/join">Join our Team</a></li>
                </ul>
            </li>
            <li><a href="/issues">Issues</a></li>
            <li><a href="/podcasts">Podcast</a></li>
            <li><a href="/video">Video</a></li>
            <div class="flex-none gap-2">
                <div class="form-control">
                  <input type="text" placeholder="Search" class="input input-bordered" />
                </div>
            </div>
        <ul>
    </div>
</div>

<slot></slot>

<style>
    .navbar {
        position: fixed;
        top: 0;
    }
</style>
