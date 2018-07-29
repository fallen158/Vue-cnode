<template>
    <div class="userInfo">
        <div class="content">
           <div class="panel">
                <div class="header">
                <router-link to="/">主页 /</router-link>
            </div>
            <div class="inner">
                <div class="user_avatr">
                    <img :src="users.avatar_url" alt="">
                    <span class="dark" href="">{{users.loginname}}</span>
                </div>
                <div class="big">{{users.score}}积分</div>
                <div class="col_time">注册时间{{users.create_at | formatDate}}</div>
            </div>
           </div>
          <div class="panel">
              <div class="header col_fade">最近创建的话题</div>
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
              <div class="header col_fade">最近参与的话题</div>
                <ul>
                  <li v-for="dark in replies" :key="dark.id">
                    <router-link :to="{
                      name: 'post_content',
                      params:{
                        id:dark.id,
                        name:dark.author.loginname
                      }
                    }">
                      {{dark.title}}
                    </router-link>
                  </li>
                </ul>
          </div>
        </div>
        <div class="sidebar">
            <div class="panel">
                <div class="header">作者</div>
                <div class="user_avator">
                  <img :src="users.avatar_url" alt="">
                <span class="user_name">{{users.loginname}}</span>
                </div>
                <div class="user_board">积分: {{users.score}}</div>
            </div>
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
.userInfo {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  .content {
    flex: 1;
    margin-right: 20px;
    border-radius: 3px 3px 0 0;
    .panel {
      margin-bottom: 13px;
      background: white;
      .header {
        color: #80bd01;
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
      }
      .col_fade {
        color: #444;
      }
      .inner {
        padding: 10px;
        border-top: 1px solid #e5e5e5;
        .user_avatr {
          position: relative;
          .dark {
            position: absolute;
            top: 15px;
            margin-left: 10px;
            color: #778087;
          }
          img {
            width: 40px;
            height: 40px;
          }
        }
        .col_time {
          color: #ababab;
          padding: 10px 0;
        }
        .big {
          margin-top: 10px;
        }
      }
      li {
        line-height: 2em;
        color: #08c;
        max-width: 270px;
        font-size: 14px;
        margin: 5px 0 3px 10px;
      }
    }
  }
  .sidebar {
    border-radius: 3px;
    width: 290px;
    .panel {
      background: white;
      border-radius: 3px;
      width: 290px;
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
          top: 35px;
          margin-left: 10px;
        }
      }
      .user_board {
        font-size: 14px;
        padding: 10px;
      }
    }
  }
}
</style>


