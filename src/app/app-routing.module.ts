import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { P01Component } from './pages/p01/p01.component';
import { P02Component } from './pages/p02/p02.component';
import { P03Component } from './pages/p03/p03.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'project01', component: P01Component},
  {path: 'project02', component: P02Component},
  {path: 'project03', component: P03Component},
  {path: 'resume', component: ResumeComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      scrollOffset: [0, 0],
      // Enable scrolling to anchors
      anchorScrolling: "enabled",
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
