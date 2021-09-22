import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NavigationComponent } from './navigation/navigation.component';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchByNamePipe } from './shared/pipes/search-by-name.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from "@angular/common";
import { MatRadioModule } from '@angular/material/radio';


const routes: Routes = [
  { path: 'dashboard-v1', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    LayoutModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatTabsModule,
    MatMenuModule,
    MatExpansionModule,
    CommonModule,
    MatRadioModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
