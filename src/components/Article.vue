<template>
    <div class="article">
       <div class="content">
            <div class="loading" v-if="isloading">
                <img src="../assets/loading.gif" alt="">
            </div>
            <div class="panel" v-else>
                <div class="topic_header">
                    <div class="topic_title">
                      <span :class="[{
                        post_good:(posts.good === true),
                        post_top:(posts.top === true),
                        'topiclist-tab':(posts.good !== true && posts.top !==true)}]" v-if="isTop"> 
                        {{posts | tabFormter}}
                      </span>
                      <span >{{posts.title}}</span>
                    </div>
                    <span class="topic_changes">
                        <span>•发布于{{posts.create_at | formatDate}}</span>
                        <span>•作者{{posts.author.loginname}}</span>
                        <span>•{{posts.visit_count}}次浏览</span>
                        <span>•最后一次编辑是{{posts.last_reply_at | formatDate}}前</span>
                        <span>•{{posts | topicForm}}</span>
                    </span>
                </div>
                <div class="topic_content" v-html="posts.content"></div>
            </div>
            <div class="panel_conmment">
                <div class="header">回复</div>
                <ul>
                    <li v-for="(post,index)  in posts.replies" :key="post.id">
                        <span class="reply">
                            <span class="user_img">
                                <img :src="post.author.avatar_url" alt="">
                            </span>
                           <span class="reply_data">
                                <span class="reply_author">{{post.author.loginname}}</span>
                                <span class="reply_text">{{index + 1}}楼</span>
                                <span class="reply_text">{{post.create_at | formatDate}}</span>
                                <div v-html="post.content"></div>
                           </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <SideBar/>
    </div>
</template>


<script>
import SideBar from './SideBar'
export default {
  name: "Article",
  components:{
    SideBar
  },
  data() {
    return {
      isloading: false,
      posts: [],
      isTop: false
    };
  },
  methods: {
    getArticle() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(
          res => {
            this.isloading = false;
            this.posts = res.data.data;
            this.onTop();
          },
          error => {
            console.log(error);
          }
        );
    },
    onTop() {
      if (this.posts.good) {
        this.isTop = true;
      }
    }
  },
  beforeMount() {
    this.isloading = true;
    this.getArticle();
  }
};
</script>

<style lang="scss" >
@import url("../assets/markdown-github.css");
.article {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  .content {
    margin-right: 20px;
    .panel {
      background: white;
      .topic_header {
        border-bottom: 1px solid #e5e5e5;
        padding: 10px;
        margin-bottom: 10px;
        .topic_title {
          font-size: 22px;
          font-weight: 700;
          margin: 8px 0;
          .post_top,
          .post_good {
            background: #80bd01;
            padding: 2px 4px;
            font-size: 12px;
            border-radius: 3px;
            color: #fff;
            margin-right: 5px;
          }
        }
        .topic_changes {
          font-size: 12px;
          color: #838383;
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
      .topic_content {
        padding: 20px;
        p {
          font-size: 15px;
          line-height: 1.7em;
          overflow: auto;
          margin: 10px 0;
        }
        h2 {
          font-size: 26px;
          margin: 10px 0;
        }
      }
    }
    .panel_conmment {
      margin-top: 20px;
      background: white;

      .header {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
      }
      li {
        border-top: 1px solid #f0f0f0;
        padding: 10px;
        .reply {
          display: flex;
          justify-content: flex-start;
          .reply_data {
            margin-left: 10px;
            .reply_author {
              color: #666;
            }
            .reply_text {
              color: #08c;
            }
          }
          .user_img {
            img {
              width: 30px;
              height: 30px;
              border-radius: 3px;
            }
          }
        }
      }
      li:nth-child(1) {
        background-color: #f4fcf0;
      }
    }
  }
}

.markdown-text img {
  width: 92% !important;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}
</style>
