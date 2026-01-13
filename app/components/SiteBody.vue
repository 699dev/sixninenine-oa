<template>
    <Body class="text-foreground bg-background flex h-full text-base antialiased lg:overflow-hidden">
        <slot />
    </Body>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'SiteBody',
})
</script>
