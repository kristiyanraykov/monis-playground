import { boardSizes } from '../constants';
import Radio from './radio';
import { BoardSize } from '../interfaces';

const GameDifficulty = ({ difficulty }: { difficulty: BoardSize }) => {
  return (
    <div className='relative z-1'>
      <div className='relative w-[250px] h-[36px] bg-white border-2 border-[#789dbc] rounded-[34px] flex flex-row shadow-[4px_4px_#789dbc] font-text font-bold'>
        {boardSizes.map(boardSize => (
          <Radio key={boardSize} defaultValue={`${boardSize}`} checked={boardSize === difficulty} content={`${boardSize}`} />
        ))}
      </div>
    </div>
  );
};
export default GameDifficulty;

// setDifficulty={
//   setDifficulty
//   // () => setDifficulty(boardSize)
//   // setGameState((prev) => ({ ...prev, difficulty: boardSize }))
// }
