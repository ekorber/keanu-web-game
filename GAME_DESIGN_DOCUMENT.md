# Game Design Document: Minecraft Browser Edition

## 1. Game Overview

### 1.1 Concept
A browser-based voxel sandbox game inspired by Minecraft, allowing players to explore, mine, craft, and build in a procedurally generated 3D world made of blocks.

### 1.2 Genre
- Sandbox
- Survival
- Creative Building
- Adventure

### 1.3 Target Platform
- Modern web browsers (Chrome, Firefox, Safari, Edge)
- WebGL 2.0 compatible devices
- Desktop and mobile support

### 1.4 Core Pillars
1. **Exploration** - Infinite procedurally generated worlds to discover
2. **Creativity** - Unlimited building possibilities
3. **Survival** - Resource management and combat
4. **Progression** - Crafting and tool advancement system

---

## 2. Core Gameplay Mechanics

### 2.1 Block System
- **Voxel-based world**: Everything is made of 1m³ blocks
- **Block placement**: Right-click to place blocks
- **Block breaking**: Left-click and hold to break blocks
- **Block types**: 100+ different block types including:
  - Natural blocks (stone, dirt, grass, sand, gravel)
  - Ores (coal, iron, gold, diamond, redstone, emerald, lapis lazuli)
  - Wood types (oak, birch, spruce, jungle, acacia, dark oak)
  - Crafted blocks (planks, bricks, glass, wool)
  - Functional blocks (furnace, crafting table, chest, bed)
  - Liquids (water, lava)

### 2.2 Mining & Resource Gathering
- **Tool progression**: Hand → Wood → Stone → Iron → Gold → Diamond → Netherite
- **Mining speed**: Different tools mine different materials at varying speeds
- **Tool durability**: Tools break after extended use
- **Drop system**: Blocks drop resources when broken with appropriate tools
- **Fortune enchantment**: Increases resource drops

### 2.3 Crafting System
- **Crafting table**: 3×3 grid for complex recipes
- **Inventory crafting**: 2×2 grid for simple recipes
- **Shaped recipes**: Items must be placed in specific patterns
- **Shapeless recipes**: Items can be placed in any arrangement
- **Recipe book**: Visual guide for all discovered recipes
- **Common recipes**:
  - Tools (pickaxe, axe, shovel, hoe, sword)
  - Armor (helmet, chestplate, leggings, boots)
  - Building blocks
  - Food items
  - Redstone contraptions

### 2.4 Building System
- **Free placement**: Place blocks anywhere in reach (5 block radius)
- **Gravity**: Sand, gravel, and concrete powder fall
- **Structure stability**: No structural requirements (floating blocks allowed)
- **Rotation**: Stairs, logs, and directional blocks can be oriented
- **Transparency**: Glass, water, leaves allow light through

---

## 3. Game Modes

