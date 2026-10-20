import { useEffect, useId, useRef } from 'react';

export type GiftMessage = {
  title: string;
  emoji: string;
  text: string;
  action?: string;
};

export function MessageDialog({ message, onClose }: { message: GiftMessage; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const element = dialog.current;
    const trigger = document.activeElement;
    element?.showModal();
    return () => {
      element?.close();
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  return <dialog ref={dialog} className="message-dialog" aria-labelledby={titleId} aria-describedby={descriptionId}
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="message-content">
      <button className="message-close" type="button" aria-label="Đóng lời nhắn" onClick={onClose}>×</button>
      <span className="message-eyebrow">A LITTLE SOMETHING FOR YOU</span>
      <span className="message-emoji" aria-hidden="true">{message.emoji}</span>
      <h2 id={titleId}>{message.title}</h2>
      <p id={descriptionId}>{message.text}</p>
      <button type="button" className="button button-primary" onClick={onClose}>{message.action || 'Đã nhận lời nhắn'}</button>
    </div>
  </dialog>;
}
