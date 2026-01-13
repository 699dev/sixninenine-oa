<template>
    <div
        class="flex flex-col lg:flex-row grow pt-(--header-height-mobile) lg:pt-0 mb-2.5 lg:my-2.5"
        :data-sidebar-open="open"
    >
        <div class="flex grow rounded-xl mt-0">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useWrapper } from './utils'

defineOptions({
    name: 'WrapperContent',
})

const { open } = useWrapper()
</script>
