const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * rota / recursos
 */

/**
 * mettodos http:
 * 
 * get: buscar uma informação do back-end
 * post: criar uma informação no back-end
 * put: Alterar uma informmação nno back-end
 * delete: deletar uma informação no back-end
 */

 /**
  * Tipos de Parametros
  * 
  * Query Params: parametros nomeados na rota apos "?" (utilizado em filtros, paginação)
  * Route Params: parametros utilizados para identificar recursos
  * Request Body: corpo da rqeuisição, utilizado para criar ou alterar recursos
  */

  /**
   * Bancos Relacionais - SQL: mysql, Sqlite, PostGreSQL, Oracle, Microsoft SQL Server
   * Bancos nao relacionais - NoSQL: MongoDB, CouchDB, Etc.
   */

   /**
    * Driver: Select * from users
    * Query Builder: table('users').select('*').where()
    */


app.listen(3333);