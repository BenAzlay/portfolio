<template>
    <div class="flex flex-col">
        <label v-if="showLabel" class="font-semibold">
            {{ label }}<span v-if="required" class="text-red-600">*</span>
        </label>
        <p class="text-sm font-light">
            {{ explanation }}
        </p>
        <input
            v-if="type !== 'textarea'"
            :value="value"
            @input="$emit('input', $event.target.value)"
            @keyup.enter="$emit('enter')"
            :type="type"
            :required="required"
            :placeholder="placeholder || label"
            autocomplete="off">
        <textarea
            v-else
            :value="value"
            class="border-1 p-1 h-32 text-gray-900"
            @input="$emit('input', $event.target.value)"
            :placeholder="placeholder || label"
            autocomplete="off" />
    </div>
</template>

<script>
export default {
  name: 'InputField',
  components: {
  },
  props: {
      value: String || Date || Number,
      showLabel: {
          type: Boolean,
          required: false,
          default: true
      },
      label: {
          type: String,
          required: false,
          default: ""
      },
      placeholder: {
          type: String,
          required: false,
          default: null
      },
      explanation: {
          type: String,
          required: false,
          default: ''
      },
      type: {
          type: String,
          required: true
      },
      required: {
          type: Boolean,
          required: false,
          default: false
      }
  },
  computed: {
  }
}
</script>

<style scoped>
input {
    @apply block appearance-none py-2 px-3 w-full text-gray-900 border-1 border-gray-400 rounded;
}
</style>
