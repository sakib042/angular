/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemComponent } from './item/item.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { RangeComponent } from './range.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

/* Services */
import { ListnamesService } from './listnames.service';
import { HelperHeadService } from './helper-head.service';

/* Directives */
import { BlueColorDirective } from './blue-color.directive';
import { HelperComponent } from './helper/helper.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes = [
	{path:'characters', component: TabsComponent, data: {title:'Find Us All', subtitle: 'know details about us'}, children: [
		{ path: '', redirectTo: 'all', pathMatch: 'full' },
		{ path: ':side', component: ListComponent }
	]},
	{path:'new-character', component: CreateCharacterComponent, data: {title:'Add New', subtitle: 'you can add someone to our team'}},
	{path:'contact', component: ContactComponent, data: {title:'Share Your Views', subtitle: 'send us an email for any query'}},
	{path:'about', component: AboutComponent, data: {title:'Know About Us', subtitle: 'read about our vision, mission & goal'}},
	{path:'', redirectTo: 'characters', pathMatch: 'full'},
	{path:'**', component: NotfoundComponent, data: {title:'It\'s always better not to lose hope ..!!'}}
]

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		BlueColorDirective,
		SidebarComponent,
		ItemComponent,
		TabsComponent,
		ListComponent,
		RangeComponent,
		CreateCharacterComponent,
		AboutComponent,
		ContactComponent,
		HelperComponent,
		NotfoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
	],
	providers: [ListnamesService, HelperHeadService],
	bootstrap: [AppComponent]
})
export class AppModule { }
