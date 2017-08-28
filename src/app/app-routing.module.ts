import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectComponent } from './project/project.component';

const routes = [
	{path:'characters', component: TabsComponent, data: {title:'Find Us All', subtitle: 'know details about us'}, children: [
		{ path: '', redirectTo: 'all', pathMatch: 'full' },
		{ path: ':side', component: ListComponent }
	]},
  {path:'new-character', loadChildren:'./create-character/create-character.module.ts#CreateCharacterModule', data: {title:'Add New', subtitle: 'you can add someone to our team'}},
	{path:'contact', loadChildren:'./contact/contact.module.ts#ContactModule', data: {title:'Share Your Views', subtitle: 'send us an email for any query'}},
  {path:'about', component: AboutComponent, data: {title:'Know About Us', subtitle: 'read about our vision, mission & goal'}},
  {path:'project', component: ProjectComponent},
	{path:'', redirectTo: 'characters', pathMatch: 'full'},
	{path:'**', component: NotfoundComponent, data: {title:'It\'s always better not to lose hope ..!!'}}
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class appRoutingModule{}
