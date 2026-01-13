<template>
    <div
        :class="cn(
            'dark',
            'fixed z-10 top-0 bottom-0 start-0',
            'flex flex-col items-stretch shrink-0',
            'w-(--sidebar-width)',
            'lg:in-data-[sidebar-open=false]:w-0',
            'transition-[width] duration-300 overflow-hidden',
        )"
    >
        <div class="flex flex-col items-stretch shrink-0 w-(--sidebar-width)">
            <div class="flex items-center py-5 gap-2">
                <div class="flex items-center w-full">
                    <SiteLogo />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'WrapperMenu',
})
</script>
