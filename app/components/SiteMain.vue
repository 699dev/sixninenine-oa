<template>
    <template v-if="!open">
        <WrapperTrigger />
    </template>
    {{ isMobile }}
    <p>SixNineNine OA</p>
    <p>SixNineNine OA</p>
    <p>SixNineNine OA</p>
</template>

<script lang="ts" setup>
import { useWrapper } from '~/components/wrapper/utils'
import { isMobile } from '~/composables/isMobile'

defineOptions({
    name: 'SiteMain',
})

const { open } = useWrapper()
</script>
