import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard.guard';
import { MyOwnCustomMaterialModule } from '../shared/my-own-custom-material/my-own-custom-material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';



@NgModule({
  declarations: [HeaderComponent, SidenavListComponent],
  imports: [
    CommonModule,
    RouterModule,

    MyOwnCustomMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    RouterModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    SidenavListComponent
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
