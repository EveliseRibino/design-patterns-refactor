import ReportFacade from './src/ReportFacade.js';

const [cmd, filename, format] = process.argv;

try {
  const report = ReportFacade.generateReport(filename, format);
  console.log(report);
} catch (error) {
  console.error(error.message);
}
