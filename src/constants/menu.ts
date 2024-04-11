import {
  ModeStandby,
  FormatListBulleted,
} from '@mui/icons-material';

import { IMenuItem } from '../types';
import { ROUTES } from './routes';

export const MENU_LIST: IMenuItem[] = [
  {
    route: ROUTES.key_takeaways,
    literal: 'Generate Key Takeaway Points',
    Icon:  FormatListBulleted,
  },
  {
    route: ROUTES.fin_terms,
    literal: 'Extract Financial Terms',
    Icon: ModeStandby,
  }
];
