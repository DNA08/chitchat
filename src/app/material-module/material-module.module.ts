import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,MatIconModule,MatSidenavModule
  ],
  exports : [MatTabsModule, MatIconModule,MatSidenavModule]
})
export class MaterialModule { }
