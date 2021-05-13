import getAddresses from './getAddresses';

describe('getAddresses', () => {
  test('returns addresses(users)', () => {
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
        postalCode: '21727',
        city: 'Estorf',
        federalState: null,
      },
      {
        name: 'Ulrich Herzog',
        address: 'Postfach 12345 Invalidenstrasse 8',
        postalCode: '66919',
        city: 'Hermersberg',
        federalState: null,
      },
    ];

    const output = getAddresses(input);
    expect(output).toEqual(expected);
  });
});
