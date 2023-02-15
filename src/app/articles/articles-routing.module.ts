import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListsComponent } from './article-lists/article-lists.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticleListsComponent,
  },
  { path: 'articles/:id', component: ArticleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
