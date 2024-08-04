import CidadesHTMLReport from './CidadesHTMLReporter.js';
import CidadesTXTReport from './CidadesTXTReporter.js';

export default class FormaterFactory {
  static createFormater(type) {
    switch(type) {
      case 'html':
        return new CidadesHTMLReport();
      case 'txt':
        return new CidadesTXTReport();
      default:
        throw new Error('Unknown format type');
    }
  }
}
