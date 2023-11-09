<script lang="ts">
  import Icon from "@iconify/svelte";

  let showPassword = false;

  export let label: string;
  export let name: string;
  export let placeholder: string;
</script>

<div class="join join-vertical max-w-full">
  <label for={name} class="label join-item bg-neutral-200 px-4 py-0">
    <span class="label-text text-sm">{label}</span>
  </label>
  <div class="join-item border border-neutral-300 overflow-hidden">
    <div class="flex">
      <input placeholder={placeholder} type={showPassword ? 'text' : 'password'} name={name} class="input shrink border-none rounded-none pr-0" required />
      <label class="swap pr-2 bg-white rounded-none">
        <input type="checkbox" on:click={() => (showPassword = !showPassword)}/>
        <Icon class="swap-on fill-current" icon="mdi:eye-off" width="25" height="25" />
        <Icon class="swap-off fill-current" icon="mdi:eye" width="25" height="25" />
      </label>
    </div>
  </div>
</div>
