import getAddresses from './getAddresses';

describe('getAddresses', () => {
  test('returns addresses', () => {
    const input = `Dieter Kluge
    Inge Beisheim Platz 85
21727 Estorf

Ulrich Herzog
Postfach 12345
Invalidenstrasse 8
66919 Hermersberg`;
    const expected = [
      {
        name: 'Dieter Kluge',
        address: 'Inge Beisheim Platz 85',
        postcode: '21727',
        city: 'Estorf',
      },
      {
        name: 'Ulrich Herzog',
        address: 'Postfach 12345 Invalidenstrasse 8',
        postcode: '66919',
        city: 'Hermersberg',
      },
    ];

    const output = getAddresses(input);
    expect(output).toEqual(expected);
  });
});
