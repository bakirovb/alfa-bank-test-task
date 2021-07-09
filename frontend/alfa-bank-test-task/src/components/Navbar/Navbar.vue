<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">
              Начало</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="user?top=true" class="nav-link">Топ 5</router-link>
          </li>
          <li class="nav-item">
            <router-link to="user" class="nav-link">Весь список</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
