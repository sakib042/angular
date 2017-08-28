import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ContactComponent } from "../contact/contact.component";

@NgModule({
  declarations:[
    ContactComponent
  ],
  imports:[
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ContactComponent }
    ])
  ]
})

export class ContactModule{}
