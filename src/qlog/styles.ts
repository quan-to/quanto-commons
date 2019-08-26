/**
 * Created by Lucas Teske on 22/05/18.
 * @flow
 */

import * as figures from 'figures';

// Same styles as https://github.com/klauscfhq/signale/

export type QLogStyle = {
  name?: String
  badge: String
  color: String
  label: String
};

const styles: { [id: string]: QLogStyle } = {
  error: {
    badge: figures.cross,
    color: 'red',
    label: 'Error',
  },
  fatal: {
    badge: figures.cross,
    color: 'red',
    label: 'Fatal',
  },
  fav: {
    badge: '♥',
    color: 'magenta',
    label: 'Favorite',
  },
  info: {
    badge: figures.info,
    color: 'blue',
    label: 'Info',
  },
  star: {
    badge: '⭑',
    color: 'yellow',
    label: 'Star',
  },
  success: {
    badge: figures.tick,
    color: 'green',
    label: 'Success',
  },
  warn: {
    badge: figures.warning,
    color: 'yellow',
    label: 'Warning',
  },
  complete: {
    badge: figures.checkboxOn,
    color: 'cyan',
    label: 'Complete',
  },
  pending: {
    badge: figures.checkboxOff,
    color: 'magenta',
    label: 'Pending',
  },
  note: {
    badge: figures.circleFilled,
    color: 'blue',
    label: 'Note',
  },
  start: {
    badge: '►',
    color: 'green',
    label: 'Start',
  },
  pause: {
    badge: figures.squareSmallFilled,
    color: 'yellow',
    label: 'Pause',
  },
  debug: {
    badge: figures.circleFilled,
    color: 'red',
    label: 'Debug',
  },
  await: {
    badge: figures.ellipsis,
    color: 'blue',
    label: 'Awaiting',
  },
  watch: {
    badge: '👁',
    color: 'yellow',
    label: 'Watching',
  },
  log: {
    badge: '📰',
    color: '',
    label: 'Log',
  },
};

Object.keys(styles).forEach((k) => {
  styles[k].name = k;
});

export default styles;
