// Artwork data with Camila's images and prompts
const artworks = [
    {
        id: 1,
        imageUrl: "Images/Camila - Gallery/1.jpeg",
        prompt: "A high-resolution photograph of a woman in a striking, avant-garde fashion ensemble. She is adorned with a sheer, deep blue fabric draped over her head, creating a veil-like effect that partially obscures her delicate features while revealing subtle makeup. Long, dangling earrings cascade down to her shoulders, adding elegance and contrast against the dark background. Her dress is intricately designed, with a black lace-like top featuring elaborate gold and silver embroidery. Below the lace, layered fabric showcases floral motifs in earthy tones of brown and green, creating a rich and textured composition. The background is a solid dark color, sharply contrasting the vibrant blue of the veil and the ornate patterns of the dress, making her presence striking and enigmatic. The overall aesthetic blends modern fashion with artistic sophistication, emphasizing detail, texture, and a mysterious allure",
        tags: [
            '#portrait', '#elegant', '#fashion', '#dark', 
            '#woman', '#indoor', '#formal', '#dramatic'
        ]
    },
    {
        id: 2,
        imageUrl: "Images/Camila - Gallery/2.jpeg",
        prompt: "Low- angle selfie shot frames of a dark blue-green hair woman sitting confidently at a cluttered desk, surrounded by neon- lit peripherals and computer screens in a dimly lit room. Her piercing blue eyes lock onto the camera as she styles her ponytail with a hint of defiance, warm smile. The soft glow of the neon lights casts an otherworldly ambiance on her wear- pink home clothes, emphasizing her relaxed yet empowered demeanor"
    },
    {
        id: 3,
        imageUrl: "Images/Camila - Gallery/3.jpeg",
        prompt: "woman wearing a long japanese kimono. Outdoor, windy. She has dark blue green hair."
    },
    {
        id: 4,
        imageUrl: "Images/Camila - Gallery/4.jpeg",
        prompt: "anime, art, anime woman wearing a kimono. Outdoor, windy. She has dark blue green hair."
    },
    {
        id: 5,
        imageUrl: "Images/Camila - Gallery/5.jpeg",
        prompt: "woman cosplaying as wonder woman. intense action, extreme dynamic pose, dark blue-green haired woman. mid-motion, her body twisting with raw energy, limbs extending forcefully, hand reaching for the viewer offering help, dramatic perspective foreshortening creating impact. She is angry. extreme motion blur on background elements emphasizing speed, foreground object partially obstructing the view for immersive depth, sparks or debris scattering from movement, lighting direction adding cinematic drama, vivid contrast between character and background, exaggerated perspective making the scene feel larger than life, chaotic energy captured in a single explosive moment"
    },
    {
        id: 6,
        imageUrl: "Images/Camila - Gallery/6.jpeg",
        prompt: "woman cosplaying as Spider-Gwen, with a white hood and white sleeves with intricate web patterns in pink and blue on the under side of the hood and sleeves. intense action, extreme dynamic pose, dark blue-green haired woman. mid-motion, her body twisting with raw energy, limbs extending forcefully, hand reaching for the viewer offering help, dramatic perspective foreshortening creating impact. Her suit is a textured, photorealistic spandex weave with intricate web patterns and glowing white accents. Spiderman costume. Clothes flowing wildly from momentum, extreme motion blur on background elements emphasizing speed, foreground object partially obstructing the view for immersive depth, sparks or debris scattering from movement, lighting direction adding cinematic drama, vivid contrast between character and background, exaggerated perspective making the scene feel larger than life, chaotic energy captured in a single explosive moment"
    },
    {
        id: 7,
        imageUrl: "Images/Camila - Gallery/7.jpeg",
        prompt: "woman with dark blue-green hair, red eyes sitting on a luxurious sofa with spread out legs. She has busty breasts which is illuminated by the soft glow of bioluminescent light. Her voluminous dark twin tails hairstyle with bangs are very long. She smile softly. She is wearing cute frill dress with deep clevage and very short skirt. Lots sparkles of pink smoke in the shape of hearts patterns curl around her. The overall composition conveys a sense of mystery and enchantment."
    },
    {
        id: 8,
        imageUrl: "Images/Camila - Gallery/8.jpeg",
        prompt: "2d Anime, anime art, intense action, extreme dynamic pose, dark blue-green haired woman. Anime character mid-motion, her body twisting with raw energy, limbs extending forcefully, hand reaching for the viewer like offering help, dramatic perspective foreshortening creating impact, black leather jacket and jeans. Clothes flowing wildly from momentum, extreme motion blur on background elements emphasizing speed, foreground object partially obstructing the view for immersive depth, sparks or debris scattering from movement, lighting direction adding cinematic drama, vivid contrast between character and background, exaggerated perspective making the scene feel larger than life, chaotic energy captured in a single explosive moment"
    },
    {
        id: 9,
        imageUrl: "Images/Camila - Gallery/9.jpeg",
        prompt: "The photo features a woman with long, straight dark blue-green hair that cascades down past their shoulders. She is wearing a black cap turned backward, which frames their face. The individual has a fair complexion and is adorned with subtle makeup, including defined eyebrows, eyeliner, and a glossy lip color. Around their neck, they wear a thin black choker necklace with a small, intricate pendant hanging from it. The background is plain and light-colored, which helps to highlight the subject's features and attire. The overall look is stylish and modern, with a touch of edginess due to the cap and choker. j_art, anime, anime art"
    },
    {
        id: 10,
        imageUrl: "Images/Camila - Gallery/10.jpeg",
        prompt: "Realistic photo of a woman with dark blue-green hair. Slightly side view and looking at the camera. slightly squinting her eyes. Her face shows a flirty, sensual expression has she is licking lips, her tongue is extended over a part of her upper lips. She is in a restaurant, leaning on the table and slightly bent forward. Wearing revealing dress. Cleavage is showing. She is seductive and sexy."
    },
    {
        id: 11,
        imageUrl: "Images/Camila - Gallery/11.jpeg",
        prompt: "anime woman in the roof. It is windy. She has dark blue-green hair. The sky is clear and it is a good weather!"
    },
    {
        id: 12,
        imageUrl: "Images/Camila - Gallery/12.jpeg",
        prompt: "Anime art+++, anime+++, japanese anime art, 2d anime woman wearing a mini skirt. she has dark blue-green hair. She is outside. It is windy."
    },
    {
        id: 13,
        imageUrl: "Images/Camila - Gallery/13.jpeg",
        prompt: "woman wearing a short sweatshirt that exposes her underboobs, underboob style, no nipples. just underboobs"
    },
    {
        id: 14,
        imageUrl: "Images/Camila - Gallery/14.jpeg",
        prompt: "woman with dark blue green hair in red carpet. She's wearing a white golden dress, people in the background are taking photos., blurred background"
    },
    {
        id: 15,
        imageUrl: "Images/Camila - Gallery/15.jpeg",
        prompt: "a dark blue-green haired woman, sitting with cross legs while wearing a loose blouse and a miniskirt. SHe is also wearing a black high-heels sandal. She is in a fancy place doing a photo shoot. The background is white wall. she is sitting in a unique chair while looking at the camera. She looks fancy and the vines is fancy"
    },
    {
        id: 16,
        imageUrl: "Images/Camila - Gallery/16.jpeg",
        prompt: "cinematic shot of a beautiful magical fairy, beautiful face details and long hair, casting colorful magical glowing spells with both hands, colorful magical fairy wings on her back, magical forest in background with glowing mushrooms, hkmagic, super realistic, style of epic cinematic, amazing quality"
    },
    {
        id: 17,
        imageUrl: "Images/Camila - Gallery/17.jpeg",
        prompt: "photo of a blue-green hair woman leaning against a tree, wearing a deep knitted sweater. Her serene, contemplative expression shows a soft smile and gentle, thoughtful gaze. The background features blurred dappled light and trees with warm, muted tones of burnt orange and reddish brown. Soft, diffused lighting highlights the detailed textures of the sweater and tree bark. The slightly low-angle composition emphasizes her figure, conveying calm, intimacy, and vintage 60s/70s"
    },
    {
        id: 18,
        imageUrl: "Images/Camila - Gallery/18.jpeg",
        prompt: "close-up of Artistic makeup with face jewels and iridescent highlighter, captured under a UV light for a glowing effect. set against a soft, pastel background"
    },
    {
        id: 19,
        imageUrl: "Images/Camila - Gallery/19.jpeg",
        prompt: "wide and low angle, cinematic, fashion photography. dark blue-green hair Woman sitting on floor wearing a oversized pink tshirt showing her cleavage, and pink bikini. The background is a gradient, red, pink and orange, studio setting"
    },
    {
        id: 20,
        imageUrl: "Images/Camila - Gallery/20.jpeg",
        prompt: "cyberpunk, anime, woman holing a gun. She has katana on her back. Angry. slight over-the-shoulder pose. Her back is partially turned to the camera, with her face looking back and angry. Blood in the floor. She is in rooftop. Neon lights, cyberpunk anime"
    },
    {
        id: 21,
        imageUrl: "Images/Camila - Gallery/21.jpeg",
        prompt: "doorbellCam, woman wearing bikini, standing outside the doorbell cam doorbellcam neighborhood background, holding beer."
    },
    {
        id: 22,
        imageUrl: "Images/Camila - Gallery/22.jpeg",
        prompt: "woman with green hair highlights. Wearing a sexy leather jumpsuit next to a sports race car in a race track."
    },
    {
        id: 23,
        imageUrl: "Images/Camila - Gallery/23.jpeg",
        prompt: "photorealism, surreal portrait of a woman, side view, her head dramatically titled back, wavy dark-blue green hair, dressed leather suit, use a palette of pastel shades to create a serene and otherworldly atmosphere, photorealistic, vibrant hot pink backdrop, vibrant hot pink backdrop, visualize using a camera setup that mimics a large aperture, focusing solely on the silhouette's edge, while a low ISO maintains the richness of color without grain"
    },
    {
        id: 24,
        imageUrl: "Images/Camila - Gallery/24.jpeg",
        prompt: "woman long wavy dark blue green hair, wearing an oversized white t-shirt. woman, g-string NIKE Logo, sexy underwear, panty. She is in a slight over-the-shoulder pose. Her back is partially turned to the camera, with her face looking back and smiling. plain white wall background"
    },
    {
        id: 25,
        imageUrl: "Images/Camila - Gallery/25.jpeg",
        prompt: "A high-fashion image of a model wearing a new designer's pink avant-garde outfit, posed against a simple, contrasting background. Dark blue-green hair."
    },
    {
        id: 26,
        imageUrl: "Images/Camila - Gallery/26.jpeg",
        prompt: "a woman with curly dark blue green hair, wearing japanese school uniform and miniskirt. Background is plain white wall. her soft shadow in the wall."
    },
    {
        id: 27,
        imageUrl: "Images/Camila - Gallery/27.jpeg",
        prompt: "Beautiful woman with shoulder-length teal ombré hair, wearing an off-shoulder white flowing dress with a deep neckline and ruffled details. Standing in a modern luxury villa with tall white pillars and a serene reflecting pool. Soft natural lighting enhances her glowing skin and glamorous features. High-fashion editorial style, elegant and serene atmosphere, cinematic composition, summer vibe, ultra-realistic, 4K resolution."
    },
    {
        id: 28,
        imageUrl: "Images/Camila - Gallery/28.jpeg",
        prompt: "doorbellCam woman wearing bikini standing outside the doorbell cam doorbellcam neighborhood background. she is holding beer bottle."
    },
    {
        id: 29,
        imageUrl: "Images/Camila - Gallery/29.jpeg",
        prompt: "A woman kneels in shallow water with splashes around her, wearing a wet, lace bodysuit. She gazes confidently at the camera, with loose, damp hair falling over her shoulders. The scene is illuminated by vibrant orange and blue lighting, with water droplets sparkling in the air. The background features blurred warm and cool tones, enhancing the dramatic, vivid atmosphere."
    },
    {
        id: 30,
        imageUrl: "Images/Camila - Gallery/30.jpeg",
        prompt: "A captivating portrait of a young woman, exuding a friendly yet subtly flirtatious aura. She sits casually at a pristine white desk in her brightly lit bedroom, bathed in the warm glow of natural sunlight streaming through a nearby window. Her pose is relaxed yet alluring; legs slightly crossed at the ankles, one hand gently resting on the desk, the other loosely holding a pen. She wears a snug, brown and beige horizontally striped sweater, accentuating her slender frame, paired with a short blue miniskirt and high-knee brown socks, adding a touch of youthful playfulness. Her hair, styled in a casual half-up, half-down do with soft, natural waves, frames her heart-shaped face; a few loose strands playfully caress her cheeks. Her expression is soft, her lips slightly parted in a gentle smile, her eyes sparkling with mischief. The overall mood is inviting and lighthearted, reminiscent of a candid snapshot. The composition is employing a shallow depth of field"
    },
    {
        id: 31,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_3682.png",
        prompt: "A stunning futuristic depiction of a female astronaut aboard an advanced spacecraft,cyborg woman, wearing a sleek, form-fitting, revealing neon pink holographic spacesuit. The suit is designed with a futuristic aesthetic, blending cutting-edge technology and elegance. The material is a smooth, see-through fabric with a subtle sheen, accentuating her athletic physique. The outfit features deep cutouts in the chest and side areas, exposing skin in a way that highlights her form"
    },
    {
        id: 32,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4043.JPG",
        prompt: "Full body image of a Gorgeous fair skinned woman, wearing a red leather halter lace up front cropped top, ultra low rise black ultra microskirt, cleavage, black stilettos, masterpiece, 8k, octane"
    },
    {
        id: 33,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4073.JPG",
        prompt: "Captivating woman walks through a crowded mall, dressed in small white v neck t shirt, cropped, toned stomach, cute pink low rise micro skirt, pink high heels, in the background men and women stare as she passes, sharp focus, depth of field, masterpiece, 8k, Cinematic tone, realistic textures, DSLR photography, Canon EOS 5D, f/1.4 aperture, ISO 200, and smooth skin details with ambient light, 32mm, intricate, physically-based rendering"
    },
    {
        id: 34,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4074.JPG",
        prompt: "Close up portrait, gorgeous youthful woman, dressed in realistic lace lingerie, light shines through a window, cascading over her alluring form, juxtaposition of cinematic lights and deep cascading shadows"
    },
    {
        id: 35,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4075.JPG",
        prompt: "Black and white portrait, noir style, gorgeous youthful woman with glasses, sultry pose, posed on a beach, clear sky and ocean in the background dressed in risqué micro thong bikini, mini vivid pink bikini barely covering her nipples accentuating her cleavage, micro pink thong"
    },
    {
        id: 36,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4076.JPG",
        prompt: "In a magical forest, reminiscent of a fantasy realm, a beautiful female fairy emerges from an illuminating vortex-like hole. Dressed in a sexy and revealing outfit that shimmers and glows. intricate, ethereal patterns dance with the light.Expression of wonder. Small fairies flutter around her, their wings leaving trails of stardust in the air. The forest is adorned with illuminated flowers and mushrooms, casting a soft, dreamy glow over the entire scene. 4K, ultra-fine precision,, hkmagic"
    },
    {
        id: 37,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4077.JPG",
        prompt: "a black-and-white noir portrait of a woman on a vintage cobblestone street at night, drenched in a moody, atmospheric fog. The soft glow of lampposts illuminates the scene, light diffusing through the thick mist and casting long, dramatic shadows. a woman standing under a streetlamp, striking 1940s-style dress glowing in vibrant red, creating a dramatic and captivating focal point. dress is elegantly detailed, with flowing fabric and a classic silhouette that exudes vintage glamour, front pov"
    },
    {
        id: 38,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4078.JPG",
        prompt: "A stunning futuristic depiction of a female astronaut aboard an advanced spacecraft,cyborg woman, wearing a sleek, form-fitting, revealing neon pink holographic spacesuit. The suit is designed with a futuristic aesthetic, blending cutting-edge technology and elegance. The material is a smooth, see-through fabric with a subtle sheen, accentuating her athletic physique. The outfit features deep cutouts in the chest and side areas, exposing skin in a way that highlights her form"
    },
    {
        id: 39,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4079.JPG",
        prompt: "Extreme realistic depiction of Two fierce female jiu-jitsu athletes compete intensely: yellow floor mat, referee in tuxedo, blurred crowd cheering, one in a pink gi with a purple belt, the other in a blue gi. Bright lighting captures their competitive spirit and dynamic movements, double leg takedown, woman throwing opponent to the floor, bright lighting, masterpiece, perfect hands, no mutations"
    },
    {
        id: 40,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4081.JPG",
        prompt: "Extreme realistic depiction of a gorgeous woman Brazilian jiu jitsu athlete, pink sports bra, large cleavage, large breasts, her black gi wrapped around her, tied with a purple belt. Black gi pants, An intense look on her face, posed in a fighters stance, bent forward at the waist hands up. Her hair tightly braided on her head"
    },
    {
        id: 41,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4082.JPG",
        prompt: "Extreme realistic depiction of a WWE Diva, women dressed in a sequined bra, skimpy sports bra, extreme cleavage, neon pink booty shorts, thicc hips, thicc thighs, large WWE championship belt wrapped around her toned waist. She stands in the ring smiling as the huge crowd cheers"
    },
    {
        id: 42,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4083.JPG",
        prompt: "Photo realistic portrait of A mesmerizing woman with striking green eyes, glasses and defined brows lounges in a comfy leather chair, in a rich textured study, dressed in a soft strapless sun dress, showcasing elegance. High-resolution detail, sharp focus, and soft lighting, deep shadows enhance her perfect, symmetrical features."
    },
    {
        id: 43,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4084.JPG",
        prompt: "A bright and airy boudoir portrait of a woman standing by a large window. Wearing a pink lingerie set that contrasts beautifully with the soft natural light streaming in. Her long, wavy hair cascades over her shoulders, small floral tattoo on her hip. She leans casually against the window frame, her relaxed pose and smile creating a playful and intimate atmosphere. The blurred urban background adds depth and context to the composition. Rendered in 8k, focusing on natural light, ultra realistic"
    },
    {
        id: 44,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4085.JPG",
        prompt: "Extreme Hyperrealistic art sharp focus, detailed edges, A perfect photo of a muscular woman posing for a picture in a gym, solo, long hair, looking at viewer, smile, shorts, teeth, grin, muscular, tank top, muscular male, veins, realistic, white tank top, biceps, photo background, veiny arms, perfect face, Extremely high-resolution details, photographic, realism pushed to extreme, fine texture, incredibly lifelike"
    },
    {
        id: 45,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4086.JPG",
        prompt: "Woman standing in cozy library, dressed in cutout tank top, crop top tank top, daring cutout, extreme cleavage, low rise jean skirt, micro skirt, tiny skirt"
    },
    {
        id: 46,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4087.JPG",
        prompt: "Woman standing in cozy library, dressed in cutout tank top, crop top tank top, daring cutout, extreme cleavage, low rise jean skirt, micro skirt, tiny skirt"
    },
    {
        id: 47,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4088.JPG",
        prompt: "hyper realistic a full shot close up of a gorgeous brazilian womans body taking a walk on the beach in a pink string bikini, matching gstring; the scene is captured from behind with her face turned back towards the camera revealing an outstanding smile; beautiful pastel colored skies, waves coming to the shore along with palm trees 8k UHD"
    },
    {
        id: 48,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4089.JPG",
        prompt: "picture of woman, wearing a (pink sports top with the letters: \"Gym Rat\" written in gold+++) and black gym shoes and black gym shorts, showing cleavage of large breasts, sitting on the floor in a gym, holding dumbbells, dark and blurred gym background"
    },
    {
        id: 49,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4090.JPG",
        prompt: "Black and white portrait, noir style, sensual woman, laying back on a leather couch, eyes closed, holding a red rose under her nose, wearing a sultry red satin dress, heart shaped cutout, dark background, soft light highlights her lithe form, masterpiece"
    },
    {
        id: 50,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4092.JPG",
        prompt: "Gorgeous goth woman, runway model, dark eye shadow, black Lipstick, skimpy black leather bra, leather cleavage, matching black leather gstring, garter belt, sheer black thigh high stockings, bright pink stilettos. Runway walk, bright dynamic lighting, photoshoot"
    },
    {
        id: 51,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4093.JPG",
        prompt: "Extreme realistic depiction of a woman leaning against a bar, whisker bar, dressed in open leather jacket, cleavage, perky breasts, black leather leggings, black stilettos"
    },
    {
        id: 52,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4095.JPG",
        prompt: "A chaotic carnival backdrop bursts with color, where a woman cosplay as Harley Quinn in striking red and black booty shorts and halter top exudes wild energy. (massive breasts+++), (slender very narrow waist++++), (extremely wide hips+++++) Her manic expression complements her vibrant pigtails, as she grips a bat playfully, radiating mischievousness."
    },
    {
        id: 53,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4096.JPG",
        prompt: "Goth woman, pitch black hair, dark makeup, black lipstick, serious expression, tattooed chest, cleavage, pink bodysuit, \"this is my happy face\" written in bold white letters, black lace miniskirt. No nipples"
    },
    {
        id: 54,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4097.JPG",
        prompt: "cinematic shot of a beautiful dark witch, necromancer, woman dressed in a tight black bustier, black flowing skirt, side slit to hip, black shawl draped over shoulders, holding a gnarled black staff, purple magic emanates from her hands and staff, an icy aura surrounds her, set in a dark cave, skulls, multi hued candles, hkmagic, super realistic, style of epic cinematic, amazing quality"
    },
    {
        id: 55,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4098.JPG",
        prompt: "A striking noir portrait, black and white, focusing on a woman's tranquil face adorned with a large black hat, her red lips vivid against the texture of a shadowy alley, illuminated by dramatic lighting. Sin city vibes"
    },
    {
        id: 56,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4100.JPG",
        prompt: "Extreme realistic depiction of a woman leaning against a bar, whiskey bar, dressed in a black leather jacket half closed, cleavage, perky breasts, covered nipples, partially covered breasts, black leather leggings, black stilettos, hyper detailed, hyper realistic, smooth texture, juxtaposition of light and shadow creates a moody intimate atmosphere"
    },
    {
        id: 57,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4101.JPG",
        prompt: "Extreme realistic depiction, hot spring inside a dimly lit cave steam rises from the water a goth woman with long vibrant pink g string bikini, staring at the viewer, a bit of sunlight shines through the opening of the cave reflecting off the water and creating a silhouette effect"
    },
    {
        id: 58,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4102.JPG",
        prompt: "Magazine cover, \"Tattoo magazine\" written on top of portrait in elegant scrawl, 25 year old woman with pink streaked hair, goth tattoo model, magazine cover, goth vibe+, heavy dark makeup, tattoos, fully tattooed breasts++, full bodysuit tattoo, skimpy pink string bikini, perfect human female specimen, idealized, light skin, hyper-realistic, reminiscent of Harley Quinn"
    },
    {
        id: 59,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4103.JPG",
        prompt: "Extreme realistic depiction of a 21yr old woman under a heavy night rain, wearing a pink lace bodysuit and low rise leather leggings. Wet hair, wet clothes, water droplets drip down her body, wet hair clings to her face, The scene is vibrant and elegant, focusing on women's features, and clothing. Perfect face, symmetrical face, symmetrical eyes, 4k, ultra detailed, sharp focus, 8k, high definition, insanely detailed, intricate"
    },
    {
        id: 60,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4104.JPG",
        prompt: "Elegant woman, slender, well endowed, dazzling smile, dressed sexily in a royal blue dress, daring front cut to her waist, medium breasts, extreme cleavage, side slit to her hip, long smooth legs. Blue stilettos on her feet. Dress flows around her as she twirls. Ballroom dance background, vibrant colors, rich lighting and deep shadows. Full length photo, facing viewer, realistic, super realistic, hyper realistic, Physically-based render"
    },
    {
        id: 61,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4105.JPG",
        prompt: "Bedrooms background, elegant Woman dressed as dominatrix, full body portrait, superior expression, juxtaposition of light & shadow, moody, intense, fierce, cinematic lighting, raking light, long luminous shadows Woman, (topless), medium breasts, black leather mini skirt, fishnet stockings, black high heels, holding riding crop in right hand, physically-based render"
    },
    {
        id: 62,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4107.JPG",
        prompt: "photograph of a 28 year old busty woman sitting outside in the dark late at night during a rainstorm, from the side, raining, long wet brunette hair, eyes closed, light makeup, wearing a wet leather catsuit, unzipped, cleavage, dynamic pose, mouth slightly opened, soft outdoor lighting, deep shadows, casting shadow style, UHD, HDR, highly detailed skin, hyperrealistic"
    },
    {
        id: 63,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4109.JPG",
        prompt: "Alt goth Woman laying down on bed taking an arms length selfie DarkFantasy AiArtV"
    },
    {
        id: 64,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4110.JPG",
        prompt: "a Long curly haired youthful woman, sitting with cross legs while wearing a loose blouse and a miniskirt. SHe is also wearing a black high-heels sandal. She is in a fancy place doing a photo shoot. The background is white wall. she is sitting in a unique chair while looking at the camera. She looks fancy and the vines is fancy"
    },
    {
        id: 65,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4112.JPG",
        prompt: "In a stormy night filled with lightning, a female sorceress stands with an evil smirk, her dark robe adorned with glowing runes. Black leather bustier emphasizes her cleavage, runic tattoos adorn her breasts,She exudes an aura of might and power, her necklace gleaming amidst the shadows. The atmosphere is enchanting, fantasy and medieval appearance casting a spellbinding aura over the entire scene., hkmagic"
    },
    {
        id: 66,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4113.JPG",
        prompt: "A beautiful, arrogant teacher in revealing attire, black lace bra peeking through her sheet white blouse, micro skirt, mini grey pleated skirt, black stockings, garter belt, black stilettos, stands in front of blackboard, holding a long ruler with a judgmental gaze. hkmagic"
    },
    {
        id: 67,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4114.JPG",
        prompt: "An extremely realistic goth elven warrior stands poised, dark tan skin contrasting with intricate glowing purple elven tattoos. She's dressed in a black suede bodice with tattered cutouts and crisscrossed leather straps, holding a bow, an elven sword at her hip. Her pitch-black hair is tightly braided, framing glowing purple eyes in a dark, mystical forest background, illuminated by ethereal moonlight, under a starry night sky, hkmagic"
    },
    {
        id: 68,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4115.JPG",
        prompt: "Extreme realistic depiction of a 21yr old woman, standing on busy city sidewalk, flowing curly blonde hair, toned abs, perky breasts, white crop top, lace bustier top, pink plaid skirt, low rise skirt, micro skirt, daringly short skirt, pink stilettos, running hand through her hair"
    },
    {
        id: 69,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4116.JPG",
        prompt: "Youthful woman, mesmerizingly gorgeous, snuggled in bed, laying on satin sheets, dressed in alluring pink nightgown, deep v neck, revealing, long smooth legs, medium breasts, cleavage, smooth creamy skin"
    },
    {
        id: 70,
        imageUrl: "Images/Dunc1058 - Gallery/IMG_4118.JPG",
        prompt: "Extreme realistic portrait of a Wet Beauty under Rain, glamorous woman, wet hair, wet hair over one eye, extremely wet, realistic wet skin texture, realistic wet clothing, heavy rain, raining, wet clothes, wet white tank top, wet jean miniskirt, clothes cling to her body, adjusting her wet hair, head tilted slightly down, thick booty. Show a few wet hair flyaways around her face, her wet body glistens under the dynamic city lights, realistic water droplets, rain running down her body"
    },
    // FARAH Gallery images with prompts
    {
        id: 71,
        imageUrl: "Images/FARAH Gallery/1.jpeg",
        prompt: "Skater woman, skateboard kickflip trick, skatepark, lens flare, baggy jeans and tank top, expert cinematography"
    },
    {
        id: 72,
        imageUrl: "Images/FARAH Gallery/2.jpeg",
        prompt: "A gothic young woman cosplaying as Wednesday Addams, with pale skin, intense dark eyebrows, and long black braided hair. She wears a Victorian-style black dress with puffed sleeves, a crisp white collar with lace detailing, and a thin black ribbon tied neatly at the neck. Her expression is cold and emotionless, with dark eyeshadow, subtle blush, and deep red lips. She is seated in a dimly lit, gothic mansion with antique furniture, candle-lit chandeliers, and dark, moody lighting. The atmosphere is mysterious and eerie, evoking a classic gothic horror aesthetic."
    },
    {
        id: 73,
        imageUrl: "Images/FARAH Gallery/3.jpeg",
        prompt: "A stunning gothic woman with dark, voluminous curls styled in an intricate updo, standing in a dimly lit, grand Victorian-era mansion. Her piercing eyes and arched brows add to her mysterious allure, complemented by dark, dramatic makeup with deep red lips and smoky eyeshadow. She is dressed in a high-collared black lace blouse beneath a tailored black corset blazer adorned with intricate embroidery and silver buttons. Her delicate, dangling black earrings add to her regal presence. The background features tall gothic windows casting soft, diffused light into the shadowy interior, enhancing the moody and elegant atmosphere"
    },
    {
        id: 74,
        imageUrl: "Images/FARAH Gallery/4.jpeg",
        prompt: "A fierce and mysterious woman with long, messy black hair tied in a loose bun, standing in a neon-lit Japanese night market. She has piercing dark eyes, sharp facial features, and an intense gaze. She wears a fitted, off-white cropped tank top and loose black jogger pants, revealing a toned, athletic physique. A katana is strapped to her back, partially visible over her shoulder, giving her the aura of a modern-day assassin. The warm glow of Japanese lanterns and noodle shop signs illuminates the steamy, bustling background, filled with blurred figures enjoying late-night food. The atmosphere is cinematic, with a blend of cyberpunk and gritty action-film aesthetics."
    },
    {
        id: 75,
        imageUrl: "Images/FARAH Gallery/5.jpeg",
        prompt: "Wednesday addams, black minidress, pale skin, thick thighs, black braided pigtails hair, dark eyes, victorian gothic room, sexy pose, slutty, cropped closeup"
    },
    {
        id: 76,
        imageUrl: "Images/FARAH Gallery/6.jpeg",
        prompt: "A rebellious and stylish woman with a striking undercut and vibrant purple hair swept to one side, standing confidently in a futuristic urban cityscape. Her intense gaze, bold winged eyeliner, and sharply contoured face exude attitude and strength. She wears a black cropped top beneath a sleek, fitted black leather jacket, accessorized with silver hoop earrings. The city skyline behind her is blurred, with towering skyscrapers reflecting neon lights and subtle cyberpunk vibes. The perspective is shot from below, enhancing her dominant and edgy presence, while the cool-toned lighting and soft cinematic depth add to the high-fashion, cyberpunk-inspired aesthetic."
    },
    {
        id: 77,
        imageUrl: "Images/FARAH Gallery/7.jpeg",
        prompt: "Cyberpunk net runner hacker sci fi futuristic apartment full of old computers and neon bathed light"
    },
    {
        id: 78,
        imageUrl: "Images/FARAH Gallery/8.jpeg",
        prompt: "A stunning gothic woman with long, wavy dark hair and soft curtain bangs, wearing a vintage-inspired black lace dress with sheer ruffled sleeves. Her skin is fair and glowing with soft blush and defined lips, and her large expressive eyes are framed by bold eyebrows and subtle makeup. She is standing in front of an ornate, gold-framed mirror in a richly decorated Victorian interior, softly lit by warm ambient light. The composition is cinematic and elegant, with a painterly depth-of-field and moody, romantic atmosphere."
    },
    {
        id: 79,
        imageUrl: "Images/FARAH Gallery/9.jpeg",
        prompt: "Woman, gothic, Victorian Style, low plunge neckline, massive breasts, Horror Cinematic shot, victorian london street, gaslight, misty and ominous, ((squeezing massive naked breastswith her arms)), thicc thighs, (leaning forward, low angle)"
    },
    {
        id: 80,
        imageUrl: "Images/FARAH Gallery/10.jpeg",
        prompt: "Woman drinking coffee dark goth aesthetic morning tired dark steam from coffee dark kitchen with blue wall background"
    },
    {
        id: 81,
        imageUrl: "Images/FARAH Gallery/11.jpeg",
        prompt: "Bright white light over exposed glowing aura fantasy angel beautiful graceful divinity a woman posse"
    },
    {
        id: 82,
        imageUrl: "Images/FARAH Gallery/12.jpeg",
        prompt: "woman, morning, black fitted tshirt, massive breasts, slim waist, panties, room with black painted walls and wooden shelves with green plants and artwork, arms up, armpits,"
    },
    {
        id: 83,
        imageUrl: "Images/FARAH Gallery/13.jpeg",
        prompt: "woman with long dark brown hair huge breasts is wearing a pink latex button office shirt and grey skirt"
    },
    {
        id: 84,
        imageUrl: "Images/FARAH Gallery/14.jpeg",
        prompt: "goth Woman playing pool in a dark dingy bar leaning over the table taking her turn wearing a low-cut"
    },
    {
        id: 85,
        imageUrl: "Images/FARAH Gallery/15.jpeg",
        prompt: "woman, 35mm film grain, pale goth woman, covered latex, horror cult, crypt, tomb, dark, dramatic lighting, intense stare, gothic makeup, deep V-neck black dress, heart choker necklace, messy black hair with bangs, seated in stone alcove, tattoo on forearm, dark romantic aesthetic, moody shadows, cinematic horror atmosphere, RAW photo look"
    },
    {
        id: 86,
        imageUrl: "Images/FARAH Gallery/16.jpeg",
        prompt: "realistic photo of ohwx woman in a museum setting wearing corset with dark red hair and makeup"
    },
    {
        id: 87,
        imageUrl: "Images/FARAH Gallery/17.jpeg",
        prompt: "dark gothic woman in a subway station, cinematic portrait, deep red lipstick, heavy eyeliner, flawless porcelain skin, intense eye contact, black leather corset with ornate metallic detailing, black lace choker, intricate golden crown headpiece with chains, tousled black hair with bangs, dramatic soft lighting, shallow depth of field, moody urban atmosphere, dark romance, 4K ultra-realistic, editorial style"
    },
    {
        id: 88,
        imageUrl: "Images/FARAH Gallery/18.jpeg",
        prompt: "Portrait of a goth woman pale skin Victorian fashion"
    },
    {
        id: 89,
        imageUrl: "Images/FARAH Gallery/19.jpeg",
        prompt: "woman, Psylocke, XMen, puple leotard with red sash belt, Purple strappy Gloves and stockings, Big athletic body, fit and sexy, slim waist, wide hips, Long straight black hair, Katana, Cinematic movie still, dark destroyed city background, closeup, large breasts, night,"
    },
    {
        id: 90,
        imageUrl: "Images/FARAH Gallery/20.jpeg",
        prompt: "woman Goth woman with pale skin under the shade of a black victorian lace black lingerie thicc thigh"
    },
    {
        id: 91,
        imageUrl: "Images/FARAH Gallery/21.jpeg",
        prompt: "woman 35mm film grain Marilyn Monroe"
    },
    {
        id: 92,
        imageUrl: "Images/FARAH Gallery/22.jpeg",
        prompt: "Persian warrior woman holding a golden sword intricately designed with Persian patterns and gemstone insets, wearing elegant black and gold battle armor with royal embroidery, long flowing black hair, deep brown eyes, and bold regal makeup. She stands confidently in a palace setting with soft ambient lighting highlighting the ornate details of her armor and jewelry. Her gloves are leather, and she wears a golden headpiece and matching earrings, exuding power and nobility. Cinematic portrait, ultra-detailed, fantasy realism, 4K, richly decorated background, dramatic lighting."
    },
    {
        id: 93,
        imageUrl: "Images/FARAH Gallery/23.jpeg",
        prompt: "Goth woman, dark misty graveyard, dof, cinematic, pale skin"
    },
    {
        id: 94,
        imageUrl: "Images/FARAH Gallery/24.jpeg",
        prompt: "woman Goth woman with pale skin under the shade of a black victorian lace parasol black lingerie thights"
    },
    {
        id: 95,
        imageUrl: "Images/FARAH Gallery/25.jpeg",
        prompt: "woman 35mm film grain pale skin and dark makeup black silk robes gold jewellery prayer red pumice rosary. Her hands in a praying position."
    },
    {
        id: 96,
        imageUrl: "Images/FARAH Gallery/26.jpeg",
        prompt: "woman 35mm pink mohawk with shaved sides massive breasts"
    },
    {
        id: 97,
        imageUrl: "Images/FARAH Gallery/27.jpeg",
        prompt: "Wednesday addams short black minidress white collar pale skin thick thighs black braided pigtails hair"
    },
    {
        id: 98,
        imageUrl: "Images/FARAH Gallery/28.jpeg",
        prompt: "Portrait of a woman pale skin Victorian fashion"
    },
    {
        id: 99,
        imageUrl: "Images/FARAH Gallery/29.jpeg",
        prompt: "Bodybuilder woman, Lara Croft Tomb Raider style, wearing tight brown tactical shorts, green tank top, and brown leather backpack with visible straps. Athletic, curvy build with defined arms and a strong pose, holding dual pistols in a jungle environment. Long dark hair in a high ponytail, intense expression, cinematic lighting. Fingerless gloves, tactical belt with holsters and gear, fitted outfit showing muscular definition. Photorealistic, 4K ultra detail, action-adventure aesthetic, cinematic jungle background, high dynamic range."
    },
    {
        id: 100,
        imageUrl: "Images/FARAH Gallery/30.jpeg",
        prompt: "Medium shot portrait of a woman in a black Victorian dress with a high collar, detailed button front, and subtle ruffle accents on the shoulders and cuffs. Her hair is styled in a loose vintage updo with soft waves framing her face. She has a pale complexion, bold eyebrows, and softly contoured makeup with a hint of blush and matte lipstick. The background is moody and textured, adding to the classic and somber atmosphere. Soft, diffused lighting casts gentle shadows for a painterly, gothic aesthetic. Ultra-detailed, cinematic, fine art photography, Edwardian/Victorian gothic style"
    },
    {
        id: 101,
        imageUrl: "Images/FARAH Gallery/31.jpeg",
        prompt: "Close-up portrait of a gothic woman with dark, messy hair styled in a high ponytail with layered bangs, standing in a dimly lit subway station. She wears a black leather jacket with metal buttons and layered necklaces. Her makeup is dramatic with heavy eyeliner, bold brows, and matte lipstick. Pale skin with a cool undertone, nose piercing, and a sharp, mysterious gaze. Background features blurred subway tracks and harsh artificial lighting. Cinematic, dark urban aesthetic, moody atmosphere, shallow depth of field, high detail, 35mm film look, gritty realism."
    },
    {
        id: 102,
        imageUrl: "Images/FARAH Gallery/32.jpeg",
        prompt: "A breath-taking, highly detailed headshot of a striking goth woman, expertly captured by a professional portrait photographer. She wears an elegant, off-shoulder black gothic gown adorned with embroidered black floral patterns and dark lace details. Her long wavy black hair cascades down her shoulders, and she has pale, porcelain skin with bold black lipstick and dark, smoky eye makeup. She gazes confidently with intense, expressive eyes framed by thick lashes and sharp brows. The background features a lush, mysterious forest setting, adding depth and contrast to her dramatic appearance. Soft cinematic lighting, ethereal mood, high-resolution, dark romantic aesthetic, 85mm lens portrait photography."
    },
    {
        id: 103,
        imageUrl: "Images/FARAH Gallery/33.jpeg",
        prompt: "Persian woman, thick thighs, wearing elegant sheer harem pants and a matching belly dancer top, standing in a Persian-style palace bedroom. Light shafts and god rays filter through tall curtains, creating a soft, mystical glow around her silhouette. Her long wavy black hair flows freely, and golden jewelry with delicate chains drape around her waist. Intricate carpet patterns and luxurious drapery enhance the opulence of the room. Warm cinematic lighting, soft shadows, sensual yet graceful pose, Middle Eastern palace ambiance, richly detailed fabrics, 4K ultra-realistic, artistic glamour."
    },
    {
        id: 104,
        imageUrl: "Images/FARAH Gallery/34.jpeg",
        prompt: "A dark fantasy painting of a lone waifu warrior stands atop a crumbling tower under Sablemere's eternal twilight. She wears intricately detailed blackened steel armor with gothic engravings and silver accents, molded to her form. Her long black hair whips in the wind, eyes fierce yet melancholic. The decaying ruins of an ancient kingdom stretch behind her, bathed in an eerie, blue-tinted dusk. A storm brews on the horizon, casting dramatic shadows across the battlefield below. Ethereal glow from cursed runes embedded in her gauntlets. Cinematic, moody lighting, epic gothic fantasy, concept art, 4K ultra-detailed."
    },
    // Pizzle Gallery images with prompts
    {
        id: 105,
        imageUrl: "Images/Pizzle - Gallery/1.jpeg",
        prompt: "photo of a woman with (wide hips++++) and dark hair. She has a confident smirk on her face, wearing a tight cropped hot pink cashmere deep plunge sweater with a low rise tan plaid mini skirt, black open toe wedge style high heels, midriff exposed, legs in a (wide stance+) modeling pose, hands on her hips, wind blowing her hair back, full body shot, standing in an empty school hallway, lockers on both side, cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 106,
        imageUrl: "Images/Pizzle - Gallery/2.jpeg",
        prompt: "woman, twisting her upper body to take a mirror selfie of her butt, view from behind, wearing skin tight leggings accentuating her large muscular glutes and a sports bra, smile, standing in a gym setting, bright daylight, cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 107,
        imageUrl: "Images/Pizzle - Gallery/3.jpeg",
        prompt: "voluptuous woman with (wide hips+), angry expression on her face, hair in a long ponytail resting on her left shoulder, wearing a gray business pant suit with an unbuttoned white collared shirt on underneath, (cleavage from her large breasts++), Cameltoe, pearl necklace and silver hoop earrings, standing in an office setting, arms crossed angrily under her breasts, cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 108,
        imageUrl: "Images/Pizzle - Gallery/4.jpeg",
        prompt: "woman wearing a deep plunge thin fabric sundress and a (sheer shawl+) draped from her arms, standing in a prairie with mountains in the back ground, hoop earrings, her hands are behind her head, hair and shawl blowing in the wind, mid body shot, from the side, cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 109,
        imageUrl: "Images/Pizzle - Gallery/5.jpeg",
        prompt: "woman with (large breasts+), facing the viewer's left, wearing a thin fabric sundress, dancing on a mountainside with the sun setting in the back ground, golden hour, hair blowing in the wind and highlighted by the sun behind it, silhouette of her body visible as sun shines through the thin fabric of the sundress, (from the side++), midbody shot cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 110,
        imageUrl: "Images/Pizzle - Gallery/6.jpeg",
        prompt: "woman wearing a black lace bra and tiny thong accentuating her toned large glutes, sandal style high heels, view from behind, she's looking back at the viewer over her left shoulder smiling, leaning on her elbows on a balcony railing overlooking a city at dusk, full body shot, cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 111,
        imageUrl: "Images/Pizzle - Gallery/7.jpeg",
        prompt: "woman wearing a matching blue Adidas track suit, hands in pocket of hoodie, (hoodie completely unzipped+) exposing bare chest and midriff, hair in a braided ponytail, standing in a sports park, Cameltoe"
    },
    {
        id: 112,
        imageUrl: "Images/Pizzle - Gallery/8.jpeg",
        prompt: "curvy woman with (large breasts+), hair in a ponytail, view from the side and below, looking back at viewer over her left shoulder, wearing a black string thong bikini, (sideboob++), thong accentuating her (large toned glutes and thighs++), standing bent over in a gym setting, dynamic lighting and background, dof"
    },
    {
        id: 113,
        imageUrl: "Images/Pizzle - Gallery/9.jpeg",
        prompt: "woman wearing very short cut-off distressed denim shorts and a (sleeveless denim+ top), large hoop earrings, view from behind, she's looking back over her left shoulder smiling at the viewer, in a bar setting, mid-full body shot, dynamic lighting and background, dof"
    },
    {
        id: 114,
        imageUrl: "Images/Pizzle - Gallery/10.jpeg",
        prompt: "curvy woman, wearing gray skin tight yoga pants and a gray (cropped+ unzipped++ hoodie++), midriff and cleavage+ exposed, standing in front of a window in a bedroom, posing with her (back arched++) and leg bent to accentuate her wide hips+, from the front, her right hand on the window sill, bright natural lighting, cinematic tone, dynamic background, dof, Cameltoe"
    },
    {
        id: 115,
        imageUrl: "Images/Pizzle - Gallery/11.jpeg",
        prompt: "woman wearing a loose deep plunge beige knit sweater dress, cleavage, posing with one leg bent in a kitchen setting, bright natural light, cityscape with mountains visible through the window behind her, cinematic tone, dynamic background, dof"
    },
    {
        id: 116,
        imageUrl: "Images/Pizzle - Gallery/12.jpeg",
        prompt: "woman with wide hips, smiling, wearing a (short white long-sleeve button-down collared shirt) with (very short cut-off distressed denim shorts), shirt unbuttoned, cleavage, midriff exposed, posing in a bar setting with her right hand behind her head, cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 117,
        imageUrl: "Images/Pizzle - Gallery/13.jpeg",
        prompt: "woman laying a a bed legs apart, dimly lit, wearing a white lingerie bra and panty set, lingerie lit up by uv lamp, glowing, eyes closed, sleeping, hands draped across her breasts, view from above, mid-full body shot, dynamic lighting, dof"
    },
    {
        id: 118,
        imageUrl: "Images/Pizzle - Gallery/14.jpeg",
        prompt: "woman with long black hair, wearing a black lace-up spaghetti-strap satin corset dress, high leg slit, the corset is cinched very tight making her waist look tiny against her wide hips and extra large breasts, mansion bedroom setting, mid-full body shot, cinematic tone, dynamic lighting and background, lof"
    },
    {
        id: 119,
        imageUrl: "Images/Pizzle - Gallery/15.jpeg",
        prompt: "woman with dark hair, sitting at a poker table, her hair is done up in an elegant updo, she is wearing a black crushed velvet long sleeved evening gown, collar up with jagged neckline, cleavage, holding a lit and smoking cigarillo, cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 120,
        imageUrl: "Images/Pizzle - Gallery/16.jpeg",
        prompt: "woman with dark hair, hair done up, wearing a tiara decorated with rubies, matching long earrings, wearing a red v-shaped bodice dress, ruffled shoulders, a gold jewel on the center of her dress, long white silk gloves, (cleavage+), standing in a gold themed ballroom during a masquerade, cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 121,
        imageUrl: "Images/Pizzle - Gallery/17.jpeg",
        prompt: "woman with dark hair cut in a very short bob with (bangs covering one eye+), (wide hips+++), (small waist++), dressed as Sergeant Calhoun from Wreck it Ralph, sexy black body suit, scratched and worn black metal armor with glowing red lights covering arms and legs, worn metal high heel boots, cleavage, holding up a long space blaster rifle, standing in an action pose, standing in a bright sunny rainbow themed landscape where the (ground and foliage are made of candy++), full body view, wide angle, dynamic lighting and background, dof, anime, cyberpunk"
    },
    {
        id: 122,
        imageUrl: "Images/Pizzle - Gallery/18.jpeg",
        prompt: "woman with dark hair tucked underneath a blue baseball cap with the letters \"FF\" in a yellow logo, (wide hips+++), (small waist++), wearing a denim thong, a camel colored utility belt, camel colored gloves and work boots, holding a golden hammer, standing in an action pose in front of a tall brick building with lots of windows, full body view, wide angle, dynamic lighting and background, dof, anime, art"
    },
    {
        id: 123,
        imageUrl: "Images/Pizzle - Gallery/19.jpeg",
        prompt: "Woman with dark hair, (wide hips++), (bubble butt+), in a large and open+ atrium of a grand home. Light blue button-up short-sleeved shirt tied at the front and a short+, pleated white tennis skirt and white sandals with a slightly raised heal. Calm, thoughtful expression. Neutral, perhaps slightly wistful, emotional tone. One of her hands holds the skirt. She leans on a wall. Natural, bright sunlight illuminating the scene. Warm, muted pastel color palette of light beige, off-white, and light blue. Detailed wall paneling and ornate molding. A textured, slightly marbled or stuccoed wall design. Natural lighting; low contrast. Classic, 1980s/1990s aesthetic, evoking a nostalgic and somewhat melancholic mood. wide shot, soft focus on the subject, cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 124,
        imageUrl: "Images/Pizzle - Gallery/20.jpeg",
        prompt: "woman with dark hair, (wide hips++), (bubble butt++), wearing white tiny underwear from Victoria's Secret and white angel wings, multiple pearl necklaces, pink background, cleavage, cinematic tone, dynamic lighting and background, dof"
    },
    {
        id: 125,
        imageUrl: "Images/Pizzle - Gallery/21.jpeg",
        prompt: "old polaroid photo, sepia, woman with dark hair, (wide hips++), (bubble butt++), wearing a tight black sports bra and short tight gym shorts, standing in a gym, cleavage, full body view, dof, The scene is framed with subtle film grain, evoking the visual style of a classic film noir"
    },
    {
        id: 126,
        imageUrl: "Images/Pizzle - Gallery/22.jpeg",
        prompt: "woman with dark hair, (wide hips++), (bubble butt++), running outside in the snow, wearing a pink thong bikini, white snow cap and white furry boots, laughing, large snowflakes falling all around her, full body shot, cinematic tone, dramatic lighting and background, dof"
    },
    {
        id: 127,
        imageUrl: "Images/Pizzle - Gallery/23.jpeg",
        prompt: "woman with dark hair, (wide hips+++), (bubble butt++), wearing skin tight denim jeans with cowboy boots, plaid collared shirt unbuttoned and cropped exposing belly, cleavage, brown leather jacket, in a field"
    },
    {
        id: 128,
        imageUrl: "Images/Pizzle - Gallery/24.jpeg",
        prompt: "Woman, (wide hips++), (bubble butt++), wearing a white sheer angelic dress, highly detailed head and torso portrait of a realistic angel in a storm-filled sky, captured in the style of cinematic realism. Posted amidst tumultuous storm clouds. The angel's wings are glowing with intensity and contrast sharply against the dark backdrop. Light seems to emanate from the feathers, flickering in intricate detail, casting light and shadows across the wings' delicate structure. Mid body shot"
    },
    // Saros Gallery images with prompts
    {
        id: 129,
        imageUrl: "Images/Saros Gallery/001 768.jpg",
        prompt: "Woman, with long wavy hair, wearing a shiny violet bikini, showing cleavage, kneeling in water, background is the ocean with sunset in the horizon, golden hour"
    },
    {
        id: 130,
        imageUrl: "Images/Saros Gallery/002 prompt 768.jpg",
        prompt: "full-body picture of woman, long wavy hair, wearing a black glittery bra and a black leather jacket and a black leather thong, (holding open the leather jacket++), showing cleavage of large breasts, background is a grey wall"
    },
    {
        id: 131,
        imageUrl: "Images/Saros Gallery/003 768.jpg",
        prompt: "Woman, with long hair, wearing a black leather jacket and a black leather miniskirt and a black top, showing midriff, taking a selfie with a smart phone, carrying a black shoulder-bag with a silver chain, standing in front of a grey wall"
    },
    {
        id: 132,
        imageUrl: "Images/Saros Gallery/005 768.jpg",
        prompt: "Woman, with long hair, wearing a (letter necklace with the letters: \"SAROS\"++) and a pink top, showing cleavage of large breasts, sitting in the front seat of a car, blurred outdoor background outside the car"
    },
    {
        id: 133,
        imageUrl: "Images/Saros Gallery/007 768.jpg",
        prompt: "Fit and slim woman, with flowing wavy hair, wearing white underwear from Victoria's Secret and white angel wings and a lot of pearl jewelry, pink background, showing cleavage of large breasts"
    },
    {
        id: 134,
        imageUrl: "Images/Saros Gallery/008 prompt 768.jpg",
        prompt: "portrait of woman, long wavy hair, wearing a (sexy light-blue dress), showing cleavage of large breasts, background is a moon-lit night sky"
    },
    {
        id: 135,
        imageUrl: "Images/Saros Gallery/089_768.jpg",
        prompt: "full-body picture of woman, long wavy hair, wearing a (sexy pink strapless bra and a pink miniskirt), kneeling on a grey sofa, background is a grey wall, showing cleavage of large breasts, horny and begging look, glossy lips, heavy makeup, eyeshadow, perfect eyes, extremely intricate details, epic, expressive and detailed face, detailed gorgeous face, beautiful face, expressive facial features, cosmetic features, matte skin, realistic detailed skin"
    },
    {
        id: 136,
        imageUrl: "Images/Saros Gallery/Clouds_001_768_2.jpg",
        prompt: "A full-body photo of a fit woman sitting on top of white fluffy clouds wearing sexy red lingerie and red knee-high boots, showing cleavage of large breasts, long wavy hair, the background is a baby-blue sky with white cloud formations, shot by Jimmy Marble, muted earthy colors, soft tones"
    },
    {
        id: 137,
        imageUrl: "Images/Saros Gallery/Desert_768.jpg",
        prompt: "woman, wearing a black Prada-style unbuttoned shirt, showing cleavage of large breasts, modern hair, fashion editorial photography, front shot, upper body, professional female model, avant-garde composition with tilted head pose, staring to camera, profound gaze, elongated body stance, background is a modern desert city, black shot with Hasselblad x2d 100c, xcd 90mm f/2.5 lens, cinematic sepia color grading with golden hour warmth, dramatic black silhouette against burnt umber to honey amber gradient backdrop, professional main Fresnel light at 60 degree angle with silk diffusion, rim light with cto gel at 75 degree angle, haze machine for ethereal atmosphere, feathered shadows, contrast curve manipulation, selective dodge and burn, grain texture overlay, color temperature adjustment at 5500k to 3200k gradient, ultra sharp details, raw format, inspired by Paolo Roversi lighting technique, hyper realistic, 16K, rich detail"
    },
    {
        id: 138,
        imageUrl: "Images/Saros Gallery/Katana_prompt_768.jpg",
        prompt: "Upper-body picture of fit woman, with hair in a high ponytail, looking at viewer, carrying a Katana sword behind her back, wearing Japanese clothes with a red cape and a black top and black gloves and black pants with a shiny belt-buckle, showing midriff and cleavage of large breasts, standing confidently, background is a city skyline"
    },
    {
        id: 139,
        imageUrl: "Images/Saros Gallery/Medusa 768.jpg",
        prompt: "Fit and slim+ woman, as Medusa from Marvel Inc., in a full-body fantasy digital photography, with flowing red wavy hair, wearing a purple tight body outfit and knee-high purple leather boots, showing midriff and cleavage of large breasts, standing on a mountain top, the background is a stunning view of a sunset, golden hour"
    },
    {
        id: 140,
        imageUrl: "Images/Saros Gallery/Polaroid prompt 001 768.jpg",
        prompt: "woman, old polaroid photo, sad mood, b&w"
    },
    {
        id: 141,
        imageUrl: "Images/Saros Gallery/Polaroid prompt 002 768.jpg",
        prompt: "Full-body picture of fit and sexy woman, (old polaroid photo++), medieval, sad mood, long wavy hair, wearing a tight black sports bra and short tight gym shorts, standing in a gym, showing cleavage of large breasts, Soft, diffused lighting highlights the texture of her hair, with the plain, (out-of-focus background) emphasizing her. The scene is framed with subtle film grain, evoking the visual style of a classic film noir"
    },
    {
        id: 142,
        imageUrl: "Images/Saros Gallery/Rose_prompt.jpg",
        prompt: "woman sitting at a table with a glass of rosé wine in front of her, wearing a sexy sleeveless pink dress, showing cleavage of large breasts, she is surrounded by a group of people sitting on chairs and tables, background is a restaurant illuminated by lights and a wall"
    },
    {
        id: 143,
        imageUrl: "Images/Saros Gallery/White boat 768.jpg",
        prompt: "woman, wearing a white bikini and a white open shirt and a (white miniskirt+++), showing cleavage of large breasts, sitting on a boat, background is the ocean and trees and a sky-blue sky"
    }
];

