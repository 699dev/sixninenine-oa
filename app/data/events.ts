import type { IEventDataSourceInput } from '#shared/types/events'

export const eventsData: IEventDataSourceInput[] = [
    {
        title: '请假',
        start: '2026-01-12',
        allDay: true,
        extendedProps: {
            type: 'skip',
            description: '拉肚子',
        },
    },
    {
        title: '直播',
        start: '2026-01-12',
        allDay: true,
        extendedProps: {
            type: 'working',
            description: '正常直播',
        },
    },
    // {
    //     title: '项目截止日期',
    //     start: '2026-01-20',
    //     allDay: true,
    //     extendedProps: {
    //         description: '项目提交截止',
    //     },
    // },
]
