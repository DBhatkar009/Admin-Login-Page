import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



const UX_MODULE = [FormsModule, SidebarModule, ButtonModule, CalendarModule, MatInputModule, MatCardModule];

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'Dashboard',
        component: DashboardComponent,
      },
    ],

  },
  {
    path: 'Registration',
    component: RegistrationComponent
  },

  {
    path: 'Login',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShellComponent,
    SidebarComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ...UX_MODULE,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
