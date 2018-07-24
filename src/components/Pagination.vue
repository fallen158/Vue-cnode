<template>
    <div class="pagination">
        <button @click="changePage">首页</button>
        <button @click="changePage">上一页</button>
        <button class="pagebtn">.....</button>
        <button v-for="btn in pagebths" :key="btn.id" @click="changePage(btn)">
            {{btn}}
        </button>
        <button @click="changePage">下一页</button>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "Pagination",
  data(){
      return{
          pagebths:[1,2,3,4,5,'.....'],
          currentPage: 1,
      }
  },
  methods:{
      changePage(page){
          if(page !== 'number'){
              switch(page.target.innerText){
                  case '首页':
                  break;
                  case '上一页':
                   $('button.currentPage').prev().click()
                  break;
                  case '下一页':
                   $('button.currentPage').next().click()
                  break
              }
            return
              
          }
        this.currentPage = page

      }
  }
};
</script>


<style lang="scss" scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: white;
  padding: 6px 10px;
  /*box-shadow: 0px 2px 9px #888888;*/
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  width: 45px;
  height: 29px;
  margin: 0 2px;
}
.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>


