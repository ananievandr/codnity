interface IColumnItem {
  cellContent: string;
}

export interface ServiceCardProps {
  title: string;
  subTitle: string;
  column1?: IColumnItem[];
  column2?: IColumnItem[];
  anchor: string;
}
