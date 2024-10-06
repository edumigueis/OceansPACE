import oman from './assets/oman.jpg';
import gulf_of_maine from './assets/gulf_of_maine.jpg';
import pace_clouds from './assets/pace_introduction_clouds.png';
import pace_water from './assets/pace_introduction_land.png';
import pace_water from './assets/pace_introduction_water.png';
import pace_maine from './assets/pace_introdction_image_maine.png';
import pace_snow from './assets/apce_introduction_snow.png';
import oman_pace from './assets/oman_pace.jpg';
import oman_green from './assets/oman_green.png';
import saginaw_bay from './assets/saginaw_bay.jpg';
import saginaw_pace from './assets/saginaw_pace.jpg';
import cyanobacteria from './assets/cyanobacteria.jpg';
import image_globe from './assets/image_globe.jpg';
import marine_food_chain from './assets/marine_food_chain.jpg';
import mauritania from './assets/mauritania.jpg';
import mauritania_pace from './assets/mauritania_pace.png';
import mud_spill_rebuilding from './assets/mud_spill_rebulding.jpg';
import mud_spill from './assets/mud_spill.jpg';
import oman_picture from './assets/oman_picture.jpg';
import saginaw_pace_stain from './assets/pace_saginaw_bay_stain.png';
import phytoplankton from './assets/phytoplankton.jpg';
import saginaw_bay_river_mud from './assets/saginaw_bay_river_mud.png';
import saharra_winds from './assets/saharra_winds.jpg';
import salton_sea_pace from './assets/salton_sea_pace.jpg';
import badgeFigure from './assets/Badge.png';
import omanData from './assets/data/oman_winter_norm.csv';
import volcaData from './assets/data/vulcan_erupting_norm.csv';
import sagiData from './assets/data/saginaw_bay_norm.csv';
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
                    lat: 42.81671,
                    lng: -69.95354,
                    location: "Northeastern United States and Canada",
                    image: pace_maine,
                    text: "✨ Your first mission is coming up: We’ll be diving into the ocean’s colors, discovering how the light bouncing off the water can reveal hidden secrets about life in the whole world! The region, encompassing Georges Bank and the Gulf of Maine, is renowned for its rich biological productivity, historically making it a commercial fishing hub. However, overfishing and climate change now pose significant threats to this vital ecosystem.",
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
                    csvPath: sagiData,
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage:pace_maine ,
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
                            fallbackImage: pace_maine,
                            next: 2,
                            component: (
                                <InformativeSectionStage nextStage={2}>
                                    <div className="mission-card-header">
                                        <h2>The whites</h2>
                                        <h4>There are two white things in the picture: clouds and snow.</h4>
                                    </div>
                                    <div className="list">
                                        <h3>Here are some tips to help tell them apart:</h3>
                                        <ul>
                                            <div className="image-container">
                                                <img src={pace_clouds}></img>
                                            </div>
                                            <li>Clouds:</li>
                                            <ul>
                                                <li>Clouds appear as bright white, fluffy patches. They are often more irregular in shape and can be seen floating over land and water.</li>
                                                <li>In this image, clouds tend to have a softer, more diffuse appearance and are present in various parts, such as over the ocean on the right side, and some cover can also be seen over the land.
                                                </li>
                                            </ul>
                                            <div className="image-container">
                                                <img src={pace_snow}></img>
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
                            fallbackImage: pace_water,
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
                            fallbackImage: pace_water,
                            next: 4,
                            component: (
                                <InformativeSectionStage nextStage={4}>
                                    <div className="mission-card-header">
                                        <h2>The answer is: Algae</h2>
                                        <h4>Here's some quick facts about it!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
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
                                <MapFocusStage nextStage={5}
                                    images={[
                                        {
                                            lat: 24.618875,
                                            lng: 57.455609,
                                            image: image_globe,
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
                   onArrival={() => console.log('Final stage reached!')}
      briefing={{
        title: "The Omani Bloom",
        location: "The Omani Sea",
        image: oman_picture,
        report: "Durante essa missão, você explorou a região do Mar de Omã e analisou o impacto dos plânctons na biodiversidade local.",
        reportAll: "We’ve seen how it’s way smarter to act before a problem pops up, but when things do go wrong, we can’t just sit back. In today’s example, we talked about mud, but oil spills are a whole other story. They can be even nastier, sticking around much longer and causing bigger damage to marine life. Oil doesn’t just muddy the water, it coats everything, from fish to birds, making it hard for ecosystems to bounce back. The cool thing about using images is that they don’t just show us what’s happening, they give us clues about what might happen next! They help us track where the mud, oil, or any other mess is headed. With that info, we can figure out which areas might be in trouble and jump in with protective measures. Whether it’s blocking the spill, setting up barriers, or getting cleanup crews to the right spot, these images are like treasure maps showing us the best path to take. And even after the initial cleanup, we can keep an eye on things. Satellite images and other tools let us monitor how nature is recovering and make sure it gets back to its full strength. By acting early, responding quickly, and using tech to guide us, we can help protect our bays, rivers, and oceans from the messes that threaten the"
      }}
      badge={{
        name: "Emblema da Missão Omani Bloom",
        image: badgeFigure
      }}
                />
                        },
                    ],
                },
                {
                    index: 1,
                    concluded: false,
                    title: "Stuck in a Mudstery",
                    lat: 43.671677,
                    lng: -83.821499,
                    location: "Saginaw Bay, Michigan, US",
                    image: saginaw_bay,
                    text: "Unusual changes are happening in Saginaw Bay after a big storm. The waters are shifting, and things aren’t quite right. Your mission is to explore the bay, uncover what’s causing the trouble. Can you help us solve the challenge before it’s too late? Saginaw Bay Saginaw Bay is a big, shallow area of water in eastern Michigan, right next to Lake Huron. It’s home to all kinds of amazing animals, like fish, birds, and other wildlife. Many people come here to fish, and birds love to visit the nearby wetlands. But over the years, the bay has faced some problems, like pollution and losing important habitats for animals. Thankfully, people are working hard to protect it and keep it healthy so that the bay can stay beautiful and full of life for years to come!",
                    displayMap: true,
                    fallbackImage: saginaw_bay,
                    csvPath: sagiData,
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
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: saginaw_pace,
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
                            fallbackImage: saginaw_pace_stain,
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
                            fallbackImage: saginaw_bay_river_mud,
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
                            fallbackImage: mud_spill,
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
                            fallbackImage: mud_spill,
                            next: 5,
                            component: (
                                <InformativeSectionStage nextStage={5}>
                                    <div className="mission-card-header">
                                        <h2>Mud flows</h2>
                                        <h4>Here's some quick facts about it!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={mud_spill_rebuilding}></img>
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
                            fallbackImage: mud_spill_rebuilding,
                            next: 6,
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
                                    nextStage={6}
                                />
                            ),
                        },
                        {
                            next: 7,
                            component: (
                                <MapFocusStage nextStage={7}
                                    images={[
                                        {
                                            lat: 43.648052,
                                            lng: -83.850347,
                                            image: image_globe,
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
                              onArrival={() => console.log('Final stage reached!')}
                 briefing={{
                   title: "The Omani Bloom",
                   location: "The Omani Sea",
                   image: oman_picture,
                   report: "Durante essa missão, você explorou a região do Mar de Omã e analisou o impacto dos plânctons na biodiversidade local.",
                   reportAll: "We’ve seen how it’s way smarter to act before a problem pops up, but when things do go wrong, we can’t just sit back. In today’s example, we talked about mud, but oil spills are a whole other story. They can be even nastier, sticking around much longer and causing bigger damage to marine life. Oil doesn’t just muddy the water, it coats everything, from fish to birds, making it hard for ecosystems to bounce back. The cool thing about using images is that they don’t just show us what’s happening, they give us clues about what might happen next! They help us track where the mud, oil, or any other mess is headed. With that info, we can figure out which areas might be in trouble and jump in with protective measures. Whether it’s blocking the spill, setting up barriers, or getting cleanup crews to the right spot, these images are like treasure maps showing us the best path to take. And even after the initial cleanup, we can keep an eye on things. Satellite images and other tools let us monitor how nature is recovering and make sure it gets back to its full strength. By acting early, responding quickly, and using tech to guide us, we can help protect our bays, rivers, and oceans from the messes that threaten the"
                 }}
                 badge={{
                   name: "Emblema da Missão Omani Bloom",
                   image: badgeFigure
                 }}
                           />
                            ),
                        },
                    ],
                },
                {
                    index: 2,
                    concluded: false,
                    title: "Hidden Springs, Hidden Secrets",
                    lat: 24.772691,
                    lng: 57.524873,
                    location: "Oman",
                    image: oman_picture,
                    text: "The water is full of all kinds of phytoplankton species, and right now, the main way to tell them apart is by scooping up water samples—talk about time-consuming and pricey! But what if we could use images to tell them apart instead, and maybe even discover more? Oman, located at the southeastern tip of the Arabian Peninsula, is a country of stunning landscapes and warm climate, characterized by arid summers and mild winters. Its coastline, extending over 3,000 kilometers along the Sea of Oman and the Arabian Sea, boasts crystal-clear waters that are home to a rich marine biodiversity, including turtles and dolphins. The proliferation of phytoplankton in the coastal waters plays a crucial role in this ecosystem, serving as the foundation of the food chain and contributing to the health of the oceans. This connection between nature and culture highlights how Oman is a fascinating destination, where the sea and its marine life are integral parts of the national identity.",
                    displayMap: true,
                    fallbackImage: oman_pace,
                    csvPath: omanData,
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
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: oman_pace,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Oman is an amazing place, bursting with all kinds of life and beauty! Take a look at the image, can you spot that?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Nope",
                                            explanation: "Take a closer look at all that green! You can spot different shades, from deep, dark green to bright, light green. These colors could be showing us a variety of phytoplankton species living in this area."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Absolutely',
                                            explanation: "You’ve got it! Those different shades of green, from the darkest to the lightest, likely point to a variety of phytoplankton species hanging out in this region."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Does the observed phytoplankton affect other species of animals?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "No",
                                            explanation: "Look back at what we saw! Phytoplankton is super important; it’s the base of the food chain and helps keep the planet’s oxygen levels in check."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Yes',
                                            explanation: "You’re spot on! Phytoplankton plays a key role in the food chain and is essential for maintaining the planet's oxygen."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 3,
                            component: (
                                <InformativeSectionStage nextStage={3}>
                                    <div className="mission-card-header">
                                        <h2>Phytoplankton</h2>
                                        <h4>Here's some quick facts about it!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
                                    </div>
                                    <div className="text">
                                        <p>The food chain is kind of like nature’s dinner party! It’s all about who’s eating and who’s being eaten, with energy passing along the line. It starts with the chefs—plants and tiny phytoplankton—that whip up energy from sunlight. Then, little critters like zooplankton come along for a bite. After that, small fish snack on those critters, and bigger fish come in to munch on the smaller ones. It keeps going until we get to the ocean’s top diners, like sharks or whales!
                                            Phytoplankton are the tiny heroes at the base of this party. Without them, no one else gets to eat, and the whole chain could fall apart. So, they’re super important to keep the food chain running smoothly!
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"What do you think could happen if the numbers of phytoplankton start to drop?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Phytoplankton will turn into seaweed",
                                            explanation: "Nope, that’s not how it works! Phytoplankton are tiny and different from seaweed, and they can’t just transform."
                                        },
                                        {
                                            id: 'b',
                                            text: 'The oceans will dry up',
                                            explanation: "Nah, oceans might get warmer, but they won’t vanish!"
                                        },
                                        {
                                            id: 'c',
                                            text: 'Phytoplankton will move to live on land',
                                            explanation: "No way! These little guys are ocean dwellers—they can't pack up and move to the land like plants."
                                        },
                                        {
                                            id: 'd',
                                            text: 'Fish will start producing their own food',
                                            explanation: "Nope, fish can’t suddenly become chefs—they rely on what’s in the food chain!"
                                        },
                                        {
                                            id: 'e',
                                            text: 'Less food for marine life',
                                            explanation: "Yep, if phytoplankton drop, sea creatures that rely on them might go hungry."
                                        },
                                        {
                                            id: 'f',
                                            text: 'Impact on oxygen levels',
                                            explanation: "Correct! Phytoplankton help make oxygen, so fewer of them could affect the air we breathe."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: image_globe,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"How can a picture like this help us protect nature and understand what’s happening?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "A picture shows us where nature might be in trouble!",
                                            explanation: "Exactly! We can see changes in landscapes, spot endangered species, and track how healthy ecosystems are."
                                        },
                                        {
                                            id: 'b',
                                            text: 'It helps us find patterns!',
                                            explanation: "Absolutely! By looking at images over time, we can spot changes like shrinking forests or fewer animals, giving us clues on what needs protecting."
                                        },
                                        {
                                            id: 'c',
                                            text: 'Pictures let us see without disturbing!',
                                            explanation: "You’re spot on! We can observe wildlife and nature from a distance, gathering information without interrupting the natural world."
                                        },
                                        {
                                            id: 'd',
                                            text: 'They spread the word!',
                                            explanation: "Exactly! A powerful image can inspire others to care about nature and take action to protect it."
                                        },
                                        {
                                            id: 'e',
                                            text: 'It’s like a map for conservation!',
                                            explanation: "Correct! Images help scientists and conservationists know where to focus their efforts to save biodiversity."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={5}
                                />
                            ),
                        }
                    ]
                }
            ];

        case 'MEDIUM':
            return [
            ];

        case 'HARD':
            return [];

        default:
            return [];
    }
};

export default getMissionsByDifficulty;
