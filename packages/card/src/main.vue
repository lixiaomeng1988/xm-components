<template>
  <div class="xm-card">
    <div class="xm-card__title">{{ props.title }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{ title: string }>(), {
  title: '卡片标题'
})
</script>

<style lang="scss">
.xm-card {
  margin: 10px 0;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
}
</style>
