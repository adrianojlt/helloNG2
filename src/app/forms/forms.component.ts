import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-comp',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormComponent implements OnInit {

  specialDives = [
    "Night dive",
    "deep dive",
    "Cave dive"
  ]

  constructor() { }

  ngOnInit() {
  }

}
