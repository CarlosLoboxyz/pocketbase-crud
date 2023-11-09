<script lang="ts">
  import InputPassword from "$lib/inputPassword.svelte";
</script>


<div class="text-center p-3 mt-5 mb-3">
  <h1 class="text-4xl font-bold">
    Create an account
  </h1>
  <p class="text-base font-normal">
    Enter the details of you new account
  </p>
</div>

<div class="text-center mx-auto grid place-items-center">
  <div>
    <form method="post" action="?/register" class="max-w-xs space-y-6 [&>div]:flex [&>div]:flex-col card card-bordered border-neutral-300 p-5 bg-neutral-100">
      <div class="space-y-5">
        <div class="join join-vertical">
          <label for="" class="label join-item bg-neutral-200 px-4 py-0">
            <span class="label-text text-sm">Create a username</span>
          </label>
          <input placeholder="A unique username" type="text" name="username" class="join-item input input-bordered" required />
        </div>

        <div class="join join-vertical">
          <label for="" class="label join-item bg-neutral-200 px-4 py-0">
            <span class="label-text text-sm">Your email</span>
          </label>
          <input placeholder="me@EmailProvider.com" type="email" name="email" class="join-item input input-bordered" required />
        </div>

        <div class="">
          <InputPassword label="Create a password" name="password" placeholder="Pretty good passsword"/>
          <label class="label">
            <span class="label-text">Minimum length is 8 characters<span>
          </label>
        </div>

        <InputPassword label="Repeat password" name="passwordConfirm" placeholder="Repeat the password"/> 
      </div>

      <button type="submit" class="btn btn-primary w-full">Register</button>
    </form>

    <p class="block border-neutral-300 card card-bordered my-5 text-center p-3 max-w-xs w-full">
      Already have an account?
      <a href="/accounts/login" class="link link-primary">Sign in</a>
    </p>
  </div>

  <p class="text-center max-w-lg text-sm tracking-tight my-5">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam
    voluptatibus repellendus sit quibusdam animi impedit corrupti adipisci qui
    non, iste dignissimos, earum porro unde, perferendis placeat nobis labore
    libero.
  </p>

</div>
