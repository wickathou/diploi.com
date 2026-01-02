export type TStackBuilderBlock = {
  componentID: number;
  type: string;
  identifier: string;
  name: string;
  url: string;
  count?: number;
  badge?: 'new' | 'beta';
};
