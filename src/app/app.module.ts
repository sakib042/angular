/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
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
import { SliderComponent } from './slider/slider.component';
import { ProjectComponent } from './project/project.component';
import { AddGameComponent } from './add-game/add-game.component';

/* Services */
import { ListnamesService } from './listnames.service';
import { HelperHeadService } from './helper-head.service';

/* Directives */
import { BlueColorDirective } from './blue-color.directive';
import { DetailGameComponent } from './detail-game/detail-game.component';


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
    NotfoundComponent,
    SliderComponent,
    ProjectComponent,
    AddGameComponent,
    DetailGameComponent
	],
	imports: [
		BrowserModule,
    HttpModule,
    FormsModule,
    appRoutingModule
	],
	providers: [ListnamesService, HelperHeadService],
	bootstrap: [AppComponent]
})

export class AppModule {}
