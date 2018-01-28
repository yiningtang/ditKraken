import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule, MatCheckboxModule, MatListModule} from '@angular/material';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BranchSelectService } from './shared/branch-select.service';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import {DitListComponent} from './shared/dit-list/dit-list.component';




export const router :Routes =[
{
  path:' ',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path:'home',
  component: MainComponent,
  children: [
  {
    path: '',
    outlet:'header',
    component: HeaderComponent
  },
  {
    path:'',
    outlet:'sidebar',
    component:SideBarComponent
  },
  {
    path: '',
    outlet:'content',
    component:ContentComponent
  }
  ]
},
{
  path:'**',
  redirectTo: 'home',
  pathMatch: 'full'
}
];

//export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash:true});
// RouterModule.forRoot(routes, {useHash:true}),

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainComponent,
    HeaderComponent,
    ContentComponent,
    DitListComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule
    //RouterModule.forRoot(router,{useHash:true})
  ],
  providers: [BranchSelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
