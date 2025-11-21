<script setup>
const props = defineProps({
    theme: {
        type: String,
        default: 'blue'
    }
})
</script>

<template>
    <button :class="`btn btn-${props.theme}`">
        <slot />
    </button>
</template>