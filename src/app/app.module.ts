import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlueColorDirective } from './blue-color.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemComponent } from './item/item.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { RangeComponent } from './range.component';
import { ListnamesService } from './listnames.service';

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
    RangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListnamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
