import { Component, Input, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';

@Component({
  selector: 'app-pinguinos-detail',
  templateUrl: './pinguinos-detail.component.html',
  styleUrls: ['./pinguinos-detail.component.css']
})
export class PinguinosDetailComponent implements OnInit {
  @Input() pinguinoDetail!: Pinguino;

  constructor() { }

  ngOnInit() {
  }

}
