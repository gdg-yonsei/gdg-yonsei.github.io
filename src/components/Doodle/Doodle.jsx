import 'css-doodle';

import { forwardRef } from 'react';

function Doodle({ rule = '' }, ref) {
  return <css-doodle ref={ref}>{rule}</css-doodle>;
}

export default forwardRef(Doodle);