### 3.1 Survival Mode
- **Health**: 10 hearts (20 HP)
- **Hunger**: 10 drumsticks (20 food points)
- **Inventory management**: 36 slots + 4 armor slots + offhand
- **Death**: Respawn at spawn point or bed, items drop on death
- **Difficulty levels**:
  - Peaceful (no hostile mobs, hunger doesn't deplete)
  - Easy (hostile mobs deal less damage)
  - Normal (standard difficulty)
  - Hard (mobs deal more damage, additional challenges)

### 3.2 Creative Mode
- **Unlimited resources**: Access to all blocks and items
- **Flight**: Double-tap jump to fly
- **Invulnerability**: Cannot take damage
- **Instant break**: Break blocks instantly
- **No hunger**: Food not required

### 3.3 Spectator Mode
- **Free camera**: Fly through blocks
- **No interaction**: Cannot place or break blocks
- **Entity viewing**: Click mobs to view from their perspective
- **Invisible**: Mobs cannot detect player

### 3.4 Hardcore Mode
- **Permadeath**: World is locked to spectator mode on death
- **Hard difficulty**: Locked to hard difficulty
- **Additional challenge**: For experienced players

---

## 4. World Generation

### 4.1 Biomes
- **Overworld biomes** (20+ types):
  - Plains, Forest, Birch Forest, Dark Forest
  - Taiga, Snowy Tundra, Ice Spikes
  - Desert, Savanna, Badlands
  - Jungle, Bamboo Jungle
  - Swamp, Mushroom Fields
  - Mountains, Hills
  - Ocean, Deep Ocean, Frozen Ocean
  - Beach, River

### 4.2 World Structure
- **Height**: -64 to 320 blocks (384 total)
- **Bedrock layer**: Indestructible layer at Y=-64
- **Cave systems**: Complex underground networks
- **Ravines**: Deep surface cuts
- **Strongholds**: Underground structures with End Portal
- **Mineshafts**: Abandoned mining tunnels
- **Dungeons**: Small monster spawner rooms

### 4.3 Dimensions
1. **Overworld** (Main dimension)
   - Standard gameplay dimension
   - Day/night cycle
   - Weather system

2. **The Nether**
   - Hell-like dimension accessed via Nether Portal
   - 1 block = 8 blocks in Overworld (fast travel)
   - Unique blocks: Netherrack, Soul Sand, Glowstone, Nether Quartz
   - Unique mobs: Ghast, Blaze, Piglin, Zombified Piglin
   - Nether Fortresses (Blaze spawners, Nether Wart)
   - Bastion Remnants (treasure and Piglins)

3. **The End**
   - Void dimension accessed via End Portal in Stronghold
   - End Stone terrain
   - Ender Dragon boss fight
   - End Cities and Shulkers (after dragon defeat)
   - Elytra and valuable loot

### 4.4 Structures
- **Villages**: NPC settlements with villagers
- **Pillager Outposts**: Hostile pillager camps
- **Woodland Mansions**: Rare forest structures
- **Ocean Monuments**: Underwater temples
- **Desert Temples**: Pyramid structures with traps
- **Jungle Temples**: Puzzle structures
- **Shipwrecks**: Underwater ruins
- **Buried Treasure**: Hidden chests with maps

---

## 5. Mob System

### 5.1 Passive Mobs
- **Pig**: Rideable with saddle, drops pork
- **Cow**: Milkable, drops leather and beef
- **Sheep**: Shearable for wool, drops mutton
- **Chicken**: Lays eggs, drops feathers and chicken
- **Horse**: Tameable, rideable, breedable
- **Donkey/Mule**: Can carry chests
- **Cat**: Tameable, scares creepers
- **Wolf**: Tameable, attacks hostile mobs
- **Villager**: Trading system, occupations

### 5.2 Hostile Mobs
- **Zombie**: Basic melee attacker, burns in daylight
- **Skeleton**: Ranged bow attacks, burns in daylight
- **Creeper**: Silent approach, explosive attack
- **Spider**: Climbs walls, neutral in daylight
- **Enderman**: Teleports, attacks when looked at
- **Witch**: Throws harmful potions
- **Slime**: Splits into smaller slimes
- **Phantom**: Flies, spawns if player hasn't slept
- **Drowned**: Underwater zombies, throws tridents

### 5.3 Boss Mobs
- **Ender Dragon**: Main boss in The End, 200 HP
- **Wither**: Player-summoned boss, 300 HP
- **Elder Guardian**: Mini-boss in Ocean Monument

### 5.4 AI Behavior
- **Pathfinding**: Navigate around obstacles
- **Day/night cycle**: Some mobs burn in daylight
- **Aggression range**: Detect players within radius
- **Mob spawning**: Light level dependent (≤7 for hostiles)

---

## 6. Combat System

### 6.1 Melee Combat
- **Swords**: Primary melee weapon
- **Axes**: High damage, slower attack speed
- **Attack cooldown**: Prevents spam clicking
- **Critical hits**: Jump attacks deal extra damage
- **Sweep attack**: Swords hit multiple enemies

### 6.2 Ranged Combat
- **Bow and Arrow**: Draw to increase damage
- **Crossbow**: Higher damage, slower reload
- **Trident**: Throwable, retrievable, enchantable
- **Snowball/Egg**: Knockback projectiles

### 6.3 Armor System
- **Materials**: Leather → Chain → Iron → Gold → Diamond → Netherite
- **Armor points**: Up to 20 defense points
- **Durability**: Armor degrades with damage
- **Enchantments**: Protection, projectile protection, etc.

### 6.4 Shields
- **Block attacks**: Right-click to block
- **Durability**: 336 uses
- **Banner customization**: Apply patterns

---

## 7. Enchanting & Brewing

### 7.1 Enchanting System
- **Enchantment Table**: Requires bookshelves for higher levels
- **Lapis Lazuli**: Currency for enchanting
- **Experience levels**: Required for enchanting
- **Enchantments**:
  - Weapons: Sharpness, Smite, Bane of Arthropods, Knockback, Fire Aspect, Looting
  - Tools: Efficiency, Fortune, Silk Touch, Unbreaking
  - Armor: Protection, Fire Protection, Projectile Protection, Thorns
  - Bow: Power, Punch, Flame, Infinity
  - Special: Mending, Curse of Vanishing

### 7.2 Anvil System
- **Combine enchantments**: Merge enchanted items
- **Repair items**: Use materials to restore durability
- **Rename items**: Custom item names
- **Experience cost**: Increases with each use

### 7.3 Brewing System
- **Brewing Stand**: Create potions
- **Base ingredients**: Water Bottle + Nether Wart = Awkward Potion
- **Effect potions**:
  - Healing, Regeneration, Strength
  - Speed, Jump Boost, Fire Resistance
  - Water Breathing, Night Vision, Invisibility
  - Poison, Weakness, Slowness, Harming
- **Modifiers**:
  - Redstone: Extends duration
  - Glowstone: Increases potency
  - Gunpowder: Creates splash potion
  - Dragon's Breath: Creates lingering potion

---

## 8. Redstone & Automation

### 8.1 Redstone Components
- **Power sources**: Redstone torch, lever, button, pressure plate, tripwire
- **Transmission**: Redstone dust, repeater, comparator
- **Output devices**: Piston, sticky piston, dispenser, dropper
- **Logic gates**: AND, OR, NOT, XOR circuits

### 8.2 Redstone Contraptions
- **Doors**: Automatic door systems
- **Farms**: Automated crop, mob, and item farms
- **Traps**: Hidden defenses
- **Transportation**: Minecart systems, water elevators
- **Sorting systems**: Item filtering and storage

### 8.3 Command Blocks (Creative Mode)
- **Execute commands**: Automate complex actions
- **Conditional execution**: Chain commands
- **Custom maps**: Create adventure maps and mini-games

---

## 9. Food & Farming

### 9.1 Hunger System
- **Food bar**: 10 drumsticks (20 points)
- **Saturation**: Hidden stat affects hunger drain
- **Effects of starvation**:
  - Peaceful: No effect
  - Easy: Health stops at 10 HP
  - Normal: Health stops at 1 HP
  - Hard: Death from starvation

### 9.2 Food Items
- **Raw foods**: Beef, pork, chicken, mutton, fish
- **Cooked foods**: Better hunger restoration
- **Crops**: Wheat, carrots, potatoes, beetroot
- **Baked goods**: Bread, cake, cookies, pumpkin pie
- **Golden foods**: Expensive, powerful effects

### 9.3 Farming System
- **Crop growth**: Wheat, carrots, potatoes, beetroot, pumpkin, melon
- **Farming mechanics**: Tilling, planting, watering, harvesting
- **Bone meal**: Accelerates growth
- **Animal breeding**: Feed two animals to produce offspring
- **Automatic farms**: Redstone-powered crop collection

---

## 10. User Interface

### 10.1 HUD (Heads-Up Display)
- **Hotbar**: 9 quick-access slots
- **Health bar**: Hearts display
- **Hunger bar**: Food display
- **Experience bar**: Progress to next level
- **Armor display**: Armor points
- **Air bubbles**: When underwater
- **Crosshair**: Center screen targeting

### 10.2 Inventory Screen (E key)
- **Main inventory**: 27 slots (3×9 grid)
- **Hotbar**: 9 slots
- **Armor slots**: 4 equipment slots
- **Offhand slot**: Shield or secondary item
- **Crafting grid**: 2×2 quick crafting
- **Recipe book**: Access to crafting recipes

### 10.3 Pause Menu (ESC key)
- **Resume game**
- **Options**: Graphics, controls, sound settings
- **Save and quit**
- **Advancements**: Achievement system
- **Statistics**: Gameplay tracking

### 10.4 Container Interfaces
- **Chest**: 27 slots of storage
- **Furnace**: Smelting interface
- **Crafting table**: 3×3 crafting grid
- **Enchanting table**: Enchantment selection
- **Anvil**: Item combination/repair
- **Brewing stand**: Potion crafting

---

## 11. Progression System

### 11.1 Advancement System
- **Tutorial advancements**: Guide new players
- **Progression trees**: Multiple paths to explore
- **Categories**:
  - Minecraft (basic gameplay)
  - Adventure (exploration and combat)
  - Nether (nether dimension)
  - The End (end dimension)
  - Husbandry (farming and animals)
- **Rewards**: Experience and bragging rights

### 11.2 Tool Progression
1. **Wooden tools**: Craft from planks, basic durability
2. **Stone tools**: Mine stone, better durability
3. **Iron tools**: Smelt iron ore, significant upgrade
4. **Diamond tools**: Rare, extremely durable
5. **Netherite tools**: Ultimate upgrade, nether materials

### 11.3 Game Milestones
1. Gather wood
2. Craft tools
3. Build shelter
4. Mine stone and coal
5. Smelt iron
6. Find diamonds
7. Enter the Nether
8. Find Blaze rods and Ender Pearls
9. Locate Stronghold
10. Defeat Ender Dragon
11. Explore End Cities
12. Defeat Wither
13. Obtain Beacon

---

## 12. Multiplayer Features

### 12.1 Server Types
- **Survival servers**: Collaborative or competitive survival
- **Creative servers**: Building communities
- **Minigame servers**: Custom game modes
- **Roleplay servers**: Themed gameplay

### 12.2 Multiplayer Mechanics
- **Player list**: View connected players (Tab key)
- **Chat system**: Text communication
- **Player permissions**: Operator privileges
- **World protection**: Claim systems
- **PvP toggle**: Enable/disable player combat
- **Trading**: Exchange items with players

### 12.3 Server Administration
- **Whitelist**: Approved players only
- **Ban system**: Remove problem players
- **Command permissions**: /op, /deop, /ban, /kick
- **Server properties**: Difficulty, gamemode, world settings

---

## 13. Sound & Music

### 13.1 Sound Effects
- **Block sounds**: Unique sounds for each block type
- **Footstep sounds**: Vary by surface material
- **Mob sounds**: Distinct sounds for each creature
- **Weather sounds**: Rain, thunder
- **Combat sounds**: Hitting, critical hits, damage
- **Item sounds**: Eating, drinking, using items

### 13.2 Music System
- **Ambient music**: Calm, atmospheric tracks
- **Biome-specific**: Different music for different areas
- **Menu music**: Main menu soundtrack
- **Boss music**: Ender Dragon fight
- **Nether music**: Eerie, unsettling tracks
- **End music**: Mysterious, lonely atmosphere

### 13.3 Audio Settings
- **Master volume**: Overall audio level
- **Music volume**: Separate music control
- **Sound effects volume**: Separate SFX control
- **Ambient sounds**: Cave sounds, weather
- **Subtitles**: Visual sound indicators

---

## 14. Graphics & Visual Effects

### 14.1 Graphics Settings
- **Render distance**: 2-32 chunks
- **Graphics quality**: Fast, Fancy
- **Smooth lighting**: Gradual light transitions
- **Particles**: All, Decreased, Minimal
- **Clouds**: On/Off
- **VSync**: Frame rate synchronization
- **Mipmapping**: Texture optimization
- **Anisotropic filtering**: Texture clarity

### 14.2 Visual Effects
- **Particle effects**: Breaking blocks, critical hits, enchanting
- **Weather effects**: Rain, snow, thunderstorms
- **Day/night cycle**: 20-minute cycle
- **Lighting system**: Dynamic light sources
- **Shadows**: Entity and block shadows (optional)
- **Water effects**: Transparency, flow animation
- **Fire effects**: Animated flames

### 14.3 Texture System
- **Resource packs**: Customizable textures
- **Block models**: 16×16 pixel textures
- **Entity models**: 3D mob models
- **GUI textures**: Interface customization

---

## 15. Controls

### 15.1 Keyboard Controls
- **W/A/S/D**: Movement
- **Space**: Jump
- **Shift**: Sneak (prevents falling off edges)
- **Ctrl**: Sprint
- **E**: Inventory
- **Q**: Drop item
- **1-9**: Hotbar selection
- **F**: Swap item to offhand
- **T**: Chat (multiplayer)
- **ESC**: Pause menu
- **F3**: Debug screen
- **F5**: Toggle perspective (1st/3rd person)
- **F11**: Fullscreen toggle

### 15.2 Mouse Controls
- **Look around**: Move mouse
- **Left click**: Break block / Attack
- **Right click**: Place block / Use item / Interact
- **Middle click**: Pick block (creative mode)
- **Scroll wheel**: Hotbar selection

### 15.3 Touch Controls (Mobile)
- **Virtual joystick**: Movement
- **Touch screen**: Look around
- **Action buttons**: Jump, crouch, inventory
- **Split touch**: Tap left/right sides to break/place

---

## 16. Technical Specifications

### 16.1 Technology Stack
- **Rendering**: Three.js (WebGL 2.0)
- **Physics**: Custom voxel physics engine
- **Networking**: WebSockets for multiplayer
- **Storage**: IndexedDB for world data
- **Performance**: Web Workers for chunk generation

### 16.2 Performance Targets
- **Frame rate**: 60 FPS target
- **Chunk size**: 16×16×384 blocks
- **Render distance**: Configurable 4-16 chunks
- **World size**: Infinite (procedurally generated)
- **Max players**: 20-50 per server

### 16.3 Optimization Techniques
- **Frustum culling**: Only render visible chunks
- **Occlusion culling**: Skip hidden block faces
- **Level of Detail**: Distant chunks simplified
- **Chunk caching**: Store generated chunks
- **Greedy meshing**: Combine adjacent block faces
- **Multithreading**: Web Workers for generation

### 16.4 Browser Requirements
- **WebGL 2.0 support**: Required
- **Minimum RAM**: 2GB
- **Recommended RAM**: 4GB+
- **Storage**: ~100MB for game + world data
- **Network**: Stable connection for multiplayer

---

## 17. Save System

### 17.1 World Data
- **World seed**: Numeric seed for generation
- **Player data**: Position, inventory, health, hunger
- **Chunk data**: Modified blocks stored
- **Time data**: Day/night cycle progress
- **Weather data**: Current weather state

### 17.2 Save Format
- **Storage**: Browser IndexedDB
- **Compression**: GZIP compressed chunks
- **Auto-save**: Every 30 seconds
- **Manual save**: On exit
- **World backup**: Export/import functionality

### 17.3 World Management
- **Create new world**: Generate fresh world
- **Load world**: Resume existing world
- **Delete world**: Remove world data
- **World settings**: Seed, gamemode, difficulty
- **Export world**: Download world data
- **Import world**: Upload world data

---

## 18. Accessibility Features

### 18.1 Visual Accessibility
- **Colorblind modes**: Alternative color palettes
- **High contrast**: Enhanced visibility
- **UI scaling**: Adjustable interface size
- **Subtitles**: Visual sound indicators
- **Chat formatting**: Readable text options

### 18.2 Control Accessibility
- **Rebindable keys**: Custom key mapping
- **Mouse sensitivity**: Adjustable speed
- **Toggle options**: Toggle vs hold for actions
- **Auto-jump**: Automatic jumping over blocks

### 18.3 Gameplay Accessibility
- **Peaceful mode**: No hostile mobs
- **Creative mode**: No survival pressure
- **Keep inventory**: Don't lose items on death
- **Command assistance**: Helpful game commands

---

## 19. Monetization (Optional)

### 19.1 Free-to-Play Model
- **Core game**: Completely free
- **No pay-to-win**: All gameplay free

### 19.2 Optional Cosmetics
- **Skins**: Character appearance customization
- **Texture packs**: Visual themes
- **Sound packs**: Audio customization
- **Capes**: Cosmetic back items

### 19.3 Server Hosting
- **Free hosting**: Limited player count
- **Premium hosting**: More players, better performance
- **Realm subscriptions**: Private managed servers

---

## 20. Future Expansion Ideas

### 20.1 Content Updates
- **New biomes**: Additional terrain variety
- **New mobs**: More creatures
- **New blocks**: Expanded building options
- **New dimensions**: Alternative worlds
- **New structures**: More generated buildings

### 20.2 Feature Additions
- **Quests system**: Guided objectives
- **NPC dialogue**: Story elements
- **Skill trees**: Character progression
- **Seasons**: Dynamic world changes
- **Weather effects**: More variety

### 20.3 Community Features
- **Workshop**: Share creations
- **Leaderboards**: Competition tracking
- **Tournaments**: Organized events
- **Streaming integration**: Twitch/YouTube features
- **Mod support**: Community modifications

---

## 21. Development Roadmap

### Phase 1: Core Engine (Months 1-3)
- [ ] WebGL rendering engine
- [ ] Voxel world generation
- [ ] Basic player movement and camera
- [ ] Block placement and breaking
- [ ] Chunk loading system

### Phase 2: Gameplay Basics (Months 4-6)
- [ ] Inventory system
- [ ] Crafting system
- [ ] Basic blocks (stone, dirt, wood, ores)
- [ ] Tools and weapons
- [ ] Health and damage system

### Phase 3: World Generation (Months 7-9)
- [ ] Biome system
- [ ] Cave generation
- [ ] Structure generation (trees, villages)
- [ ] Water and lava physics
- [ ] Day/night cycle

### Phase 4: Mobs & Combat (Months 10-12)
- [ ] Mob AI system
- [ ] Passive mobs (pigs, cows, sheep)
- [ ] Hostile mobs (zombies, skeletons, creepers)
- [ ] Combat mechanics
- [ ] Mob spawning system

### Phase 5: Advanced Features (Months 13-15)
- [ ] Enchanting system
- [ ] Brewing system
- [ ] Redstone system
- [ ] Nether dimension
- [ ] Farming and breeding

### Phase 6: End Game (Months 16-18)
- [ ] The End dimension
- [ ] Ender Dragon boss fight
- [ ] Strongholds and End Portals
- [ ] Advancement system
- [ ] End Cities and Elytra

### Phase 7: Multiplayer (Months 19-21)
- [ ] Server architecture
- [ ] Multiplayer networking
- [ ] Chat system
- [ ] Player synchronization
- [ ] Server administration tools

### Phase 8: Polish & Launch (Months 22-24)
- [ ] Performance optimization
- [ ] UI/UX improvements
- [ ] Sound and music integration
- [ ] Tutorial system
- [ ] Beta testing and bug fixes
- [ ] Official launch

---

## 22. Success Metrics

### 22.1 Technical Metrics
- **Performance**: Maintain 60 FPS on target hardware
- **Load times**: World loads in <5 seconds
- **Network latency**: <100ms for multiplayer
- **Crash rate**: <0.1% of sessions
- **Browser compatibility**: 95%+ of modern browsers

### 22.2 User Engagement
- **Daily Active Users (DAU)**: Track daily players
- **Session length**: Average playtime per session
- **Retention**: 30-day player retention rate
- **World creation**: New worlds created per day
- **Multiplayer adoption**: % of players using multiplayer

### 22.3 Community Metrics
- **User creations**: Shared builds and maps
- **Social sharing**: Screenshots and videos
- **Community size**: Discord/forum membership
- **Content creators**: Streamers and YouTubers
- **Mod ecosystem**: User-created modifications

---

## 23. Risk Assessment

### 23.1 Technical Risks
- **Browser performance**: Mobile devices may struggle
  - *Mitigation*: Aggressive optimization, quality settings
- **Storage limitations**: Browser storage quotas
  - *Mitigation*: Compression, cloud save option
- **Network issues**: Multiplayer lag and disconnections
  - *Mitigation*: Client-side prediction, reconnection system

### 23.2 Legal Risks
- **Intellectual property**: Similarity to Minecraft
  - *Mitigation*: Original art style, unique features, educational fair use
- **Trademark issues**: Naming and branding
  - *Mitigation*: Distinct branding, legal review

### 23.3 Market Risks
- **Competition**: Existing Minecraft and clones
  - *Mitigation*: Browser accessibility, free-to-play, unique features
- **User acquisition**: Standing out in crowded market
  - *Mitigation*: Marketing, community building, content creators

---

## Conclusion

This Game Design Document outlines a comprehensive browser-based voxel sandbox game inspired by Minecraft. The game will feature exploration, building, crafting, combat, and multiplayer functionality, all running in modern web browsers using WebGL technology.

The phased development approach ensures core mechanics are solid before adding advanced features. The focus on performance optimization and browser compatibility will make the game accessible to the widest possible audience.

By delivering the core Minecraft experience in an accessible browser format, this game aims to bring the joy of creative building and survival gameplay to players without requiring downloads or installations.

**Document Version**: 1.0
**Last Updated**: December 4, 2025
**Status**: Initial Draft
