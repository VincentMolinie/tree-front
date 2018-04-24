import { helper } from '@ember/component/helper';

export function eq(params/*, hash*/) {
  if (!params || params.length !== 2) {
    return false;
  }

  if (typeof params[0] === 'number' || typeof params[1] === 'number') {
    return Number(params[0]) === Number(params[1]);    
  }

  return params[0] === params[1];
}

export default helper(eq);
