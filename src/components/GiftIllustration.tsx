import { IconHeart, IconSparkle } from './Icons';

export function GiftIllustration({ opened = false, onClick }: { opened?: boolean; onClick?: () => void }) {
  const contents = <>
    <div className="gift-aura"/>
    <div className="gift-bubble gift-bubble-one">✦</div>
    <div className="gift-bubble gift-bubble-two">✷</div>
    <div className="gift-bubble gift-bubble-three">♥</div>
    <div className={`gift-art ${opened ? 'is-open' : ''}`}>
      <div className="gift-bow bow-left"/><div className="gift-bow bow-right"/><div className="gift-knot"/>
      <div className="gift-lid"><span/></div>
      <div className="gift-box"><div className="gift-ribbon"/><div className="gift-seal"><IconHeart /></div></div>
      {opened && <div className="gift-letter-rising">💌</div>}
    </div>
    <div className="gift-shadow" />
  </>;
  return <div className="gift-illustration">
    <IconSparkle className="gift-sparkle top" /><IconSparkle className="gift-sparkle bottom" />
    {onClick ? <button type="button" className="gift-tap-target" onClick={onClick} aria-label={opened ? 'Hộp quà đã mở' : 'Chạm hộp quà'} disabled={opened}>{contents}</button> : <div className="gift-display">{contents}</div>}
  </div>;
}
