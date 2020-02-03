import { Component } from '@angular/core';
import { routerAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: routerAnimations
})

export class AppComponent {

  title = 'RTUPlayer';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
