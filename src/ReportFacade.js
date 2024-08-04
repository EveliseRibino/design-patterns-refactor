import FormaterFactory from './FormaterFactory.js';

export default class ReportFacade {
  static generateReport(filename, format) {
    const formater = FormaterFactory.createFormater(format);
    formater.ler(filename);
    formater.parse();
    return formater.reportar();
  }
}
