<template>
  <div class="demo-date-picker">
    <span>时间</span>
    <div class="block">
      <el-date-picker
        v-model="value"
        type="month"
        placeholder="Pick a month"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineEmits } from 'vue'

const value = ref('')
const emit = defineEmits(['timeRange'])

watch(value, (newVal, oldVal) => {
  const { year, month } = {
    year: new Date(value.value).getFullYear(),
    month: new Date(value.value).getMonth()
  }
  const dateRange = value.value === null ? {} : { 
    dateStart: value.value === null ? null : value.value,
    dateEnd: value.value === null ? null : new Date(year, month + 1, 1),
  }
  emit('timeRange', dateRange)
})

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
<style>
.el-popper{
  padding: 6px;
}
</style>