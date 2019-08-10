import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Log } from '../../models/log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  constructor(private logService: LogService) {}

  ngOnInit() {}
}
