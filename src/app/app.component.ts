import { Component } from '@angular/core';
import { UnvaccinatedService } from './services/unvaccinated.service';
import { VaccinatedService } from './services/vaccinated.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  vaccinated: any[] = [];
  unVaccinated: any[] = [];

  constructor(
    private vaccinatedService:VaccinatedService,
    private unVaccinatedService:UnvaccinatedService
  ) {}

  ngOnInit() {
    this.loadVaccinated();
    this.loadNotVaccinated();
  }

  loadVaccinated() {
    this.vaccinated = [];
    this.vaccinatedService.getAllVaccinated().subscribe(
      (res) =>
        (this.vaccinated = Object.entries(res).map((t: any) => ({
          id: t[0],
          ...t[1],
        })))
    );
  }

  loadNotVaccinated() {
    this.unVaccinated = [];
    this.unVaccinatedService.getAllUnvaccinated().subscribe(
      (res) =>
        (this.unVaccinated = Object.entries(res).map((t: any) => ({
          id: t[0],
          ...t[1],
        })))
    );
  }

  vaccine(person: any): void {
    const aux= this.unVaccinated.find((x) => x.name === person.name);
    aux[person.doses] = person.doses++;

    this.unVaccinatedService
      .patchUnvaccinated(aux.id, aux)
      .subscribe((res) => this.loadNotVaccinated());
    const typeVaccine: string = person.vaccineType;

    if (typeVaccine === 'A' && aux.doses === 1) {
      this.deleteVaccinated(aux.id);
      this.createVaccinated(person);
    }
    if (typeVaccine === 'B' && aux.doses === 2) {
      this.deleteVaccinated(aux.id);
      this.createVaccinated(person);
    }

    if (typeVaccine === 'C' && aux.doses === 3) {
      this.deleteVaccinated(aux.id);
      this.createVaccinated(person);
    }
  }

  totalVaccinated(type: number) {
    if (type === 0) {
      return this.vaccinated.length;
    } else {
      return this.unVaccinated.length;
    }
  }

  createVaccinated(person: any) {
    this.vaccinatedService
      .postVaccinated({
        name: person.name,
        age: person.age,
        date: person.date,
        vaccined: 1,
      })
      .subscribe((res) => this.loadVaccinated());
  }

  deleteVaccinated(id: string) {
    this.unVaccinatedService
      .deleteUnvaccinated(id)
      .subscribe((res) => this.loadNotVaccinated());
  
  }
  everybodyVaccinated(): boolean {
    const aux = this.unVaccinated.filter(
      (t) => (t.disease === false || t.disease === 'false') && t.age >= 12
    );
    return aux.length === 0;
  }

}