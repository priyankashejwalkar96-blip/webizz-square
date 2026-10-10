import * as migration_20261010_103630_init from './20261010_103630_init';

export const migrations = [
  {
    up: migration_20261010_103630_init.up,
    down: migration_20261010_103630_init.down,
    name: '20261010_103630_init'
  },
];
