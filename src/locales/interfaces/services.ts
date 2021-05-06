interface IColumnItem {
  cellContent: string;
}

export interface IService {
  header: {
    title: string;
    subTitle: string;
  };
  services?: {
    column1: IColumnItem[];
    column2: IColumnItem[];
  };
}
