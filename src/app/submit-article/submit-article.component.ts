import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-article',
  templateUrl: './submit-article.component.html',
  styleUrls: ['./submit-article.component.css']
})
export class SubmitArticleComponent implements OnInit {


  constructor() {}

  ngOnInit() {
  }
  addArticle(title,link){
      console.log(`${title.value} and ${link.value}`);
  }
}


