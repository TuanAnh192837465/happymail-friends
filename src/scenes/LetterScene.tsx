import { useState } from 'react';
import { giftConfig } from '../data/giftConfig';
import { IconSparkle } from '../components/Icons';

export function LetterScene({ recipient, replay, onBonus }: { recipient: string; replay: () => void; onBonus: (text: string) => void }) {
  const [bonusIndex, setBonusIndex] = useState(0);
  const [page, setPage] = useState(0);
  const lastPage = giftConfig.letter.length - 1;
  const showBonus = () => {
    onBonus(giftConfig.bonusNotes[bonusIndex % giftConfig.bonusNotes.length]);
    setBonusIndex(index => index + 1);
  };
  return <section className="scene inner-scene letter-scene" aria-labelledby="letter-title">
    <div className="scene-top"><span className="scene-kicker">FINAL DELIVERY / MESSAGE INSIDE</span><span className="small-star">♥</span></div>
    <div className="letter-heading"><span>✷ 20 OCTOBER ✷</span><h2 id="letter-title">A little note, <em>for you.</em></h2></div>
    <div className={`letter-card ${page === 0 ? 'letter-first-page' : ''}`} aria-label="Lời nhắn ngày 20/10">
      <div className="letter-tape"/>
      <span className="letter-stamp">GOOD<br/>DAY <IconSparkle /></span>
      <div className="letter-topline">A NOTE FOR TODAY <span>✶</span> NO. 2010</div>
      <h3>{giftConfig.letterTitle} <span>{recipient}!</span> 🌷</h3>
      <div className="letter-paragraphs" id="letter-body" aria-live="polite">{giftConfig.letter.map((line, i) => <p key={i} className={i === page ? 'letter-page active-page' : 'letter-page'} style={{ animationDelay: `${i * 0.15 + 0.2}s` }}>{line}</p>)}</div>
      <div className={`letter-signoff ${page === lastPage ? 'signoff-visible' : ''}`}><span>Chúc một ngày vui,</span><strong>{giftConfig.sender}</strong></div>
      <div className="letter-flowers" aria-hidden="true">✿ <span>❀</span> ✿</div>
      <nav className="letter-pagination" aria-label="Các trang thư">
        <button type="button" disabled={page === 0} onClick={() => setPage(index => index - 1)} aria-controls="letter-body">← Trước</button>
        <span role="status" aria-live="polite">{page + 1} / {giftConfig.letter.length}</span>
        <button type="button" disabled={page === lastPage} onClick={() => setPage(index => index + 1)} aria-controls="letter-body">Tiếp →</button>
      </nav>
    </div>
    <div className="bonus-area">
      <button type="button" onClick={showBonus} className="button button-secondary"><IconSparkle /> Còn một bất ngờ nữa!</button>
      <button type="button" className="button-replay" onClick={replay}>↺ Xem lại từ đầu</button>
    </div>
    <p className="letter-footer">20 OCTOBER · HAVE A GOOD DAY ✿</p>
  </section>;
}
