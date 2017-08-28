/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { appRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemComponent } from './item/item.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { RangeComponent } from './range.component';
import { AboutComponent } from './about/about.component';
import { HelperComponent } from './helper/helper.component';
import { NotfoundComponent } from './notfound/notfound.component';

/* Services */
import { ListnamesService } from './listnames.service';
import { HelperHeadService } from './helper-head.service';

/* Directives */
import { BlueColorDirective } from './blue-color.directive';

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
		AboutComponent,
		HelperComponent,
    NotfoundComponent
	],
	imports: [
		BrowserModule,
    HttpModule,
    appRoutingModule
	],
	providers: [ListnamesService, HelperHeadService],
	bootstrap: [AppComponent]
})

export class AppModule {}
