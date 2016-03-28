import {expect} from 'chai';
import {SyncObject, SyncMode} from '../app/reducers/SyncObject';

describe('grade 1 math', () => {
  it('1 plus 1 should equal 2', () => {
    expect(1+1).to.equal(2);
  });

  it('test', () => {
    const s1 = new SyncObject(SyncMode.READING, {a: 1});
    const s2 = new SyncObject(SyncMode.NONE, undefined, {e: 1});

    console.log(Object.assign({}, s1, s2));
  })
});
