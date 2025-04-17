type CheckIfDeletedArgs = {
  result: number;
};

export function checkIfDeleted(args: CheckIfDeletedArgs): boolean {
  const { result } = args;

  if (result === 0) {
    return false;
  }

  return true;
}
