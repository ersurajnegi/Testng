import { HEROES } from './../models/mock-heroes';
import { Hero } from './../models/hero';
import { Injectable } from "@angular/core";


@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(HEROES), 1000);
        });
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}
