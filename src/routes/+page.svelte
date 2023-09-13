<script lang="ts">
  import { onMount } from "svelte";
  import Meta from "$lib/components/Meta.svelte";
  import { pageManifests } from "$lib/model/manifests";
  import { isLoading } from "$lib/model/store";

  onMount(() => ($isLoading = false));
</script>

<Meta pageManifest={pageManifests.HOME} />

<div class="container">
  <article></article>
</div>

<style lang="scss">
  .container {
    height: calc(100vh - var(--app-bar-height));
    display: table;
    margin: 0 auto;

    article {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
    }
  }
</style>
