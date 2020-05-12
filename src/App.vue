<template>
  <div id="app">
    <Header/>
    <Arrows/>
    <!-- ROUTER VIEW -->
    <Content/>
  </div>
</template>

<script>
import Arrows from '../src/components/Arrows.vue'
import Header from '../src/components/Header.vue'
import Content from '../src/components/Content.vue'

export default {
  components:{
    Arrows,
    Header,
    Content
  }
}
</script>

<style lang="scss">
  @import './styles/index.scss';
</style>
    
