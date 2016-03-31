export class StateHolder {
  constructor(status, data, error) {
    this.status = status;
    this.data = data;
    this.error = error;
  }
}

export const Status = {
  NONE: 'NONE',
  FETCHING: 'FETCHING',
  WRITING: 'WRITING'
};
