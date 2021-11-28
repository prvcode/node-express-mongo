import { Express, Request, Response } from "express";
import {
  createBlockChainHandler,
  getBlockChainHandler,
  deleteBlockChainHandler,
  getBlockChainNodeHandler
} from "./controller/blockchain.controller";

import {
 createBlockChainSchema,
 getBlockChainSchema,
 deleteBlockChainSchema,
 getBlockChainNodeSchema
} from "./schema/blockchain.schema";


import validateResource from "./middleware/validateResource";

function routes(app: Express) {
  app.post(
    "/api/blockchain",
    [validateResource(createBlockChainSchema)],
    createBlockChainHandler
  );
  
  app.get(
    "/api/blockchain/:origin/:hops",
    validateResource(getBlockChainSchema),
    getBlockChainHandler
  );

    app.get(
    "/api/blockchain/:tx_hash",
    validateResource(getBlockChainNodeSchema),
    getBlockChainNodeHandler
  );

  app.delete(
    "/api/blockchain/:tx_hash",
    [validateResource(deleteBlockChainSchema)],
    deleteBlockChainHandler
  );
}

export default routes;
