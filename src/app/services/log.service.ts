import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null
  });

  selectedLog = this.logSource.asObservable();
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

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if (log.id === curr.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if (log.id === curr.id) {
        this.logs.splice(index, 1);
      }
    });
  }
}
