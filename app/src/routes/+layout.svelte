<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Nav from "$lib/Nav.svelte";
  import "../app.css";
  import type { LayoutData } from "./$types";
  export let data: LayoutData;
</script>

<div class="flex flex-col min-h-screen">
  <div class="flex-none">
    <Nav/>
  </div>
  <div class="flex flex-col grow container mx-auto px-5">
    <slot/>
  </div>
  <div class="flex-none">
    <Footer/>
  </div>
</div>
