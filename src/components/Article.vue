<template>
    <div class="article">
       <div class="content">
            <div class="loading" v-if="isloading">
                <img src="../assets/loading.gif" alt="">
            </div>
            <div class="panel">
                    <div class="topic_header">
                        <span :class="[{
                            post_good:(posts.good === true),
                            post_top:(posts.top === true),
                            'topiclist-tab':(posts.good !== true && posts.top !==true)
                                    }]"> 
                            {{posts | tabFormter}}
                        </span>
                        <div class="topic_title">
                            <h1>{{posts.title}}</h1>
                        </div>
                        <span>
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
                            <span>
                                <img :src="post.author.avatar_url" alt="">
                            </span>
                           <span class="reply_data">
                                <span class="reply_author">{{post.author.loginname}}</span>
                                <span class="reply_text">{{index + 1}}楼</span>
                                <span class="reply_text">{{post.create_at | formatDate}}</span>
                                <span v-html="post.content"></span>
                           </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
       <div class="sidebar">
           312323123123123213213
       </div>
    </div>
</template>


<script>
export default {
  name: "Article",
  data() {
    return {
      isloading: false,
      posts: []
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
            console.log(this.posts);
          },
          error => {
            console.log(error);
          }
        );
    }
  },
  beforeMount() {
    this.isloading = true;
    this.getArticle();
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/github-markdown.css");
.article {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
  .content {
    margin-right: 315px;
    .panel {
      background: white;
      padding: 20px;
      .topic_header {
        border-bottom: 1px solid #e5e5e5;
        padding: 10px;
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
            .reply_data{
                margin-left: 10px;
                .reply_author{
                        color: #666;
                }
                .reply_text{
                        color: #08c;    
                }
            }
          }
          img {
            width: 30px;
            height: 30px;
            border-radius: 3px;
          }
        }
        li:nth-child(1) {
          background-color: #f4fcf0;
        }
    }
  }
  .sidebar {
    width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
  }
}
.markdown-text img {
  width: 92% !important;
}
</style>
