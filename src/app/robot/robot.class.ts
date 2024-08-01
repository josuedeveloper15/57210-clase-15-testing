export class Robot {
  piloto: string;

  energia = 0;

  poderes = ['Volar', 'Disparar laser', 'Rayos X'];

  constructor(piloto: string) {
    this.piloto = piloto;
  }

  iniciarSistema(): void {
    this.energia = 100;
    console.log(`Bienvenido, ${this.piloto}`);
  }

  dispararLaser(): void {
    this.energia -= 10;
  }
}
