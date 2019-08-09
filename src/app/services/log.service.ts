import { Injectable } from '@angular/core';

import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated components',
        date: new Date('01/08/2019 12:54:23')
      },
      {
        id: '2',
        text: 'Added bootstrap',
        date: new Date('04/08/2019 14:50:20')
      },
      {
        id: '3',
        text: 'Added logs component',
        date: new Date('06/08/2019 17:40:41')
      }
    ];
  }

  getLogs() {
    return this.logs;
  }
}