// Add this to your artworks array objects
const sampleTags = {
    style: [
        '#anime', '#realistic', '#portrait', '#fantasy', '#scifi', 
        '#cyberpunk', '#gothic', '#vintage', '#editorial', '#cinematic'
    ],
    
    subject: [
        '#woman', '#model', '#warrior', '#fairy', '#angel', 
        '#vampire', '#cosplay', '#athlete', '#princess'
    ],
    
    setting: [
        '#nature', '#urban', '#studio', '#beach', '#night',
        '#indoor', '#outdoor', '#gym', '#castle', '#cityscape'
    ],
    
    clothing: [
        '#dress', '#lingerie', '#swimwear', '#casual', '#formal',
        '#leather', '#sportswear', '#costume', '#victorian', '#modern'
    ],
    
    mood: [
        '#dark', '#romantic', '#mysterious', '#elegant', '#fierce',
        '#playful', '#sensual', '#dramatic', '#ethereal', '#powerful'
    ],
    
    colors: [
        '#pink', '#black', '#white', '#red', '#blue',
        '#purple', '#neon', '#pastel', '#dark', '#colorful'
    ],
    
    technical: [
        '#portrait', '#fullbody', '#closeup', '#action', '#pose',
        '#lighting', '#highkey', '#lowkey', '#bokeh', '#motion'
    ],
    
    features: [
        '#cleavage', '#curves', '#fit', '#athletic', '#muscular',
        '#thicc', '#slim', '#tall', '#petite'
    ]
};

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to create artwork cards
function createArtworkCard(artwork) {
    let creator = '';
    if (artwork.imageUrl.includes('Camila')) {
        creator = 'Salt_Bae';
    } else if (artwork.imageUrl.includes('FARAH')) {
        creator = 'Farah';
    } else if (artwork.imageUrl.includes('Pizzle')) {
        creator = 'PizzlePole';
    } else if (artwork.imageUrl.includes('Dunc1058')) {
        creator = 'Dunc1058';
    } else if (artwork.imageUrl.includes('Saros')) {
        creator = 'Saros';
    }

    const tagsHTML = artwork.tags ? artwork.tags.map(tag => 
        `<span class="tag" onclick="searchByTag('${tag}')">${tag}</span>`
    ).join('') : '';
    
    const card = document.createElement('div');
    card.className = 'artwork-card';
    card.onclick = () => openModal(artwork.imageUrl);
    
    // Create image element
    const img = new Image();
    img.src = artwork.imageUrl;
    img.alt = "AI Artwork";
    
    // Add content
    card.innerHTML = `
        <div class="hover-content">
            <div class="creator">${creator}</div>
            <div class="tags">${tagsHTML}</div>
            <div class="prompt">${artwork.prompt || "No prompt available"}</div>
        </div>
    `;
    
    // Insert image at the beginning
    card.insertBefore(img, card.firstChild);
    
    return card;
}

