<script lang="ts">
  import InputPassword from "$lib/inputPassword.svelte";

  export let form;
</script>

<div class="text-center p-3 mt-5 mb-3">
  <h1 class="text-4xl font-bold">
    Welcome again
  </h1>
  <p class="text-base font-normal">
    Please enter your credentials before continuing
  </p>
</div>

<div class="text-center mx-auto grid place-items-center">

  <form method="post" action="?/login" class="max-w-xs w-full space-y-6 flex flex-col p-5 bg-neutral-100 card card-bordered border-neutral-300">
    <div class="space-y-5 flex flex-col">
      <div class="join join-vertical">
        <label for="" class="label join-item bg-neutral-200 px-4 py-0">
          <span class="label-text text-sm">Email or Username</span>
        </label>
        <input class="join-item input input-bordered" name="email" type="email" placeholder="mail@google.com">
      </div>
      <InputPassword label="Passsword" name="password" placeholder="Your password"/> 
      <a href="/accounts/reset" class="text-primary text-sm text-right">Forgot your password?</a>
    </div>

    <button type="submit" class="btn btn-primary w-full place-self-center">
      Login
    </button>
  </form>

  <p class="block border-neutral-300 card card-bordered mt-5 text-center p-3 max-w-xs w-full">
    New here?
    <a href="/accounts/register" class="link link-primary">Create an accoout</a>
  </p>
</div>
