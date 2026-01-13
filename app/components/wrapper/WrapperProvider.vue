<template>
    <div
        class="flex grow"
        data-slot="layout-wrapper"
        v-bind="$attrs"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { provideWrapperContext } from './utils'
import { computed } from 'vue'

defineOptions({
    name: 'SidebarProvider',
})

const open = ref<boolean>(true)

const toggleSidebar = () => {
    open.value = !open.value
}

const state = computed(() => open.value ? 'expanded' : 'collapsed')

provideWrapperContext({
    state,
    open,
    toggleSidebar,
})
</script>
