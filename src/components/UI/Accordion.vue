<script setup>
import { ref, nextTick, onMounted } from 'vue'

const props = defineProps({
    class: {
        type: String,
        default: "",
    },
})

const isOpen = ref(true)

const header = ref(null)
const content = ref(null)
const chevron = ref(null)

const panelStyle = ref({
    opacity: 0,
    transform: 'translateY(-8px)',
    transition: 'opacity 200ms ease, transform 200ms ease',
    willChange: 'opacity, transform',
})

const chevronStyle = ref({
    transform: 'rotateZ(0deg)',
    transition: 'transform 200ms ease'
})

function toggle() {
    isOpen.value = !isOpen.value
    applyAnimation()
}

function applyAnimation() {
    if (!isOpen.value) {
        panelStyle.value.opacity = 0
        panelStyle.value.transform = 'translateY(-8px)'
        chevronStyle.value.transform = 'rotateZ(0deg)'
        setTimeout(() => {
        }, 200)
    } else {
        panelStyle.value.opacity = 0
        panelStyle.value.transform = 'translateY(-8px)'
        chevronStyle.value.transform = 'rotateZ(180deg)'
        setTimeout(() => {
            requestAnimationFrame(() => {
                panelStyle.value.opacity = 1
                panelStyle.value.transform = 'translateY(0)'
            })
        }, 200);
    }
}

onMounted(() => {
    applyAnimation()
})
</script>

<template>
    <div 
        :class="['cost-card__accordion', props.class, isOpen ? 'active' : '']"
    >
        <div class="accordion-head">
            <button 
                class="accordion-btn"
                ref="header"
                :aria-expanded="isOpen.toString()"
                @click="toggle"
                type="button"
            >
                <slot name="btn"/>
            </button>
            <slot name="result"/>
        </div>
        <div
            class="accordion-body"
            ref="content"
            :hidden="!isOpen"
            :data-visible="isOpen.toString()"
            :style="panelStyle"
        >
            <slot name="body"/>
        </div>
    </div>
</template>