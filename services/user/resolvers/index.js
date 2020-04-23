const resolver = {
  Query: {
    me: (_, __, { userId, service }) => {
      return service.findById(userId);
    },
    user: (_, { id }, { service }) => {
      return service.findById(id);
    },
    users: (_, __, { service }) => {
      return service.listAll();
    }
  },
};

export default resolver;
