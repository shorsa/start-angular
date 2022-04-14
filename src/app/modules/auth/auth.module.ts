import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

const MATERIAL: any[] | Type<any> | ModuleWithProviders<{}> = [

];

@NgModule({
  declarations: [
  
    AuthLayoutComponent
  ],
  imports: [
    MATERIAL,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
