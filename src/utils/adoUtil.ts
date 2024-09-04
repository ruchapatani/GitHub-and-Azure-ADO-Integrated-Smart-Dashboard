import { closeByProject, leadTimeByProject } from "../AdoData/adoData";

export function getCloseItemsByUser() {
  const openItems = closeByProject.closedWorkItems;

  let obj = {};

  openItems.forEach((item) => {
    obj[item.currentAssignment] = obj[item.currentAssignment]
      ? obj[item.currentAssignment] + 1
      : 1;
  });

  const users = Object.keys(obj);
  const pbiCount: any[] = [];

  users.forEach((user) => {
    pbiCount.push(obj[user]);
  });

  const response = {
    usersList: users,
    pbiCount: pbiCount,
  };

  return response;
}

export function getOpenItemsByUser() {
  const openItems = leadTimeByProject.openWorkItems;

  let obj = {};

  openItems.forEach((item) => {
    obj[item.currentAssignment] = obj[item.currentAssignment]
      ? obj[item.currentAssignment] + 1
      : 1;
  });

  const users = Object.keys(obj);
  const pbiCount: any[] = [];

  users.forEach((user) => {
    pbiCount.push(obj[user]);
  });

  const response = {
    usersList: users,
    pbiCount: pbiCount,
  };

  return response;
}
