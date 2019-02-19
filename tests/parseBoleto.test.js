// import { parseBoleto } from '../src/tools/parseBoleto.js';
const { parseBoleto }= require('../src/tools/parseBoleto.js');
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

// test('Parse boleto', () => {
//
// });

function tests() {
  const nemoNubank0 =  '23793381286000374362647000063306678000000066666';
  console.log(parseBoleto(nemoNubank0));
  const nemoNubank1 =  '23793381286000375806168000063302978130000024507';
  console.log(parseBoleto(nemoNubank1));
  const boletoAbad =   '2379311406900055289567101828930797878 0000003000';
  console.log(parseBoleto(boletoAbad));
  const boletoDoBeto = '341917553833144592525504516300032 (000 | 0) (0000000000)';
  console.log(parseBoleto(boletoDoBeto));
}

tests();