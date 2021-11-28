import { FilterQuery, QueryOptions } from "mongoose";

import BlockChainModel, {
  BlockChainDocument,
  BlockChainInput,
} from "../models/blockchain.model";


import { databaseResponseTimeHistogram } from "../utils/metrics";

export async function createBlockChain(input: BlockChainInput) {
  const metricsLabels = {
    operation: "createBlockChain",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await BlockChainModel.create(input);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });
    throw e;
  }
}

export async function findBlockChain(
  query: FilterQuery<BlockChainDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "findProduct",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await BlockChainModel.findOne(query, {}, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function getBlockChain(
  query: FilterQuery<BlockChainDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "findProduct",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await BlockChainModel.findOne(query, {}, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function getBlockChainNode(
  query: FilterQuery<BlockChainDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "getBlockChainNode",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await BlockChainModel.findOne(query, {}, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });
    throw e;
  }
}



export async function deleteBlockChain(query: FilterQuery<BlockChainDocument>) {
  return BlockChainModel.deleteOne(query);
}
