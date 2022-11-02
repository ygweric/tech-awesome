<!-- <script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script> -->

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <!-- <a-calendar v-model:value="value" @panelChange="onPanelChange" /> -->
    <!-- <Calendar v-model:value="value" @panelChange="onPanelChange" /> -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Calendar } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

export default defineComponent({
  setup() {
    const value = ref();

    const onPanelChange = (value, mode) => {
      console.log(value, mode);
    };

    return {
      value,
      onPanelChange,
    };
  },
});
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
