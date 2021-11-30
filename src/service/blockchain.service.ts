import { FilterQuery, QueryOptions } from "mongoose";

import BlockChainModel, {
  BlockChainDocument,
  BlockChainNodeInput,
} from "../models/blockchain.model";

export async function createBlockChainNode(input: BlockChainNodeInput) {
  try {
    const result = await BlockChainModel.create(input);
    return result;
  } catch (e) {
    throw e;
  }
}

export async function createBlockChain(input: Array<BlockChainNodeInput>) {
  try {
    const result = await BlockChainModel.insertMany(input);
    return result;
  } catch (e) {
    throw e;
  }
}

export async function findBlockChain(
  query: FilterQuery<BlockChainDocument>,
  options: QueryOptions = { lean: true }
) {
  try {
    const result = await BlockChainModel.findOne(query, {}, options);
    return result;
  } catch (e) {

    throw e;
  }
}

export async function getBlockChain() {
  try {
    const result = await BlockChainModel.find();
    return result;
  } catch (e) {
    throw e;
  }
}

export async function getBlockChainNode(
  query: FilterQuery<BlockChainDocument>,
  options: QueryOptions = { lean: true }
) {
  try {
    const result = await BlockChainModel.findOne(query, {}, options);
    return result;
  } catch (e) {
    throw e;
  }
}

export async function deleteBlockChain(query: FilterQuery<BlockChainDocument>) {
  return BlockChainModel.deleteOne(query);
}
