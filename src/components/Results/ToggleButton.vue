<!-- SwitchButton.vue -->
<template>
  <div class="switch-button" @click="toggleSwitch">
    <input
      type="checkbox"
      v-model="isChecked"
      class="input-hidden"
    />
    <div class="switch-background">
      <div class="switch-handle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    toggleSwitch() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>

<style scoped>
.switch-button {
  position: relative;
  width: 32px;
  height: 20px;
  cursor: pointer;
}

.input-hidden {
  display: none;
}

.switch-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  border-radius: 15px;
  transition: background-color 0.3s ease;
}

.switch-handle {
  position: absolute;
  /* top: 0px; */
  left: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.3s ease;
}

.input-hidden:checked + .switch-background {
  background-color: #4caf50;
}

.input-hidden:checked + .switch-background .switch-handle {
  transform: translateX(12px);
}
</style>
