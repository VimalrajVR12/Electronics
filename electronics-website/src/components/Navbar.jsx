import {useState,useRef,useEffect, useContext} from 'react'
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css"
import {homeSVG,wishlistSVG,cartSVG,loginSVG,loggedinSVG,productSVG} from "./SVGs";
import Hamburger from './Hamburger';
import { AuthContext } from '../context/AuthContext';

const tvs = [
  {
    image: "./tvs/P635.webp",
    name: "TCL P635 Pro, 75 inch",
    MRP: "99,999",
    price: "74,999",
    rating: 4.2,
    description:
      "You can experience the colours come to life on this TCL TV. With 4K HDR, this TV lets you experience exceptional brightness and detailing. The Dynamic Colour Enhancement optimises the colour vibrancy to ensure high-quality visuals. The Dolby Atmos audio provides a complete audio experience at the comfort of your home. The AiPQ Engine Gen 2 enables you with lag-free video. The bezel-less design of this TV provides a more immersive visual experience. With Google TV you can access unlimited entertainment so that you can stream online for movies, series, sports, and much more.",
  },
  {
    image: "./tvs/EnvisionX.webp",
    name: "Motorola EnvisionX, 70 inch",
    MRP: "94,999",
    price: "69,999",
    rating: 4.4,
    description:
      "This Motorola HDR10 TV brings to you 6 display modes, 4 sound modes, and 3D Dolby audio. It provides a crystal-clear display and offers 1.07 billion vibrant colours that elevate your entertainment experience. This bezel-less Google TV has a Mediatek quad-core processor that enables seamless navigation. You can mirror your favourite content on the TV screen from your smartphone with the built-in Chromecast feature.",
  },
  {
    image: "./tvs/Dwinci4k.webp",
    name: "Sens Dwinci 4K, 65 inch",
    MRP: "47,999",
    price: "39,999",
    rating: 4.4,
    description:
      "With the SENS QLED TV's exceptional capabilities, take advantage of stunning graphics and top-notch entertainment. This TV gives you the opportunity to discover a universe that will provide you with an experience beyond your senses owing to its magnificent Dolby Vision display and superior sound quality. With this Google TV, you also have simple mobile device control over your TV and access to a wide range of content in a number of genres and languages. Additionally, the superb bezel-less design and sizable viewing area of this TV will treat your eyes to magnificent images. The 20 W speakers on this TV also deliver stunning clarity and an amazing experience. This TV's excellent audio system enables you to comprehend every track and rhythm with breathtaking clarity.",
  },
  {
    image: "./tvs/EnvisionX65.webp",
    name: "Motorola EnvisionX, 65 inch",
    MRP: "44,999",
    price: "41,999",
    rating: 4.3,
    description:
      "This Motorola HDR10 TV brings to you 6 display modes, 4 sound modes, and 3D Dolby audio. It provides a crystal-clear display and offers 1.07 billion vibrant colours that elevate your entertainment experience. This bezel-less Google TV has a Mediatek quad-core processor that enables seamless navigation. You can mirror your favourite content on the TV screen from your smartphone with the built-in Chromecast feature.",
  },
  {
    image: "./tvs/Q55H1001.webp",
    name: "Thomson 4K, 55 inch",
    MRP: "38,999",
    price: "30,999",
    rating: 4.5,
    description:
      "You can enjoy a cinema-like experience from the comfort of your home with the Thomson 126 cm (50) QLED Smart Google TV. With its sleek and sophisticated style, this TV can grab everyone's attention. In addition, this TV's compatibility with HDR10+ and Dolby Vision results in a vivid and realistic cinematic image. Offering up to 40 W of power to its Dolby Atmos sound system, this TV ensures a theatre-like audio experience. And, this TV can meet all of your entertainment needs because it has Google TV support and an integrated Google Assistant. Furthermore, this TV can manage both web browsing and streaming movies.",
  },
  {
    image: "./tvs/MiA32.webp",
    name: "Mi A HD Ready, 32 inch",
    MRP: "14,999",
    price: "10,999",
    rating: 4.4,
    description:
      "With the Xiaomi TV, your living room becomes a gateway to an entertainment paradise. Indulge in breathtaking visuals, captivating sound, and an array of content that suits your preferences perfectly. Whether you're a movie enthusiast, a sports fanatic, or a binge-watching connoisseur, this TV caters to your every need.",
  },
  {
    image: "./tvs/mix50.webp",
    name: "Mi X UHD, 50 inch",
    MRP: "34,999",
    price: "30,999",
    rating: 4.3,
    description:
      "The Xiaomi X Series TV presents an unparalleled home entertainment experience with its 4K clarity, bezel-less design, Dolby Vision, Vivid Picture Engine, extensive colour gamut, MEMC Engine Reality Flow, powerful sound, Google TV integration, Patchwall and Patchwall+ access, optimised performance, and future-ready connectivity. Elevate your entertainment journey with the Xiaomi X Series TV and embark on an extraordinary cinematic adventure within the comforts of your own home.",
  },
  {
    image: "./tvs/UR7500.webp",
    name: "Mi X UHD, 50 inch",
    MRP: "31,990",
    price: "27,990",
    rating: 4.4,
    description:
      "The LG UR7500 TV is a masterpiece of visual technology, delivering breathtaking picture quality, immersive sound, and a range of features that enhance your entertainment experience. With its AI-powered capabilities, seamless connectivity, and gaming optimisation, this TV is a true game-changer. Get ready to be mesmerised by the vivid colours, remarkable details, and cinema-like experience right in your own living room. Elevate your home entertainment to new heights with the LG UR7500 TV.",
  },
  {
    image: "./tvs/55X74K.webp",
    name: "Sony UHD, 55 inch",
    MRP: "55,990",
    price: "52,990",
    rating: 4.6,
    description:
      "Experience a jitter-free and colour-enriched visual experience with the Sony TV which is designed to take your entertainment to an elevated level. This TV is driven by the X1 processor which helps in reducing the noise and boosts the visual quality. Furthermore, the impressive 4K X-Reality PRO of this TV amplifies the visuals and enables you to appreciate up to 4K picture clarity. Additionally, with Motionflow XR 100 sported in this TV, there is no stopping for your entertainment, and you can flawlessly enjoy stutter-free visuals no matter how graphically rich the content is.",
  },
  {
    image: "./tvs/UA55CUE70AKLXL.webp",
    name: "Samsung Crystal Vision, 55 inch",
    MRP: "49,990",
    price: "43,990",
    rating: 4.4,
    description:
      "You can enjoy unlimited entertainment at the comfort of your home with this smart TV. The PurColour technology of this TV delivers vibrant and lifelike picture quality with its wide range of colours. You can view the vibrant colours in its true glory, thanks to the 4K upscaling technology. With the help of voice assistants you can easily find your favourite movies, shows, and much more by using voice commands. Its sleek design with thin bezel provide more screen space and adds beauty to your elegant room.",
  },
  {
    image: "./tvs/65A7K.webp",
    name: "Hisense Tornado, 65 inch",
    MRP: "99,990",
    price: "49,990",
    rating: 4.3,
    description:
      "The Hisense A7K TV with its Front Fire JBL Sound Bar is a gateway to a world of extraordinary entertainment. Feel the magic of live performances, see colors come alive, and immerse yourself in a personalized entertainment experience. With innovative features, seamless connectivity, and unrivaled audiovisual quality, the Hisense A7K takes your home entertainment to dazzling new heights. Elevate your viewing experience and let the Hisense A7K transform your living room into a captivating theater of dreams.",
  },
  {
    image: "./tvs/iFF55U62.webp",
    name: "iFFalcon U62, 65 inch",
    MRP: "29,990",
    price: "24,990",
    rating: 4.2,
    description:
      "With the iFFALCON TV, which was meticulously created to enhance your visual experience, you can watch your favourite movie and experience every action with vivid clarity and amazing multimedia quality. A standout viewing experience with eye-catching luminance, great shadow definition, and brilliant colour reproduction is provided by this TV's HDR function. Additionally, this TV's Dynamic Colour Enhancement technology scales up the low coloured pictures to colour-enriched pictures, enhancing your enjoyment of TV. Moreover, the borderless design of this TV provides for a large viewing area and helps you to fully immerse yourself in the programme you are watching.",
  },
];
const phones = [
  {
    image: "./phones/edge.webp",
    name: "Moto Edge 40, Viva Magenta",
    MRP: "34,999",
    price: "26,999",
    rating: 4.2,
    description:
      "Fuelled with a host of features, this Motorola Edge 40 smartphone brings to you a slim IP68 rated with 30 minutes of underwater dunk resistance. The 3D curved display, bezel-less design, vegan leather option, and sandblasted metal frame add to the phone’s elegance. Powered with a MediaTek 8020 processor, this phone is definitely a game changer. Available with 14 5G bands and WiFi6 networks, experience uninterrupted network connectivity. This phone boasts a 144 Hz 3D curved display and its 1200 nits brightness offers vibrant visuals. Take photography to the next level with the 50 MP main camera with wide aperture of f/1.4 and OIS, 13 MP ultra-wide camera, and 32 MP selfie camera. The 68 W TurboPower charger allows for a quick and full charge in just about ten minutes, and the 4400 mAh battery runs all day with 30 hours of continuous usage. This phone also has the capability of 15W wireless charging for charging on the move. Get a more user-friendly experience with the latest Android 13, and secure your privacy on the phone with the ThinkShield and Moto Secure protective features.",
  },
  {
    image: "./phones/reno.webp",
    name: "OPPO Reno10 5G, Ice Blue",
    MRP: "38,999",
    price: "32,999",
    rating: 4.2,
    description:
      "Explore a range of new features on this Oppo Reno 10 5G smartphone. Capture interesting snaps with the ultra clear Portrait camera. This phone has a 64 MP main camera, 32 MP Telephoto camera, 32 MP selfie camera and a 112 degree wide-angle camera. Make a plethora of possibilities with the Telephoto portrait camera available with this phone. The Pro Portrait Mode lets you capture vivid pictures similar to that of a DSLR camera. This sleek phone weighs only about 185 g and has a 3D curved screen with 120 Hz. Powered with a 5000 mAh battery and 67 W SUPERVOOC charger, this phone runs for an entire day. This Oppo smartphone is equipped with MediaTek Dimensity 7050 SoC Processor and comprises a powerful computing engine. You can explore other features on this phone such as dual stereo speakers, screencast feature, IR remote control, smart AOD functionality and Auto Pixelate for safe file transferring.",
  },
  {
    image: "./phones/pixel.webp",
    name: "Google Pixel 7a, Sea",
    MRP: "43,999",
    price: "35,999",
    rating: 4.1,
    description:
      "Experience the simplicity and seamless transitions with the Google Pixel 7a, which is loaded with a variety of incredible features. The Tensor G2 processor, designed by Google, boosts the Pixel 7a's speed, effectiveness, and security. It's the same chip that's in Pixel 7 and Pixel 7 Pro. Furthermore, With a dual rear camera system and Google Tensor G2's advanced image processing, Pixel 7a lets you create perfect photos every time. It's easy to take amazing pictures in low light, or fix your blurry photos and remove distractions with a few taps in Google Photos. Moreover, the Pixel 7a camera includes Super Res Zoom, so that you can get up close without an extra telephoto lens.",
  },
  {
    image: "./phones/s22.webp",
    name: "Samsung S22 5G, Phantom Black",
    MRP: "85,999",
    price: "39,999",
    rating: 4.4,
    description:
      "Explore a new range of night photography features on this Samsung Galaxy S22 5G smartphone. You can click stunning images even in low light with the Nightography mode. It is designed with a pro-grade camera which comprises a big pixel sensor that welcomes more light for mind-blowing photography. Built with impressive software and hardware, this phone is a game-changer. With a 120 Hz refresh rate and dynamic AMOLED 2x display, you are going to experience immersive screen time. This phone operates on a Snapdragon 8 Gen 1 processor that delivers quick and hassle- free navigation. This device is protected by Corning Gorilla Glass Victus and has an IP68 waterproof rating.",
  },
  {
    image: "./phones/f5.webp",
    name: "POCO F5 5G, Carbon Black",
    MRP: "34,999",
    price: "23,999",
    rating: 4.3,
    description:
      "Experience beastlike performance with the absolutely stunning POCO F5, which is equipped with the King’s Trinity of Performance. The Snapdragon 7+Gen 2 belongs in the same league as the flagship 8 series processors from Snapdragon. The 7+Gen 2 processor from Snapdragon delivers breathtaking performance, leaving you astonished with its processing capability. You can use multiple apps without any lag with 8 GB of RAM and enjoy the liberty of storing enormous media as the phone has up to 256 GB of storage. Your gaming can now be advanced with the striking FEAS 2.2 gaming optimisation tool. The 12-bit panel display offers immersive screen time that is further enhanced with 120 Hz refresh rates. Click awesome pictures with the 7-film camera and a 64 MP triple camera with OIS. The POCO F5 comes with a 4500 mAh battery backup that can charge your phone up to 50% in 12 minutes.",
  },
  {
    image: "./phones/t2.webp",
    name: "vivo T2 Pro 5G, Dune Gold",
    MRP: "26,999",
    price: "23,999",
    rating: 4.3,
    description:
      "The T2 Pro 5G smartphone features a 3D curved AMOLED screen providing a bright display with a peak brightness of 1300 nits. Improve your performance with the MediaTek Dimensity 7200 processor. Powered with a 64 MP main camera with OIS and a night camera with Aura Light, keep clicking stunning pictures all day and night. This smartphone is slim, lightweight and boasts a premium design with AG glass back cover. Available in 8 GB+8 GB RAM, and ROM fused together with an optimised algorithm, you can easily use around 27 apps simultaneously. Powered by a 4600 mAH large battery, you can quickly boost your phone’s charge with the 66 W Flash Charge.",
  },
  {
    image: "./phones/11pro+.webp",
    name: "Realme 11 Pro+ 5G, Oasis Green",
    MRP: "29,999",
    price: "25,999",
    rating: 4.3,
    description:
      "You can capture your memories using the 200 MO OIS SuperZoom camera featured in the realme 11 Pro+ 5G smartphone. The 120 Hz of curved vision display enables you with top-notch viewing experience. Equipped with a 100 W SUPERVOOC charger, this phone charges your phone in about 26 minutes. Powered by the Dimensity 7050 5G chipset, this smartphone offers smooth and efficient performance. Thanks to the 5000 mAh battery, you can go all day long without having to recharge your phone over and over again. This smartphone comes with 12 GB of RAM with an extra 12 GB of dynamic RAM for fast and smooth operations. With the 256 GB of storage, you can store all your data in this smartphone easily.",
  },
  {
    image: "./phones/f54.webp",
    name: "Samsung Galaxy F54 5G, Stardust Silver",
    MRP: "35,999",
    price: "25,999",
    rating: 4.2,
    description:
      "Packed with a myriad of exciting, innovative features, this Samsung Galaxy F54 smartphone is a revolutionary piece of technology. Rise up to your expectations and level up your excitement as this phone is sure to impress you in all its glory. The Nightography mode takes flawless pictures using Pixel Binning and AI technology with its 108 MP camera. No Shake mode caters to the enthusiasm of photo lovers, as you can take incredible photos and videos without any shudder. Moreover, you can take interesting carousel shots, capture impressive pictures in the night with the Astrolapse feature, take beautiful selfies in the dark using the auto night mode, and make your night brighter. Powered by a robust 6000 mAh battery, 5 years of OS and security updates, a smart digital wallet, and a Samsung Exynos 1380 processor, this phone will blow you away with all its revolutionary features. Eco-consciously designed, this phone uses recycled plastic and paper for SIM trays and packaging respectively.",
  },
  {
    image: "./phones/nothing2.webp",
    name: "Nothing Phone (2), Dark Grey",
    MRP: "39,999",
    price: "49,999",
    rating: 4.4,
    description:
      "This premium smartphone is designed with an idea of making it sustainable and be of use to a vast audience. This Nothing Phone (2) has a reduced carbon footprint of 53.45 kg. You get this mobile in a plastic-free packaging and 60% of the paper used comes from recycled sources.",
  },
  {
    image: "./phones/11pro.webp",
    name: "realme 11 Pro 5G, Sunrise Beige",
    MRP: "30,999",
    price: "27,999",
    rating: 4.3,
    description:
      "You can enjoy an immersive display on the 120 Hz curved vision display of the realme Pro 5G smartphone. Featuring a 100 MP OIS ProLight camera, this smartphone allows you to capture memories which you can cherish for a lifetime. This smartphone is powered by the Dimensity 7050 5G chipset for a fast and efficient performance. The 67 W SUPERVOOC charge of this smartphone charges your phone from 0-50% in about 18 minutes so that you do not have to wait long for it to charge. With up to 12 GB + 12 GB of Dynamic RAM, this smartphone ensures smooth and fast operations for you to game and multi-task easily. This smartphone comes with a 5000 mAh battery for a long-lasting battery life.",
  },
  {
    image: "./phones/x5pro.webp",
    name: "POCO X5 Pro 5G, Astral Black",
    MRP: "28,999",
    price: "19,499",
    rating: 4.3,
    description:
      "With the POCO X5 Pro 5G's abundance of exceptional features, enjoy smooth operations and great efficiency. The Snapdragon 778G processor in this smartphone is exceptionally fast and well-optimised. Additionally, it gives you dependable functionality whenever you need it thanks to its astounding 545K AnTuTu score. For an immersive experience, this phone also has a premium-grade AMOLED display and an exceptionally slim bezel. Moreover, this phone's fantastic 108 MP main camera allows you to take stunning photos and enjoy wonderful image processing. This phone's camera also supports 4K video recording at 30 frames per second.",
  },
  {
    image: "./phones/g54.webp",
    name: "MOTOROLA g54 5G, Mint Green",
    MRP: "21,999",
    price: "15,999",
    rating: 4.1,
    description:
      "Stay productive and improve your performance with this resourceful smartphone that has a myriad of features to its name. With 12 GB RAM and 256 GB storage, you can seamlessly perform a multitude of tasks at ease and stack up a heap of content with the huge storage space. The 7020 octa-core MediaTek Dimensity processor delivers a power-packed performance. The 50 MP OIS camera is equipped with Quad Pixel technology and the 16 MP front camera lets you cherish your photography experience. Powered by a 6000 mAh battery supported with a 33 W charger, you can use this mobile for hours together without fearing power drop. With 14 5G bands, experience superfast network connectivity. Experience immersive entertainment with the 120 Hz with 16.6 cm FHD+ Display. Featuring a premium glass finish, stereo speakers with Dolby Atmos and Moto Spatial sound, IP52 rating, this phone lets you have an incredible experience.",
  },
];
const headphones = [
  {
    image: "./headphones/310AP.webp",
    name: "Sony 310AP, Black",
    MRP: "2,190",
    price: "799",
    rating: 4.2,
    description:
      "Just plug in these over-the-head headphones and enjoy listening to music in high clarity wherever you are, and whenever you want. With these headphones in your bag, you can go places without feeling bored as these headphones deliver great music quality.",
  },
  {
    image: "./headphones/CH520.webp",
    name: "Sony WH-CH520, Black",
    MRP: "5,990",
    price: "4,490",
    rating: 4.2,
    description:
      "Combining long-lasting performance with personalised sound quality, the Sony WH-CH520 Wireless Headphones are an excellent addition to your day-to-day life. They boast a playback time of up to 50 hours, making them ideal for long listening sessions. Also, they feature USB Type-C quick charging, providing up to 90 minutes of playback with just 3 minutes of charging time. Moreover, these headphones come with the EQ Custom feature on the Sony Headphones Connect App, allowing you to personalise the sound to suit your preferences.",
  },

  {
    image: "./headphones/CH720N.webp",
    name: "Sony WH-CH720N, Black",
    MRP: "14,990",
    price: "7,990",
    rating: 4.4,
    description:
      "You can experience truly immersive audio on these noise-cancelling Sony headphones. It uses Dual Noise Sensor Technology and Integrated Processor V1 to enhance noise cancelling. These lightweight headphones offer comfort to your ears as you indulge in music for long hours. It uses USB Type-C for quick charging and provides long-lasting battery life of up to 50 hours. These Sony headphones can be connected to two devices at the same time allowing you to switch devices with a single touch.",
  },
  {
    image: "./headphones/770NC.webp",
    name: "JBL Tune 770NC, Black",
    MRP: "9,999",
    price: "5,999",
    rating: 4.2,
    description:
      "Adaptive Noise Cancelling with Smart Ambient :Adaptive Noise Cancelling means zero distractions when it’s time to focus on your studies—or get your groove on. And if you want to hear the world around you without removing your headphones, Ambient Aware and Talk Thru sharpen the sounds of your surroundings or voices. Easily activate these Ambient Sound Control modes through the JBL Headphones app.",
  },
  {
    image: "./headphones/1000XM4.webp",
    name: "Sony WH-1000XM4, Black",
    MRP: "19,999",
    price: "29,999",
    rating: 4.6,
    description:
      "You can enjoy an optimised listening experience with the Sony WH-1000XM4 Bluetooth Headphones. With their Digital Noise Cancellation, these headphones allow you to clearly hear every tune, note, and word with clarity despite your surroundings. Additionally, incorporating Dual Noise Sensor technology and featuring up to two microphones on each earcup, these headphones effectively capture ambient sounds and transmit the data to the HD Noise Cancelling Processor QN1. Also, these headphones provide enhanced call quality through their incorporation of up to five inbuilt microphones and sophisticated audio signal processing technology.",
  },
  {
    image: "./headphones/XB910N.webp",
    name: "Sony WH-XB910N, Black",
    MRP: "19,990",
    price: "11,088",
    rating: 4.4,
    description:
      "Dive deep into music and work whatever you want to concentrate on with the Sony Bluetooth Headset. This headphone comes with an in-built microphone and Bluetooth Connectivity option so that you can enjoy smooth conversations and music flow every day. Moreover, it features Extra Bass technology and a Noise Cancellation feature to provide you with an uninterrupted audio experience.",
  },
  {
    image: "./headphones/551ANC.webp",
    name: "boAt Rockerz 551, Sage Green",
    MRP: "7,990",
    price: "3,499",
    rating: 4,
    description:
      "Hybrid ANC- Say adios to the chaos with Active Noise Cancellation feature and elevate the vibe to a whole new level of pleasure with Rockerz 551ANC, delivering up to 35dB Hybrid ANC.",
  },
  {
    image: "./headphones/760ANC.webp",
    name: "JBL Tune 760NC, Black",
    MRP: "7,999",
    price: "4,499",
    rating: 3.7,
    description:
      "You can listen to your favourite songs in high-quality audio and have clear conversations with the JBL Tune 760NC Wireless Headset. It features Active Noise Cancellation technology, enabling you to listen to music in a noise-free environment. In addition, the long-lasting battery in this headset lets you enjoy its performance without interruptions for up to 50 hours. Furthermore, owing to its wired mode, you can listen to music for as long as you want with the detachable AUX cable.",
  },
  {
    image: "./headphones/800s.webp",
    name: "Sennheiser HD 800s, Black",
    MRP: "39,990",
    price: "25,499",
    rating: 4.5,
    description:
      "Amplify your acoustic experience with this Sennheiser’s Wired Headphone which comes with an innovative sound absorber technology. It has a 56 mm sound transducer and has a stylish design which can make you want to wear it at all times. It also comes with uncovered ear cups that help in providing an enhanced audio experience for you.",
  },
  {
    image: "./headphones/g700.webp",
    name: "Sony Inzone H7 WH-G700, White",
    MRP: "21,990",
    price: "9,990",
    rating: 4.3,
    description:
      "Comfortable enough to wear for hours and with excellent sound quality, the wireless INZONE H7 gaming headset is the perfect partner for any game. Plus, with 360 Spatial Sound for Gaming that lets you hear even more precisely and detect targets or opponents, it'll have your back when you need it.",
  },
  {
    image: "./headphones/HDPHS700.webp",
    name: "Bose HDPHS-700, Silver",
    MRP: "34,990",
    price: "22,990",
    rating: 4.4,
    description:
      "Nothing in the environment will come in the way of you and your music when you are wearing this headset from Bose. This noise-cancelling Bluetooth headset comes with the 4-point Microphone system for effective background noise cancellation. What’s more, you can use simple touch gestures to make any adjustments to your music.",
  },
  {
    image: "./headphones/k72.webp",
    name: "AKG K72, Black",
    MRP: "5,990",
    price: "2,990",
    rating: 4.4,
    description:
      "These AKG Headphones are here to ensure that you get to listen to all your favourite music in style and comfort. The exposed headband design helps keep the headphones light. The earpads are breathable and lightweight and they comfortably sit on your ears. After undergoing different tests, these headphones ensure long-lasting use. With 40 mm drivers, you can enjoy every detail while grooving to your favourite tunes.",
  },
];
const laptops = [
  {
    image: "./laptops/yoga-slim-6.webp",
    name: "Lenovo Yoga Slim 6, Storm Grey",
    MRP: "79,990",
    price: "57,990",
    rating: 4.1,
    description:
      "Ultrathin at 14.9mm & Light from 1.39kg. An all-new design where aesthetic excellence meets curved comfort with the humanized design, all in a smooth and minimalistic finish.",
  },
  {
    image: "./laptops/galaxy-book-2.webp",
    name: "Samsung Galaxy Book2 Pro, Silver",
    MRP: "89,990",
    price: "69,990",
    rating: 4.5,
    description:
      "The world’s thinnest in its class. With plenty of power inside. Galaxy Book2 Pro sacrifices nothing on performance yet weighs in super-light with a slim profile.",
  },
  {
    image: "./laptops/macbook.webp",
    name: "Apple 2022 MacBook Air M2, Midnight",
    MRP: "99,990",
    price: "89,990",
    rating: 4.7,
    description:
      "Charged in a blazing-fast speed with the next-level M2 chip, this redesigned Apple’s notebook comes with mind blowing and has an excellent battery backup that can last up to 18 hours, which comes with an aluminium enclosure.",
  },
  {
    image: "./laptops/hpwith1155G7.webp",
    name: "HP (2023) i5 1155G7, Natural Silver",
    MRP: "64,990",
    price: "52,990",
    rating: 4.7,
    description:
      "8 threads and 8MB L3 cache deliver fast processing speeds and instant responsiveness. The Intel Iris Xᵉ graphics help you dive into crisp, stunning visuals.",
  },
  {
    image: "./laptops/swift3.webp",
    name: "Acer Swift 3 Intel EVO, Lux Gold",
    MRP: "80,990",
    price: "59,990",
    rating: 4.4,
    description:
      "Compact and lightweight, the Acer Swift 3 SF314-71 Laptop is easy to carry along wherever you go. With its up to 2.8K OLED display boasting an aspect ratio of up to 16:10, this laptop ensures high visual quality. In addition, this laptop delivers an immersive experience across a range of activities, including photo editing, movie watching, and enjoying its exceptional contrast and vivid colours. Moreover, equipped with a 12th Gen Intel Core processor, this laptop enhances multitasking capabilities and overall productivity.",
  },
  {
    image: "./laptops/bravo15.webp",
    name: "MSI Bravo 15, Black",
    MRP: "72,990",
    price: "57,990",
    rating: 4.5,
    description:
      "Experience the power of MD Ryzen 5000 Mobile Processor with AMD Radeon RX 6500M Graphics card for immersive gaming. You can connect instantly to the gaming world with WiFi 6E. It has a high refresh rate to provide you with smooth visuals. The thermal solutions for CPU and GPU with CoolerBoost 3 enables you with uninterrupted gaming sessions. It has a wide range of ports so that you can connect multiple devices at the same time.",
  },
  {
    image: "./laptops/inspiron.webp",
    name: "Dell Inspiron, Platinum Silver",
    MRP: "72,990",
    price: "52,990",
    rating: 4.5,
    description: `The speed you need: Featuring 11th Gen Intel Core i5 processor with 512GB SSD storage for a more responsive and quieter performance. Just your type: Get an expansive keyboard with a numeric keypad, 6.4% larger keycaps and a spacious touchpad that makes it easier to navigate your content. All day any day: Work in comfort thanks to a lift hinge that raises your device to an ergonomic angle, which provides a more comfortable typing angle. Easy on the eyes: Dell ComfortView Low Blue Light (LBL) solutions help reduce harmful blue light emissions and optimise eye comfort over extended viewing. More to see: Get more screen in a 15.6" laptop with three-side narrow borders for an immersive FHD viewing experience.`,
  },
  {
    image: "./laptops/pavilion_eyesafe.webp",
    name: "HP Pavilion Eyesafe, Natural Silver",
    MRP: "69,990",
    price: "55,990",
    rating: 4.4,
    description: `You can complete office assignments, watch movies, play games, and do a lot more with the HP Pavilion 14 Laptop. Its high resolution and dynamic colours render life-like images and visuals that provide an engrossing experience. Also, integrated with AMD processors and graphics card, this laptop enables smooth and rapid completion of tasks even while you’re on the go. Moreover, its speaker grill and packaging are made from ocean-bound plastic, which is enduring as well as safe for the environment.`,
  },
  {
    image: "./laptops/gf63.webp",
    name: "MSI GF63, Black",
    MRP: "84,990",
    price: "54,990",
    rating: 4.3,
    description: `The GeForce RTX 30 Series Laptops epitomise outstanding technology, providing unmatched performance for gamers and creators alike. Witness the power of Ampere, combined with RT Cores, Tensor Cores, and streaming multiprocessors, redefining realism and transforming your overall experience. Embrace the cool and collected performance, enjoy up to 7 hours of productivity, and indulge in the world of Hi-Resolution Audio, where music comes alive in its purest form.`,
  },
  {
    image: "./laptops/gf63.webp",
    name: "Asus Vivobook S14, Black",
    MRP: "84,990",
    price: "54,990",
    rating: 4.3,
    description: `The GeForce RTX 30 Series Laptops epitomise outstanding technology, providing unmatched performance for gamers and creators alike. Witness the power of Ampere, combined with RT Cores, Tensor Cores, and streaming multiprocessors, redefining realism and transforming your overall experience. Embrace the cool and collected performance, enjoy up to 7 hours of productivity, and indulge in the world of Hi-Resolution Audio, where music comes alive in its purest form.`,
  },
  {
    image: "./laptops/flow_x13.webp",
    name: "Asus ROG Flow X13, Off Black",
    MRP: "99,990",
    price: "94,990",
    rating: 5,
    description: `The GeForce RTX 30 Series Laptops epitomise outstanding technology, providing unmatched performance for gamers and creators alike. Witness the power of Ampere, combined with RT Cores, Tensor Cores, and streaming multiprocessors, redefining realism and transforming your overall experience. Embrace the cool and collected performance, enjoy up to 7 hours of productivity, and indulge in the world of Hi-Resolution Audio, where music comes alive in its purest form.`,
  },
  {
    image: "./laptops/flow_x13.webp",
    name: "Asus TUF Gaming F15, Graphite Black",
    MRP: "74,990",
    price: "50,990",
    rating: 4.3,
    description: `In the vast sea of gaming laptops, the ASUS TUF Gaming F15 emerges as the beacon of excellence, blending unparalleled power with unmatched durability. Whether you’re a gaming pro or just stepping into the arena, this is the ally you’ve been waiting for. Welcome to the next level.`,
  },
];
const Navbar = () => {
  let value = useContext(AuthContext);
  let {isAuth} = value.authState;
  console.log(value.authState.cart.length);
  const products = [
    ...phones.map((el) => ({ ...el, category: "phones" })),
    ...headphones.map((el) => ({ ...el, category: "headphones" })),
    ...tvs.map((el) => ({ ...el, category: "tvs" })),
    ...laptops.map((el) => ({ ...el, category: "laptops" })),
  ];
  const [results,setResults] = useState(["No results found"]);
  const [search,setSearch] = useState("")
  useEffect(()=>{
    setResults(products.filter(el=>{
      const name = el.name.toLowerCase();
      const query = search.toLowerCase();
      return name.includes(query);
    }))
  },[search])
  return (
    <div className={styles.container}>
      <NavLink title="Home" to="/">
        {homeSVG}
      </NavLink>
      <div className={styles.searchContainer}>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          className={styles.searchInput}
          placeholder="Search Products"
        />
        <div className={styles.results}>
          {results[0] === "No results found" || search === "" || results.length===0 ? (
            <h4 className={styles.h4}>No results found</h4>
          ) : (
            results.map((el, i) => {
              if (i < 4) return <p>{el.name}</p>;
            })
          )}
        </div>
      </div>
      <Hamburger className={styles.hamburger} />
      <div className={styles.options}>
        <NavLink title="Products" to="/products">
          {productSVG}
        </NavLink>
        <NavLink title="Wishlist" to="/wishlist">
          {wishlistSVG}
        </NavLink>
        <NavLink title="Cart" to="/cart" style={{position: "relative"}}>
          {cartSVG}
        </NavLink>
        <NavLink onClick={() => { 
          if(isAuth) value.setAuthState({...value.authState, isAuth: false, cart: []})
         }} title={isAuth ? "Log Out" : "Log In"} to="/signup">
          {isAuth ? loggedinSVG : loginSVG}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar
