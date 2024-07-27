import { players } from './consts';

export type AvailablePlayers = (typeof players)[keyof typeof players];
