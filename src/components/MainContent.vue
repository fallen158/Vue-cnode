<template>
    <div class="main-content">
        <div class="loading" v-if="isloading">
            <img src="../assets/loading.gif" alt="">
        </div>
        <div class="cell" v-else>
            <ul>
                <li class="header">
                    <a href="" class="current-tab">全部</a>
                    <a href="">精华</a>
                    <a href="">分享</a>
                    <a href="">问答</a>
                    <a href="">招聘</a>
                    <a href="">客户端测试</a>
                </li>
                <li v-for="post in posts" :key="post.id" class="post">
                    <span class="post_list">
                        <a href="" class="avatar_url">
                            <img :src="post.author.avatar_url" alt="">
                        </a>
                        <span class="reply_count">
                            <span class="count_replies">{{post.reply_count}}</span><span class="count_seperator">/</span><span class="count_visits">{{post.visit_count}}</span>
                        </span>
                        <span :class="[{
                            post_good:(post.good === true),
                            post_top:(post.top === true),
                            'topiclist-tab':(post.good !== true && post.top !==true)
                            }]">
                            {{post | tabFormter}}
                        </span>
                        <router-link :to="{
                          name: 'post_content',
                          params:{
                            id: post.id
                          } 
                     }">
                          <span class="post_title">
                              <a href="">{{post.title}}</a>
                          </span>
                        </router-link>
                    </span>
                    <span class="post_last_reply_at">
                        {{post.last_reply_at | formatDate}}
                    </span>
                </li>
            </ul>
        </div>
        <Pagination @handleList="x"/>
    </div>
</template>


<script>
import Pagination from "./Pagination";
export default {
  name: "MainContent",
  data() {
    return {
      isloading: false,
      posts: [],
      postPage: 1
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.postPage,
            limit: 20
          }
        })
        .then(res => {
          this.isloading = false;
          this.posts = res.data.data;
        });
    },
    x(value) {
      this.postPage = value;
      this.getData();
    }
  },
  beforeMount() {
    this.isloading = true;
    this.getData();
  },
  components: {
    Pagination
  }
};
</script>


<style lang="scss" scoped>
.main-content {
  width: 90%;
  max-width: 1400px;
  min-width: 800px;
  margin: 15px auto;
  min-height: 400px;
  background: white;
  .cell {
    .header {
      color: #80bd01;
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
      .current-tab {
        background-color: #80bd01;
        color: #fff;
        padding: 3px 4px;
        border-radius: 3px;
        margin-left: 10px;
      }
      a {
        margin-left: 20px;
      }
    }
    .post {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #f0f0f0;
      &_list {
        display: flex;
        align-items: center;
        .avatar_url {
          img {
            width: 27px;
            height: 27px;
          }
        }
        .reply_count {
          color: #9e78c0;
          font-size: 14px;
          display: inline-block;
          width: 70px;
          text-align: center;
          .count_visits {
            color: #b4b4b4;
            font-size: 10px;
          }
        }
        .post_title {
          color: #333;
          font-size: 16px;
          line-height: 30px;
          a:hover {
            text-decoration: underline;
          }
        }
        .post_top,
        .post_good {
          background: #80bd01;
          padding: 2px 4px;
          font-size: 12px;
          border-radius: 3px;
          color: #fff;
          margin-right: 5px;
        }
        .topiclist-tab {
          background-color: #e5e5e5;
          color: #999;
          padding: 2px 4px;
          font-size: 12px;
          border-radius: 3px;
          margin-right: 5px;
        }
      }
      &_last_reply_at {
        color: #778087;
        font-size: 10px;
      }
    }
    .post:hover {
      background: #e5e5e5;
    }
  }
  .pagination {
    margin-top: 5px;
    margin-bottom: 10px;
    background-color: white;
    padding: 10px 10px;
  }
}
</style>
