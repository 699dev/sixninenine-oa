import { createContext } from 'reka-ui'
import type { ComputedRef, Ref } from 'vue'

export const [useWrapper, provideWrapperContext] = createContext<{
    state: ComputedRef<'expanded' | 'collapsed'>
    open: Ref<boolean>
    toggleSidebar: () => void
}>('Wrapper')
