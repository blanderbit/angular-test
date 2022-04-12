import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.scss']
})
export class DinamicFormComponent implements OnInit {
  @Input()
  public formOptions: any[];

  @Input()
  public form: FormGroup;

  @Output()
  public submit: EventEmitter<undefined> = new EventEmitter<undefined>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submit.emit()
  }

}
