import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './pages/comments/comments.component';
import { CuisineComponent } from './pages/cuisine/cuisine.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cuisine',
    component: CuisineComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'cuisine/:id',
    component: RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
