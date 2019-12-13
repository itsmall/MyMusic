<template>
  <!-- exclude="Detail" -->
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style  scoped>
div {
  position: relative;
}
:root {
  --color-text: #666;
  --color-high-text: #ff5777;
  --color-tint: #ff8198;
  --color-background: #fff;
  --font-size: 14px;
  --line-height: 1.5;
}
</style>
