import { Request, Response } from "express";
import {
  CreateBlockChainInput,
  ReadBlockChainInput,
  DeleteBlockChainInput,
  ReadBlockChainNodeInput
} from "../schema/blockchain.schema";

import {
  createBlockChain,
  deleteBlockChain,
  findBlockChain,
  getBlockChain,
  getBlockChainNode
} from "../service/blockchain.service";

export async function createBlockChainHandler(
  req: Request<{}, {}, CreateBlockChainInput["body"]>,
  res: Response
) {
  const body = req.body;
  const blockChain = await createBlockChain({ ...body });
  return res.send(blockChain);
}

export async function getBlockChainHandler(
  req: Request<ReadBlockChainInput["params"]>,
  res: Response
) {
  const origin = req.params.origin;
  const hops = req.params.hops; 
  const blockChain = await getBlockChain({ origin, hops });
  return res.send(blockChain);
}


export async function getBlockChainNodeHandler(
  req: Request<ReadBlockChainNodeInput["params"]>,
  res: Response
) {
  const txHash = req.params.tx_hash;
  const blockChainNode = await getBlockChainNode({ txHash });

  if (!blockChainNode) {
    return res.sendStatus(404);
  }

  return res.send(blockChainNode);
}


export async function deleteBlockChainHandler(
  req: Request<DeleteBlockChainInput["params"]>,
  res: Response
) {
  const txHash = req.params.tx_hash;
  const blockChainNode = await findBlockChain({ txHash });

  if (!blockChainNode) {
    return res.sendStatus(404);
  }

  await deleteBlockChain({ txHash });
  return res.sendStatus(200);
}
