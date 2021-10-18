import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { MainComponent } from './main/main.component';

const routes: Routes = [  
  { path: 'signup', component: SignUpComponent},
  { path: 'home', component: MainComponent},
  { path: '', component: LoginComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
