import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { barButtonAnimations } from '../animations';
import { Location } from '@angular/common';
import { UnityCallbackProxyService } from '../unity-callback-proxy.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  animations: barButtonAnimations
})
export class ControlPanelComponent implements OnInit {

  constructor(private router: Router, private location: Location, private unityCallbackProxyService: UnityCallbackProxyService) { }

  ngOnInit() {

  }

  isRoute(route: string) {
    return this.router.url === '/' + route;
  }
  isNotRoute(route: string) {
    return this.router.url !== '/' + route;
  }

  getRoute() {
    return this.router.url.slice(1);
  }

  goBack() {
    this.location.back();
  }

  sendUnityMessage(msg: string) {
    this.unityCallbackProxyService.sendMessage(msg);
  }

}
