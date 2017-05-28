import { NgModule } from '@angular/core';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-details.component';
import { RouterModule, Routes } from '@angular/router';

const heroRoutes: Routes = [
    { path: 'heroes', component: HeroListComponent },
    { path: 'hero/:id', component: HeroDetailComponent }
]

@NgModule({
    imports: [RouterModule.forChild(heroRoutes)],
    exports: [RouterModule]
})
export class HeroRoutingModule {

}