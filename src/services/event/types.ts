export interface IEvent {
  name?: string;
  channelId?: string;
  eventDate?: string;
  description?: string;
  status: string;
  isShowDayHeader?: boolean;
  startTime: Date;
  endTime: Date;
}
