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
                    title: "North America from Above",
                    lat: 24.618875,
                    lng: 57.455609,
                    location: "Northeastern United States and Canada",
                    image: oman,
                    text: "✨ Your first mission is coming up: We’ll be diving into the ocean’s colors, discovering how the light bouncing off the water can reveal hidden secrets about life in the whole world! The region, encompassing Georges Bank and the Gulf of Maine, is renowned for its rich biological productivity, historically making it a commercial fishing hub. However, overfishing and climate change now pose significant threats to this vital ecosystem.",
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: oman,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Take a look at this awesome image. Is the white you see just one thing or more than one?"}
                                    options={[
                                        { id: 'a', text: 'It is all the same', explanation: '' },
                                        { id: 'b', text: 'There are different whites', explanation: '' }
                                    ]}
                                    correctAnswerId={'b'}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: oman,
                            next: 2,
                            component: (
                                <InformativeSectionStage>
                                    <div className="mission-card-header">
                                        <h2>The whites</h2>
                                        <h4>There are two white things in the picture: clouds and snow.</h4>
                                    </div>
                                    <div className="list">
                                        <h3>Here are some tips to help tell them apart:</h3>
                                        <ul>
                                            <div className="image-container">
                                                <img src={oman}></img>
                                            </div>
                                            <li>Clouds:</li>
                                            <ul>
                                                <li>Clouds appear as bright white, fluffy patches. They are often more irregular in shape and can be seen floating over land and water.</li>
                                                <li>In this image, clouds tend to have a softer, more diffuse appearance and are present in various parts, such as over the ocean on the right side, and some cover can also be seen over the land.
                                                </li>
                                            </ul>
                                            <div className="image-container">
                                                <img src={oman}></img>
                                            </div>
                                            <li>Snow:</li>
                                            <ul>
                                                <li>Snow, on the other hand, covers large areas of the land, especially in the northern regions. It has a more uniform and textured look, as it blankets the surface evenly.</li>
                                                <li>The snow appears as a solid white or light gray color and tends to follow the contours of the land, particularly in the upper part of the image (towards the top center and left), where the land is covered by snow.</li>
                                            </ul>

                                        </ul>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: oman,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"The blue is water as we can see, but what could be the green?"}
                                    options={[
                                        { id: 'a', text: 'Algae', explanation: '' },
                                        { id: 'b', text: 'Pollution', explanation: '' },
                                        { id: 'c', text: 'Waste', explanation: '' },
                                        { id: 'd', text: 'A giant sea monster taking a bath', explanation: '' }
                                    ]}
                                    correctAnswerId={'a'}
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: oman,
                            next: 4,
                            component: (
                                <InformativeSectionStage>
                                    <div className="mission-card-header">
                                        <h2>The answer is: Algae</h2>
                                        <h4>Here's some quick facts about it!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={oman}></img>
                                    </div>
                                    <div className="text">
                                        <p>Phytoplankton are like tiny algae that live in the ocean, lakes, and rivers. Even though they're super small, they’re really important because they make food from sunlight, just like plants in a garden! They also give off oxygen, which helps animals (and us!) breathe. You can think of them as the ocean’s little helpers, keeping everything healthy and full of life!
                                            Here’s a fun fact! For a long time, people thought the Amazon rainforest was the ‘lungs of the Earth’ because of all the oxygen it produces. But guess what? It’s actually these tiny ocean algae, called phytoplankton, that do most of the work! They make most of the oxygen we breathe, so even though they’re small, they’re true heroes of the planet!
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            next: 5,
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
                                        }
                                    ]}
                                />
                            ),
                        },
                        {
                            displayMap: false,
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
                            fallbackImage: oman,
                            component: <MultipleQuestionStage questionStages={[
                                {
                                    // ID 0: Pergunta inicial
                                    text: "Start by looking closely at the picture. What do you see? What’s different or exciting? What caught your eye?",
                                    options: [
                                        { id: 1, text: "The White", explanation: "", nextQuestionId: 1 }, // Se escolher "The White", vai para ID 1
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
            ];

        default:
            return [];
    }
};

export default getMissionsByDifficulty;
