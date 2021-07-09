import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class UsersService {
  getUsers(sort = false) {
    const data = fs.readFileSync('src/data/test-data.json', 'utf8');
    const users = JSON.parse(data);
    users.forEach((user) => {
      user.resources = JSON.parse(user.resources);
    });
    if (sort) {
      users.sort(this.compareUsers);
    }
    return users;
  }

  compareUsers(a, b) {
    const aExp = a.resources[0].value + a.resources[1].value;
    const aMoney = a.resources[2].value;

    const bExp = b.resources[0].value + b.resources[1].value;
    const bMoney = b.resources[2].value;

    if (bExp - aExp) {
      return bExp - aExp;
    } else {
      return bMoney - aMoney;
    }
  }
}
