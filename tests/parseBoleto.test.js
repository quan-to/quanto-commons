import { parseBoleto } from '../src/parseBoleto.js';


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

test('Parse boleto', () => {
  // expect(validateCPF("77565852200")).toBe(false);
});

function tests() {
  const nemoNubank0 = '23793381286000374362647000063306678000000066666';
  console.log(parseBoleto(nemoNubank0));
  const nemoNubank1 = '23793381286000375806168000063302978130000024507';
  console.log(parseBoleto(nemoNubank1));
  const boletoAbad = '23793114069000552895671018289307978780000003000';
  console.log(parseBoleto(boletoAbad));
  const boletoDoBeto = '34191755383314459252550451630003200000000000000';
  console.log(parseBoleto(boletoDoBeto));
}
  