// missionsData.js
import oman from './assets/oman.jpg';
import cloroData from './assets/data/oman_winter_norm.csv';
import aeroData from './assets/data/vulcan_erupting_norm.csv';
import MultipleQuestionStage from './components/stages/MultipleQuestionStage';
import FinalStage from './components/stages/FinalStage';
import SingleQuestionStage from './components/stages/SingleQuestionStage';
import InformativeSectionStage from './components/stages/InformativeSectionStage';
import MapFocusStage from './components/stages/MapFocusStage';

const missions = [
    {
        index: 0,
        concluded: false,
        title: "The Omani Bloom",
        lat: 24.618875,
        lng: 57.455609,
        location: "The Omani Sea",
        image: oman,
        text: "Oman, located at the southeastern tip of the Arabian Peninsula, is a country of stunning landscapes and warm climate...",
        stages: [
            {
                displayMap: true,
                fallbackImage: oman,
                component: <MultipleQuestionStage questionStages={[
                    {
                        // ID 0: Pergunta inicial
                        text: "Start by looking closely at the picture. What do you see? What’s different or exciting? What caught your eye?",
                        options: [
                            { id: 1, text: "The White", explanation: "", nextQuestionId: 1 }, // Se escolher "The White", vai para ID 1
                            { id: 2, text: "The green and blue", explanation: "", nextQuestionId: 4 }, 
                            { id: 3, text: "The brown", explanation: "Incorrect. Geothermal vents are not the primary source of energy.", nextQuestionId: 5 },
                        ],
                    },
                    {
                        // ID 1: Pergunta sobre os "The White"
                        text: "Is the white you see just one thing or more than one?",
                        options: [
                            { id: 1, text: "It's all the same", explanation: "There are two white things in the picture: clouds and snow.", nextQuestionId: 2 },
                            { id: 2, text: "There are different whites", explanation: "Congratulations on the observation! There are two different things in the images: the white of the snow and the white of the clouds.", nextQuestionId: 2 },
                        ],
                    },
                    {
                        // ID 2: Pergunta sobre a aparência da neve
                        text: "Take a look at the snow, do you notice anything strange about how it looks?",
                        options: [
                            { id: 1, text: "No!", explanation: "Take a closer look! While snow covers the ground, there are patches of brown earth peeking through. The snow itself seems cracked, like it’s resting on a layer of sediment.", nextQuestionId: 3 },
                            { id: 2, text: "Yes!", explanation: "Can you come up with some theory about what is happening here?", nextQuestionId: 3 },
                        ],
                    },
                    {
                        // ID 3: Teorias sobre o que está acontecendo
                        text: "Can you come up with some theory about what is happening here?",
                        options: [
                            { id: 1, text: "Alien activity", explanation: "Oops, looks like that’s not quite right! The correct answer is Early signs of Spring: The warmth of the approaching Spring is causing the snow to melt unevenly, leaving cracks and patches of exposed ground.", nextQuestionId: null },
                            { id: 2, text: "Earthquake tremors", explanation: "Oops, looks like that’s not quite right! The correct answer is Early signs of Spring: The warmth of the approaching Spring is causing the snow to melt unevenly, leaving cracks and patches of exposed ground.", nextQuestionId: null },
                            { id: 3, text: "Underground creatures", explanation: "Oops, looks like that’s not quite right! The correct answer is Early signs of Spring: The warmth of the approaching Spring is causing the snow to melt unevenly, leaving cracks and patches of exposed ground.", nextQuestionId: null },
                            { id: 4, text: "Early signs of Spring", explanation: "Congratulations! You got it right! The warmth of the approaching Spring is causing the snow to melt unevenly, leaving cracks and patches of exposed ground.", nextQuestionId: 0 },
                        ],
                    },
                    {
                        // ID 4: Pergunta sobre o que é o verde
                        text: "The blue is water, but the green what could be the green?",
                        options: [
                            { id: 1, text: "Algae", explanation: "Congratulations! You got it right! Phytoplankton are like tiny algae that live in the ocean, lakes, and rivers. Even though they're super small, they’re really important because they make food from sunlight, just like plants in a garden! They also give off oxygen, which helps animals (and us!) breathe. You can think of them as the ocean’s little helpers, keeping everything healthy and full of life! Here’s a fun fact! For a long time, people thought the Amazon rainforest was the ‘lungs of the Earth’ because of all the oxygen it produces. But guess what? It’s actually these tiny ocean algae, called phytoplankton, that do most of the work! They make most of the oxygen we breathe, so even though they’re small, they’re true heroes of the planet!", nextQuestionId: 0 },
                            { id: 2, text: "Stinky thing", explanation: "Oops, looks like that’s not quite right! The correct answer is Algae. Phytoplankton are like tiny algae...", nextQuestionId: null },
                            { id: 3, text: "Pollution", explanation: "Oops, looks like that’s not quite right! The correct answer is Algae. Phytoplankton are like tiny algae...", nextQuestionId: null },
                            { id: 4, text: "A giant sea monster taking a bath", explanation: "Oops, looks like that’s not quite right! The correct answer is Algae. Phytoplankton are like tiny algae...", nextQuestionId: null },
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
        initialViewState: {
            latitude: 22.87161,
            longitude: 60.58191,
            zoom: 5,
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
      },];

export default missions;
