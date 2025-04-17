import { BoardSize } from '../interfaces';
import { useGameState } from '../context/game-context';

type RadioProps = {
  defaultValue: string;
  checked: boolean;
  content: string;
};

const Radio = ({ defaultValue, checked, content }: RadioProps) => {
  const { setDifficulty } = useGameState();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDifficulty(e.target.value as BoardSize);
  };

  return (
    <div className='w-[80.5px] h-[28px] relative top-[2px] left-[2px]'>
      <input
        className='peer w-full h-full absolute left-0 top-0 appearance-none cursor-pointer'
        type='radio'
        name='btn'
        defaultValue={defaultValue}
        id={defaultValue}
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={defaultValue}
        className='w-full h-full bg-white rounded-[50px] flex justify-center items-center text-[#789dbc] peer-checked:bg-[#789dbc] peer-checked:text-white'
      >
        {content}
      </label>
    </div>
  );
};

export default Radio;
