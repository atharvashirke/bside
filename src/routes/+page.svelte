<script>
    import { onMount } from 'svelte';

    let el;
    let parent;
    let animate;

    onMount(async () => {
        const obj = await import('$lib/scene.js');
        const createScene = obj.createScene;
        const animate = obj.animate;
        createScene(el);
    });
</script>

<div class="animeParent" on:focus={animate(el)}>
    <canvas id="c" bind:this={el}></canvas>
    <div class="hero min-h-screen nosele">
        <div class="hero-overlay bg-opacity-30"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-7xl font-bold noselect">For the Next Generation of Music Lovers.</h1>
            <p class="mb-5 text-lg noselect">As UC Berkeley's premier music publication, we aim to connect the campus community by discovering, curating, sharing, documenting, and embracing the culture of sound.</p>
            <a href="/articles">
                <button class="btn btn-primary">Newest Articles</button>
            </a>
          </div>
        </div>
    </div>
</div>




<style>
    #c {
        position: fixed;
        left: 0;
        top: 0;
        z-index:-1;
    }

    .hero h1, p{
        
        color: white;
        text-align: left;
    }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }
</style>