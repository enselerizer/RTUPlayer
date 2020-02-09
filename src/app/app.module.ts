import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {VgCoreModule} from 'videogular2/compiled/core';
import {VgControlsModule} from 'videogular2/compiled/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/buffering';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageBlockVideoComponent } from './main-page-block-video/main-page-block-video.component';
import { MainPageBlockImageComponent } from './main-page-block-image/main-page-block-image.component';
import { SafePipe } from './safe.pipe';
import { VideoListPageComponent } from './video-list-page/video-list-page.component';
import { VideoListBlockComponent } from './video-list-block/video-list-block.component';
import { GamePageComponent } from './game-page/game-page.component';
import { UnityComponent } from './unity/unity.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { VideoPlayerPageComponent } from './video-player-page/video-player-page.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent, data: {state: 'main'} },
  { path: 'video', component: VideoListPageComponent, data: {state: 'video'} },
  { path: 'game', component: GamePageComponent, data: {state: 'game'} },
  { path: 'player/:video', component: VideoPlayerPageComponent, data: {state: 'player'} }
];


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageBlockVideoComponent,
    MainPageBlockImageComponent,
    VideoListPageComponent,
    SafePipe,
    VideoListPageComponent,
    VideoListBlockComponent,
    GamePageComponent,
    UnityComponent,
    ControlPanelComponent,
    VideoPlayerPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
