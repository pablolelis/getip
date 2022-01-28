const conn = require('../../../bin/conn')

// GET (READ)
exports.get = (req, res, next) => {
    
    var remoteIp = (req.headers['x-forwarded-for'] || '').split(',').pop() || // Recupera o IP de origem, caso a fonte esteja utilizando proxy
    req.connection.remoteAddress || // Recupera o endereço remoto da chamada
    req.socket.remoteAddress || // Recupera o endereço através do socket TCP
    req.connection.socket.remoteAddress // Recupera o endereço através do socket da conexão
    return res.json(remoteIp);

    /*const rows = conn.query('SELECT * FROM tb_ips;', function (err, result, fields) {
        if (err) throw err;
        return res.json(result);
      });
      */
};

exports.post = (req, res, next) => {
    res.status(201).send(`Requisição recebida com sucesso!`);
};

exports.put = (req, res, next) => {
    let id = req.params.id; 
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