// Function to search artworks based on prompt keywords
function searchArtworks(searchTerm) {
    if (!searchTerm.trim()) {
        return [...artworks];
    }
    
    const searchTermLower = searchTerm.toLowerCase();
    
    // If searching for a tag (starts with #)
    if (searchTermLower.startsWith('#')) {
        return artworks.filter(artwork => 
            artwork.tags && artwork.tags.some(tag => 
                tag.toLowerCase() === searchTermLower
            )
        );
    }
    
    // Regular prompt search
    const searchTerms = searchTermLower.split(' ').filter(term => term.length > 0);
    return artworks.filter(artwork => {
        const prompt = artwork.prompt ? artwork.prompt.toLowerCase() : '';
        return searchTerms.every(term => prompt.includes(term));
    });
}

// Add these variables at the top of your script
const ITEMS_PER_PAGE = 20;
let currentPage = 1;
let isLoading = false;
let allArtworksLoaded = false;

// Add these variables at the top of your script
const imageCache = new Map(); // To store preloaded images
const PRELOAD_COUNT = 10; // Number of images to preload

// Update your populateGallery function
function populateGallery(filteredArtworks = null, append = false) {
    const artworksToShow = filteredArtworks || artworks;
    const container = document.querySelector('.artwork-grid');
    
    if (!append) {
        container.innerHTML = '';
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentBatch = artworksToShow.slice(startIndex, endIndex);

    currentBatch.forEach(artwork => {
        const card = createArtworkCard(artwork);
        container.appendChild(card);
    });

    isLoading = false;
    allArtworksLoaded = endIndex >= artworksToShow.length;
}

// Add these new functions
function createArtworkCardPlaceholder(artwork) {
    const card = document.createElement('div');
    card.className = 'artwork-card loading';
    card.setAttribute('data-id', artwork.id);
    // Add minimal structure needed for placeholder
    card.innerHTML = `
        <div class="artwork-placeholder"></div>
        <div class="hover-content">
            <div class="creator">${artwork.creator}</div>
            <div class="prompt">${artwork.prompt}</div>
            <div class="tags">${createTagsHtml(artwork.tags)}</div>
        </div>
    `;
    return card;
}

function loadImageWithFallback(artwork, index) {
    const card = document.querySelector(`.artwork-card[data-id="${artwork.id}"]`);
    if (!card) return;

    // Check if image is already cached
    if (imageCache.has(artwork.imageUrl)) {
        updateCardWithImage(card, imageCache.get(artwork.imageUrl), artwork);
        return;
    }

    const img = new Image();
    
    img.onload = () => {
        imageCache.set(artwork.imageUrl, img.src);
        updateCardWithImage(card, img.src, artwork);
    };

    img.onerror = () => {
        // Handle failed image load
        card.classList.remove('loading');
        card.classList.add('error');
    };

    img.src = artwork.imageUrl;
}

function updateCardWithImage(card, imageSrc, artwork) {
    // Remove placeholder and add actual image
    card.classList.remove('loading');
    
    // Create image element if it doesn't exist
    if (!card.querySelector('img')) {
        const img = document.createElement('img');
        img.alt = artwork.prompt;
        card.insertBefore(img, card.firstChild);
    }
    
    const img = card.querySelector('img');
    img.src = imageSrc;
}

function preloadNextImages(startIndex, artworksArray) {
    const nextImages = artworksArray.slice(startIndex, startIndex + PRELOAD_COUNT);
    
    nextImages.forEach(artwork => {
        if (!imageCache.has(artwork.imageUrl)) {
            const img = new Image();
            img.onload = () => {
                imageCache.set(artwork.imageUrl, img.src);
            };
            img.src = artwork.imageUrl;
        }
    });
}

// Add infinite scroll handler
function handleScroll() {
    if (isLoading || allArtworksLoaded) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const bodyHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= bodyHeight - 1000) { // Load more when within 1000px of bottom
        isLoading = true;
        currentPage++;
        populateGallery(null, true);
    }
}

