import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListsComponent } from './article-lists/article-lists.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    ArticleListsComponent,
    ArticleDetailsComponent,
    LatestArticlesComponent,
    FeaturedArticlesComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticlesModule { }
