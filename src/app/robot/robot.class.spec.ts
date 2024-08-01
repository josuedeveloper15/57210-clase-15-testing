import { Robot } from './robot.class';

describe('Pruebas sobre la clase Robot', () => {
  beforeEach(() => {});

  it('Al crear una instancia de Robot se debe realizar la asignacion del piloto', () => {
    // Logica para comprobar lo mencionado en el primer arg
    const robot = new Robot('Juan');
    expect(robot.piloto).toBe('Juan');
  });

  it('Al iniciarSistema la energia debe ser 100', () => {
    const robot = new Robot('Matias');
    robot.iniciarSistema();
    expect(robot.energia).toBe(100);
  });

  it('Al llamar dispararLaser la energia debe disminuir en 10', () => {
    const robot = new Robot('Martin');
    robot.iniciarSistema();
    robot.dispararLaser();
    expect(robot.energia).toBe(90);
  });

  it('Al iniciarSistema se debe saludar al piloto con "Bienvenido, Martina"', () => {
    const robot = new Robot('Martina');
    const spyOnLog = spyOn(console, 'log');
    robot.iniciarSistema();
    expect(spyOnLog).toHaveBeenCalledWith('Bienvenido, Martina');
  });

  it(`'Al instanciar Robot, los poderes deben ser 'Volar', 'Disparar laser', 'Rayos X'`, () => {
    const robot = new Robot('Julian');

    // expect(robot.poderes).toEqual(['Volar', 'Disparar laser', 'Rayos X']);
    expect(robot.poderes).toContain('Volar');
    expect(robot.poderes).toContain('Disparar laser');
    expect(robot.poderes).toContain('Rayos X');
  });
});
