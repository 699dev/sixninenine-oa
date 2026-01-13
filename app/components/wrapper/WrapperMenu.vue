<template>
    <div
        v-if="!isMobile"
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
            <ScrollArea class="overflow-hidden shrink-0 h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-10rem)]">
                s
            </ScrollArea>
            <div class="flex items-center shrink-0 px-2.5 py-5">
                <Button
                    as-child
                    variant="ghost"
                    class="w-full justify-between items-center"
                >
                    <div class="px-3 py-6 hover:bg-muted text-foreground rounded-xl">
                        <div class="flex items-center space-x-3">
                            <Avatar>
                                <AvatarImage
                                    alt="@Alfred-Skyblue"
                                    src="https://github.com/Alfred-Skyblue.png"
                                />
                                <AvatarFallback>Alfred-Skyblue</AvatarFallback>
                            </Avatar>
                            <span class="text-sm font-medium font-mono">远方专用 OA</span>
                        </div>
                        <NuxtLink
                            class="flex items-center"
                            target="_blank"
                            to="https://github.com/Alfred-Skyblue/reka"
                        >
                            <Icon
                                class="w-5 h-5"
                                name="line-md:github-loop"
                            />
                        </NuxtLink>
                    </div>
                </Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { isMobile } from '~/composables/isMobile'

defineOptions({
    name: 'WrapperMenu',
})
</script>
