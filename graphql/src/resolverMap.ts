import { IResolvers } from "graphql-tools";
const wallet = {
  id: 1,
  name: "caixa 2 do matheus",
  balance: 100.50
}

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `Hello world!`;
    },
    getWallet(_: void, args: void){
      return wallet
    }
  },
};
export default resolverMap;
