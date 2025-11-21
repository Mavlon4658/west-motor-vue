<script setup>
import { ref, reactive, watch } from "vue";
import { vMaska } from "maska";
import { defineProps, defineEmits, defineOptions } from "vue";

defineOptions({
    name: "InputPrice",
});

const props = defineProps({
    value: Number,
    class: {
        type: String,
        deafult: '',
    },
});

const emit = defineEmits(["update:value"]);

const maskedValue = ref(props.value);

const bindedObject = reactive({
    masked: "",
    unmasked: "",
    completed: false,
});

watch(
    () => props.value, (newVal) => {
        maskedValue.value = newVal;
    }
);
</script>

<template>
    <input
        v-model="maskedValue"
        v-maska="bindedObject"
        data-maska="9 99#"
        data-maska-tokens="9:[0-9]:repeated"
        data-maska-reversed
        @maska="emit('update:value', +bindedObject.unmasked)"
        :class="props.class"
    />
</template>