// Update the DOM ready event listener to ensure initial shuffle
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Function to handle search
    function performSearch() {
        const searchTerm = searchInput.value;
        const filteredArtworks = searchArtworks(searchTerm);
        currentPage = 1;
        allArtworksLoaded = false;
        populateGallery(filteredArtworks);
    }

    // Search on button click
    searchButton.addEventListener('click', performSearch);

    // Search on Enter key press
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Function to update search button state
    function updateSearchButtonState() {
        if (searchInput.value.trim() !== '') {
            searchButton.classList.add('active');
        } else {
            searchButton.classList.remove('active');
        }
    }

    // Update button state on input changes
    searchInput.addEventListener('input', updateSearchButtonState);
    
    // Initial state check
    updateSearchButtonState();

    // Add scroll event listener for infinite scroll
    window.addEventListener('scroll', handleScroll);

    // Initialize gallery with shuffled artworks
    populateGallery(shuffleArray([...artworks]));

    // Add close button event listener
    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling up
            closeModal();
        });
    }

    // Close modal when clicking outside the image
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Initialize modal listeners
    initializeModalListeners();
});

// Update the filterArtworks function to always shuffle the results
function filterArtworks(filterType) {
    let filteredArtworks = [...artworks]; // Create a copy of the array
    
    switch(filterType.toLowerCase()) {
        case 'trending':
            // Sort by id in descending order then randomly shuffle the first 40 items
            filteredArtworks.sort((a, b) => b.id - a.id);
            const trending = filteredArtworks.slice(0, 40);
            const rest = filteredArtworks.slice(40);
            shuffleArray(trending);
            shuffleArray(rest);
            filteredArtworks = [...trending, ...rest];
            break;
        case 'latest':
            // Sort by id in ascending order then randomly shuffle the first 40 items
            filteredArtworks.sort((a, b) => a.id - b.id);
            const latest = filteredArtworks.slice(0, 40);
            const remaining = filteredArtworks.slice(40);
            shuffleArray(latest);
            shuffleArray(remaining);
            filteredArtworks = [...latest, ...remaining];
            break;
        case 'most liked':
            // Just randomly shuffle all artworks
            filteredArtworks = shuffleArray(filteredArtworks);
            break;
        case 'all':
        default:
            // Random shuffle for variety
            filteredArtworks = shuffleArray(filteredArtworks);
            break;
    }
    
    return filteredArtworks;
}

