class Processor{
    static Process(data){
        var row = data.split('\r\n');
        var rows = [];

        row.forEach(row => {
            var arr = row.split(';');
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;