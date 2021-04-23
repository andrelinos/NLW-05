import Image from 'next/image';
import { useContext } from 'react';

import { PlayerContext } from '../../context/PlayerContext';

import styles from './styles.module.scss';

export function Player() {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex];

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/assets/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      { episode} ? (
      <div className={styles.currentEpisode}>
        <Image
          width={592}
          height={592}
          src={episode.thumbnail}  
          objectFit="cover"
        />
        <strong>{episode.title}</strong>
        <strong>{episode.members}</strong>
      </div>
      ) : (
      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>
      )

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <img src="/assets/shuffle.svg" alt="Embaralhar" />
          </button>

          <button type="button">
            <img src="/assets/play-previous.svg" alt="Tocar Anterior" />
          </button>

          <button type="button" className={styles.playButton}>
            <img src="/assets/play.svg" alt="Tocar" />
          </button>

          <button type="button">
            <img src="/assets/play-next.svg" alt="Tocar próxima" />
          </button>

          <button type="button">
            <img src="/assets/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
}