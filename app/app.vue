<template>
    <SiteBody>
        <WrapperProvider>
            <WrapperContent>
                <WrapperMenu />
                <div
                    :class="cn(
                        'grow lg:overflow-y-auto lg:ms-(--sidebar-width)',
                        'lg:in-data-[sidebar-open=false]:ms-2.5 mx-2',
                        'bg-background border border-input rounded-xl shadow-xs',
                        'lg:transition-[margin] lg:duration-300',
                    )"
                >
                    <WrapperMain>
                        <SiteMain />
                    </WrapperMain>
                </div>
            </WrapperContent>
        </WrapperProvider>
    </SiteBody>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
</script>
