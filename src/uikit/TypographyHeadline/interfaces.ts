import { TypographyProps } from '@material-ui/core/Typography';

type MarkedStartTypes = 'start' | 'end';

export interface TypographyHeadlineProps extends TypographyProps {
  markedWidth?: number;
  markedFrom: MarkedStartTypes;
}
