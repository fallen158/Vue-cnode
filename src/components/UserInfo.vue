<template>
    <div class="userInfo">
        <div class="content">
            <div class="header">
                <router-link to="/">主页 /</router-link>
            </div>
            <div class="inner">
                <div class="user_avatr">
                    <img :src="users.avatar_url" alt="">
                </div>
                <a href="">{{users.loginname}}</a>
            </div>
        </div>
        <div class="sidebar">
1
        </div>
    </div>
</template>


<script>
export default {
  name: "user_info",
  data() {
    return {
      users: []
    };
  },
  methods: {
    getDataUserInfo() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.users = res.data.data;
          console.log(this.users);
        });
    }
  },
  beforeMount() {
    this.getDataUserInfo();
  }
};
</script>


<style lang="scss" scoped>
.userInfo {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  .content {
    background: white;
    flex: 1;
    margin-right: 20px;
    border-radius: 3px 3px 0 0;
    .header {
      color: #80bd01;
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
    }
    .inner {
      padding: 10px;
      border-top: 1px solid #e5e5e5;
    }
  }
  .sidebar {
    background: white;
    border-radius: 3px;
    width: 290px;
  }
}
</style>


