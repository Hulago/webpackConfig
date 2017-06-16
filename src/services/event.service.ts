import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  constructor() { }

  getEvents() {
    return EVENTS;
  }
}

const EVENTS = [
  {
    id: 1,
    eventName: 'Event 1',
    eventType: 1 
  },
  {
    id: 1,
    eventName: 'Event 1',
    eventType: 1
  },
  {
    id: 1,
    eventName: 'Event 1',
    eventType: 1
  },
  {
    id: 1,
    eventName: 'Event 1',
    eventType: 1
  },
  {
    id: 1,
    eventName: 'Event 1',
    eventType: 1
  },
  {
    id: 1,
    eventName: 'Event 1',
    eventType: 1
  },
  {
    id: 1,
    eventName: 'Event 1',
    eventType: 1
  },
]