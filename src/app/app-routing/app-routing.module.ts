import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { SideBarComponent } from '../sidebar/sidebar.component';
import { MainComponent } from '../main/main.component';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { BrancheInfoResolver} from '../content/branche-info-resolver.service';

const routes: Routes = [
{
	path:' ',
	redirectTo: 'home',
	pathMatch: 'full'
},
{
	path:'home',
	component: MainComponent,
	children:
	[
	{
		path:'',
		component: HeaderComponent,
		outlet: 'header'
	},
	{
		path:'',
		outlet:'content',
		component: ContentComponent,
		children:[
		{
			path: '',
			component: ContentComponent,
			resolve:{
				branches: BrancheInfoResolver
			}
		}]
	},
	{
		path:'',
		component: SideBarComponent,
		outlet: 'sidebar'
	}]
},
{
	path:'**',
	redirectTo: 'home',
	pathMatch: 'full'
}
];


@NgModule({
  imports: [
  	RouterModule.forRoot(routes,{useHash:true})
  ],
  declarations: [],
  exports: [
  RouterModule],
  providers: [BrancheInfoResolver]
})
export class AppRoutingModule {

}
