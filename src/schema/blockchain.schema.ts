import { object, number, string, TypeOf } from "zod";

const payload = {
  body: object({
    tx_hash: string({
      required_error: "tx_hash is required",
    }),
    from: string({
      required_error: "from is required",
    }),
    to: string({
      required_error: "to is required",
    }),
    timestamp: string({
      required_error: "timestamp is required",
    }),
    value: string({
      required_error: "value is required",
    }),
  }),
};

const params = {
  params: object({
    tx_hash: string({
      required_error: "tx_hash is required",
    }),
  }),
};


const getParams = {
  params: object({
    origin: string({
      required_error: "origin is required",
    }),
    hops: string({
      required_error: "hops is required",
    }),
  }),
};

export const createBlockChainSchema = object({
  ...payload,
});

export const deleteBlockChainSchema = object({
  ...params,
});

export const getBlockChainNodeSchema = object({
  ...params,
});

export const getBlockChainSchema = object({
  ...getParams,
});

export type CreateBlockChainInput = TypeOf<typeof createBlockChainSchema>;
export type ReadBlockChainInput = TypeOf<typeof getBlockChainSchema>;
export type ReadBlockChainNodeInput = TypeOf<typeof getBlockChainNodeSchema>;
export type DeleteBlockChainInput = TypeOf<typeof deleteBlockChainSchema>;

