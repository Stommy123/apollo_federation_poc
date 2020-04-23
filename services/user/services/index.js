import { users } from '../../../data';

class UserService {
  findById = id => {
    const user = users.find(u => u.id === id);

    return user || null;
  }

  listAll = _ => ({ count: users.length, users });
};

export default UserService;
