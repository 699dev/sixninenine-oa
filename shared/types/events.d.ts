import type { EventInput } from '@fullcalendar/core'

export type EventsType = 'working' | 'skip'

export interface IExtendedProps {
    type: EventsType
    description: string
}

export interface IEventDataSourceInput extends EventInput {
    extendedProps: IExtendedProps
}
