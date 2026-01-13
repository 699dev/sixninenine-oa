<template>
    <header
        v-if="isMobile"
        :class="cn(
            'dark',
            'flex items-stretch fixed z-10 top-0 start-0 end-0',
            'bg-zinc-950',
            'h-(--header-height-mobile) pe-[var(--removed-body-scroll-bar-size,0px)]',
        )"
    >
        <div class="flex items-stretch w-full border border-input rounded-xl shadow-xs m-2">
            <div class="container-fluid grow flex items-center justify-between gap-2.5">
                <NuxtLink
                    class="flex items-center gap-2"
                    data-discover="true"
                    href="/"
                >
                    <img
                        alt="SixNineNine OA"
                        class="w-full h-7"
                        src="/logo.svg"
                    >
                </NuxtLink>
                <div class="flex items-center gap-2">
                    <Drawer>
                        <DrawerTrigger as-child>
                            <Button
                                class="w-8 h-8"
                                variant="ghost"
                            >
                                <Icon
                                    class="text-muted-foreground size-4"
                                    mode="svg"
                                    name="lucide:menu"
                                />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div class="mx-auto w-full max-w-sm">
                                <DrawerHeader>
                                    <DrawerTitle>你想看什么？</DrawerTitle>
                                </DrawerHeader>
                                <div class="p-4 pb-8">
                                    <span>请把视觉窗口调大点。</span>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'SiteMobileHeader',
})
</script>
