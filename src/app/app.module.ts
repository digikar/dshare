import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { SubmitArticleComponent } from './submit-article/submit-article.component';
import { NgSemanticModule } from "ng-semantic";
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitArticleComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //ClarityModule.forRoot(),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
