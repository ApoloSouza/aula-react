import Card from "../Card";
import styles from "./VideoRepository.module.css";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Exemplo 1" },
  { id: "3JZ_D3ELwOQ", title: "Exemplo 2" },
  { id: "V-_O7nl0Ii0", title: "Exemplo 3" },
];

function VideoRepository() {
  return (
    <div className={styles.videoRepository}>
      <h2>Repositório de Vídeos</h2>
      <div className={styles.cardsContainer}>
        {videos.map((video) => (
          <Card key={video.id} id={video.id} title={video.title} />
        ))}
      </div>
    </div>
  );
}

export default VideoRepository;
