
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserlistBasicTableFilterComponent } from './components/userlist-basic-table-filter/userlist-basic-table-filter.component';
import {MatTableModule} from '@angular/material/table';
import { TableFilterSortPaginatorComponent } from './components/table-filter-sort-paginator/table-filter-sort-paginator.component';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { TableFinalFilterByColumnSortPagOperationsComponent } from './components/table-final-filter-by-column-sort-pag-operations/table-final-filter-by-column-sort-pag-operations.component';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserAddComponent } from './components/user-add/user-add.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserAddPhotoComponent } from './components/user-add-photo/user-add-photo.component';
import { UserAddPhotoPreviewComponent } from './components/user-add-photo-preview/user-add-photo-preview.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { UserAddPhotoDragDropComponentComponent } from './components/user-add-photo-drag-drop-component/user-add-photo-drag-drop-component.component';
import {DragDropDirective} from './dragDrop/drag-drop-directive';
import { UserUploadComponent } from './components/user-upload/user-upload.component';
import { UserPhotoListCardsComponent } from './components/user-photo-list-cards/user-photo-list-cards.component';
import {Ng2ImgMaxModule} from 'ng2-img-max';
import {NgImageSliderModule} from 'ng-image-slider';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import { UserPhotoGalerySlideComponent } from './components/user-photo-galery-slide/user-photo-galery-slide.component';
import { UserPhotoListLightBoxComponent } from './components/user-photo-list-light-box/user-photo-list-light-box.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from './service/http-interceptor.service';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserlistBasicTableFilterComponent,
    TableFilterSortPaginatorComponent,
    TableFinalFilterByColumnSortPagOperationsComponent,
    ModalComponent,
    UserAddComponent,
    UserEditComponent,
    UserAddPhotoComponent,
    UserAddPhotoPreviewComponent,
    UserAddPhotoDragDropComponentComponent,
    DragDropDirective,
    UserUploadComponent,
    UserPhotoListCardsComponent,
    UserPhotoGalerySlideComponent,
    UserPhotoListLightBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    NgImageSliderModule,
    Ng2ImgMaxModule,
    GallerizeModule,
    MatToolbarModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
