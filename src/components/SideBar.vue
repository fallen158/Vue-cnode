<template>
    <div class="sidebar">
      <div class="panel">
        <div class="header">作者</div>
        <router-link :to="{
          name: 'user_info',
          params:{
            name: users.loginname
          }
        }" class="user_avator">
            <img :src="users.avatar_url" alt="">
            <span class="user_name">{{users.loginname}}</span>
        </router-link>
        <div class="user_board">积分: {{users.score}}</div>
      </div>
      <div class="panel">
          <div class="header">作者其他话题</div>
              <ul>
            <li v-for="list in topics" :key="list.id">
                <router-link :to="{
                  name: 'post_content',
                  params:{
                    id:list.id,
                    name:list.author.loginname
                  }
                }">
              {{list.title}}
              </router-link>
            </li>
          </ul>
      </div>
      <div class="panel">
          <div class="header">无人回复的话题</div>
            <ul>
              <li v-for="darks in replies" :key="darks.id">
                  <router-link :to="{
                  name: 'post_content',
                  params:{
                    id:darks.id,
                    name:darks.author.loginname
                  }
                }">
              {{darks.title}}
                </router-link>
            </li>
          </ul>
      </div>
    </div>
</template>


<script>
export default {
  name: "sideBar",
  data() {
    return {
      users: []
    };
  },
  methods: {
    getDataUser() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.users = res.data.data;
          console.log(this.users);
        });
    }
  },
  beforeMount() {
    this.getDataUser();
  },
  watch: {
    $route(from) {
      window.location.reload();
    }
  },
  computed: {
    topics() {
      if (this.users.recent_topics) {
        return this.users.recent_topics.splice(0, 5);
      }
    },
    replies() {
      if (this.users.recent_replies) {
        return this.users.recent_replies.splice(0, 5);
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.sidebar {
  font-size: 14px;
  .panel {
    background: white;
    border-radius: 3px;
    width: 290px;
    margin-top: 20px;
    padding-bottom: 10px;
    .header {
      color: #51585c;
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px;
    }
    .user_avator {
      padding: 10px;
      position: relative;
      img {
        width: 48px;
        height: 48px;
        margin-top: 10px;
      }
      .user_name {
        font-size: 16px;
        color: #778087;
        margin-left: 5px;
        position: absolute;
        top: -15px;
        margin-left: 10px;
      }
    }
    .user_board {
      font-size: 14px;
      padding: 10px;
    }
    li {
      line-height: 2em;
      color: #778087;
      max-width: 270px;
      font-size: 14px;
      margin: 5px 0 3px 10px;
    }
  }
  .panel:nth-child(1) {
    margin: 0;
  }
}
</style>
