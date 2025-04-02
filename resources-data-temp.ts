import { Resource } from './shared/schema';

// Aggiunge contenuto predefinito alle risorse per visualizzazione interna
const createContentHTML = (resource: Partial<Resource>): string => {
  return `
    <h2>${resource.title}</h2>
    <p class="lead">${resource.description}</p>
    
    <h3>Panoramica</h3>
    <p>Questa risorsa su ${resource.title?.toLowerCase()} è pensata per aiutarti nel tuo percorso di benessere mentale.</p>
    
    <h3>Perché è importante</h3>
    <p>${resource.description}</p>
    
    <h3>Punti chiave</h3>
    <ul>
      <li>Comprendi i tuoi pensieri e le tue emozioni</li>
      <li>Sviluppa strategie efficaci per affrontare situazioni difficili</li>
      <li>Pratica regolarmente per migliorare la tua resilienza</li>
      <li>Riconosci i progressi che fai nel tempo</li>
    </ul>
    
    <h3>Consigli pratici</h3>
    <p>La costanza è fondamentale. Dedica almeno 10 minuti al giorno a questa pratica per vedere risultati significativi nel tempo.</p>
    
    <h3>Nota importante</h3>
    <p>Ricorda che questa risorsa è pensata come supporto complementare e non sostituisce il consulto con professionisti della salute mentale.</p>
  `;
}

// Funzione per applicare il contenuto a tutte le risorse che non ce l'hanno
const applyContentToResources = (resources: Partial<Resource>[]): Resource[] => {
  return resources.map(resource => {
    if (!resource.content) {
      return {
        ...resource,
        content: createContentHTML(resource)
      } as Resource;
    }
    return resource as Resource;
  });
};

// Definizione delle risorse
const resourcesList: Partial<Resource>[] = [
  {
    id: 1,
    title: "Tecniche di respirazione per l'ansia",
    description: "Impara 5 tecniche di respirazione efficaci per gestire gli attacchi d'ansia e ridurre lo stress quotidiano.",
    type: "exercise",
    tags: ["ansia", "respirazione", "rapido", "stress"],
    url: "/exercises/3", // ID di un esercizio correlato
    imageUrl: "/images/resources/breathing.svg",
    isPremium: true,
    category: "ansia",
    estimatedTime: "5 min",
    relevanceScore: 8
  },
  {
    id: 2,
    title: "Comprensione e gestione della depressione",
    description: "Un articolo completo che spiega le cause della depressione e strategie efficaci per affrontarla.",
    type: "article",
    tags: ["depressione", "informativo", "CBT", "terapia"],
    url: "https://www.fondazioneveronesi.it/magazine/articoli/neuroscienze/depressione-curare-presto-e-bene",
    imageUrl: "/images/resources/depression.svg",
    isPremium: true,
    category: "depressione",
    estimatedTime: "12 min",
    relevanceScore: 7
  }
  // Altri elementi delle risorse...
];

// Applica il contenuto HTML a tutte le risorse
export const resources: Resource[] = applyContentToResources(resourcesList);

// Funzione per ottenere tutte le risorse
export function getAllResources(): Resource[] {
  return resources;
}

// Funzione per ottenere le risorse per categoria
export function getResourcesByCategory(category: string): Resource[] {
  console.log(`Cercando risorse per categoria: ${category}`);
  const filteredResources = resources.filter(resource => 
    resource.category.toLowerCase() === category.toLowerCase()
  );
  console.log(`Trovate ${filteredResources.length} risorse per la categoria ${category}`);
  return filteredResources;
}

// Funzione per ottenere le risorse per tipo
export function getResourcesByType(type: string): Resource[] {
  return resources.filter(resource => resource.type === type);
}

// Funzione per ottenere le risorse premium
export function getPremiumResources(): Resource[] {
  return resources.filter(resource => resource.isPremium);
}

// Funzione per ottenere le risorse gratuite
export function getFreeResources(): Resource[] {
  return resources.filter(resource => !resource.isPremium);
}

// Funzione per ottenere una singola risorsa per ID
export function getResourceById(id: number): Resource | undefined {
  return resources.find(resource => resource.id === id);
}

// Funzione per ottenere risorse consigliate in base a tag specifici
export function getResourcesByTags(tags: string[]): Resource[] {
  return resources.filter(resource => 
    resource.tags?.some(tag => tags.includes(tag))
  ).sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
}

// Funzione avanzata per ottenere risorse personalizzate in base a vari parametri
export function getPersonalizedResources(params: {
  userId?: number;
  categories?: string[];
  tags?: string[];
  excludeTypes?: string[];
  onlyPremium?: boolean;
  limit?: number;
}): Resource[] {
  let filtered = [...resources];
  
  // Filtra per categorie se specificate
  if (params.categories && params.categories.length > 0) {
    filtered = filtered.filter(resource => 
      params.categories?.includes(resource.category)
    );
  }
  
  // Filtra per tag se specificati
  if (params.tags && params.tags.length > 0) {
    filtered = filtered.filter(resource => 
      resource.tags?.some(tag => params.tags?.includes(tag))
    );
  }
  
  // Escludi certi tipi se specificati
  if (params.excludeTypes && params.excludeTypes.length > 0) {
    filtered = filtered.filter(resource => 
      !params.excludeTypes?.includes(resource.type)
    );
  }
  
  // Filtra per premium se specificato
  if (params.onlyPremium !== undefined) {
    filtered = filtered.filter(resource => resource.isPremium === params.onlyPremium);
  }
  
  // Ordina per punteggio di rilevanza
  filtered.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
  
  // Limita i risultati se specificato
  if (params.limit && params.limit > 0) {
    filtered = filtered.slice(0, params.limit);
  }
  
  return filtered;
}