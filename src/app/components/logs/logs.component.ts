import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: {
    id: string;
    text: string;
    date: any;
  }[];

  constructor() {}

  ngOnInit() {
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
}
