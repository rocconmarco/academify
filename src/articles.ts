export interface Article {
  readonly id: number;
  readonly title: string;
  readonly author: string;
  readonly summary: string;
  readonly price: number;
  readonly currency: string;
  readonly articleType: string;
  readonly language: string;
  readonly articleCID: string;
}

const articlesList: Article[] = [
  {
    id: 1,
    title:
      "Il Futuro della Tecnologia Alimentare: Dalla Stampa 3D alla Carne Coltivata",
    author: "Giovanna Rossi",
    summary:
      "Questo articolo esplora le innovazioni emergenti nel campo della tecnologia alimentare, concentrandosi sulle potenzialità della stampa 3D di alimenti e lo sviluppo della carne coltivata in laboratorio. Queste tecnologie potrebbero rivoluzionare il modo in cui produciamo e consumiamo il cibo, offrendo soluzioni sostenibili per sfamare una popolazione globale in crescita.",
    price: 0.1,
    currency: "$OWL",
    articleType: "essay",
    language: "italiano",
    articleCID: "bafkreibauk2dj5ttkqi5ipdbd5ce3citx5abv3eyr6ughhjq7verau5zcq"
  },
  {
    id: 2,
    title:
      "L'Intelligenza Artificiale nel Settore Sanitario: Opportunità e Sfide",
    author: "Luca Bianchi",
    summary:
      "L'intelligenza artificiale (IA) sta rivoluzionando il settore sanitario, offrendo nuove opportunità per diagnosi più precise, trattamenti personalizzati e una gestione più efficiente delle risorse. Tuttavia, queste innovazioni portano anche nuove sfide, tra cui questioni etiche e la necessità di regolamentazioni adeguate.",
    price: 0.2,
    currency: "$ETH",
    articleType: "essay",
    language: "italiano",
    articleCID: "bafkreidhwoquqeo4xohtzaskwa2nism7py7qjt2jumgbx7xljb5m6aiy2y"
  },
  {
    id: 3,
    title:
      "Rinnovabili e Clima: Il Ruolo dell'Energia Solare nella Transizione Ecologica",
    author: "Silvia Conti",
    summary:
      "Questo articolo analizza l'importanza dell'energia solare nel contesto della transizione ecologica, evidenziando i vantaggi e le sfide legate all'integrazione di questa fonte di energia rinnovabile nel mix energetico globale. Viene inoltre discusso il potenziale delle tecnologie emergenti, come il fotovoltaico organico, per migliorare l'efficienza e l'accessibilità dell'energia solare.",
    price: 0.01,
    currency: "$ETH",
    articleType: "essay",
    language: "italiano",
    articleCID: "bafkreifav64qhnx6pmczcpohkcoxsxdenwyghqwjwpdeu5y56sgom6o2yq"
  },
  {
    id: 4,
    title:
      "The Role of Microbiomes in Human Health",
    author: "Elisa Moretti",
    summary:
      "Recent advances in microbiome research have uncovered the significant influence these microbial communities have on human health. This article explores the relationship between microbiomes and the immune system, metabolism, and mental health, providing insights into potential therapeutic applications.",
    price: 0.3,
    currency: "$OWL",
    articleType: "essay",
    language: "english",
    articleCID: "bafkreiez2kgh6h75lb2hcy6bxxjw3n4nqtge3zak7aq6gs67sojwdog6ti"
  },
  {
    id: 5,
    title:
      "Quantum Computing: The Next Frontier in Technology",
    author: "Matteo Rossi",
    summary:
      "Quantum computing represents a paradigm shift in computational power, offering exponential speedups for specific tasks compared to classical computers. This article discusses the principles of quantum computing, its potential applications, and the challenges that must be overcome to make it a practical reality.",
    price: 0.2,
    currency: "$ETH",
    articleType: "essay",
    language: "english",
    articleCID: "bafkreiazaoc2i3mezq3vw7nsjsrgjtyiem3vedholfpklt37543mwuls7m"
  },
  {
    id: 6,
    title:
      "The Impact of Climate Change on Marine Ecosystems",
    author: "Laura Bianchi",
    summary:
      "Climate change is profoundly affecting marine ecosystems, leading to shifts in species distribution, coral bleaching, and changes in ocean chemistry. This article examines the effects of rising temperatures and ocean acidification on marine life and the broader implications for biodiversity and human livelihoods.",
    price: 0.7,
    currency: "$ETH",
    articleType: "essay",
    language: "english",
    articleCID: "bafkreih5drwqd32wypswnbb6gpjywzenvloki2mt6rkjk5zoou3klyhv4e"
  },
  {
    id: 7,
    title:
      "The Future of Renewable Energy: Challenges and Opportunities",
    author: "Roberto Conti",
    summary:
      "As the world seeks to reduce its reliance on fossil fuels, renewable energy sources like solar, wind, and hydropower are becoming increasingly important. This article explores the current state of renewable energy technologies, the challenges they face, and the potential they hold for a sustainable future.",
    price: 0.1,
    currency: "$ETH",
    articleType: "essay",
    language: "english",
    articleCID: "bafkreiediiot5ngyrsfi3435mjgzadgtyh3xghgaebpsu5z3btwo3p3cem"
  },
  {
    id: 8,
    title:
      "Artificial Intelligence in Medicine: Transforming Healthcare",
    author: "Giulia Romano",
    summary:
      "Artificial Intelligence (AI) is revolutionizing the healthcare industry by enhancing diagnostic accuracy, personalizing treatment plans, and improving patient outcomes. This article delves into the current applications of AI in medicine, the ethical considerations, and the future potential of this technology.",
    price: 0.4,
    currency: "$ETH",
    articleType: "essay",
    language: "english",
    articleCID: "bafkreibmdzwirii6jdlwohub2wje2qsv4nstopprysyleltchshomo5svy"
  },
  {
    id: 9,
    title:
      "Le Ultime Scoperte nella Ricerca sulle Cellule Staminali",
    author: "Andrea Bellini",
    summary:
      "La ricerca sulle cellule staminali ha fatto enormi progressi negli ultimi anni, offrendo nuove prospettive per il trattamento di malattie degenerative e lesioni. Questo articolo esamina le scoperte più recenti nel campo delle cellule staminali, le loro applicazioni cliniche e le sfide etiche che accompagnano questo avanzamento scientifico.",
    price: 0.3,
    currency: "$ETH",
    articleType: "essay",
    language: "italiano",
    articleCID: "bafkreifzgcknqz7uicwqwvsbuu3vlxwl5lbkylxigcide5kxrb4gapq3ly"
  },
  {
    id: 10,
    title:
      "L'Influenza della Dieta sulla Prevenzione delle Malattie Cardiovascolari",
    author: "Sara Greco",
    summary:
      "Una dieta equilibrata può svolgere un ruolo cruciale nella prevenzione delle malattie cardiovascolari. Questo articolo esplora le evidenze scientifiche riguardanti i benefici di specifici alimenti e nutrienti nella riduzione del rischio di malattie cardiache e fornisce raccomandazioni pratiche per un'alimentazione sana.",
    price: 0.8,
    currency: "$ETH",
    articleType: "essay",
    language: "italiano",
    articleCID: "bafkreihf6g3mtvjvrokvugb33x4iy5eev56zzxoak3q4diay6gzhdbynoq"
  },
  {
    id: 11,
    title:
      "L'Impatto delle Tecnologie Digitali sull'Istruzione Superiore",
    author: "Luca Morelli",
    summary:
      "Le tecnologie digitali stanno trasformando il panorama dell'istruzione superiore, offrendo nuove opportunità e sfide. Questo articolo analizza come strumenti digitali come le piattaforme di e-learning, le risorse educative aperte e l'intelligenza artificiale stanno influenzando l'educazione universitaria e le prospettive future per gli studenti e gli educatori.",
    price: 0.9,
    currency: "$ETH",
    articleType: "essay",
    language: "italiano",
    articleCID: "bafkreibs73225el6xkjghncca3evtuoxwmpoqn44kb7yiq7eke7u6cdv2m"
  },
  {
    id: 12,
    title:
      "I Benefici della Meditazione sulla Salute Mentale",
    author: "Federica Martelli",
    summary:
      "La meditazione è stata ampiamente studiata per i suoi effetti positivi sulla salute mentale. Questo articolo esamina le evidenze scientifiche riguardanti i benefici della meditazione per ridurre lo stress, migliorare l'umore e favorire il benessere psicologico.",
    price: 0.6,
    currency: "$ETH",
    articleType: "essay",
    language: "italiano",
    articleCID: "bafkreih6w7moitopzwk4gxwdbfxnxowlq2tmcgtjbjqmlb642ipnvtskyi"
  },
  {
    id: 13,
    title:
      "Il Futuro delle Energie Rinnovabili nel Contesto della Transizione Energetica",
    author: "Carla Rossi",
    summary:
      "Con l'aumento delle preoccupazioni ambientali, le energie rinnovabili stanno giocando un ruolo sempre più centrale nella transizione energetica globale. Questo articolo esplora le tendenze emergenti nel settore delle energie rinnovabili, le innovazioni tecnologiche e le sfide che devono essere affrontate per accelerare questa transizione.",
    price: 0.5,
    currency: "$ETH",
    articleType: "essay",
    language: "italiano",
    articleCID: "bafkreibdqofsd7klmxqxlkvqie27vmu4w4ppx5kd73llht2gc7eglrhr2e"
  },
];

export default articlesList;