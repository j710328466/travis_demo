<template>
  <div class="cards">
    <mu-card class="card" v-for="(activity,index) in activityList" :key="index" >
      <mu-card-header title="江志雄" sub-title="技术部-前端开发">
        <mu-avatar slot="avatar">
          <img src="../../assets/img/uicon.jpg">
        </mu-avatar>
      </mu-card-header>
      <mu-card-media title="骑车去旅行" sub-title="净是些瞎比比...">
        <img src="../../assets/img/sun.jpg">
      </mu-card-media>
      <mu-card-actions class="btns">
        <mu-button>收藏</mu-button>
        <mu-button>阅读全文</mu-button>
      </mu-card-actions>
    </mu-card>
    <mu-divider></mu-divider>
  </div>
</template>

<script>
export default {
  name: 'activity',
  data () {
    return {
      activityList: [1, 2, 3, 4]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
  watch: {
    // $attrs (val) {
    //   this.list = ''
    //   if (val.searchOrder.length) {
    //     this.list = val.searchOrder
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import './activity.styl'
</style>
