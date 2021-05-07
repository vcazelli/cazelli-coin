import { IResolvers } from "graphql-tools";
import { Wallet } from "../src/types/wallet";
import { Quote } from "../src/types/quote";
import { wallets } from "./mocks/wallet";
const wallet = {
  id: 1,
  name: "caixa 2 do matheus",
  balance: 100.5,
};

const resolverMap: IResolvers = {
  Query: {
    getWallet(_: void, { id }: { id: string }): Wallet {
      const [result] = wallets.filter((wallet) => {
        return wallet.id == id;
      });

      return result;
    },
    listWallet(_: void, args: void): Wallet[] {
      return wallets;
    },
    getQuotation(_: void, args: void): Quote {},
    listQuotation(_: void, args: void) {
      return wallet;
    },
  },
};
export default resolverMap;
