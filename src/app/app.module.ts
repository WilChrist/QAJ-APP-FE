import { AboutModule } from './about/about.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { QuotesModule } from './quotes/quotes.module';
import { AuthorsModule } from './authors/authors.module';
import { AppRoutingModule } from './app-routing.module';
import { TopicsModule } from './topics/topics.module';
import { QuoteModule } from './quote/quote.module';
import { AuthorModule } from './author/author.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,

    CoreModule,
    SharedModule,
    AboutModule,
    TopicsModule,
    AuthorsModule,
    AuthorModule,
    QuotesModule,
    QuoteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
