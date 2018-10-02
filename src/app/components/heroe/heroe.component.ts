import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent {
  heroe: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeService.getHeroe(params["id"]);
      console.log(this.heroe);
    });
  }

  // ngOnInit() {}
}
