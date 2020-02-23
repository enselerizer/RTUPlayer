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
import { HttpClientModule } from '@angular/common/http';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { ImageListPageComponent } from './image-list-page/image-list-page.component';
import { ImageListBlockComponent } from './image-list-block/image-list-block.component';
import { NewsReaderPageComponent } from './news-reader-page/news-reader-page.component';

const appRoutes: Routes = [
  { path: '', component: InitialPageComponent, data: {state: 'initial'} },
  { path: 'main', component: MainPageComponent, data: {state: 'main'} },
  { path: 'video', component: VideoListPageComponent, data: {state: 'video'} },
  { path: 'list/:page', component: ImageListPageComponent, data: {state: 'news'} },
  { path: 'game/:id', component: GamePageComponent, data: {state: 'game'} },
  { path: 'player/:video', component: VideoPlayerPageComponent, data: {state: 'player'} },
  { path: 'reader/:new', component: NewsReaderPageComponent, data: {state: 'reader'} }
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
    VideoPlayerPageComponent,
    InitialPageComponent,
    ImageListPageComponent,
    ImageListBlockComponent,
    NewsReaderPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
