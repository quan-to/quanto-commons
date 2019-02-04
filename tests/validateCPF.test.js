import {
  validateCPF
} from '../src/tools';


// function getVerifDigit(cpfString) {
//   if (!/^[0-9]{9,10}$/.test(cpfString)) {
//     return undefined;
//   }
//   let sum = 0;
//   for (let i = 0; i < cpfString.length; i += 1) {
//     const factor = cpfString.length - (i - 1);
//     const digit = parseInt(cpfString[i]);
//     sum += digit * factor;
//   }
//   return ((sum * 10) % 11) % 10;
// }

test('Validate cpf', () => {
  expect(validateCPF("77565852200")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852201")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852202")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852203")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852204")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852205")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852206")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852207")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852208")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852209")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852210")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852211")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852212")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852213")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852214")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852215")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852216")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852217")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852218")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852219")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852220")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852221")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852222")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852223")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852224")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852225")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852226")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852227")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852228")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852229")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852230")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852231")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852232")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852233")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852234")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852235")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852236")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852237")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852238")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852239")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852240")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852241")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852242")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852243")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852244")).toBe(true);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852245")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852246")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852247")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852248")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852249")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852250")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852251")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852252")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852253")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852254")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852255")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852256")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852257")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852258")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852259")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852260")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852261")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852262")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852263")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852264")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852265")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852266")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852267")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852268")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852269")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852270")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852271")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852272")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852273")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852274")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852275")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852276")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852277")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852278")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852279")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852280")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852281")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852282")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852283")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852284")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852285")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852286")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852287")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852288")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852289")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852290")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852291")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852292")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852293")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852294")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852295")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852296")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852297")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852298")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("77565852299")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761100")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761101")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761102")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761103")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761104")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761105")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761106")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761107")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761108")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761109")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761110")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761111")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761112")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761113")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761114")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761115")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761116")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761117")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761118")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761119")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761120")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761121")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761122")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761123")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761124")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761125")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761126")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761127")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761128")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761129")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761130")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761131")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761132")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761133")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761134")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761135")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761136")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761137")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761138")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761139")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761140")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761141")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761142")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761143")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761144")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761145")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761146")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761147")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761148")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761149")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761150")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761151")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761152")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761153")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761154")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761155")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761156")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761157")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761158")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761159")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761160")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761161")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761162")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761163")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761164")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761165")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761166")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761167")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761168")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761169")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761170")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761171")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761172")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761173")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761174")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761175")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761176")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761177")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761178")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761179")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761180")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761181")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761182")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761183")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761184")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761185")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761186")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761187")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761188")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761189")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761190")).toBe(true);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761191")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761192")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761193")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761194")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761195")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761196")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761197")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761198")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("19316761199")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931400")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931401")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931402")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931403")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931404")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931405")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931406")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931407")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931408")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931409")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931410")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931411")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931412")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931413")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931414")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931415")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931416")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931417")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931418")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931419")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931420")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931421")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931422")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931423")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931424")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931425")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931426")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931427")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931428")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931429")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931430")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931431")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931432")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931433")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931434")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931435")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931436")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931437")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931438")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931439")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931440")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931441")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931442")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931443")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931444")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931445")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931446")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931447")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931448")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931449")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931450")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931451")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931452")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931453")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931454")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931455")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931456")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931457")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931458")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931459")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931460")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931461")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931462")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931463")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931464")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931465")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931466")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931467")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931468")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931469")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931470")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931471")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931472")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931473")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931474")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931475")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931476")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931477")).toBe(true);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931478")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931479")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931480")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931481")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931482")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931483")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931484")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931485")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931486")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931487")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931488")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931489")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931490")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931491")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931492")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931493")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931494")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931495")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931496")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931497")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931498")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("26754931499")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528600")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528601")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528602")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528603")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528604")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528605")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528606")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528607")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528608")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528609")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528610")).toBe(true);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528611")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528612")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528613")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528614")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528615")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528616")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528617")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528618")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528619")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528620")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528621")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528622")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528623")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528624")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528625")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528626")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528627")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528628")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528629")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528630")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528631")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528632")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528633")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528634")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528635")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528636")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528637")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528638")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528639")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528640")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528641")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528642")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528643")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528644")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528645")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528646")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528647")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528648")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528649")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528650")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528651")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528652")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528653")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528654")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528655")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528656")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528657")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528658")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528659")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528660")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528661")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528662")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528663")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528664")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528665")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528666")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528667")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528668")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528669")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528670")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528671")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528672")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528673")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528674")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528675")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528676")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528677")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528678")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528679")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528680")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528681")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528682")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528683")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528684")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528685")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528686")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528687")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528688")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528689")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528690")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528691")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528692")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528693")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528694")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528695")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528696")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528697")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528698")).toBe(false);
});
test('Validate cpf', () => {
  expect(validateCPF("47599528699")).toBe(false);
});
