export const handOutPlaces = users => {
    for (let i = 0; i < users.length; i++) {
      if (i === 0) {
        users[i].place = 1;
        continue;
      }
      const userExp = users[i].resources[0].value + users[i].resources[1].value;
      const userMoney = users[i].resources[2].value;

      const prevUserExp =
        users[i - 1].resources[0].value + users[i - 1].resources[1].value;
      const prevUserMoney = users[i - 1].resources[2].value;

      if (userExp === prevUserExp && userMoney === prevUserMoney) {
        users[i].place = users[i - 1].place;
      } else {
        users[i].place = users[i - 1].place + 1;
      }
    }
};
