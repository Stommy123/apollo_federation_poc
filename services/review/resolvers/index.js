const resolver = {
  Product: {
    reviews: (source, _, { service }) => {
      return service.listByProduct(source.id)
    }
  },
  Query: {
    review: (_, { id }, { service }) => {
      return service.findById(id);
    },
    reviews: (_, __, { service }) => {
      return service.listAll()
    }
  },
  User: {
    reviews: (source, _, { service }) => {
      return service.listByUser(source.id)
    }
  }
};

export default resolver;
