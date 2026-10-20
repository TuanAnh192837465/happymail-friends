import { useEffect, useState } from 'react';
import { WelcomeScene } from './scenes/WelcomeScene';
import { CollectScene } from './scenes/CollectScene';
import { UnboxScene } from './scenes/UnboxScene';
import { LetterScene } from './scenes/LetterScene';
import { MessageDialog, type GiftMessage } from './components/MessageDialog';
import { IconHeart, IconSparkle } from './components/Icons';
import { getRecipientName, giftConfig } from './data/giftConfig';
import { useGiftFlow } from './hooks/useGiftFlow';

const easterEggs = [
  "Thông báo vận chuyển: Đơn này được miễn phí giao hàng. 📦",
  "Không cần đánh giá 5 sao. Mở hết quà là được rồi. ⭐",
  "Đã kiểm tra: Kiện hàng đủ quà, không có bài tập kèm theo. ✅",
  "Chạm con dấu rất có tâm. Bên giao hàng đã ghi nhận. 📝"
];

export default function App() {
  const { scene, collected, giftOpened, setGiftOpened, collect, next, replay, step } = useGiftFlow();
  const [message, setMessage] = useState<GiftMessage | null>(null);
  const [name, setName] = useState(() => getRecipientName(''));
  const [stampClicks, setStampClicks] = useState(0);
  const [easterIndex, setEasterIndex] = useState(0);
  const recipient = name.trim() || giftConfig.recipient;

  useEffect(() => {
    // iOS keeps the layout viewport tall while its keyboard shrinks the visual viewport.
    const viewport = window.visualViewport;
    const updateHeight = () => {
      const height = viewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty('--app-height', `${height}px`);
      document.documentElement.classList.toggle('keyboard-open', window.innerHeight - height > 100);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    viewport?.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
      viewport?.removeEventListener('resize', updateHeight);
      document.documentElement.style.removeProperty('--app-height');
      document.documentElement.classList.remove('keyboard-open');
    };
  }, []);
  const showEaster = () => {
    setMessage({ title: 'Một lời nhắn nhỏ', emoji: '✨', text: easterEggs[easterIndex % easterEggs.length] });
    setEasterIndex(n => n + 1);
  };
  const clickStamp = () => {
    setStampClicks(n => n + 1);
    if ((stampClicks + 1) % 5 === 0) showEaster();
  };
  const onCollect = (id: string) => {
    if (collected.includes(id)) return;
    collect(id);
    const item = giftConfig.collectibles.find(p => p.id === id);
    if (item) setMessage({ title: item.name, emoji: item.emoji, text: item.note, action: collected.length === 2 ? 'Xong rồi nè!' : 'Nhặt tiếp nào' });
  };
  const replayAll = () => { replay(); setMessage(null); };

  return <div className="app-shell">
    <div className="background-doodle doodle-one">✻</div><div className="background-doodle doodle-two">✦</div>
    <header className="site-header">
      <a href="#top" className="brand" onClick={e => { e.preventDefault(); replayAll(); }} aria-label="Special Delivery, về trang đầu">
        <span className="brand-icon">✳</span><span className="brand-text">happy<span>mail</span><small>VERY SPECIAL DELIVERY CO.</small></span>
      </a>
      <div className="header-right">
        <div className="step-label">{step < 4 ? `STEP 0${step} / 04` : 'DELIVERY COMPLETE'}</div>
        <div className="steps" role="progressbar" aria-label="Tiến độ nhận quà" aria-valuemin={1} aria-valuemax={4} aria-valuenow={step}>{[1,2,3,4].map(n => <span key={n} className={n <= step ? 'active' : ''}/>)}</div>
        <button onClick={clickStamp} type="button" className="header-stamp" title="Thử chạm 5 lần xem sao" aria-label="Con dấu giao hàng, có điều bất ngờ ẩn"><IconHeart/> <span>20·10</span></button>
      </div>
    </header>
    <main id="top" key={scene}>
      {scene === 'welcome' && <WelcomeScene recipient={recipient} name={name} onNameChange={setName} onNext={next} onSurprise={showEaster}/>}
      {scene === 'collect' && <CollectScene collected={collected} collect={onCollect} next={next}/>}
      {scene === 'unbox' && <UnboxScene opened={giftOpened} open={() => setGiftOpened(true)} next={next} onTease={showEaster}/>}
      {scene === 'letter' && <LetterScene recipient={recipient} replay={replayAll} onBonus={text => setMessage({ title: 'Thêm một lời chúc', emoji: '🎉', text })}/>}
    </main>
    <footer className="site-footer"><span>© 20.10 · A SMALL DELIVERY FOR A GOOD DAY</span><span>HAVE A GOOD DAY <IconHeart /> & TAKE A BREAK <IconSparkle /></span></footer>
    {message && <MessageDialog message={message} onClose={() => setMessage(null)} />}
  </div>;
}
