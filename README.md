**_Loja de Eletrônicos_**

Uma loja de eletrônicos necessita um sistema para gerenciar os pedidos de seus clientes. Este sistema deverá ter os seguintes módulos: 

**_1 - ) Cadastro de Clientes_**

Os seguintes campos deverão ser incluídos: 
* Código do Cliente (gerado automaticamente seguindo a regra Estado do Cliente + 6 dígitos) 
* Nome do Cliente 
* Endereço 
* Contatos 

**_2) Cadastro de Produtos_** 

* Código do Produto (alfanumérico de até 12 caracteres) 
* Nome do Produto 
* Preço 

**_Regras de Negócio:_**

 * Os produtos devem ter um preço por região do Brasil (ex: Norte, Nordeste, etc)
 * Ao editar um produto, o mesmo não pode sobrescrever um produto existente. Deve ser criado um novo registro no banco de dados. 

**_ 3) Cadastro de Pedidos _** 

 * Número do pedido (gerado automaticamente) 
 * Informações de Cliente 
 * Lista de Produtos 
 * Valor Total 
 
**_Regras de Negócio:_**

 * Os valores dos produtos podem ser alterados na página de pedidos.
 * Os pedidos devem ter status de finalização, sendo que somente não finalizados podem ser editados. 
 
 **PARA EXECUTAR O PROJETO**
 
 `$ npm install`
 
 `$ node app.js`