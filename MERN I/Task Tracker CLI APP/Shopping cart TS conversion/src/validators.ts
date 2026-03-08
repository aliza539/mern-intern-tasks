export const validateEntity = <T extends { id: string }>(
  entity: T
): boolean => {
  return entity.id.length > 0;
};