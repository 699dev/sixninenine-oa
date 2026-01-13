<template>
    <div class="flex w-full grow items-center justify-between px-5 gap-2.5">
        <NuxtLink href="/">
            <img
                alt="SixNineNine OA"
                class="w-full h-8"
                src="/logo.svg"
            >
        </NuxtLink>
        <WrapperTrigger />
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'SiteLogo',
})
</script>
