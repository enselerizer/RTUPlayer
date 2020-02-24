import { Component } from '@angular/core';
import { routerAnimations } from './animations';
import { ArchiveService } from './archive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: routerAnimations
})

export class AppComponent {

  title = 'RTUPlayer';s

  constructor(private archive: ArchiveService, private router: Router) {}

  ngOnInit() {
    if(!ArchiveService.isConfigLoaded) {
      this.router.navigateByUrl('/');
    }
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
