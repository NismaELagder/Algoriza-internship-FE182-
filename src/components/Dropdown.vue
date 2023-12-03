<!-- DropdownWithLabel.vue -->
<template>
  <div>
    <div class="relative">
      <label
        for="dropdown"
        class="absolute left-4 top-0 text-gray-500 transition-transform transform origin-top text-xs"
        :class="{ transform: selectedOption }"
      >
        Select an option
      </label>
      <select
        v-model="selectedOption"
        id="dropdown"
        name="dropdown"
        class="block w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="" disabled>Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>

    <p v-if="selectedOption" class="ml-4 text-gray-700">
      Selected: {{ selectedOption }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
    };
  },
};
</script>
