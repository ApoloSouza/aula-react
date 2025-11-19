import Card from "../Card";
import styles from "./VideoRepository.module.css";

const categories = [
  {
    name: "Rock",
    videos: [
      { id: "fJ9rUzIMcZQ", title: "Queen - Bohemian Rhapsody", thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/mqdefault.jpg" },
      { id: "hTWKbfoikeg", title: "Nirvana - Smells Like Teen Spirit", thumbnail: "https://img.youtube.com/vi/hTWKbfoikeg/sddefault.jpg" },
      { id: "1w7OgIMMRc4", title: "Guns N' Roses - Sweet Child O' Mine", thumbnail: "https://img.youtube.com/vi/1w7OgIMMRc4/sddefault.jpg" },
      { id: "v2AC41dglnM", title: "AC/DC - Back in Black", thumbnail: "https://img.youtube.com/vi/v2AC41dglnM/sddefault.jpg" },
      { id: "QkF3oxziUI4", title: "Led Zeppelin - Stairway to Heaven", thumbnail: "https://img.youtube.com/vi/QkF3oxziUI4/sddefault.jpg" },
      { id: "YR5ApYxkU-U", title: "Pink Floyd - Another Brick in the Wall", thumbnail: "https://img.youtube.com/vi/YR5ApYxkU-U/mqdefault.jpg" },
      { id: "dLl4PZtxia8", title: "Eagles - Hotel California", thumbnail: "https://img.youtube.com/vi/dLl4PZtxia8/mqdefault.jpg" },
      { id: "sZfZ8uWaOFI", title: "Aerosmith - Dream On", thumbnail: "https://img.youtube.com/vi/sZfZ8uWaOFI/sddefault.jpg" },
      { id: "A_MjCqQoLLA", title: "The Beatles - Hey Jude", thumbnail: "https://img.youtube.com/vi/A_MjCqQoLLA/sddefault.jpg" },
      { id: "YlUKcNNmywk", title: "Red Hot Chili Peppers - Californication", thumbnail: "https://img.youtube.com/vi/YlUKcNNmywk/sddefault.jpg" },
      { id: "eVTXPUF4Oz4", title: "Linkin Park - In the End", thumbnail: "https://img.youtube.com/vi/eVTXPUF4Oz4/sddefault.jpg" },
      { id: "CD-E-LDc384", title: "Metallica - Enter Sandman", thumbnail: "https://img.youtube.com/vi/CD-E-LDc384/sddefault.jpg" },
     
    ],
  },
  {
    name: "Reggae",
    videos: [
      { id: "x59kS2AOrGM", title: "Bob Marley - No Woman, No Cry", thumbnail: "https://img.youtube.com/vi/x59kS2AOrGM/sddefault.jpg" },
      { id: "zaGUr6wzyT8", title: "Bob Marley - Three Little Birds", thumbnail: "https://img.youtube.com/vi/zaGUr6wzyT8/mqdefault.jpg" },
      { id: "kOFu6b3w6c0", title: "Bob Marley - Redemption Song", thumbnail: "https://img.youtube.com/vi/kOFu6b3w6c0/sddefault.jpg" },
      { id: "S3U0t-SgUTs", title: "Bob Marley - Is This Love", thumbnail: "https://img.youtube.com/vi/S3U0t-SgUTs/sddefault.jpg" },
      { id: "69i5i9v3n-A", title: "Jimmy Cliff - The Harder They Come", thumbnail: "https://img.youtube.com/vi/69i5i9v3n-A/sddefault.jpg" },
      { id: "L3A7Vz3S14k", title: "Peter Tosh - Legalize It", thumbnail: "https://img.youtube.com/vi/L3A7Vz3S14k/sddefault.jpg" },
      { id: "K_xN14nC2pU", title: "Damian Marley - Welcome to Jamrock", thumbnail: "https://img.youtube.com/vi/K_xN14nC2pU/sddefault.jpg" },
      { id: "zXt56MB-3vc", title: "UB40 - Red Red Wine", thumbnail: "https://img.youtube.com/vi/zXt56MB-3vc/sddefault.jpg" },
      { id: "v4Wy7gRGgeA", title: "Inner Circle - Sweat (A La La La La Long)", thumbnail: "https://img.youtube.com/vi/v4Wy7gRGgeA/sddefault.jpg" },
      { id: "2g5xkLqIElU", title: "Shaggy - It Wasn't Me", thumbnail: "https://img.youtube.com/vi/2g5xkLqIElU/sddefault.jpg" },
      { id: "83t_p8c04dE", title: "Sean Paul - Get Busy", thumbnail: "https://img.youtube.com/vi/83t_p8c04dE/sddefault.jpg" },
      { id: "N5_-_tV9y3I", title: "Toots and The Maytals - 54-46 Was My Number", thumbnail: "https://img.youtube.com/vi/N5_-_tV9y3I/sddefault.jpg" },
      { id: "Y3ii4x_FFaI", title: "Gregory Isaacs - Night Nurse", thumbnail: "https://img.youtube.com/vi/Y3ii4x_FFaI/sddefault.jpg" },
      { id: "A_j-9gTq0a0", title: "Israel Vibration - The Same Song", thumbnail: "https://img.youtube.com/vi/A_j-9gTq0a0/sddefault.jpg" },
      { id: "Y3Zp5m1c52A", title: "Burning Spear - Marcus Garvey", thumbnail: "https://img.youtube.com/vi/Y3Zp5m1c52A/sddefault.jpg" },
      
    ],
  },
  {
    name: "Samba",
    videos: [
      { id: "mF5bS-h2Y_w", title: "Zeca Pagodinho - Deixa a Vida Me Levar", thumbnail: "https://img.youtube.com/vi/mF5bS-h2Y_w/sddefault.jpg" },
      { id: "b-gK2A0jX5I", title: "Jorge Aragão - Coisa de Pele", thumbnail: "https://img.youtube.com/vi/b-gK2A0jX5I/sddefault.jpg" },
      { id: "6s5iLdJ4A_Y", title: "Cartola - O Mundo é um Moinho", thumbnail: "https://img.youtube.com/vi/6s5iLdJ4A_Y/sddefault.jpg" },
      { id: "4523h5p-R1s", title: "Clara Nunes - Canto das Três Raças", thumbnail: "https://img.youtube.com/vi/4523h5p-R1s/sddefault.jpg" },
      { id: "h6w26a53w3k", title: "Beth Carvalho - Vou Festejar", thumbnail: "https://img.youtube.com/vi/h6w26a53w3k/sddefault.jpg" },
      { id: "T_4-b9t430A", title: "Paulinho da Viola - Foi um Rio que Passou em Minha Vida", thumbnail: "https://img.youtube.com/vi/T_4-b9t430A/sddefault.jpg" },
      { id: "GOp8-gd6c1s", title: "Martinho da Vila - Canta Canta, Minha Gente", thumbnail: "https://img.youtube.com/vi/GOp8-gd6c1s/sddefault.jpg" },
      { id: "f2q3i3g_y8U", title: "Alcione - Não Deixe o Samba Morrer", thumbnail: "https://img.youtube.com/vi/f2q3i3g_y8U/sddefault.jpg" },
      { id: "5a5sYjUa1l8", title: "Dona Ivone Lara - Sonho Meu", thumbnail: "https://img.youtube.com/vi/5a5sYjUa1l8/sddefault.jpg" },
      { id: "B5Y-3s4s8yA", title: "Fundo de Quintal - O Show Tem Que Continuar", thumbnail: "https://img.youtube.com/vi/B5Y-3s4s8yA/sddefault.jpg" },
      { id: "4B3A1p1b_yY", title: "Arlindo Cruz - O Meu Lugar", thumbnail: "https://img.youtube.com/vi/4B3A1p1b_yY/sddefault.jpg" },
      { id: "sA2b-1a5_wA", title: "Diogo Nogueira - Pé na Areia", thumbnail: "https://img.youtube.com/vi/sA2b-1a5_wA/sddefault.jpg" },
      { id: "yvC_j_LEp9I", title: "Jorge Ben Jor - País Tropical", thumbnail: "https://img.youtube.com/vi/yvC_j_LEp9I/sddefault.jpg" },
      { id: "9Q93g4a5G7g", title: "Agepê - Moro Onde Não Mora Ninguém", thumbnail: "https://img.youtube.com/vi/9Q93g4a5G7g/sddefault.jpg" },
      { id: "6b5A4b1A2A8", title: "Elza Soares - A Carne", thumbnail: "https://img.youtube.com/vi/6b5A4b1A2A8/sddefault.jpg" },
      
    ],
  },
  {
    name: "Jazz",
    videos: [
      { id: "Vjlimj4_Ytk", title: "Louis Armstrong - What A Wonderful World", thumbnail: "https://img.youtube.com/vi/Vjlimj4_Ytk/sddefault.jpg" },
      { id: "ylXk1LBvIqU", title: "Miles Davis - So What", thumbnail: "https://img.youtube.com/vi/ylXk1LBvIqU/sddefault.jpg" },
      { id: "qWG2dsXV5HI", title: "John Coltrane - My Favorite Things", thumbnail: "https://img.youtube.com/vi/qWG2dsXV5HI/sddefault.jpg" },
      { id: "hRGFQv_m_1k", title: "Duke Ellington - Take the 'A' Train", thumbnail: "https://img.youtube.com/vi/hRGFQv_m_1k/sddefault.jpg" },
      { id: "vmDDOaNC3Uo", title: "Dave Brubeck - Take Five", thumbnail: "https://img.youtube.com/vi/vmDDOaNC3Uo/sddefault.jpg" },
      { id: "17YgSg1a7E4", title: "Ella Fitzgerald - Summertime", thumbnail: "https://img.youtube.com/vi/17YgSg1a7E4/sddefault.jpg" },
      { id: "Web007NXNro", title: "Billie Holiday - Strange Fruit", thumbnail: "https://img.youtube.com/vi/Web007NXNro/sddefault.jpg" },
      { id: "hRGuPd_p4vI", title: "Thelonious Monk - 'Round Midnight", thumbnail: "https://img.youtube.com/vi/hRGuPd_p4vI/sddefault.jpg" },
      { id: "416Rig6yGgE", title: "Charles Mingus - Goodbye Pork Pie Hat", thumbnail: "https://img.youtube.com/vi/416Rig6yGgE/sddefault.jpg" },
      { id: "8B1o7IxoR1Q", title: "Herbie Hancock - Cantaloupe Island", thumbnail: "https://img.youtube.com/vi/8B1o7IxoR1Q/sddefault.jpg" },
      { id: "UJkxFhFRFDA", title: "Stan Getz & João Gilberto - The Girl from Ipanema", thumbnail: "https://img.youtube.com/vi/UJkxFhFRFDA/sddefault.jpg" },
      { id: "D5Y11hwjTek", title: "Nina Simone - Feeling Good", thumbnail: "https://img.youtube.com/vi/D5Y11hwjTek/sddefault.jpg" },
      { id: "8xpx2z_pL2c", title: "Chet Baker - My Funny Valentine", thumbnail: "https://img.youtube.com/vi/8xpx2z_pL2c/sddefault.jpg" },
      { id: "2V0UhtA_mO8", title: "Cannonball Adderley - Autumn Leaves", thumbnail: "https://img.youtube.com/vi/2V0UhtA_mO8/sddefault.jpg" },
      { id: "5i0o3J-pEa4", title: "Frank Sinatra - Fly Me To The Moon", thumbnail: "https://img.youtube.com/vi/5i0o3J-pEa4/sddefault.jpg" },
     
    ],
  },
  {
    name: "Sertanejo",
    videos: [
      { id: "kJQP7kiw5Fk", title: "Marília Mendonça - Infiel", thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/sddefault.jpg" },
      { id: "Se2cA2_KPpU", title: "Jorge & Mateus - Sosseguei", thumbnail: "https://img.youtube.com/vi/Se2cA2_KPpU/sddefault.jpg" },
      { id: "9y1a7i4a_wA", title: "Chitãozinho & Xororó - Evidências", thumbnail: "https://img.youtube.com/vi/9y1a7i4a_wA/sddefault.jpg" },
      { id: "vX2dKVeQp2k", title: "Leandro & Leonardo - Pense em Mim", thumbnail: "https://img.youtube.com/vi/vX2dKVeQp2k/sddefault.jpg" },
      { id: "M6n_aeI3YVM", title: "Zezé Di Camargo & Luciano - É o Amor", thumbnail: "https://img.youtube.com/vi/M6n_aeI3YVM/sddefault.jpg" },
      { id: "CwC5ed1i5sI", title: "Gusttavo Lima - Balada (Tchê Tcherere Tchê Tchê)", thumbnail: "https://img.youtube.com/vi/CwC5ed1i5sI/sddefault.jpg" },
      { id: "v1v_U0Io_a4", title: "Michel Teló - Ai Se Eu Te Pego", thumbnail: "https://img.youtube.com/vi/v1v_U0Io_a4/sddefault.jpg" },
      { id: "w9-X7-i_I-I", title: "Luan Santana - Meteoro", thumbnail: "https://img.youtube.com/vi/w9-X7-i_I-I/sddefault.jpg" },
      { id: "gPAlQx0cAlI", title: "Maiara & Maraisa - Medo Bobo", thumbnail: "https://img.youtube.com/vi/gPAlQx0cAlI/sddefault.jpg" },
      { id: "v_t3-zV6s-M", title: "Henrique & Juliano - Cuida Bem Dela", thumbnail: "https://img.youtube.com/vi/v_t3-zV6s-M/sddefault.jpg" },
      { id: "p40y_H4PSyQ", title: "Simone & Simaria - Loka ft. Anitta", thumbnail: "https://img.youtube.com/vi/p40y_H4PSyQ/sddefault.jpg" },
      { id: "Z4W4m_q5K4E", title: "Matheus & Kauan - O Nosso Santo Bateu", thumbnail: "https://img.youtube.com/vi/Z4W4m_q5K4E/sddefault.jpg" },
      { id: "YgSj5_28tzo", title: "Bruno & Marrone - Dormi na Praça", thumbnail: "https://img.youtube.com/vi/YgSj5_28tzo/sddefault.jpg" },
      { id: "sngs32Q3pA0", title: "Marília Mendonça - Supera", thumbnail: "https://img.youtube.com/vi/sngs32Q3pA0/sddefault.jpg" },
      { id: "Mdl2G0M6f9g", title: "Zé Neto & Cristiano - Largado às Traças", thumbnail: "https://img.youtube.com/vi/Mdl2G0M6f9g/sddefault.jpg" },
     
    ],
  },
  {
    name: "Forró",
    videos: [
      { id: "l3wI-P_s9-c", title: "Barões da Pisadinha - Tá Rocheda", thumbnail: "https://img.youtube.com/vi/l3wI-P_s9-c/sddefault.jpg" },
      { id: "O0-lTf_aHhQ", title: "Wesley Safadão - Ar Condicionado no 15", thumbnail: "https://img.youtube.com/vi/O0-lTf_aHhQ/sddefault.jpg" },
      { id: "hSTivVclRzk", title: "Luiz Gonzaga - Asa Branca", thumbnail: "https://img.youtube.com/vi/hSTivVclRzk/sddefault.jpg" },
      { id: "CHh3s3_o8sE", title: "Falamansa - Xote dos Milagres", thumbnail: "https://img.youtube.com/vi/CHh3s3_o8sE/sddefault.jpg" },
      { id: "0W4i5yqNOgA", title: "Dominguinhos - Eu Só Quero um Xodó", thumbnail: "https://img.youtube.com/vi/0W4i5yqNOgA/sddefault.jpg" },
      { id: "J822n4jA0bQ", title: "Aviões do Forró - Correndo Atrás de Mim", thumbnail: "https://img.youtube.com/vi/J822n4jA0bQ/sddefault.jpg" },
      { id: "wHn1_QoIHjE", title: "Calcinha Preta - Você Não Vale Nada", thumbnail: "https://img.youtube.com/vi/wHn1_QoIHjE/sddefault.jpg" },
      { id: "9bZN0G33a5c", title: "Mastruz com Leite - Meu Vaqueiro, Meu Peão", thumbnail: "https://img.youtube.com/vi/9bZN0G33a5c/sddefault.jpg" },
      { id: "kO3Y3I-3tDo", title: "Limão com Mel - Toma Conta de Mim", thumbnail: "https://img.youtube.com/vi/kO3Y3I-3tDo/sddefault.jpg" },
      { id: "xR62A-FhLzE", title: "Magníficos - Me Usa", thumbnail: "https://img.youtube.com/vi/xR62A-FhLzE/sddefault.jpg" },
      { id: "jYlWnGo-A9I", title: "Saia Rodada - Coelhinho", thumbnail: "https://img.youtube.com/vi/jYlWnGo-A9I/sddefault.jpg" },
      { id: "jD-phtJcchc", title: "Solange Almeida - Se Não Valorizar", thumbnail: "https://img.youtube.com/vi/jD-phtJcchc/sddefault.jpg" },
      { id: "2y_L4jeC-oI", title: "Xand Avião - Inquilina", thumbnail: "https://img.youtube.com/vi/2y_L4jeC-oI/sddefault.jpg" },
      { id: "P2q_7v3_I04", title: "Jonas Esticado - Investe em Mim", thumbnail: "https://img.youtube.com/vi/P2q_7v3_I04/sddefault.jpg" },
      { id: "sB0n5-G4A5s", title: "Tarcísio do Acordeon - Meia Noite (Você tem meu whatsapp)", thumbnail: "https://img.youtube.com/vi/sB0n5-G4A5s/sddefault.jpg" },
    
    ],
  },
  {
    name: "Funk",
    videos: [
      { id: "F1B9Fk_SgI0", title: "MC Fioti - Bum Bum Tam Tam", thumbnail: "https://img.youtube.com/vi/F1B9Fk_SgI0/sddefault.jpg" },
      { id: "kDhptBTd-0w", title: "Anitta - Vai Malandra", thumbnail: "https://img.youtube.com/vi/kDhptBTd-0w/sddefault.jpg" },
      { id: "3yd_eoMOvqk", title: "MC Kevinho - Olha a Explosão", thumbnail: "https://img.youtube.com/vi/3yd_eoMOvqk/sddefault.jpg" },
      { id: "rdlDOuJaA-I", title: "Ludmilla - Cheguei", thumbnail: "https://img.youtube.com/vi/rdlDOuJaA-I/sddefault.jpg" },
      { id: "w6E-w20sL-4", title: "Nego do Borel - Você Partiu Meu Coração ft. Anitta, Wesley Safadão", thumbnail: "https://img.youtube.com/vi/w6E-w20sL-4/sddefault.jpg" },
      { id: "2L9S4z_ho_g", title: "MC Livinho - Fazer Falta", thumbnail: "https://img.youtube.com/vi/2L9S4z_ho_g/sddefault.jpg" },
      { id: "sCEb3b0kbnQ", title: "MC Kekel e MC Kevinho - O Bebê", thumbnail: "https://img.youtube.com/vi/sCEb3b0kbnQ/sddefault.jpg" },
      { id: "7Y8iSAeI-d0", title: "Jojo Maronttinni - Que Tiro Foi Esse", thumbnail: "https://img.youtube.com/vi/7Y8iSAeI-d0/sddefault.jpg" },
      { id: "tWn51r5NmtA", title: "MC G15 - Deu Onda", thumbnail: "https://img.youtube.com/vi/tWn51r5NmtA/sddefault.jpg" },
      { id: "JzT_Nblu_gE", title: "MC Don Juan - Amar, Amei", thumbnail: "https://img.youtube.com/vi/JzT_Nblu_gE/sddefault.jpg" },
      { id: "i225-iFfKAs", title: "Jerry Smith, MC Nando DK - Ninguém Contou, Né?", thumbnail: "https://img.youtube.com/vi/i225-iFfKAs/sddefault.jpg" },
      { id: "EX53-G2J8_g", title: "Lexa - Sapequinha", thumbnail: "https://img.youtube.com/vi/EX53-G2J8_g/sddefault.jpg" },
      { id: "GHbPaR-Qpvc", title: "Pocah - Não Sou Obrigada", thumbnail: "https://img.youtube.com/vi/GHbPaR-Qpvc/sddefault.jpg" },
      { id: "oI15-814w2k", title: "Pedro Sampaio - SENTADÃO", thumbnail: "https://img.youtube.com/vi/oI15-814w2k/sddefault.jpg" },
      { id: "AcbIO44t_w0", title: "Dennis DJ - Agora é Tudo Meu", thumbnail: "https://img.youtube.com/vi/AcbIO44t_w0/sddefault.jpg" },
      
    ],
  },
  {
    name: "Axé",
    videos: [
      { id: "ePjF1j_w-sA", title: "Ivete Sangalo - Poeira", thumbnail: "https://img.youtube.com/vi/ePjF1j_w-sA/sddefault.jpg" },
      { id: "u1m6i4S4GvM", title: "Chiclete com Banana - Voa Voa", thumbnail: "https://img.youtube.com/vi/u1m6i4S4GvM/sddefault.jpg" },
      { id: "jGqQ_8s_wA4", title: "Daniela Mercury - O Canto da Cidade", thumbnail: "https://img.youtube.com/vi/jGqQ_8s_wA4/sddefault.jpg" },
      { id: "LJyG-lH6O-s", title: "Banda Eva - Beleza Rara", thumbnail: "https://img.youtube.com/vi/LJyG-lH6O-s/sddefault.jpg" },
      { id: "v_y1-s-8Q2o", title: "Asa de Águia - Dança da Manivela", thumbnail: "https://img.youtube.com/vi/v_y1-s-8Q2o/sddefault.jpg" },
      { id: "LAluA2X2A-s", title: "Olodum - Faraó Divindade do Egito", thumbnail: "https://img.youtube.com/vi/LAluA2X2A-s/sddefault.jpg" },
      { id: "fGq9S-LdYgM", title: "Timbalada - Água Mineral", thumbnail: "https://img.youtube.com/vi/fGq9S-LdYgM/sddefault.jpg" },
      { id: "2L9S4z_ho_g", title: "Netinho - Milla", thumbnail: "https://img.youtube.com/vi/2L9S4z_ho_g/sddefault.jpg" },
      { id: "qH3-56G4-4k", title: "Harmonia do Samba - Vem Neném", thumbnail: "https://img.youtube.com/vi/qH3-56G4-4k/sddefault.jpg" },
      { id: "T-l1t4A4-gE", title: "Léo Santana - Santinha", thumbnail: "https://img.youtube.com/vi/T-l1t4A4-gE/sddefault.jpg" },
      { id: "AHvsX-kZk8E", title: "Psirico - Lepo Lepo", thumbnail: "https://img.youtube.com/vi/AHvsX-kZk8E/sddefault.jpg" },
      { id: "Y-2Lp2db_pc", title: "Claudia Leitte - Baldin de Gelo", thumbnail: "https://img.youtube.com/vi/Y-2Lp2db_pc/sddefault.jpg" },
      { id: "P6kVe_gYp6g", title: "Bell Marques - Diga Que Valeu", thumbnail: "https://img.youtube.com/vi/P6kVe_gYp6g/sddefault.jpg" },
      { id: "J1qMC6wA94I", title: "Terra Samba - Carrinho de Mão", thumbnail: "https://img.youtube.com/vi/J1qMC6wA94I/sddefault.jpg" },
      { id: "cM5G_9O33zI", title: "É o Tchan! - Dança do Bumbum", thumbnail: "https://img.youtube.com/vi/cM5G_9O33zI/sddefault.jpg" },
     
    ],
  },
];

function VideoRepository() {
  return (
    <div className={styles.videoRepository}>
      {categories.map((category) => (
        <section key={category.name} className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>{category.name}</h3>
          <div className={styles.cardsContainer}>
            {category.videos.map((video) => (
              <Card key={video.id} id={video.id} title={video.title} thumbnail={video.thumbnail} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default VideoRepository;
