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
    <div class="hero min-h-screen">
        <div class="hero-overlay bg-opacity-50"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">UC Berkeley’s premier student-run music magazine. </h1>
            <p class="mb-5">Through our online and — as of November 2016 — our printed publication, we aim to connect the campus community with the local, national, and global music scene by discovering, curating, sharing, documenting, and embracing the culture of sound.</p>
            <button class="btn btn-primary">Newest Articles</button>
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
</style>