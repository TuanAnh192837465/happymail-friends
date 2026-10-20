import { GiftIllustration } from '../components/GiftIllustration';
import { IconArrow } from '../components/Icons';
import { Confetti } from '../components/Confetti';

export function UnboxScene({ opened, open, next, onTease }: { opened: boolean; open: () => void; next: () => void; onTease: () => void }) {
  return <section className="scene inner-scene unbox-scene" aria-labelledby="unbox-title">
    <div className="scene-top"><span className="scene-kicker">LEVEL 02 / A SPECIAL DELIVERY</span><span className="small-star">✳</span></div>
    <h2 id="unbox-title">{opened ? <>Ta-da! <span className="pink-highlight">Bất ngờ chưa!</span></> : <>Hàng đến rồi! <span className="pink-highlight">Khui thôi nào.</span></>}</h2>
    <p className="scene-desc">{opened ? 'Đã mở hộp. Còn một lời nhắn ở bước tiếp theo.' : 'Kiện hàng đã sẵn sàng. Bấm vào hộp hoặc nút bên dưới để mở.'}</p>
    <div className={`unbox-stage ${opened ? 'unboxed' : ''}`}>
      <span className="unbox-sticker-left">FRAGILE<br/>GIFT INSIDE</span>
      <GiftIllustration opened={opened} onClick={opened ? undefined : open} />
      <button type="button" className="unbox-sticker-right" onClick={onTease}>DO NOT SHAKE! <span>✴</span></button>
      {opened && <Confetti />}
    </div>
    <div className="unbox-actions">
      {opened ? <button className="button button-primary" onClick={next} type="button">Đọc lời nhắn bí mật <IconArrow /></button> : <button className="button button-primary" onClick={open} type="button">Mở quà ngay! <IconArrow /></button>}
      <span className="micro-copy">{opened ? 'Đọc nốt lời nhắn là hoàn thành đơn hàng' : 'Bấm vào hộp quà cũng được nè ↗'}</span>
    </div>
  </section>;
}
