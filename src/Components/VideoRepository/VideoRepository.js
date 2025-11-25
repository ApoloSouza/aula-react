import { useState } from "react";
import Card from "../Card";
import styles from "./VideoRepository.module.css";

const categories = [
  {
    name: "Rock",
    videos: [
      { id: "hTWKbfoikeg", title: "Nirvana - Smells Like Teen Spirit", thumbnail: "https://img.youtube.com/vi/hTWKbfoikeg/sddefault.jpg" },
      { id: "1w7OgIMMRc4", title: "Guns N' Roses - Sweet Child O' Mine", thumbnail: "https://img.youtube.com/vi/1w7OgIMMRc4/sddefault.jpg" },
      { id: "v2AC41dglnM", title: "AC/DC - Back in Black", thumbnail: "https://img.youtube.com/vi/v2AC41dglnM/sddefault.jpg" },
      { id: "QkF3oxziUI4", title: "Led Zeppelin - Stairway to Heaven", thumbnail: "https://img.youtube.com/vi/QkF3oxziUI4/sddefault.jpg" },
      { id: "sZfZ8uWaOFI", title: "Aerosmith - Dream On", thumbnail: "https://img.youtube.com/vi/sZfZ8uWaOFI/sddefault.jpg" },
      { id: "A_MjCqQoLLA", title: "The Beatles - Hey Jude", thumbnail: "https://img.youtube.com/vi/A_MjCqQoLLA/sddefault.jpg" },
      { id: "YlUKcNNmywk", title: "Red Hot Chili Peppers - Californication", thumbnail: "https://img.youtube.com/vi/YlUKcNNmywk/sddefault.jpg" },
      { id: "eVTXPUF4Oz4", title: "Linkin Park - In the End", thumbnail: "https://img.youtube.com/vi/eVTXPUF4Oz4/sddefault.jpg" },
      { id: "CD-E-LDc384", title: "Metallica - Enter Sandman", thumbnail: "https://img.youtube.com/vi/CD-E-LDc384/sddefault.jpg" }
    ],
  },
  {
    name: "Reggae",
    videos: [
      { id: "x59kS2AOrGM", title: "Bob Marley - No Woman, No Cry", thumbnail: "https://img.youtube.com/vi/x59kS2AOrGM/sddefault.jpg" },
      { id: "kOFu6b3w6c0", title: "Bob Marley - Redemption Song", thumbnail: "https://img.youtube.com/vi/kOFu6b3w6c0/sddefault.jpg" },
      { id: "WcqK9Ls7Eos", title: "Alpha Blondy - Jerusalem", thumbnail: "https://img.youtube.com/vi/WcqK9Ls7Eos/sddefault.jpg" },
      { id: "zXt56MB-3vc", title: "UB40 - Red Red Wine", thumbnail: "https://img.youtube.com/vi/zXt56MB-3vc/sddefault.jpg" },
      { id: "MrHxhQPOO2c", title: "Jimmy Cliff - I Can See Clearly Now", thumbnail: "https://img.youtube.com/vi/MrHxhQPOO2c/sddefault.jpg" },
      { id: "cbuhKOmlUOs", title: "Toots & The Maytals - Sweet and Dandy", thumbnail: "https://img.youtube.com/vi/cbuhKOmlUOs/sddefault.jpg" },
      { id: "S9G_IeVMXvc", title: "Peter Tosh - Johnny B. Goode", thumbnail: "https://img.youtube.com/vi/S9G_IeVMXvc/sddefault.jpg" },
      { id: "xxA5a78Y-Iw", title: "The Congos Chain Gang", thumbnail: "https://img.youtube.com/vi/xxA5a78Y-Iw/sddefault.jpg" }
    ],
  },
  {
    name: "Jazz",
    videos: [
      { id: "ylXk1LBvIqU", title: "Miles Davis - So What", thumbnail: "https://img.youtube.com/vi/ylXk1LBvIqU/sddefault.jpg" },
      { id: "qWG2dsXV5HI", title: "John Coltrane - My Favorite Things", thumbnail: "https://img.youtube.com/vi/qWG2dsXV5HI/sddefault.jpg" },
      { id: "VqhCQZaH4Vs", title: "Louis Armstrong - What A Wonderful World", thumbnail: "https://img.youtube.com/vi/VqhCQZaH4Vs/sddefault.jpg" },
      { id: "GHhD4PD75zY", title: "Herbie Hancock - Rockit", thumbnail: "https://img.youtube.com/vi/GHhD4PD75zY/sddefault.jpg" }
    ],
  },
  {
    name: "Sertanejo",
    videos: [
      { id: "eCyMh-mZ1B0", title: "Marília Mendonça - Infiel", thumbnail: "https://img.youtube.com/vi/eCyMh-mZ1B0/sddefault.jpg" },
      { id: "vZcjAmfkemk", title: "Jorge & Mateus - Sosseguei", thumbnail: "https://img.youtube.com/vi/vZcjAmfkemk/sddefault.jpg" },
      { id: "ePjtnSPFWK8", title: "Chitãozinho & Xororó - Evidências", thumbnail: "https://img.youtube.com/vi/ePjtnSPFWK8/sddefault.jpg" },
      { id: "LsWA1b_iCE4", title: "Zezé Di Camargo & Luciano - É o Amor", thumbnail: "https://img.youtube.com/vi/LsWA1b_iCE4/sddefault.jpg" },
      { id: "Z1ZKaR-9Kt4", title: "Gusttavo Lima - Balada (Tchê Tcherere Tchê Tchê)", thumbnail: "https://img.youtube.com/vi/Z1ZKaR-9Kt4/sddefault.jpg" },
      { id: "hcm55lU9knw", title: "Michel Teló - Ai Se Eu Te Pego", thumbnail: "https://img.youtube.com/vi/hcm55lU9knw/sddefault.jpg" },
      { id: "ntda5SUTMVU", title: "Luan Santana - Meteoro", thumbnail: "https://img.youtube.com/vi/ntda5SUTMVU/sddefault.jpg" },
      { id: "Jzl_nrTkfIM", title: "Maiara & Maraisa - Medo Bobo", thumbnail: "https://img.youtube.com/vi/Jzl_nrTkfIM/sddefault.jpg" },
      { id: "UxB-zF4wGUU", title: "Henrique & Juliano - Cuida Bem Dela", thumbnail: "https://img.youtube.com/vi/UxB-zF4wGUU/sddefault.jpg" },
      { id: "uWX0O8ATY3k", title: "Bruno & Marrone - Dormi na Praça", thumbnail: "https://img.youtube.com/vi/uWX0O8ATY3k/sddefault.jpg" },    
    ],
  },
  {
    name: "Funk",
    videos: [
      { id: "G3Z2D_HxDNg", title: "MC Fioti - Bum Bum Tam Tam", thumbnail: "https://img.youtube.com/vi/G3Z2D_HxDNg/sddefault.jpg" },
      { id: "kDhptBT_-VI", title: "Anitta - Vai Malandra", thumbnail: "https://img.youtube.com/vi/kDhptBT_-VI/sddefault.jpg" },
      { id: "3yd_eoMOvqk", title: "MC Kevinho - Olha a Explosão", thumbnail: "https://img.youtube.com/vi/3yd_eoMOvqk/sddefault.jpg" },
      { id: "RNVLCr-Y7rQ", title: "Ludmilla - Cheguei", thumbnail: "https://img.youtube.com/vi/RNVLCr-Y7rQ/sddefault.jpg" },
      { id: "Btyfrd-UtSw", title: "MC Kekel e MC Kevinho - O Bebê", thumbnail: "https://img.youtube.com/vi/Btyfrd-UtSw/sddefault.jpg" },
      { id: "lYxcW8jtFw0", title: "MC G15 - Deu Onda", thumbnail: "https://img.youtube.com/vi/lYxcW8jtFw0/sddefault.jpg" },
      { id: "_Qub7jfzYQw", title: "MC Don Juan - Amar, Amei", thumbnail: "https://img.youtube.com/vi/_Qub7jfzYQw/sddefault.jpg" },
      { id: "eeuyqLI4iQE", title: "Lexa - Sapequinha", thumbnail: "https://img.youtube.com/vi/eeuyqLI4iQE/sddefault.jpg" },
      { id: "HutLSVbLWHM", title: "Pocah - Não Sou Obrigada", thumbnail: "https://img.youtube.com/vi/HutLSVbLWHM/sddefault.jpg" },   
    ],
  },
  {
    name: "Axé",
    videos: [
      { id: "iL7Ve__7yXE", title: "Chiclete com Banana - Voa Voa", thumbnail: "https://img.youtube.com/vi/iL7Ve__7yXE/sddefault.jpg" },
      { id: "2B1X1JWk0ZE", title: "Daniela Mercury - O Canto da Cidade", thumbnail: "https://img.youtube.com/vi/2B1X1JWk0ZE/sddefault.jpg" },
      { id: "I1cJnN-o7vU", title: "Banda Eva - Beleza Rara", thumbnail: "https://img.youtube.com/vi/I1cJnN-o7vU/sddefault.jpg" },
      { id: "mf2O5o3CeWc", title: "Olodum - Faraó Divindade do Egito", thumbnail: "https://img.youtube.com/vi/mf2O5o3CeWc/sddefault.jpg" },
      { id: "edWker8WMqU", title: "Timbalada - Água Mineral", thumbnail: "https://img.youtube.com/vi/edWker8WMqU/sddefault.jpg" },
      { id: "NnrA6AGRcJM", title: "Netinho - Milla", thumbnail: "https://img.youtube.com/vi/NnrA6AGRcJM/sddefault.jpg" },
      { id: "SLzya5ms8tI", title: "Léo Santana - Santinha", thumbnail: "https://img.youtube.com/vi/SLzya5ms8tI/sddefault.jpg" },
      { id: "x8rRsokR8ug", title: "Psirico - Lepo Lepo", thumbnail: "https://img.youtube.com/vi/x8rRsokR8ug/sddefault.jpg" },
      { id: "v6t9hb1cZzE", title: "Claudia Leitte - Baldin de Gelo", thumbnail: "https://img.youtube.com/vi/v6t9hb1cZzE/sddefault.jpg" },     
    ],
  }
];

function VideoRepository() {
  const [filtro, setFiltro] = useState("");

  // Filtra apenas os vídeos, mantendo categorias
  const filtrarVideos = (videos) =>
    videos.filter((v) =>
      v.title.toLowerCase().includes(filtro.toLowerCase())
    );

  return (
    <div className={styles.videoRepository}>

      {/* Barra de busca */}
      <input
        type="text"
        placeholder="🔎 Buscar música..."
        className={styles.inputBusca}
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      {categories.map((category) => {
        const videosFiltrados = filtrarVideos(category.videos);

        if (videosFiltrados.length === 0) return null; // Oculta categoria vazia

        return (
          <section key={category.name} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{category.name}</h3>

            <div className={styles.cardsContainer}>
              {videosFiltrados.map((video) => (
                <div key={video.id} className={styles.cardWrapper}>
                  <Card
                    id={video.id}
                    title={video.title}
                    thumbnail={video.thumbnail}
                  />
                  <p className={styles.videoTitle}>{video.title}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default VideoRepository;
