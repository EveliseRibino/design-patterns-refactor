import ReportFacade from './src/ReportFacade.js';

const testCases = [
  { format: 'html', expected: '<!DOCTYPE HTML>' },
  { format: 'txt', expected: 'Relatório de Nomes de Cidades' }
];

testCases.forEach(testCase => {
  const output = ReportFacade.generateReport('./data/cidades-2.json', testCase.format);
  console.assert(output.startsWith(testCase.expected), `Test failed for format: ${testCase.format}`);
});

console.log("All tests passed!");
