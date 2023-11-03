<template>
  <button class="xm-button">{{ props.title }}</button>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{ title: string }>(), {
  title: '确定'
})
</script>
