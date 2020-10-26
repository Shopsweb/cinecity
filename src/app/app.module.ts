import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  LOCALE_ID  } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopularComponent } from './popular/popular.component';
import { SearchComponent } from './search/search.component';
import{MovieComponent} from './movie/movie.component'

import { from } from 'rxjs';
import it from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
import { TextLimitPipe } from './text-limit.pipe';

registerLocaleData(it);

@NgModule({
  declarations: [    
    AppComponent,
    HeaderComponent,
    FooterComponent,   
    SearchComponent, 
    PopularComponent,
    MovieComponent,
    HomeComponent,
    GenreComponent,
    TextLimitPipe  
  
  ],
  imports: [
    BrowserModule,   
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
        {path:'movie/:id', component:MovieComponent},
        {path:'genre/:genere', component:GenreComponent},
        {path: '', redirectTo: '/home', pathMatch: 'full'},
    ])
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "it"   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
