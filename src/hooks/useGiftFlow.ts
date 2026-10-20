import { useState } from 'react';

export type Scene = 'welcome' | 'collect' | 'unbox' | 'letter';
const sceneOrder: Scene[] = ['welcome', 'collect', 'unbox', 'letter'];

export function useGiftFlow() {
  const [scene, setScene] = useState<Scene>('welcome');
  const [collected, setCollected] = useState<string[]>([]);
  const [giftOpened, setGiftOpened] = useState(false);

  const collect = (id: string) => {
    setCollected(previous => previous.includes(id) ? previous : [...previous, id]);
  };
  const next = () => setScene(previous => sceneOrder[Math.min(sceneOrder.indexOf(previous) + 1, 3)]);
  const replay = () => {
    setCollected([]);
    setGiftOpened(false);
    setScene('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { scene, collected, giftOpened, setGiftOpened, collect, next, replay, step: sceneOrder.indexOf(scene) + 1 };
}
