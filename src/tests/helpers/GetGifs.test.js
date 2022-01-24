import {getGifs} from '../../helpers/GetGifs'

describe('Pruebas con GetGifs Fetch service', () => {
  
  test('Debe de regresar 10 elements', async () => {
        const gifs = await getGifs ('One Punch');
        expect (gifs.length).toBe(10);
  });
    
  test('Debe de regresar 0 elements sino hay parametros', async () => {
    const gifs = await getGifs ('');
    expect (gifs.length).toBe(0);
  });

});
