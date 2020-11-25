import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';

const SkillRating = ({ rating }) => {
  let tempArray = [], i = 1;
  while (i <= 5) {
    tempArray.push(i <= rating ? <AiTwotoneStar className="fill-current" /> : <AiOutlineStar className="fill-current" />);
    i++;
  }
  return (
    <div className="flex items-center space-x-1 text-green-500">
      {tempArray}
    </div>
  )
}



export default SkillRating;