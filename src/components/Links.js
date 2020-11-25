import { SemiBold } from './index';
import Boop from './Boop';

import { FaExternalLinkAlt } from 'react-icons/fa';

const Link = ({ children, ...restProps }) => (
  <a rel="norefferer" target="_blank" {...restProps}>
    {children}
  </a>
)

const BoopedLink = ({ children , ...restProps }) => {
  return (
    <Link className="flex items-baseline text-blue-800" {...restProps}>
      <Boop x="-10" springConfig={{ tension: 1000, friction: 30 }}><SemiBold>{children}</SemiBold></Boop>
      <FaExternalLinkAlt className="w-2 ml-1" />
    </Link >
  )
}


export {
  Link,
  BoopedLink
};