import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {UserlistBasicTableFilterComponent} from './components/userlist-basic-table-filter/userlist-basic-table-filter.component';
import {TableFilterSortPaginatorComponent} from './components/table-filter-sort-paginator/table-filter-sort-paginator.component';
import {TableFinalFilterByColumnSortPagOperationsComponent} from './components/table-final-filter-by-column-sort-pag-operations/table-final-filter-by-column-sort-pag-operations.component';
import {UserAddComponent} from './components/user-add/user-add.component';
import {UserAddPhotoComponent} from './components/user-add-photo/user-add-photo.component';
import {UserAddPhotoDragDropComponentComponent} from './components/user-add-photo-drag-drop-component/user-add-photo-drag-drop-component.component';
import {UserAddPhotoPreviewComponent} from './components/user-add-photo-preview/user-add-photo-preview.component';
import {UserPhotoListCardsComponent} from './components/user-photo-list-cards/user-photo-list-cards.component';
import {UserPhotoGalerySlideComponent} from './components/user-photo-galery-slide/user-photo-galery-slide.component';
import {UserPhotoListLightBoxComponent} from './components/user-photo-list-light-box/user-photo-list-light-box.component';
import {UserUploadComponent} from './components/user-upload/user-upload.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';

const routes: Routes = [{path: '' , component: LoginComponent},
  {path: 'users/basic/table' , component: UserlistBasicTableFilterComponent},
  {path: 'users/table/filter/sort/paginator' , component: TableFilterSortPaginatorComponent},
  {path: 'users/table/filterByColumn/sort/paginator/final' , component: TableFinalFilterByColumnSortPagOperationsComponent},
  {path: 'users/add' , component: UserAddComponent},
  {path: 'users/edit/:id' , component: UserEditComponent},
  {path: 'users/addPhoto/:id' , component: UserAddPhotoComponent},
  {path: 'users/addPhotoDragDrop/:id' , component: UserAddPhotoDragDropComponentComponent},
  {path: 'users/addPhotoPreview/:id' , component: UserAddPhotoPreviewComponent},
  {path: 'users/photoCards' , component: UserPhotoListCardsComponent},
  {path: 'users/photoSlide' , component: UserPhotoGalerySlideComponent},
  {path: 'users/photoSlideLightBox' , component: UserPhotoListLightBoxComponent},
  {path: 'users/video' , component: UserUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
