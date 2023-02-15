import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SaticpagesRoutingModule } from './staticpages-routing.module';

@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent],
  imports: [CommonModule, SaticpagesRoutingModule],
})
export class StaticpagesModule {}
