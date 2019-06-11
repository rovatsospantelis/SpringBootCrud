<template>
  <el-container>
    <el-aside>
      <el-menu>
        <el-menu-item v-for="item in nav" v-bind:key="item.name" @click="redirect(item)">{{ item.name }}</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <div class="container-fluid mt-3">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import nav from '../_nav'

export default {
  name: 'dashboard',
  components: {},
  data () {
    return {
      nav: nav.items
    }
  },
  methods: {
    redirect (navItem) {
      this.$router.push(navItem.url)
    }
  }
}

</script>
