<div class="dropdown dropdown-end">
  <label tabindex="0" class="btn btn-ghost btn-circle avatar">
    <div class="w-10 rounded-full">
      <img src="https://picsum.photos/200" />
    </div>
  </label>
  <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <li>
      <a class="justify-between">
        Profile
        <span class="badge">New</span>
      </a>
    </li>
    <li><a>Settings</a></li>
    <li>
      <form action="/accounts/logout" method="post">
        <button type="submit">Logout</button>
      </form>
    </li>
  </ul>
</div>
