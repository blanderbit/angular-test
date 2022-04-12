import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormFields} from "api-provider";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public formData: FormFields[] = this.route.snapshot.data["profileData"];

  constructor(public route: ActivatedRoute) { }
}
