import oman from './assets/oman.jpg';
import badgeFigure from './assets/Badge.png';
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
                    ],
                    csvPath: cloroData,
                },
                {
                    index: 1,
                    concluded: false,
                    title: "Stuck in a Mudstery",
                    lat: 43.671677,
                    lng: -83.821499,
                    location: "Saginaw Bay, Michigan, US",
                    image: oman,
                    text: "Unusual changes are happening in Saginaw Bay after a big storm. The waters are shifting, and things aren’t quite right. Your mission is to explore the bay, uncover what’s causing the trouble. Can you help us solve the challenge before it’s too late? Saginaw Bay Saginaw Bay is a big, shallow area of water in eastern Michigan, right next to Lake Huron. It’s home to all kinds of amazing animals, like fish, birds, and other wildlife. Many people come here to fish, and birds love to visit the nearby wetlands. But over the years, the bay has faced some problems, like pollution and losing important habitats for animals. Thankfully, people are working hard to protect it and keep it healthy so that the bay can stay beautiful and full of life for years to come!",
                    displayMap: true,
                    fallbackImage: oman,
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: oman,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"What catches your eye in this image?"}
                                    options={[
                                        { id: 'a', text: 'The lack of vibrant green in the water', explanation: 'Hmm, it looks like this area is missing that bright, lush green we saw in the last mission.' },
                                        { id: 'b', text: 'The blue is no as bright', explanation: 'Looks like that brown stain is messing up the water’s sparkle! Time to put on our detective hats and see what’s behind it.' },
                                        { id: 'c', text: 'The squares around the water', explanation: 'Look at all those little squares around the bay—they\'re homes, just like yours and mine! But what really catches our eye is that big brown stain in the water. Let’s dig in and see what’s going on!' },
                                        { id: 'c', text: 'That brown stain is definitely standing out—it’s affecting the area for sure. Let’s get to the bottom of it and find out what’s happening!' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: oman,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Could it be nature doing its thing, or do you think something’s up with the environment? What’s your guess?"}
                                    options={[
                                        { id: 'a', text: 'It\'s natural! Mother Nature’s just changing the scenery.', explanation: 'Good thinking! It could just be how this region looks without all the phytoplankton. But hey, that big brown splotch in the water is hard to miss! Let’s dive deeper and figure out what it is and what kind of splash it’s making!' },
                                        { id: 'b', text: 'It’s an environmental impact! Something’s affecting this spot.', explanation: 'You’ve got a sharp eye! That brown stain is definitely up to no good here. Time to roll up our sleeves and investigate what\'s really going on!' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: oman,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Where did this brown stain come from?"}
                                    options={[
                                        { id: 'a', text: 'It looks like it came from a river', explanation: 'Zooming in, we can spot a river hiding in plain sight! Its waters are the same shade of brown as the land around it. It seems like that’s the source, but the mystery continues—something outside the image might have started it all.' },
                                        { id: 'b', text: 'It came from somewhere outside the image', explanation: 'Zooming in, we can spot a river hiding in plain sight! Its waters are the same shade of brown as the land around it. It seems like that’s the source, but the mystery continues—something outside the image might have started it all.' },
                                        { id: 'c', text: 'It appeared spontaneously', explanation: 'Hmm, the storm might have stirred up more than just a breeze! After taking a closer peek, we can spot a river sneaking through. Its waters are so brown, they blend right into the land, looks like that’s where the brown stain is coming from!' },
                                        { id: 'd', text: 'Many people swimming stirred up sediment from the bottom of the water', explanation: 'Hmm, the storm might have stirred up more than just a breeze! After taking a closer peek, we can spot a river sneaking through. Its waters are so brown, they blend right into the land, looks like that’s where the brown stain is coming from!' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: oman,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"It seems that those heavy rains brought more than just a downpour. Some water reservoirs couldn’t handle it, and now a whole lot of mud has found its way into the river and out into the bay. What do you think this could mean for the creatures living here?"}
                                    options={[
                                        { id: 'a', text: "There was no impact, it's just mud!", explanation: "A little mud is no big deal, but we’re talking about a lot of mud here! Imagine the biggest swimming pool you’ve ever seen filled to the brim with mud, and now imagine that times 100. That’s a whole lot of mud, and it can really shake things up." },
                                        { id: 'b', text: 'Many fish and algae may have died', explanation: "You're right, that amount of mud is terrible!" },
                                    ]}
                                    correctAnswerId={'b'}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 5,
                            component: (
                                <InformativeSectionStage>
                                    <div className="mission-card-header">
                                        <h2>Mud flows</h2>
                                        <h4>Here's some quick facts about it!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={oman}></img>
                                    </div>
                                    <div className="text">
                                        <p>When all this mud enters the water, it stirs up the ecosystem. The water gets murky, making it hard for sunlight to reach the bottom. Without enough sunlight, the plants and algae that need it for energy can’t do their job, and eventually, they start to die off. These algae are super important because they’re at the base of the food chain, feeding fish, crustaceans, and lots of other creatures.
                                            But that’s not all. All that mud also brings a load of organic matter with it. As this matter breaks down, it uses up the oxygen in the water. This can cause hypoxia, which is a fancy way of saying there’s not enough oxygen for fish and other animals to breathe. Without oxygen, many of them might not survive. So, this big muddy mess can throw off the whole balance of the bay, making it tough for the creatures that call it home.
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"How can we solve this problem?"}
                                    options={[
                                        { id: 'a', text: "There is nothing to be done", explanation: "Come on, don’t be so gloomy! There’s always something we can do! Let’s head back and think again." },
                                        { id: 'b', text: 'Stop the mud', explanation: "Stopping the mud completely is a tall order and pretty costly too. The real trick is to focus on making sure this doesn’t happen again in the future." },
                                        { id: 'c', text: 'Invent a method that does not yet exist', explanation: "I love your creativity! New ideas are always welcome, and who knows what we’ll discover in the future. For now, though, we need to take steps to stop the problem from getting worse and, of course, prevent it from happening again." },
                                        { id: 'd', text: 'Take measures to prevent it from happening again', explanation: "Exactly! Preventive measures are the way to go if we want to stop this from becoming a recurring issue." },
                                        { id: 'e', text: 'Take palliative measures', explanation: "Palliative measures are helpful for sure. Whether it’s temporary barriers or other strategies, they can provide some relief in the short term." },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={5}
                                />
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
