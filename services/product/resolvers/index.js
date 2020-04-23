const resolver = {
  Query: {
    product: (_, { id }, { service }) => {
      return service.findById(id);
    },
    products: (_, __, { service }) => {
      return service.listAll();
    },
  },
  User: {
    products: (source, _, { service }) => {
      return service.listByUser(source.id);
    },
  },
};

export default resolver;
