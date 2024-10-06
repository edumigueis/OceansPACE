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
                            { id: 2, text: "The green and blue", explanation: "Not quite. Volcanic heat is not involved in photosynthesis.", nextQuestionId: null },
                            { id: 3, text: "The brown", explanation: "Incorrect. Geothermal vents are not the primary source of energy.", nextQuestionId: null },
                        ],
                    },
                    {
                        // ID 1: Pergunta sobre os "The White"
                        text: "Is the white you see just one thing or more than one?",
                        options: [
                            { id: 1, text: "It's all the same", explanation: "There are two white things in the picture: clouds and snow. Here are some tips to help tell them apart:\n\n**Clouds:**\nClouds appear as bright white, fluffy patches. They are often more irregular in shape and can be seen floating over land and water. In this image, clouds tend to have a softer, more diffuse appearance and are present in various parts, such as over the ocean on the right side, and some cover can also be seen over the land.\n\n**Snow:**\nSnow, on the other hand, covers large areas of the land, especially in the northern regions. It has a more uniform and textured look, as it blankets the surface evenly. The snow appears as a solid white or light gray color and tends to follow the contours of the land, particularly in the upper part of the image (towards the top center and left), where the land is covered by snow.", nextQuestionId: 2 },
                            { id: 2, text: "There are different whites", explanation: "Congratulations on the observation! There are two different things in the images: the white of the snow and the white of the clouds. Here are some tips to help tell them apart:\n\n**Clouds:**\nClouds appear as bright white, fluffy patches. They are often more irregular in shape and can be seen floating over land and water. In this image, clouds tend to have a softer, more diffuse appearance and are present in various parts, such as over the ocean on the right side, and some cover can also be seen over the land.\n\n**Snow:**\nSnow, on the other hand, covers large areas of the land, especially in the northern regions. It has a more uniform and textured look, as it blankets the surface evenly. The snow appears as a solid white or light gray color and tends to follow the contours of the land, particularly in the upper part of the image (towards the top center and left), where the land is covered by snow.", nextQuestionId: 2 },
                        ],
                    },
                    {
                        // ID 2: Pergunta sobre a aparência da neve
                        text: "Take a look at the snow, do you notice anything strange about how it looks?",
                        options: [
                            { id: 1, text: "No!", explanation: "Take a closer look! While snow covers the ground, there are patches of brown earth peeking through. The snow itself seems cracked, like it’s resting on a layer of sediment.", nextQuestionId: 3 }, // Vai para 1.b.2
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
        stages: [
            <SingleQuestionStage
                question={{
                    text: "What is the primary source of energy for photosynthesis in phytoplankton?",
                    options: [
                        { id: 1, text: "The Sun", isCorrect: true },
                        { id: 2, text: "Volcanic heat", isCorrect: false },
                        { id: 3, text: "Geothermal vents", isCorrect: false },
                        { id: 4, text: "The Moon", isCorrect: false },
                    ],
                }}
            />,
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
            </InformativeSectionStage>,
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
            />,
            <FinalStage
                onArrival={() => console.log('Final stage reached!')}
                briefing={{}}
            />
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
    },
];

export default missions;
