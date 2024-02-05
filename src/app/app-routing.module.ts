import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  {path: '', redirectTo: 'About', pathMatch: 'full'},
  {path: 'About' , component:AboutComponent , title: 'About'},
  {path: 'Portfolio', component:PortfolioComponent , title: 'Portfolio'},
  {path: 'Contact', component:ContactComponent , title: 'Contact'},
  {path: '**' , component:NotfoundComponent , title: 'Not Found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
