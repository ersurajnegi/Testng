import { Router } from '@angular/router';
import { Hero } from './../models/hero';
import { HeroService } from './../services/hero.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  moduleId: module.id,
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent  implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) {
    
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => { this.heroes = heroes});
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  goToDetail() : void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }
}