// Update the filter click event listeners
document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
        // Reset search when changing filters
        document.getElementById('searchInput').value = '';
        
        // Remove active class from all filters
        document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked filter
        button.classList.add('active');
        
        // Get the filter type from the button text
        const filterType = button.textContent.trim();
        
        // Filter artworks and repopulate gallery
        const filteredArtworks = filterArtworks(filterType);
        currentPage = 1;
        allArtworksLoaded = false;
        populateGallery(filteredArtworks);
    });
});

// Add modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalPrompt = document.getElementById('modalPrompt');
const span = document.getElementsByClassName('close')[0];
let currentImageIndex = 0;

function openModal(imageUrl) {
    modal.style.display = 'block';
    // Add a small delay before adding the show class
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    modalImg.src = imageUrl;
    
    // Find the current artwork
    currentImageIndex = artworks.findIndex(artwork => artwork.imageUrl === imageUrl);
    const artwork = artworks[currentImageIndex];
    
    // Determine the creator based on the image path
    let creator = '';
    if (artwork.imageUrl.includes('Camila')) {
        creator = 'Salt_Bae';
    } else if (artwork.imageUrl.includes('FARAH')) {
        creator = 'Farah';
    } else if (artwork.imageUrl.includes('Pizzle')) {
        creator = 'PizzlePole';
    } else if (artwork.imageUrl.includes('Dunc1058')) {
        creator = 'Dunc1058';
    } else if (artwork.imageUrl.includes('Saros')) {
        creator = 'Saros';
    }
    
    // Update the prompt container with creator and prompt only
    modalPrompt.innerHTML = `
        <div class="creator-name">Creator: ${creator}</div>
        <div class="prompt-section">
            <h3>Prompt Used:</h3>
            <p>${artwork.prompt || "No prompt available for this image"}</p>
            <button class="copy-prompt-btn" onclick="copyPrompt('${artwork.prompt?.replace(/'/g, "\\'")}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy Prompt
            </button>
        </div>
    `;
    
    document.body.style.overflow = 'hidden';
}

