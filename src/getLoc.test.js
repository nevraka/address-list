import getLoc from './getLoc';

describe('getFromGoogleApi', () => {
  test('returns location', () => {
    const input = [
      {
        address_components: [
          {
            long_name: '14467',
            short_name: '14467',
            types: ['postal_code'],
          },
          {
            long_name: 'Potsdam',
            short_name: 'P',
            types: ['locality', 'political'],
          },
          {
            long_name: 'Brandenburg',
            short_name: 'BB',
            types: ['administrative_area_level_1', 'political'],
          },
          {
            long_name: 'Germany',
            short_name: 'DE',
            types: ['country', 'political'],
          },
        ],
        formatted_address: '14467 Potsdam, Germany',
        geometry: {
          bounds: {
            northeast: {
              lat: 52.41675799999999,
              lng: 13.090762,
            },
            southwest: {
              lat: 52.38888499999999,
              lng: 13.0432491,
            },
          },
          location: {
            lat: 52.39976910000001,
            lng: 13.0665558,
          },
          location_type: 'APPROXIMATE',
          viewport: {
            northeast: {
              lat: 52.41675799999999,
              lng: 13.090762,
            },
            southwest: {
              lat: 52.38888499999999,
              lng: 13.0432491,
            },
          },
        },
        place_id: 'ChIJJ7iShN71qEcRUO49lUkgIRw',
        types: ['postal_code'],
      },
    ];
    const expected = { lat: 52.39976910000001, lng: 13.0665558 };
    const output = getLoc(input);
    expect(output).toEqual(expected);
  });
});
