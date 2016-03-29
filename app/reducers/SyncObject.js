export class SyncObject {
  constructor(syncMode, data, error) {
    this.lastUpdated = Date.now();
    this.syncMode = this.checkSyncMode(syncMode);
    this.data = data;
    this.error = error;
  }

  checkSyncMode(syncMode) {
    if(!(syncMode in SyncMode)) {
      throw new Error('Invalid sync mode');
    }
    return syncMode;
  }
}

export const SyncMode = {
  NONE: 'NONE',
  READING: 'READING',
  WRITING: 'WRITING'
};