function copyPrompt(prompt) {
    if (!prompt) return;
    
    // Copy the prompt to clipboard
    navigator.clipboard.writeText(prompt).then(() => {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'copy-success';
        successMessage.textContent = 'Prompt copied to clipboard!';
        document.body.appendChild(successMessage);
        
        // Remove the message after animation
        setTimeout(() => {
            successMessage.remove();
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy prompt:', err);
    });
}

function navigateImage(direction) {
    const newIndex = (currentImageIndex + direction + artworks.length) % artworks.length;
    currentImageIndex = newIndex;
    const artwork = artworks[newIndex];
    modalImg.src = artwork.imageUrl;
    
    // Determine the creator based on the image path
    let creator = '';
    if (artwork.imageUrl.includes('Camila')) {
        creator = 'Salt_Bae';
    } else if (artwork.imageUrl.includes('FARAH')) {
        creator = 'Farah';
    } else if (artwork.imageUrl.includes('Pizzle')) {
        creator = 'PizzlePole';
    } else if (artwork.imageUrl.includes('Dunc1058')) {
        creator = 'Dunc1058';
    } else if (artwork.imageUrl.includes('Saros')) {
        creator = 'Saros';
    }
    
    // Update the prompt container with creator and prompt only
    modalPrompt.innerHTML = `
        <div class="creator-name">Creator: ${creator}</div>
        <div class="prompt-section">
            <h3>Prompt Used:</h3>
            <p>${artwork.prompt || "No prompt available for this image"}</p>
            <button class="copy-prompt-btn" onclick="copyPrompt('${artwork.prompt?.replace(/'/g, "\\'")}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy Prompt
            </button>
        </div>
    `;
}

// Add event listeners for navigation buttons
document.querySelector('.prev-btn').addEventListener('click', () => navigateImage(-1));
document.querySelector('.next-btn').addEventListener('click', () => navigateImage(1));

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (modal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            navigateImage(-1);
        } else if (event.key === 'ArrowRight') {
            navigateImage(1);
        } else if (event.key === 'Escape') {
            closeModal();
        }
    }
});

