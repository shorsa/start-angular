import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from 'src/app/core/constants';
import { SignInComponent } from './sign-in.component';


const routes: Routes = [
  {
    path: RoutesConstants.INDEX,
    component: SignInComponent
  }
];

const MATERIAL: any[] | Type<any> | ModuleWithProviders<{}> = [

];

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    MATERIAL,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignInModule { }
