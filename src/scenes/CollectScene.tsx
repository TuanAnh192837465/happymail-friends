import { giftConfig } from '../data/giftConfig';
import { IconArrow, IconCheck } from '../components/Icons';

export function CollectScene({ collected, collect, next }: { collected: string[]; collect: (id: string) => void; next: () => void }) {
  const allCollected = collected.length === giftConfig.collectibles.length;
  return <section className="scene inner-scene collect-scene" aria-labelledby="collect-title">
    <div className="scene-top"><span className="scene-kicker">LEVEL 01 / THE MISSING PIECES</span><span className="small-star">✳</span></div>
    <h2 id="collect-title">Oops! Quà bị <span className="pink-highlight">rơi mất rồi.</span></h2>
    <p className="scene-desc">Hình như bên vận chuyển hơi hậu đậu... Giúp nhặt đủ 3 món quà để mở khóa kiện hàng nha!</p>
    <div className="collect-workspace">
      <div className="collect-topbar"><span><span className="online-dot"/> LITTLE QUEST</span><span className="collect-counter"><strong>{collected.length}</strong> / 3 collected</span></div>
      <div className="collect-board">
        <span className="board-scribble scribble-a">click me! ↘</span><span className="board-scribble scribble-b">♡ ♡ ♡</span>
        {giftConfig.collectibles.map((item, index) => {
          const done = collected.includes(item.id);
          return <button key={item.id} className={`collect-item item-${index + 1} ${done ? 'collected' : ''}`} type="button" aria-pressed={done} onClick={() => collect(item.id)}>
            <span className="item-icon">{item.emoji}</span>
            <span className="item-label">{done ? 'ĐÃ NHẶT!' : item.name}</span>
            {done && <span className="collect-check"><IconCheck /></span>}
          </button>;
        })}
      </div>
      <div className="collect-bottom"><div className="tiny-progress">{[0,1,2].map(i => <span key={i} className={i < collected.length ? 'lit' : ''} />)}</div><span>{allCollected ? 'Yay! Đã đủ quà rồi! 🎉' : 'Chạm từng món quà để thu thập nhé'}</span></div>
    </div>
    <div className="scene-footer"><span className="fun-aside">{allCollected ? 'Hoàn thành nhiệm vụ. 10 điểm thanh lịch! ✨' : 'Không có deadline đâu, cứ thong thả nha ✿'}</span><button className="button button-primary" type="button" onClick={next} disabled={!allCollected}>Mở khóa kiện hàng <IconArrow /></button></div>
  </section>;
}
