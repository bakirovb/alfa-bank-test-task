<template>
  <div class="users-list">
    <Navbar />
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Место</th>
            <th scope="col">ФИО</th>
            <th scope="col">Статус</th>
            <th scope="col">Опыт</th>
            <th scope="col">Деньги</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="user in getUsersList" :key="user.idNode">
            <th>{{ user.place }}</th>
            <td>{{ user.fio }}</td>
            <td>{{ user.level }}</td>
            <td>{{ user.resources[0].value + user.resources[1].value }}</td>
            <td>{{ user.resources[2].value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';

export default {
  name: 'Users',
  components: { Navbar },
  data() {
    return { top: false };
  },
  computed: {
    getUsersList() {
      if (this.top) {
        const topUsers = [];
        for (
          let i = 0;
          i < this.$store.state.users.length &&
          this.$store.state.users[i].place < 6;
          i++
        ) {
          topUsers.push(this.$store.state.users[i]);
        }
        return topUsers;
      }
      return this.$store.state.users;
    },
  },
  beforeUpdate() {
    if (this.$route.query.top) {
      this.top = true;
    } else {
      this.top = false;
    }
  },
  async beforeMount() {
    await this.$store.dispatch('getAllUsers');
  },
};
</script>

<style>
.container {
  height: 600px;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
