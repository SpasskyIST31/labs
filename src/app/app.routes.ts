import { Routes } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentErrorComponent } from './component-error/component-error.component';
import { CommentsComponent } from './comments/comments.component';

export const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    component: ComponentOneComponent,
    title: 'Главная' 
  },
  { 
    path: 'two', 
    component: ComponentTwoComponent,
    title: 'Игроки'
  },
  { 
    path: 'comments', 
    component: CommentsComponent,
    title: 'Комментарии'
  },
  { 
    path: '**', 
    component: ComponentErrorComponent,
    title: 'Ошибка 404'
  }
];