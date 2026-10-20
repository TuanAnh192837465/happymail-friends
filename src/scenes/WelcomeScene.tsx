import { GiftIllustration } from '../components/GiftIllustration';
import { IconArrow, IconSparkle } from '../components/Icons';
import { giftConfig } from '../data/giftConfig';

export function WelcomeScene({ recipient, name, onNameChange, onNext, onSurprise }: { recipient: string; name: string; onNameChange: (name: string) => void; onNext: () => void; onSurprise: () => void }) {
  return <section className="scene welcome-scene" aria-labelledby="welcome-title">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-dot"/> YOU'VE GOT HAPPY MAIL <span className="eyebrow-line" /></div>
      <h1 id="welcome-title">Psst... <span className="heading-row">there's a <span className="highlight-underline">delivery</span></span> <span className="heading-row">just for <em>you!</em><span className="heading-star">✳</span></span></h1>
      <p className="lead">Có một kiện hàng gửi <strong>{recipient}</strong>. Thử hoàn thành nhiệm vụ nhỏ bên dưới để mở quà nhé.</p>
      <form className="recipient-form" onSubmit={event => { event.preventDefault(); onNext(); }}>
        <label htmlFor="recipient-name">Bạn tên gì? <span>(có thể bỏ qua)</span></label>
        <input id="recipient-name" type="text" name="recipient" value={name} maxLength={32} onChange={event => onNameChange(event.target.value)} placeholder="Tên hoặc biệt danh của bạn" autoComplete="given-name" enterKeyHint="go" />
        <div className="hero-actions">
          <button className="button button-primary" type="submit">Nhận kiện hàng <IconArrow /></button>
          <span className="micro-copy">Miễn phí vận chuyển · Không cần ký nhận</span>
        </div>
      </form>
      <div className="handwritten-note">psst... đừng bỏ lỡ nha! <span>↗</span></div>
    </div>
    <div className="hero-art-wrap">
      <div className="graphic-halo" />
      <div className="graphic-grid" aria-hidden="true" />
      <div className="graphic-postcard"><span>HAPPY MAIL</span><strong>20/10</strong><small>EXTRA LOVE INSIDE</small></div>
      <div className="graphic-sticker sticker-top"><IconSparkle/> EXCLUSIVE DROP</div>
      <GiftIllustration />
      <button className="graphic-sticker sticker-bottom" onClick={onSurprise} type="button">TAP FOR LUCK <span>✿</span></button>
      <div className="graphic-handletter">made with <span>♥</span></div>
    </div>
    <div className="bottom-ribbon"><span>✦</span> A SMALL PACKAGE FOR A GOOD DAY <span>✦</span> HANDLE WITH CARE <span>✦</span> {giftConfig.deliveryCode} <span>✦</span></div>
  </section>;
}
