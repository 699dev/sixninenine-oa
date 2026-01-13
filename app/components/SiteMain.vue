<template>
    <div
        ref="containerRef"
        class="flex flex-col rounded-lg border p-0"
    >
        <div class="flex items-center justify-between p-2 sm:p-4">
            <div class="flex items-center gap-1 sm:gap-4">
                <WrapperTrigger v-if="!open" />
                <Button
                    class="cursor-pointer"
                    @click="goToToday"
                >
                    Today
                </Button>
                <div class="flex items-center sm:gap-2">
                    <Button
                        class="cursor-pointer"
                        variant="ghost"
                        @click="prevMonth"
                    >
                        <Icon
                            mode="svg"
                            name="lucide:chevron-left"
                        />
                    </Button>
                    <Button
                        class="cursor-pointer"
                        variant="ghost"
                        @click="nextMonth"
                    >
                        <Icon
                            mode="svg"
                            name="lucide:chevron-right"
                        />
                    </Button>
                </div>
                <h2 class="text-sm font-semibold sm:text-lg md:text-xl">
                    {{ month[currentMonth] }} {{ currentYear }}
                </h2>
            </div>
            <div class="flex items-center gap-2">
                <Button>Add Event</Button>
            </div>
        </div>
        <FullCalendar
            ref="fullCalendarRef"
            :options="calendarOptions"
        >
            <template #eventContent="arg">
                <div
                    v-if="arg.event.extendedProps.type === SKIP "
                    class="relative px-2 py-1 bg-amber-200/50 rounded text-amber-950/80 text-xs"
                >
                    <div class="flex justify-start items-center gap-1">
                        <Icon
                            mode="svg"
                            name="healthicons:running-outline"
                        />
                        <span class="truncate">{{ arg.event.title }}</span>
                    </div>
                </div>
                <div
                    v-if="arg.event.extendedProps.type === WORKING "
                    class="relative px-2 py-1 bg-blue-200/50 rounded text-blue-950/80 text-xs"
                >
                    <div class="flex justify-start items-center gap-1">
                        <Icon
                            mode="svg"
                            name="lucide:tv-minimal-play"
                        />
                        <span class="truncate">{{ arg.event.title }}</span>
                    </div>
                </div>
            </template>
        </FullCalendar>
    </div>
</template>

<script lang="ts" setup>
import { useWrapper } from '~/components/wrapper/utils'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import type { CalendarApi, CalendarOptions, DateSelectArg, EventClickArg } from '@fullcalendar/core'
import { month } from '~/constant/month'
import { eventsData } from '~/data/events'
import type { IEventDataSourceInput } from '#shared/types/events'
import { SKIP, WORKING } from '~/constant/common'

defineOptions({
    name: 'SiteMain',
})

const { open } = useWrapper()

const containerRef = useTemplateRef<HTMLElement | null>('containerRef')
const fullCalendarRef = useTemplateRef<InstanceType<typeof FullCalendar> | null>('fullCalendarRef')

const currentYear = ref<number>(new Date().getFullYear())
const currentMonth = ref<number>(new Date().getMonth())

const fullCalendarApi = (): CalendarApi | null => {
    return fullCalendarRef.value?.getApi() || null
}

const goToToday = () => {
    const api = fullCalendarApi()
    if (api) {
        api.today()
        syncDateFromCalendar(api)
    }
}
const prevMonth = () => {
    const api = fullCalendarApi()
    if (api) {
        api.prev()
        syncDateFromCalendar(api)
    }
}

// 下一月
const nextMonth = () => {
    const api = fullCalendarApi()
    if (api) {
        api.next()
        syncDateFromCalendar(api)
    }
}

const syncDateFromCalendar = (api: CalendarApi) => {
    const viewDate = api.view.currentStart
    currentYear.value = viewDate.getFullYear()
    currentMonth.value = viewDate.getMonth()
}

// 模拟异步获取事件数据
const fetchEventsData = (): Promise<IEventDataSourceInput[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(eventsData)
        }, 500)
    })
}

// 日历选项配置
const calendarOptions: CalendarOptions = reactive({
    plugins: [
        dayGridPlugin, interactionPlugin,
    ],
    initialView: 'dayGridMonth',
    headerToolbar: false,
    // 允许通过点击和拖拽高亮多个日期或时间段
    selectable: false,
    // 允许拖拽时是否绘制"占位符"事件。
    selectMirror: false,
    dayMaxEvents: true,
    // 是否在显示周末
    weekends: true,
    contentHeight: 'auto',
    events: [],
    eventClick: (info: EventClickArg) => {
        alert(`事件: ${info.event.title}\n描述: ${info.event.extendedProps.description}`)
    },
    select: (info: DateSelectArg) => {
        const title = prompt('请输入事件标题:')
        if (title) {
            const calendarApi = fullCalendarRef.value?.getApi() as CalendarApi
            calendarApi.addEvent({
                title,
                start: info.start,
                end: info.end,
                allDay: info.allDay,
            })
            calendarApi.unselect()
        }
    },
})

onMounted(async () => {
    calendarOptions.events = await fetchEventsData()
})

useResizeObserver(containerRef, () => {
    fullCalendarApi()?.updateSize()
})
</script>
