<template>
    <Body
        :class="cn(
            '[--sidebar-width:260px]',
            '[--header-height-mobile:60px]',
            'bg-zinc-950',
        )"
        class="text-foreground bg-background flex h-full text-base antialiased lg:overflow-hidden"
    >
        <slot />
    </Body>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'SiteBody',
})
</script>
