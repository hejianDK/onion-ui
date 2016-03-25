export class SyncObject {
  constructor(syncMode, data, error) {
    this.lastUpdated = Date.now();
    this.syncMode = syncMode;
    this.data = data;
    this.error = error;
  }

  checkSyncMode(syncMode) {
    if(!(syncMode.toUpperCase() in SyncMode)) {
      return SyncMode.NONE;
    }
    return syncMode.toUpperCase();
  }
}

export const SyncMode = {
  NONE: 'NONE',
  READING: 'READING',
  WRITING: 'WRITING'
};
