import Boop from './Boop';
import {Link, BoopedLink} from './Links';
import SkillRating from './SkillRating';
import ToggleThemeButton from './ToggleThemeButton';

const SemiBold = ({ children }) => <span className="font-semibold">{children}</span>



export {
  Boop,
  SemiBold,
  Link,
  SkillRating,
  BoopedLink,
  ToggleThemeButton
}