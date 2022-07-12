(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    const product = await Produto.create({
    
        nome: 'Teclado Usb',
        preco: 75,
        descricao: 'Teclado Microsoft'
    })

    console.log(product);

    /* const novoProduto = await Produto.create({
        nome: 'Mouse Usb',
        preco: 15,
        descricao: 'Mouse Logitech'
    })

    console.log(novoProduto);
    */
    
}) ();    
