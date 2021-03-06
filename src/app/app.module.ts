import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';

import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';

import { Profile1Component } from './views/profile/profile1/profile1.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';

// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { MainNavigationComponent } from './main-layout/main-navigation/main-navigation.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  {
    path: 'mainnav', children:
    [
      { path: 'v1', component: MainNavigationComponent },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  
  { path: '**', component: NotFoundComponent },

  

];

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
