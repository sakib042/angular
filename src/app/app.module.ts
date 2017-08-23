import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

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
import { CreateCharacterComponent } from './create-character/create-character.component';

const routes = [
  {path:'characters',component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':side', component: ListComponent }
  ]},
  {path:'new-character',component: CreateCharacterComponent},
  {path:'contact', component: TabsComponent},
  {path:'about', component: TabsComponent},
  {path:'**', redirectTo: "characters"}
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
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ListnamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
