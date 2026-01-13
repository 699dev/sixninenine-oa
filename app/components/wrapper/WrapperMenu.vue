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
                <div class="w-full space-y-6 pt-6 lg:py-2 pb-6">
                    <div class="px-4">
                        <div class="sr-client">
                            rl
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-3 px-4 font-mono">
                        <div class="flex w-full items-center justify-between px-1">
                            <div class="text-white text-sm font-medium">
                                {{ calendar }}
                            </div>
                        </div>
                        <div class="flex w-full flex-col gap-2">
                            <div
                                class="text-white bg-muted relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full after:bg-blue-500"
                            >
                                <div class="font-medium">
                                    Work Living
                                </div>
                                <div class="text-muted-foreground text-xs">
                                    21:15 PM - 00:30 AM
                                </div>
                            </div>
                            <div
                                class="text-white bg-muted relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full after:bg-amber-500"
                            >
                                <div class="font-medium">
                                    Work Skiping
                                </div>
                                <div class="text-muted-foreground text-xs">
                                    00:00 Am - 00:00 AM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>
            <div class="flex items-center shrink-0 px-2.5 py-5">
                <Button
                    as-child
                    class="w-full justify-between items-center"
                    variant="ghost"
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
                            to="https://github.com/699dev/sixninenine-oa"
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
import dayjs from 'dayjs'

defineOptions({
    name: 'WrapperMenu',
})

const calendar = computed(() => {
    const date = dayjs()
    return `${date.format('MMMM')} ${date.format('DD')}, ${date.year()}`
})
</script>
