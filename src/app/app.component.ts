import { Component } from '@angular/core';
import {LOADING} from "./_shared/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'INTERCORP.FrontEnd';

  isLoad() {
    return sessionStorage.getItem(LOADING) == 'true';
  }
}
