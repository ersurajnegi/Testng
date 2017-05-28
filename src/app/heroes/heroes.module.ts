import { FormsModule } from '@angular/forms';
import { HeroRoutingModule } from './hero.routing.module';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-details.component';
import { HeroListComponent } from './hero-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HeroListComponent, HeroDetailComponent],
    imports: [CommonModule,HeroRoutingModule,FormsModule],
    providers: [HeroService],
    exports: [FormsModule]
})
export class HeroesModule {

}