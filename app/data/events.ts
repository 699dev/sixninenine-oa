import type { EventsType, IEventDataSourceInput } from '#shared/types/events'

const createEvent = (
    title: string,
    date: string,
    description: string = '正常直播',
    type: EventsType = 'working',
): IEventDataSourceInput => {
    return {
        title: title,
        start: date,
        allDay: true,
        extendedProps: {
            type: type,
            description: description,
        },
    }
}

export const eventsData: IEventDataSourceInput[] = [
    createEvent('请假', '2026-01-12', '拉肚子', 'skip'),
    createEvent('直播', '2026-01-13'),
    createEvent('直播', '2026-01-14'),
    createEvent('直播', '2026-01-15'),
]
