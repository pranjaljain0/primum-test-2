import { plans as plansType } from '@/types';

export const plans: plansType[] = [
  {
    name: 'Arcade',
    icon: '/images/icon-arcade.svg',
    priceMo: 9,
    priceYr: 90,
    tab: 1
  },
  {
    name: 'Advanced',
    icon: '/images/icon-advanced.svg',
    priceMo: 12,
    priceYr: 120,
    tab: 2
  },
  {
    name: 'Pro',
    icon: '/images/icon-pro.svg',
    priceMo: 15,
    priceYr: 150,
    tab: 3
  }
];
