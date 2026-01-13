<template>
    <Button
        class="cursor-pointer"
        variant="ghost"
        @click="toggleSidebar"
    >
        <Icon
            class="text-muted-foreground size-5"
            mode="svg"
            name="lucide:panel-left"
        />
    </Button>
</template>

<script lang="ts" setup>
import { useWrapper } from './utils'

defineOptions({
    name: 'WrapperTrigger',
})
const { toggleSidebar } = useWrapper()
</script>
