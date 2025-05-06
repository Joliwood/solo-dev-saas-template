import { MutationResolvers } from "types/__generated__/graphql";

const Mutation: MutationResolvers = {
  hello_world_mut: async () => {
    return "Hello world !";
  },
};

export default Mutation;
