import mongoose from "mongoose";

export interface BlockChainInput {
  tx_hash: string;
  from: string
  to: string,
  timestamp: string;
  value: string;
}

export interface BlockChainDocument extends BlockChainInput, mongoose.Document {}

const blockChainSchema = new mongoose.Schema(
  {
    tx_hash: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    timestamp: { type: String, required: true },
    value: { type: String, required: true },
  }
);

const BlockChainModel = mongoose.model<BlockChainDocument>("BlockChain", blockChainSchema);

export default BlockChainModel;