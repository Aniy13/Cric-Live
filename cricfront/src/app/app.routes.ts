import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
    {
        path:'home',
        redirectTo:'/live',
        pathMatch:'full'
    }
    ,
    {
        path:"home",
        component:HomeComponent,
        title:"Home | CricLive"
    },{
        path:"history",
        component:HistoryComponent,
        title: "Match history | CricLive"
    },{
        path:"live",
        component:LiveComponent,
        title:"Live Matches | CricLive"
        
    },{
        path:"point-table",
        component:PointTableComponent,
        title:"IPL-Point Table | CricLive"
    }
];
