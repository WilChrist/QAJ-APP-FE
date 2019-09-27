import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { QuotesModule } from './quotes/quotes.module';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {path: 'quotes', component: QuotesComponent},
  {path: '', redirectTo: 'quotes', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(routes),

    CoreModule,
    QuotesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
