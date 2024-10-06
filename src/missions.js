import oman from './assets/oman.jpg';
import cloroData from './assets/data/oman_winter_norm.csv';
import aeroData from './assets/data/vulcan_erupting_norm.csv';
import MultipleQuestionStage from './components/stages/MultipleQuestionStage';
import FinalStage from './components/stages/FinalStage';
import InformativeSectionStage from './components/stages/InformativeSectionStage';
import MapFocusStage from './components/stages/MapFocusStage';
import OnlyOneQuestion from './components/stages/OnlyOneQuestion';


// Função que retorna as missões com base no nível de dificuldade
const getMissionsByDifficulty = (difficulty) => {
  switch (difficulty) {
    case 'EASY':
      return [
        {
          index: 0,
          concluded: false,
          title: "The Omani Bloom (Easy)",
          lat: 24.618875,
          lng: 57.455609,
          location: "The Omani Sea",
          image: oman,
          stages: [
            {
              displayMap: true,
              next: 1,
              component: (
                <InformativeSectionStage>
                  <div className="mission-card-header">
                    <h2>Mission 1</h2>
                    <h4>Learn About The Omani Bloom</h4>
                  </div>
                  <div className="image-container">
                    <img src={oman}></img>
                  </div>
                  <div className="list">
                    <ul>
                      <li>Oman is known for its beautiful seas and rich aquatic life!</li>
                    </ul>
                  </div>
                  <div className="text">
                      <p>Basic information about the region.</p>
                  </div>
                </InformativeSectionStage>
              ),
            },
            {
              displayMap: true,
              fallbackImage: oman,
              component: <MultipleQuestionStage questionStages={[
                {
                  text: "What do you notice about the sea in this picture?",
                  options: [
                    { id: 1, text: "It's blue and calm", nextQuestionId: 1 },
                    { id: 2, text: "It's rough and stormy", nextQuestionId: 2 },
                  ],
                },
                {
                  text: "What could be the cause of the calm sea?",
                  options: [
                    { id: 1, text: "Good weather", nextQuestionId: 3 },
                    { id: 2, text: "No waves", nextQuestionId: 3 },
                  ],
                },
              ]} />,
            },
            {
              component: <FinalStage
                onArrival={() => console.log('Final stage (Easy) reached!')}
                briefing={{
                  title: "The Omani Bloom (Easy)",
                  location: "The Omani Sea",
                  image: oman
                }}
              />
            },
            {
                displayMap: true,
                component: (
                  <OnlyOneQuestion
                    questionText={"Qual é a capital do Japão?"}
                    options={[
                      { id: 'a', text: 'Seul', explanation: 'Incorreto! Seul é a capital da Coreia do Sul.' },
                      { id: 'b', text: 'Tóquio', explanation: 'Correto! Tóquio é a capital do Japão.' },
                      { id: 'c', text: 'Pequim', explanation: 'Incorreto! Pequim é a capital da China.' },
                    ]}
                    correctAnswerId={'b'}
                    nextStage={1} // Define o próximo estágio que será alcançado
                  />
                ),

            },
            {
                displayMap: true,
                fallbackImage: oman,
                component: <MultipleQuestionStage questionStages={[
                    {
                        // ID 0: Pergunta inicial
                        text: "Start by looking closely at the picture. What do you see? What’s different or exciting? What caught your eye?",
                        options: [
                            { id: 1, text: "The White", explanation: "", nextQuestionId: 1}, // Se escolher "The White", vai para ID 1
                            { id: 2, text: "The green and blue", explanation: "", nextQuestionId: 4 }, 
                            { id: 3, text: "The brown", explanation: "", nextQuestionId: 5 },
                        ],
                    },
                    {
                        // ID 1: Pergunta sobre os "The White"
                        text: "Is the white you see just one thing or more than one?",
                        options: [
                            { id: 1, text: "It's all the same", explanation: "", nextQuestionId: 2 },
                            { id: 2, text: "There are different whites", explanation: "", nextQuestionId: 2 },
                        ],
                    },
                    {
                        // ID 2: Pergunta sobre a aparência da neve
                        text: "Take a look at the snow, do you notice anything strange about how it looks?",
                        options: [
                            { id: 1, text: "No!", explanation: "", nextQuestionId: 3 },
                            { id: 2, text: "Yes!", explanation: "", nextQuestionId: 3 },
                        ],
                    },
                    {
                        // ID 3: Teorias sobre o que está acontecendo
                        text: "Can you come up with some theory about what is happening here?",
                        options: [
                            { id: 1, text: "Alien activity", explanation: "", nextQuestionId: null },
                            { id: 2, text: "Earthquake tremors", explanation: "", nextQuestionId: null },
                            { id: 3, text: "Underground creatures", explanation: "", nextQuestionId: null },
                            { id: 4, text: "Early signs of Spring", explanation: "", nextQuestionId: 0 },
                        ],
                    },
                    {
                        // ID 4: Pergunta sobre o que é o verde
                        text: "The blue is water, but the green what could be the green?",
                        options: [
                            { id: 1, text: "Algae", explanation: "", nextQuestionId: 0 },
                            { id: 2, text: "Stinky thing", explanation: "", nextQuestionId: null },
                            { id: 3, text: "Pollution", explanation: "", nextQuestionId: null },
                            { id: 4, text: "A giant sea monster taking a bath", explanation: "", nextQuestionId: null },
                        ],
                    },
                    {
                        // ID 5: 
                        text: "The brown ones are the continents, the land where we walk and live!",
                        options: [
                            { id: 1, text: "Back", explanation: "", nextQuestionId: 0 },
                            
                        ],
                    },
                ]} />,
                
            },
            {
                component: <FinalStage
                    onArrival={() => console.log('Final stage reached!')}
                    briefing={{
                        title: "The Omani Bloom",
                        location: "The Omani Sea",
                        image: oman
                    }}
                />
            }
          ],
          csvPath: cloroData,
        },
        
        {
          index: 1,
          concluded: false,
          title: "The Arabian Peninsula",
          lat: -16.83678,
          lng: -174.25968,
          location: "Middle East",
          image: oman,
          question: "What is the capital of Oman?",
          displayMap: true,
          fallbackImage: oman,
          stages: [
            {
              component: (
                <InformativeSectionStage>
                  <div className="mission-card-header">
                    <h2>Mission 2</h2>
                    <h4>The Arabian Peninsula's Unique Ecosystem</h4>
                  </div>
                  <div className="interactive-infographic">
                    <h5>Interactive Infographic: The Life Cycle of Phytoplankton</h5>
                  </div>
                  <div className="animated-diagram">
                    <h5>How Phytoplankton Contribute to Oxygen Production</h5>
                  </div>
                  <h5>Fun Facts About Phytoplankton</h5>
                  <ul>
                    <li>Phytoplankton are responsible for producing about 50% of the Earth's oxygen!</li>
                    <li>They are the foundation of the aquatic food web...</li>
                  </ul>
                </InformativeSectionStage>
              ),
            },
            {
              component: (
                <MapFocusStage
                  images={[
                    {
                      lat: 24.618875,
                      lng: 57.455609,
                      image: oman,
                      title: "alooo",
                      text: "aaai",
                      zoom: 7,
                    },
                    {
                      lat: 29.618875,
                      lng: 57.455609,
                      image: oman,
                      title: "alooo",
                      text: "aaai",
                      zoom: 7,
                    },
                  ]}
                />
              ),
            },
            {
              component: (
                <FinalStage
                  onArrival={() => console.log("Final stage reached!")}
                  briefing={{}}
                />
              ),
            },
          ],
          csvPath: aeroData,
          initialViewState: {
            latitude: -16.83678,
            longitude: -174.25968,
            zoom: 7,
          },
          heatmapConfig: {
            intensity: 1,
            colorRange: [
              [255, 0, 0, 255],
              [255, 255, 0, 255],
              [0, 255, 0, 255],
              [0, 255, 255, 255],
              [0, 0, 255, 255],
            ],
            threshold: 0.9,
          },
          tileLayerConfig: {
            data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
            minZoom: 0,
            maxZoom: 19,
            tileSize: 256,
          },
        }
        
      ];
      
    case 'MEDIUM':
      return [
        {
          index: 0,
          concluded: false,
          title: "The Omani Bloom (Medium)",
          lat: 24.618875,
          lng: 57.455609,
          location: "The Omani Sea",
          image: oman,
          stages: [
            {
              displayMap: true,
              next: 1,
              component: (
                <InformativeSectionStage>
                  <div className="mission-card-header">
                    <h2>Mission 1</h2>
                    <h4>The Arabian Peninsula Ecosystem</h4>
                  </div>
                  <div className="list">
                    <ul>
                      <li>Phytoplankton are responsible for producing about 50% of the Earth's oxygen.</li>
                    </ul>
                  </div>
                </InformativeSectionStage>
              ),
            },
            {
              displayMap: true,
              fallbackImage: oman,
              component: <MultipleQuestionStage questionStages={[
                {
                  text: "Why is the water green?",
                  options: [
                    { id: 1, text: "Algae", nextQuestionId: 1 },
                    { id: 2, text: "Pollution", nextQuestionId: 2 },
                  ],
                },
                {
                  text: "What could cause the growth of algae?",
                  options: [
                    { id: 1, text: "Nutrient-rich waters", nextQuestionId: 3 },
                    { id: 2, text: "Warmer temperatures", nextQuestionId: 3 },
                  ],
                },
              ]} />,
            },
            {
              component: <FinalStage
                onArrival={() => console.log('Final stage (Medium) reached!')}
                briefing={{
                  title: "The Omani Bloom (Medium)",
                  location: "The Omani Sea",
                  image: oman
                }}
              />
            }
          ],
          csvPath: cloroData,
        },
        // Mais missões "MEDIUM" podem ser adicionadas aqui
      ];
      
    case 'HARD':
      return [
        {
          index: 0,
          concluded: false,
          title: "The Omani Bloom (Hard)",
          lat: 24.618875,
          lng: 57.455609,
          location: "The Omani Sea",
          image: oman,
          stages: [
            {
              displayMap: true,
              next: 1,
              component: (
                <InformativeSectionStage>
                  <div className="mission-card-header">
                    <h2>Mission 1</h2>
                    <h4>The Complex Ecosystem of The Omani Sea</h4>
                  </div>
                  <div className="list">
                    <ul>
                      <li>Explore the intricate balance of marine life in the Omani Sea.</li>
                    </ul>
                  </div>
                </InformativeSectionStage>
              ),
            },
            {
              displayMap: true,
              fallbackImage: oman,
              component: <MultipleQuestionStage questionStages={[
                {
                  text: "What environmental factors could affect the algae growth?",
                  options: [
                    { id: 1, text: "Increased CO2 levels", nextQuestionId: 1 },
                    { id: 2, text: "Ocean currents", nextQuestionId: 2 },
                  ],
                },
                {
                  text: "How can phytoplankton impact marine life?",
                  options: [
                    { id: 1, text: "They provide food", nextQuestionId: 3 },
                    { id: 2, text: "They block sunlight", nextQuestionId: 3 },
                  ],
                },
              ]} />,
            },
            {
              component: <FinalStage
                onArrival={() => console.log('Final stage (Hard) reached!')}
                briefing={{
                  title: "The Omani Bloom (Hard)",
                  location: "The Omani Sea",
                  image: oman
                }}
              />
            }
          ],
          csvPath: cloroData,
        },
        // Mais missões "HARD" podem ser adicionadas aqui
      ];

    default:
      return []; // Caso o nível não seja reconhecido
  }
};

export default getMissionsByDifficulty;