// Close modal when clicking the X
span.onclick = function() {
    closeModal();
}

// Close modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add function to search by tag
function searchByTag(tag) {
    event.stopPropagation(); // Prevent modal from opening
    document.getElementById('searchInput').value = tag;
    
    // Reset filters
    document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter:first-child').classList.add('active');
    
    // Perform search with the tag
    const filteredArtworks = searchArtworks(tag);
    currentPage = 1;
    allArtworksLoaded = false;
    populateGallery(filteredArtworks);
}

// Add this function to automatically generate tags based on prompt content
function generateTags(prompt) {
    const tags = [];
    const promptLower = prompt.toLowerCase();
    
    // Define keywords for each tag
    const tagKeywords = {
        '#anime': ['anime', '2d', 'manga'],
        '#realistic': ['realistic', 'photorealistic', 'photo', 'hyperrealistic'],
        '#fantasy': ['fantasy', 'fairy', 'magical', 'magic', 'angel', 'witch', 'warrior'],
        '#cyberpunk': ['cyberpunk', 'neon', 'sci-fi', 'futuristic'],
        '#gothic': ['gothic', 'dark', 'victorian', 'goth']
    };
    
    // Check prompt for keywords and add corresponding tags
    Object.entries(tagKeywords).forEach(([tag, keywords]) => {
        if (keywords.some(keyword => promptLower.includes(keyword))) {
            tags.push(tag);
        }
    });
    
    return tags;
}

// Update the artworks array to include tags
artworks.forEach(artwork => {
    if (artwork.prompt) {
        artwork.tags = generateTags(artwork.prompt);
    }
});

// Add this function to initialize all modal-related event listeners
function initializeModalListeners() {
    const modal = document.getElementById('imageModal');
    const closeButton = document.querySelector('.modal .close');

    // Close button click handler
    if (closeButton) {
        closeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            closeModal();
        });
    }

    // Click outside modal handler
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Keyboard handler for Escape key
document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
}); 
}
