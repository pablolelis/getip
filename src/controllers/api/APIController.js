// GET (READ)
exports.get = (req, res, next) => {
//    res.status(200).json(itens);
    res.status(201).send('Requisição recebida com sucesso!');
};
var itens = [
    {
        "id": "Achou",
        "text": "API"
    },
    {
        "id": "as82w",
        "text": "Milk"
    },
    {
        "id": "234sk1",
        "text": "Bacon"
    },
    {
        "id": "ppo3j3",
        "text": "Frog Legs"
    }
];

// POST (CREATE)
exports.post = (req, res, next) => {
    res.status(201).json(itens);
};

// PUT (UPDATE)
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

// DELETE (DELETE)
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};