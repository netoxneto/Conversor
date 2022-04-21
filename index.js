const HtmlParser = require('./HtmlParser');
const PDFWriter = require('./PDFWriter');
const Processor = require('./Processor');
const reader = require('./Reader');
const Table = require('./Table');
const Writer = require('./Writer');

var leitor = new reader();
var escritor = new Writer();

async function main(){
    var dados  = await leitor.Read('./dados.csv');
    var dadosProcess = Processor.Process(dados);
    var users = new Table(dadosProcess);
    var html = await HtmlParser.Parse(users);

    // escritor.Write(Date.now() + '.html', html);

    PDFWriter.WritePDF(Date.now() + '.pdf', html);
}

main();

