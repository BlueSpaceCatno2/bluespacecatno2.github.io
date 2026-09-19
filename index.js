const xmlDatabaseSource = `
<?xml version="1.0" encoding="UTF-8"?>
<database>
<!-- CHARACTERS -->
<entry id="bran-davis">
<name>Bran Davis</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Simple mine worker. No combat expert. A normal guy learning on the job.</quote>
<stats>
<stat label="Role">Syndicate Leader &amp; Wire Student</stat>
<stat label="Vehicle Blueprints">Custom Tan SUV</stat>
<stat label="Standard HP">100 HP</stat>
<stat label="Standard Armor">2 Armor (Shows 1 in game for easy layout)</stat>
<stat label="Primary Armament">&lt;span class='wiki-link' data-id='cd-13-rifle'&gt;CD-13 Auto Gun&lt;/span&gt;</stat>
</stats>
<lore>
<p>Bran Davis: a normal worker. Goal: a wire job. No luck. Result: heavy mine job in the Proxima stars.</p>
<p>Derrulicant attack on his Startis home. Escape in a tan SUV. Later, captain of the Syndicate main ship. Reason: old captain dead from a sick bug.</p>
<p>No army past. But his heavy mine rig skills and wire knowledge make him the heart of the human fight.</p>
</lore>
<extra>System Note: Bran's desk has an old Earth item—a Dell L100 keyboard. No logo. His tan mine SUV has 125 extra HP (200 total) and 2 extra armor (4 total) on easy mode. A buffer for player mistakes. Normal stats on Hard mode. Bran does less damage (8 damage) than normal heroes (10 damage). Reason: simple civilian past.</extra>
</entry>

<entry id="prius">
<name>Prius (Enclave King)</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>A scared ruler hiding behind glowing screens. Protection for a fake history.</quote>
<stats>
<stat label="Faction Role">Top Ruler of the Enclave Purists</stat>
<stat label="Visual Presence">Talk via blue holograms only</stat>
<stat label="Inspiration">Old Earth General Horatio Gates</stat>
<stat label="Mind State">Extreme Fear &amp; No Sleep</stat>
</stats>
<lore>
<p>Prius: past Enclave warship captain. Present at the huge Star Forge blast. No fighting done. Hidden cruiser due to flight log lies and fake engine trouble. Cowardice kept secret from his crew.</p>
<p>Great fear of discovery. Result: madness. Rule over a broken empire with heavy digital spy gear and endless holograms.</p>
<p>Creator of the Syndicate war on Derrulicants. Goal: ruin a new Star Forge project on Startis. Burial of all proof of his past fear.</p>
</lore>
<extra>System Note: Prius hunts the 25 lost Enclave ships from the Star Forge blast. Goal: destruction before any live crew shows his fake past.</extra>
</entry>

<entry id="stafford">
<name>Dr. Glenn Stafford (Jeffery)</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Jeffery is gone. His heavy armor suit now holds the combined mind of Dr. Stafford.</quote>
<stats>
<stat label="Faction Alignment">Flesh Hive Mind</stat>
<stat label="Host Identity">Old BMO Guard Jeffery (ID #033198)</stat>
<stat label="Physical Symptom">Shaking armor joints</stat>
<stat label="Cause">Broken body-heat gear</stat>
</stats>
<lore>
<p>Earth bug crisis early days. Jeffery: BMO guard. Dead patrol team. His suit taken by the mind of head worker Dr. Glenn Stafford.</p>
<p>Stafford: shot himself with a broken DNA tool. Tool full of sick bug cells. Normal bug beasts have no mind. Stafford's mind has control over the swarm.</p>
<p>Shaking body. Reason: suit's 6-part heat gear shares heat badly during the cell mix. Broken joint power.</p>
</lore>
<extra>Easter Egg: Jeffery's BMO ID #033198. Meaning: StarCraft release date (March 31, 1998). Stafford name from Glenn Stafford, StarCraft music maker.</extra>
</entry>

<entry id="tanner">
<name>BMO Officer Tanner</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>A ground worker facing a dead world.</quote>
<stats>
<stat label="Official ID">#072710 (BMO Files)</stat>
<stat label="Deployment Zone">BMO Earth Main Base</stat>
<stat label="Primary Vehicle">BMO Heavy Truck</stat>
<stat label="Status">Dead in Fight</stat>
</stats>
<lore>
<p>Tanner: front line BMO guard on Earth. Dead six-man team during a bug outbreak. Solo walk through the sick zone.</p>
<p>Base found. Escape chopper called. Bug beasts jump and break the rotor blades. Crash back into the dirt waste.</p>
<p>End choice: death. Mid-air blast of the escape rocket. Result: no bug spread to other stars.</p>
</lore>
<extra>System ID Note: Tanner number #072710. Meaning: July 27, 2010—StarCraft II release date.</extra>
</entry>

<entry id="jamison">
<name>Specialist Jamison</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>No gun. No armor. A bad dirt waste. Jamison fights with pure will.</quote>
<stats>
<stat label="Armor Frame">15% bigger than normal Syndicate suits</stat>
<stat label="True HP Capacity">250 HP</stat>
<stat label="Armoring Index">2 Armor</stat>
<stat label="Melee Damage">20 Damage</stat>
<stat label="Rifle Damage">10 Damage</stat>
</stats>
<lore>
<p>Jamison: guard on a Blue Ops drop ship. Ship shot down by auto guns. Drop pod wing broken. Crew locks popped open.</p>
<p>Bare hands opening a stuck safety rack. Climb into a heavy metal suit right before a hard ground hit. Gun lost off a cliff during a bug trap. Result: Jamison beating beasts with his hands.</p>
<p>Stuck in the dirt waste. Broken fluid lines. Chest plate drop needed for life.</p>
</lore>
</entry>

<entry id="former-captain">
<name>The Unnamed Syndicate Captain</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>First captain of the Syndicate ship. His sad death moved Bran Davis up.</quote>
<stats>
<stat label="Former Command">Syndicate Star Ship</stat>
<stat label="Primary Cause of Death">Sick bug crash with his genes</stat>
<stat label="Age of Onset">30 Earth Years</stat>
</stats>
<lore>
<p>First captain of Bran's ship. Dead soon after Proxima star arrival. Secret kept by top staff.</p>
<p>Death by Earth bug. Reason: a sad gene trap. Parent shot mix cancelled out his bug guard by age 30.</p>
<p>In-game proof: weird purple spot in his room. Left from his final body melt.</p>
</lore>
</entry>

<entry id="elder">
<name>The Enclave Elder</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>A brave leader. Dead for showing the truth about Prius.</quote>
<stats>
<stat label="Jurisdiction">Enclave Rule Room</stat>
<stat label="Action">Shared files of the Star Forge cover-up</stat>
<stat label="Current Status">Dead (Killed by Enclave spies)</stat>
</stats>
<lore>
<p>Enclave leader. Finder of true files about Prius and his Star Forge run-away.</p>
<p>Contact with Bran Davis. Proof sent of Prius lies and his secret plan against the Derrulicants.</p>
<p>Bran fact-check attempt. Quick result: dead elder in his room. Final break between Syndicate and Enclave.</p>
</lore>
</entry>

<entry id="derrulicant-leader">
<name>The Derrulicant Overlord</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>A deathless ruler in a heavily braced bug body.</quote>
<stats>
<stat label="Jurisdiction">Torus VI Main Command</stat>
<stat label="Gene State">Very sick but full mind</stat>
<stat label="Stabilizers Held">4 Active Syncon Stasis Parts</stat>
</stats>
<lore>
<p>Top ruler of the Derrulicants. Iron rule over Torus VI factory home.</p>
<p>Sick with the bug virus early in the war. No mind loss. Reason: body recovery and 4 gene safety parts in his flesh.</p>
<p>Extreme body change. Result: almost deathless life. Kept mind during slow body changes.</p>
</lore>
</entry>

<!-- SYNDICATE UNITS -->
<entry id="soldier">
<name>Soldier</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Rough foot troops in old box-lifter gear.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Draft Center&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 12s</stat>
<stat label="HP / Base Armor">50 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='cd-12-rifle'&gt;Assault Gun&lt;/span&gt; (Ground &amp; Air)</stat>
<stat label="Weapon Stats">3 Damage | Range 5 | 1.0s Wait | Instant Hit</stat>
<stat label="Upgrades">Gun 1-3 (+1 Dmg)</stat>
<stat label="Tags">Light, Foot, Flesh</stat>
</stats>
<lore>
<p>Normal Syndicate troops. Mine workers and builders in 1.5-ton box lifters with machine guns.</p>
<p>Suit 5 HP boost over normal game units. Reason: small Caspium dust in the metal plates. Bad side effect: lung cancer from the dust.</p>
</lore>
<extra>Secret File: Soldiers bypass suit water tanks. Moonshine and fruit mash in water filters. Help for long watch shifts. Many are minor sick survivors given front line jobs.</extra>
</entry>

<entry id="prawn">
<name>Prawn</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Field builder. Maker of bases and fixer of heavy metal units.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Draft Center&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 10s</stat>
<stat label="HP / Base Armor">50 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">4.5/s (0.8s start wait) / Range 8</stat>
<stat label="Upgrades">Combat Upgrades: None</stat>
<stat label="Tags">Light, Machine</stat>
</stats>
<lore>
<p>Prawn: base builder and machine fixer. Tall soldier frame with strong lift power. No guns. Fixes pipes, buildings, and big metal walkers.</p>
<p>Syndicate lacks a moving big gun truck. Players must walk weak Prawn units to the front lines. Goal: build big sitting guns there.</p>
</lore>
</entry>

<entry id="enforcer">
<name>Enforcer</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Better, heavy metal foot troops.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Draft Center&lt;/span&gt;</stat>
<stat label="Cost">100 Rock / 5 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 18s</stat>
<stat label="HP / Base Armor">75 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='cd-12-rifle'&gt;Mod Assault Gun&lt;/span&gt; (Ground &amp; Air)</stat>
<stat label="Weapon Stats">6 Damage | Range 5 | 1.2s Wait | Instant Hit</stat>
<stat label="Tags">Medium, Flesh</stat>
</stats>
<lore>
<p>Enforcer: heavy foot troop. Combat step up from normal Soldier. Strong metal plates for heavy hits.</p>
</lore>
</entry>

<entry id="skidder">
<name>Skidder</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Fast scout. Good for blocking base doors.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Draft Center&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 20 Metal / 5 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 16s</stat>
<stat label="HP / Base Armor">40 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Fast (6.0/s) / Range 9</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='light-grenades-wep'&gt;Light Bombs&lt;/span&gt; (Ground Only)</stat>
<stat label="Stationary Mode">5 Damage | Range 4 | 2.0s Wait</stat>
<stat label="Mobile Mode">5 Damage | Range 4 | 3.0s Wait</stat>
<stat label="Upgrades">Truck Armor 1 &amp; 2 (+2 HP, +0.5 Armor)</stat>
<stat label="Tags">Light, Machine, Truck</stat>
</stats>
<lore>
<p>Skidder: past life as a tree truck. New use: tossing bombs. Wheel base shoots faster when sitting still.</p>
</lore>
</entry>

<entry id="incinerator">
<name>Incinerator</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Front line fighter. Safe from fire. High boom risk.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Draft Center&lt;/span&gt;</stat>
<stat label="Cost">5 Rock / 20 Metal / 50 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 22s</stat>
<stat label="HP / Base Armor">100 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 6</stat>
<stat label="Abilities">Auto-Target Slime | Fire Safe | Boom Risk (50% chance to pop for 5 dmg if hit for &gt;15 HP)</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='dual-flamers'&gt;Two Fire Guns&lt;/span&gt; (Cone Area)</stat>
<stat label="Weapon Stats">5 Dmg (2 fast) | Range 3 | +10 vs Light</stat>
<stat label="Upgrades">Gun 1-3 | Tier 3 (3s Burn)</stat>
<stat label="Tags">Heavy, Foot, Flesh</stat>
</stats>
<lore>
<p>Heavy fire guns for clearing bug slime paths. Risk: hits over 15 HP have a 50% chance to pop gas lines. Blast hurts all nearby units.</p>
</lore>
<extra>Tech Note: Suit not air-tight. Space room limit. Space jobs: gas tank 2 filled with air. Planet jobs: CO2-to-air filters.</extra>
</entry>

<entry id="medic">
<name>Medic</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Flesh healer unit.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Draft Center&lt;/span&gt;</stat>
<stat label="Cost">5 Rock / 20 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 15s</stat>
<stat label="HP / Base Armor">50 HP / 1 Armor (Upgradable)</stat>
<stat label="Abilities">Heal (Auto flesh heal)</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='needler-wep'&gt;Needle Gun&lt;/span&gt; (Ground &amp; Air)</stat>
<stat label="Weapon Stats">2 Damage | Range 4 | 0.7s Wait</stat>
<stat label="Upgrades">Gun (+0.5 dmg) | Armor (+10 HP)</stat>
<stat label="Tags">Light, Flesh, Help</stat>
</stats>
<lore>
<p>Syndicate Medic drug boost. Direct into flesh units. Faster gun rate active only during live healing.</p>
</lore>
</entry>

<entry id="suv">
<name>Support SUV</name>
<type>Support Vehicle (SUV)</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Main game truck. Scout, door block, and bomb layer.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">100 Rock / 50 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 24s</stat>
<stat label="HP / Base Armor">75 HP / 2 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Fast (6.0/s) / Range 9</stat>
<stat label="Garrison">4 Soldiers (Can shoot from inside)</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='eject-mines-wep'&gt;Drop Bombs&lt;/span&gt; (Self Boom)</stat>
<stat label="Weapon Effect">Drop 5 bombs (50 dmg +20 vs metal +30 vs machine)</stat>
<stat label="Upgrades">Truck Gun (+2 bombs)</stat>
<stat label="Tags">Medium, Machine, Truck</stat>
</stats>
<lore>
<p>Support Truck: main cover unit of Proxima. Self-boom order drops five hidden floor bombs to block a base door. Unit drops: 2 per side, left to right.</p>
</lore>
</entry>

<entry id="sentry">
<name>Sentry</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Sitting defense base; stops air attacks and hidden units.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 50 Metal / 100 Oil / 20 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 30s</stat>
<stat label="HP / Base Armor">50 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Slow (3.0/s) / Range 10</stat>
<stat label="Rule">No solo attack. Needs floor lock.</stat>
<stat label="Deploy Ability">+1 Range, See Hidden, Radar in 20 tiles</stat>
<stat label="Primary Weapon">&lt;span class='wiki-link' data-id='cluster-rockets-wep'&gt;Sky Rockets&lt;/span&gt; (AIR ONLY, 5 Targets, 20 dmg +10 vs Machine)</stat>
<stat label="Secondary Weapon">&lt;span class='wiki-link' data-id='mg-turret-wep'&gt;Machine Gun&lt;/span&gt; (Ground &amp; Air, 5 dmg +2 locked)</stat>
<stat label="Upgrades">Armor | Gun (+15% Fire Rate &amp; Dmg)</stat>
<stat label="Tags">Robot, Heavy Armor, Machine</stat>
</stats>
<lore>
<p>Sentry rule: attack only in locked floor mode. Locked mode: radar station. Gives +1 range, spots hidden units. Fire speed boost: +40% for each close locked Sentry. Air pump guns make loud crack sounds.</p>
</lore>
</entry>

<entry id="bulwark">
<name>Bulwark</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Heavy front line fight suit.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 75 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 32s</stat>
<stat label="HP / Base Armor">150 HP / 2 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 8</stat>
<stat label="Primary Weapon">&lt;span class='wiki-link' data-id='autocannon-wep'&gt;Big Gun&lt;/span&gt; (5-12 Dmg +5 vs Light)</stat>
<stat label="Secondary Weapon">&lt;span class='wiki-link' data-id='dual-rocket-pods-wep'&gt;Two Rocket Pods&lt;/span&gt; (20 Dmg +10 vs Armor, Split Aim)</stat>
<stat label="Upgrades">Gun (+2 base dmg)</stat>
<stat label="Tags">Heavy, Foot, Machine</stat>
</stats>
<lore>
<p>Bulwark: mid-to-late game armor frame. Free rocket pods. Aim for two different targets at the same time.</p>
</lore>
</entry>

<entry id="drone">
<name>Aero Drone</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Light, flying helper against bug swarms.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='space-center'&gt;Space Center&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 20 Metal / 5 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 14s</stat>
<stat label="HP / Base Armor">20 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">6.5/s (10.0 with Boost) / Range 10</stat>
<stat label="Abilities">Boost (Speed jump) | Over-charge (0.01s wait, slow move)</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='light-gatling-wep'&gt;Light Spin Gun&lt;/span&gt; (0.1 Dmg, 0.09s Wait)</stat>
<stat label="Tags">Light, Drone, Machine</stat>
</stats>
<lore>
<p>Aero Drones: fast scouts. Over-charge mode: slow move, but gun shoots 100 shots per second. Melts bug swarms.</p>
</lore>
</entry>

<entry id="valkyrie">
<name>Valkyrie Fighter</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Fast sky fighter.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='space-center'&gt;Space Center&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 100 Metal / 30 Oil / 5 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 35s</stat>
<stat label="HP / Base Armor">200 HP / 3 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 9</stat>
<stat label="AA Weapon">&lt;span class='wiki-link' data-id='t280-torpedoes-wep'&gt;T280 Star Bombs&lt;/span&gt; (2 Hits, 30 Dmg +20 vs Armor)</stat>
<stat label="Ground/AA Weapon">&lt;span class='wiki-link' data-id='autocannon-wep'&gt;Big Gun&lt;/span&gt; (5 Dmg +10 vs Machine)</stat>
<stat label="Upgrades">Upgrades (+10 HP, +1 Armor)</stat>
<stat label="Tags">Medium, Machine, Air</stat>
</stats>
<lore>
<p>Only human army truck. Found in old sleep-ship holds. Most system guns: copied from Valkyrie parts.</p>
</lore>
</entry>

<entry id="chaffron">
<name>Chaffron Warship</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Huge planet gun ship. Needs heavy ground guard.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='space-center'&gt;Space Center&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 400 Metal / 200 Oil / 250 Caspium</stat>
<stat label="Supply / Build Time">8 Supply / 70s</stat>
<stat label="HP / Base Armor">2000 HP / 10 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Very Slow (2.0/s) / Range 10</stat>
<stat label="Guns">8x Spin Guns (0.3 Dmg each, 0.06s wait)</stat>
<stat label="AA Missiles">2x Splash Sky Rockets (6 Dmg +10 vs Armor)</stat>
<stat label="Heavy Ability">&lt;span class='wiki-link' data-id='theranos-missile-wep'&gt;Theranos Bomb&lt;/span&gt; (300 single / 200 splash sky, +200 building)</stat>
<stat label="Upgrades">Upgrades (+15% HP, +2 Armor)</stat>
<stat label="Tags">Heavy, Machine, Air, Huge</stat>
</stats>
<lore>
<p>Made from flat box ship frames. Huge ground and air rocket loads. Two air lift fans. Very slow if one fan breaks. Larger Syndicate space ships own the high stars.</p>
</lore>
</entry>

<!-- ENCLAVE UNITS -->
<entry id="archon">
<name>Archon</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Slow, heavy shield metal walker.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='foundry'&gt;Foundry&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 100 Metal / 50 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 28s</stat>
<stat label="HP / Shield">80 HP / 120 Hard-Light Shield</stat>
<stat label="Base Armor">0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Slow (3.0/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='thermal-beam-wep'&gt;Heat Beam&lt;/span&gt; (15 Dmg, Range 6, Instant Light Beam)</stat>
<stat label="Tags">Heavy, Machine, Energy, Walker</stat>
</stats>
<lore>
<p>Archon: top Enclave shield tech. Hard-light shield stops heavy bullets. Heat laser melts through metal plate.</p>
</lore>
</entry>

<entry id="steward">
<name>Steward</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Early game melee guard and bullet block.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='foundry'&gt;Foundry&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 60 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 14s</stat>
<stat label="HP / Base Armor">20 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">3.5/s / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='energized-halberd-wep'&gt;Energy Spear&lt;/span&gt; (12 Melee Dmg, 1.1s Wait)</stat>
<stat label="Tags">Light, Flesh, Foot</stat>
</stats>
<lore>
<p>Steward: weak flesh melee unit. Used in early land grabs. High damage guard and basic bullet shield.</p>
</lore>
</entry>

<entry id="destroyer">
<name>Destroyer</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Early-to-mid game heavy metal truck.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='fabricator'&gt;Fabricator&lt;/span&gt;</stat>
<stat label="Cost">10 Rock / 100 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 28s</stat>
<stat label="HP / Base Armor">100 HP / 2 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='plasma-cannon-wep'&gt;Plasma Gun&lt;/span&gt; (15 Dmg, Range 5, Energy Ball)</stat>
<stat label="Tags">Heavy, Metal, Machine</stat>
</stats>
<lore>
<p>Standard metal truck of the Enclave. Plasma balls melt heavy walls.</p>
</lore>
</entry>

<entry id="pioneer">
<name>Pioneer</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Thick-plate front-line walker.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='fabricator'&gt;Fabricator&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 100 Metal / 75 Oil / 75 Caspium</stat>
<stat label="Supply / Build Time">4 Supply / 34s</stat>
<stat label="HP / Base Armor">150 HP / 3 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='plasma-rifle-wep'&gt;Plasma Rifle&lt;/span&gt; (10 Dmg, Range 5, 0.9s Wait)</stat>
<stat label="Tags">Heavy, Metal, Machine, Walker</stat>
</stats>
<lore>
<p>Pioneers: heavy walking shields. March right into thick bases. Goal: absorb return fire.</p>
</lore>
</entry>

<entry id="speeder">
<name>Speeder</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>High-speed light scout. Made for anti-light bug fights.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='advanced-fabricator'&gt;Adv. Fabricator&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 25 Oil / 5 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 18s</stat>
<stat label="HP / Base Armor">50 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Fast (6.0/s) / Range 9</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='thermal-cannon-wep'&gt;Heat Gun&lt;/span&gt; (1 Dmg +9 vs Light, 0.3s Wait)</stat>
<stat label="Tags">Light, Metal, Machine</stat>
</stats>
<lore>
<p>Fast scout. Built to burn light foot troops. Low base damage makes it useless against heavy metal.</p>
</lore>
</entry>

<entry id="python">
<name>Python</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Top late-game metal walker.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='advanced-fabricator'&gt;Adv. Fabricator&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 125 Metal / 100 Oil / 75 Caspium</stat>
<stat label="Supply / Build Time">5 Supply / 45s</stat>
<stat label="HP / Base Armor">300 HP / 3 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='plasma-cannon-wep'&gt;Plasma Gun&lt;/span&gt; (20 Dmg +30 vs Armor, Range 6)</stat>
<stat label="Tags">Heavy, Metal, Machine</stat>
</stats>
<lore>
<p>Python: peak of Enclave metal group. High-hit plasma shots. Made to pop truck shells fast.</p>
</lore>
</entry>

<entry id="harpy">
<name>Harpy</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Quick sky fighter.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='air-channel'&gt;Air Gate&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 75 Metal / 25 Oil / 25 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 24s</stat>
<stat label="HP / Base Armor">100 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Fast (6.0/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='charged-lance-wep'&gt;Power Spear&lt;/span&gt; (5 to 20 ramp Dmg, Range 5, Beam)</stat>
<stat label="Tags">Medium, Metal, Machine, Air</stat>
</stats>
<lore>
<p>Harpy: Power Spear weapon. Damage goes up over time. Laser beam stays locked on one target.</p>
</lore>
</entry>

<entry id="dirigible">
<name>Dirigible</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Slow, huge air ship.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='air-channel'&gt;Air Gate&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 150 Metal / 150 Oil / 100 Caspium</stat>
<stat label="Supply / Build Time">6 Supply / 55s</stat>
<stat label="HP / Base Armor">300 HP / 4 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Slow (3.0/s) / Range 9</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='ion-cannon-wep'&gt;Ion Gun Group&lt;/span&gt; (4x Guns, 25 Dmg, Range 7)</stat>
<stat label="Tags">Heavy, Machine, Metal, Huge, Air</stat>
</stats>
<lore>
<p>Huge sky float base. Drifts over battle zones. Four free-aim ion guns. Melts ground and sky targets.</p>
</lore>
</entry>

<entry id="phosphate">
<name>Phosphate</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Boom sky drone.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='air-channel'&gt;Air Gate&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 40 Metal / 100 Oil / 5 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 12s</stat>
<stat label="HP / Base Armor">40 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Fast (6.0/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Boom&lt;/span&gt; (AIR ONLY, 40 Dmg, Touch Boom)</stat>
<stat label="Tags">Light, Machine, Robot, Air</stat>
</stats>
<lore>
<p>Phosphate drones: cheap boom units. Fly into air swarms. Big pop. Clear skies fast.</p>
</lore>
</entry>

<!-- BUG SWARM UNITS -->
<entry id="biter">
<name>Biter (Normal Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>The cheapest, fastest bug swarm unit.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Birth Room&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">0.5 Supply / 7s</stat>
<stat label="HP / Base Armor">15 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Very Fast (7.5/s) / Range 5</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='mandibles-wep'&gt;Mouth Jaws&lt;/span&gt; (2 Melee Dmg, 0.6s Wait)</stat>
<stat label="Tags">Light, Flesh</stat>
</stats>
<lore>
<p>Biters: basic foot bugs. Same form across all three bug types. Big numbers block defense. Weak to fire.</p>
</lore>
</entry>

<entry id="ravenger">
<name>Ravenger (Normal Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Tough, metal-melting melee bug.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Birth Room&lt;/span&gt;</stat>
<stat label="Cost">75 Rock / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 16s</stat>
<stat label="HP / Base Armor">70 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Fast (6.0/s) / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-claws-wep'&gt;Acid Claws&lt;/span&gt; (8 Melee Dmg +6 vs Armor, 0.8s Wait)</stat>
<stat label="Acid Type">Bad Juice Matrix</stat>
<stat label="Tags">Medium, Flesh, Melee</stat>
</stats>
<lore>
<p>Normal type melee unit. Claws full of strong bug acid. Cuts metal plates fast.</p>
</lore>
</entry>

<entry id="feral">
<name>Feral (Acid Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Acid bug boom unit.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Birth Room&lt;/span&gt;</stat>
<stat label="Cost">75 Rock / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 16s</stat>
<stat label="HP / Base Armor">80 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">3.5/s / Range 5</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Boom&lt;/span&gt; (12 Dmg +8 vs Armor, Touch Boom)</stat>
<stat label="Core Pressure">Big Acid Bag</stat>
<stat label="Tags">Medium, Flesh, Melee, Acid</stat>
</stats>
<lore>
<p>Feral biters: big with tight acid bags. Run into metal groups. Pop and boom on touch.</p>
</lore>
</entry>

<entry id="annihilator">
<name>Annihilator (Pure Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Heavy pure shock-troop.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Birth Room&lt;/span&gt;</stat>
<stat label="Cost">75 Rock / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 18s</stat>
<stat label="HP / Base Armor">125 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='claws-wep'&gt;Claws&lt;/span&gt; (14 Melee Dmg +4 vs Armor, 1.2s Wait)</stat>
<stat label="Tags">Medium, Flesh, Melee, Pure</stat>
</stats>
<lore>
<p>Raw muscle bug. Ignores small cuts. Smashes normal metal walls.</p>
</lore>
</entry>

<entry id="spitter">
<name>Spitter (Normal Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Normal mid-game long-range bug.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Bug Pod&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 20s</stat>
<stat label="HP / Base Armor">50 HP / 2 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acidic-bile-wep'&gt;Acid Spit&lt;/span&gt; (12 Dmg +4 vs Light, Range 5, Toss)</stat>
<stat label="Spit Type">Thick Acid</stat>
<stat label="Tags">Light, Flesh</stat>
</stats>
<lore>
<p>Main long-range unit for normal bugs. Tosses stomach acid from far away. Melts foot troops.</p>
</lore>
</entry>

<entry id="gagger">
<name>Gagger (Acid Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Loud, high-damage acid spitter.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Bug Pod&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 20s</stat>
<stat label="HP / Base Armor">35 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Slow (3.0/s) / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-vomit-wep'&gt;Acid Puke&lt;/span&gt; (20 Dmg +12 vs Light, Range 4, Slow move)</stat>
<stat label="Flaw">Loud gag noise heard in fog</stat>
<stat label="Tags">Medium, Flesh, Acid</stat>
</stats>
<lore>
<p>Heavy acid spray. Gaggers make a very loud gag noise. Enemies hear it in the dark map. Great for melting early fire or shield units.</p>
</lore>
</entry>

<entry id="ranger">
<name>Ranger (Pure Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Long-range anti-metal hunter.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Bug Pod&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 20s</stat>
<stat label="HP / Base Armor">75 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-spit-wep'&gt;Acid Spike&lt;/span&gt; (10 Dmg +25 vs Armor, Range 5)</stat>
<stat label="Tags">Medium, Flesh, Pure</stat>
</stats>
<lore>
<p>Pure hunter bugs. Shoot hard bone spikes. Punch clean holes in thick metal tanks.</p>
</lore>
</entry>

<entry id="nest">
<name>Nest (Moving Base)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Moving flesh fort.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Bug Pod&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 20 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">0 Supply / 25s</stat>
<stat label="Sit Stats">150 HP / 2 Armor / Sit (0/s) / Range 7</stat>
<stat label="Walk Stats">100 HP / 1 Armor / Walk (2.0/s) / Range 7</stat>
<stat label="Hold">4 Shoot Units (Change form when empty)</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='claws-wep'&gt;Claws&lt;/span&gt; (Walk Only: 10 Melee Dmg, 1.0s wait)</stat>
<stat label="Flaws">No move off slime. Instant death if slime burns.</stat>
<stat label="Tags">Flesh, Base</stat>
</stats>
<lore>
<p>Acts as a strong bug base. Can pull up and walk on legs. Move off bug slime = instant death. Same if slime melts.</p>
</lore>
</entry>

<entry id="titan">
<name>Titan (Normal Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Huge base-smasher beast. Ignores metal plates.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Bug Pod&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 100 Metal / 50 Oil / 25 Caspium</stat>
<stat label="Supply / Build Time">4 Supply / 38s</stat>
<stat label="HP / Base Armor">150 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Slow (3.0/s) / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='crush-wep'&gt;Smash&lt;/span&gt; (30 Melee Dmg +10 vs Machine, Ignores 50% armor)</stat>
<stat label="Rule">No Acid/Pure type. Hides in ground if Acid type picked.</stat>
<stat label="Tags">Flesh, Huge, Metal</stat>
</stats>
<lore>
<p>Ignores half of enemy armor. Player picks Acid bug type? Titans hide in the dirt. Complete sleep mode.</p>
</lore>
</entry>

<entry id="stalker">
<name>Stalker (Normal Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Cheap sky pest.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Sky Bug Room&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 22s</stat>
<stat label="HP / Base Armor">100 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-spines-wep'&gt;Acid Pins&lt;/span&gt; (5 Dmg +10 vs Machine, Range 4)</stat>
<stat label="Tags">Light, Flesh, Air</stat>
</stats>
<lore>
<p>Cheap, fast sky bugs. Made to bug workers. Fly ahead of the swarm.</p>
</lore>
</entry>

<entry id="leech">
<name>Leech (Acid Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Weak air boom bug.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Sky Bug Room&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 12s</stat>
<stat label="HP / Base Armor">25 HP / -1 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Fast (6.0/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Boom&lt;/span&gt; (AIR ONLY, 20 Dmg, Touch Boom)</stat>
<stat label="Tags">Light, Flesh, Air, Acid</stat>
</stats>
<lore>
<p>Leeches rush sky units. Big boom. Drop melting acid mix.</p>
</lore>
</entry>

<entry id="vulture">
<name>Vulture (Pure Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Thick, slow sky fighter.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Sky Bug Room&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 24s</stat>
<stat label="HP / Base Armor">115 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">3.5/s / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='spines-wep'&gt;Bone Pins&lt;/span&gt; (AIR ONLY, 15 Dmg, Range 5)</stat>
<stat label="Tags">Medium, Flesh, Air, Pure</stat>
</stats>
<lore>
<p>Tough sky guards. Shoot hard bone spears. Easy sky win.</p>
</lore>
</entry>

<entry id="carrion">
<name>Carrion (Normal Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Scary big bug. Eats light troops whole.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Sky Bug Room&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 30s</stat>
<stat label="HP / Base Armor">150 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='tentacles-wep'&gt;Arms&lt;/span&gt; (10 Dmg +10 if light, Chance to one-bite light)</stat>
<stat label="Tags">Heavy, Flesh, Help</stat>
</stats>
<lore>
<p>Long arms grab. Pulls light troops into a big mouth. Small chance to kill in one bite.</p>
</lore>
</entry>

<entry id="vomiter">
<name>Vomiter (Acid Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Wide-area acid sprayer.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Sky Bug Room&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 30s</stat>
<stat label="HP / Base Armor">100 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Slow (3.0/s) / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-spray-wep'&gt;Acid spray&lt;/span&gt; (0.1 Dmg ramps to 0.5, +0.1 vs light, Non-stop)</stat>
<stat label="Tags">Heavy, Flesh, Acid</stat>
</stats>
<lore>
<p>Coats map tight spots in non-stop acid fog. Fog gets worse the longer troops stand in it.</p>
</lore>
</entry>

<entry id="husk">
<name>Husk (Pure Type)</name>
<type>Bug Swarm Unit</type>
<category>Bug Swarm Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Heavy bug siege beast.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Sky Bug Room&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">4 Supply / 36s</stat>
<stat label="HP / Base Armor">200 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Normal (4.5/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='spore-cannons-wep'&gt;Pod Guns&lt;/span&gt; (30 Dmg +20 vs Armor, Range 6, Toss Pod)</stat>
<stat label="Tags">Heavy, Flesh, Pure</stat>
</stats>
<lore>
<p>Top bug base-smasher. Shoots huge bone-covered pods. Punch holes in enemy walls.</p>
</lore>
</entry>

<!-- PRODUCTION STRUCTURES -->
<entry id="conscription-center">
<name>Draft Center</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Syndicate troop camp. Mine workers drafted into suits.</quote>
<stats>
<stat label="Faction Owner">Syndicates</stat>
<stat label="Primary Units Built">Soldier, Prawn, Enforcer, Skidder, Incinerator, Medic</stat>
<stat label="Structural Role">Tier 1 Foot Camp</stat>
</stats>
<lore>
<p>Syndicate start base. Drafts normal miners. Gives them basic Soldier frames.</p>
<p>Also builds Medics, Prawn fixers, and hot Incinerators. Goal: fight the creeping bug threat.</p>
</lore>
</entry>

<entry id="factory">
<name>Factory</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Heavy metal plant for Syndicate machine frames.</quote>
<stats>
<stat label="Faction Owner">Syndicates</stat>
<stat label="Primary Units Built">Support Truck, Sentry, Bulwark</stat>
<stat label="Structural Role">Tier 2 Metal Walkers</stat>
</stats>
<lore>
<p>Builds heavy duty frames. Made from old cargo machines.</p>
<p>Makes the fast Support Truck, sitting Sentry, and big Bulwark walk suits.</p>
</lore>
</entry>

<entry id="space-center">
<name>Space Center</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Syndicate launch pad for sky fighters and huge space ships.</quote>
<stats>
<stat label="Faction Owner">Syndicates</stat>
<stat label="Primary Units Built">Sky Drone, Valkyrie, Chaffron Ship</stat>
<stat label="Structural Role">Tier 3 Sky Ship Base</stat>
</stats>
<lore>
<p>Uses old space hangar plans for sky support.</p>
<p>Launches fast Sky Drones, strong Valkyrie Fighters, and huge Chaffron Ships.</p>
</lore>
</entry>

<entry id="foundry">
<name>Foundry</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Enclave metal base for early guards.</quote>
<stats>
<stat label="Faction Owner">Enclave</stat>
<stat label="Primary Units Built">Steward, Archon</stat>
<stat label="Structural Role">Tier 1 Guards</stat>
</stats>
<lore>
<p>Uses start Caspium rocks to mold guard frames.</p>
<p>Makes fast flesh Stewards to block bullets. Makes heavy shield Archon walkers.</p>
</lore>
</entry>

<entry id="fabricator">
<name>Fabricator</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Enclave machine shop for standard planet mechs.</quote>
<stats>
<stat label="Faction Owner">Enclave</stat>
<stat label="Primary Units Built">Destroyer, Pioneer</stat>
<stat label="Structural Role">Tier 2 Metal Assembly</stat>
</stats>
<lore>
<p>Welds thick steel to auto car bases.</p>
<p>Makes standard heavy Destroyers and block-walking Pioneer teams.</p>
</lore>
</entry>

<entry id="advanced-fabricator">
<name>Adv. Fabricator</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Enclave heavy forge for top-tier planet smashers.</quote>
<stats>
<stat label="Faction Owner">Enclave</stat>
<stat label="Primary Units Built">Speeder, Python</stat>
<stat label="Structural Role">Tier 3 Titan Shop</stat>
</stats>
<lore>
<p>Needs lots of Caspium power. Launches quick Speeders for spy work. Builds huge, thick Python walkers.</p>
</lore>
</entry>

<entry id="air-channel">
<name>Air Gate</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Enclave float grid for making sky forts.</quote>
<stats>
<stat label="Faction Owner">Enclave</stat>
<stat label="Primary Units Built">Harpy, Dirigible, Phosphate</stat>
<stat label="Structural Role">Tier 3 Sky Pad</stat>
</stats>
<lore>
<p>Makes a stable air gate to launch sky sweeps.</p>
<p>Builds beam Harpies, huge Dirigible blimps, and boom Phosphate robots.</p>
</lore>
</entry>

<entry id="incubation-chamber">
<name>Birth Room</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Main spawn pit of the bug swarm.</quote>
<stats>
<stat label="Faction Owner">Bug Swarm</stat>
<stat label="Primary Units Spawned">Biter, Ravenger, Feral, Annihilator</stat>
<stat label="Structural Role">Melee Spawn Node</stat>
</stats>
<lore>
<p>Huge, breathing meat base. Uses bug slime and food to make new life.</p>
<p>Makes basic Biters. Allows change into punch bugs like Ferals or Annihilators.</p>
</lore>
</entry>

<entry id="spore-accumulator">
<name>Bug Pod</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Bug node turning flesh paste into spit bugs.</quote>
<stats>
<stat label="Faction Owner">Bug Swarm</stat>
<stat label="Primary Units Spawned">Spitter, Gagger, Ranger, Nest, Titan</stat>
<stat label="Structural Role">Range &amp; Heavy Flesh Spawner</stat>
</stats>
<lore>
<p>Grows higher bug types. Makes basic Spitters, blind Gaggers, and huge, wall-breaking Titans.</p>
</lore>
</entry>

<entry id="corea">
<name>Sky Bug Room</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Bug high sky nest and help center.</quote>
<stats>
<stat label="Faction Owner">Bug Swarm</stat>
<stat label="Primary Units Spawned">Stalker, Leech, Vulture, Carrion, Vomiter, Husk</stat>
<stat label="Structural Role">High Sky &amp; Help Nest</stat>
</stats>
<lore>
<p>Top bug growth stage. Makes sky pests like Stalkers. Makes heavy support bugs like the huge Husk pod-shooter.</p>
</lore>
</entry>

<!-- WEAPONS -->
<entry id="cd-12-rifle">
<name>CD-12 Assault Gun</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>CD-12 Auto Bullet Gun, made by Alaby Inc.</quote>
<stats>
<stat label="Manufacturer">Alaby Inc</stat>
<stat label="Ammo Standard">.50 Caliber Steel Rounds</stat>
<stat label="Melee Feature">Heavy Steel bash plate on the right</stat>
<stat label="Standard Users">Soldier, Enforcer</stat>
</stats>
<lore>
<p>Tough, normal issue gun of the Syndicate. Thick steel sides. Good for hitting things when out of ammo.</p>
<p>Some soldiers change it to shoot shotgun shells. Very illegal.</p>
</lore>
</entry>

<entry id="cd-13-rifle">
<name>CD-13 Auto Gun</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Top armor-breaking gun of hero units.</quote>
<stats>
<stat label="Manufacturer">Alaby Inc</stat>
<stat label="Special Property">Breaks 15% of target armor</stat>
<stat label="Standard Damage">7 Damage (+4 over CD-12)</stat>
<stat label="Primary User">Bran Davis</stat>
</stats>
<lore>
<p>Hero unit gun only. Fast shot speed. Punches right through normal armor.</p>
</lore>
</entry>

<entry id="dual-flamers">
<name>Two Fire Guns</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>High-heat fuel fire guns on Incinerator suits.</quote>
<stats>
<stat label="Engine Damage">5 (Fires 2 at once)</stat>
<stat label="Bonus Modifier">+10 vs Light bugs</stat>
<stat label="Target Profile">Ground Only (Friendly fire cone)</stat>
<stat label="Primary User">Incinerator</stat>
</stats>
<lore>
<p>Bad, hot fuel hoses. Sprays burning gel in a front cone. Clears bug slime.</p>
</lore>
</entry>

<entry id="needler-wep">
<name>Needle Gun</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Drug dart gun.</quote>
<stats>
<stat label="Base Damage">2 Damage</stat>
<stat label="Weapon Delay">0.7s</stat>
<stat label="Range Index">4 Tiles</stat>
<stat label="Primary User">Medic</stat>
</stats>
<lore>
<p>Shoots health needles. Carries life drugs to keep the troop safe on the field.</p>
</lore>
</entry>

<entry id="light-grenades-wep">
<name>Light Bombs</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Bomb tosser stuck on tree trucks.</quote>
<stats>
<stat label="Base Damage">5 Damage</stat>
<stat label="Firing Speed">12/s</stat>
<stat label="Trajectory">Arc Drop</stat>
<stat label="Primary User">Skidder</stat>
</stats>
<lore>
<p>Shoots quick, short-range drop bombs. Shoots faster when the truck sits still.</p>
</lore>
</entry>

<entry id="eject-mines-wep">
<name>Drop Bombs</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Self-boom bomb drop field.</quote>
<stats>
<stat label="Mine Damage">50 Base (+20 vs Armor, +30 vs Machine)</stat>
<stat label="Arm Time">2.0 seconds</stat>
<stat label="Deployment Type">Touch / Hidden</stat>
<stat label="Primary User">Support SUV</stat>
</stats>
<lore>
<p>High-risk move. Truck blows up to drop a huge hidden bomb field.</p>
</lore>
</entry>

<entry id="cluster-rockets-wep">
<name>Sky Rockets</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Air-clearing small rocket pods.</quote>
<stats>
<stat label="Target Profile">AIR ONLY</stat>
<stat label="Simultaneous Targets">Up to 5 targets</stat>
<stat label="Base Damage">20 (+10 vs Machine)</stat>
<stat label="Primary User">Sentry, Chaffron</stat>
</stats>
<lore>
<p>Shoots smart rockets. Locks onto enemy sky targets. Stops air rushes.</p>
</lore>
</entry>

<entry id="mg-turret-wep">
<name>Machine Gun</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Normal fast bullet gun.</quote>
<stats>
<stat label="Base Damage">5 Damage (+2 locked)</stat>
<stat label="Weapon Delay">1.5s</stat>
<stat label="Projectile Type">Instant Hit</stat>
<stat label="Primary User">Sentry</stat>
</stats>
<lore>
<p>Basic auto gun. Used for steady base guard and stopping light troops.</p>
</lore>
</entry>

<entry id="autocannon-wep">
<name>Big Gun</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Heavy-duty fast shell gun.</quote>
<stats>
<stat label="Base Damage">5-12 [+5 vs Light]</stat>
<stat label="Projectile Type">Shell (30/s)</stat>
<stat label="Primary Users">Bulwark, Valkyrie</stat>
</stats>
<lore>
<p>Fast-shooting heavy shell gun. Great for chewing up light bug units and soft cars.</p>
</lore>
</entry>

<entry id="dual-rocket-pods-wep">
<name>Two Rocket Pods</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Two free rocket systems.</quote>
<stats>
<stat label="Base Damage">20 per rocket [+10 vs Armor]</stat>
<stat label="Targeting">Pods can aim at different targets</stat>
<stat label="Primary User">Bulwark</stat>
</stats>
<lore>
<p>Shoots double smart rockets. Made to cut through metal armor plates.</p>
</lore>
</entry>

<entry id="light-gatling-wep">
<name>Light Spin Gun</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Super-fast small spin gun.</quote>
<stats>
<stat label="Base Damage">0.1 Damage</stat>
<stat label="Weapon Delay">0.09s (0.01s Overcharge)</stat>
<stat label="Primary User">Aero Drone</stat>
</stats>
<lore>
<p>Fast bullet gun. Made to melt huge bug swarms of light biters.</p>
</lore>
</entry>

<entry id="t280-torpedoes-wep">
<name>T280 Star Bombs</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Heavy sky plasma bomb system.</quote>
<stats>
<stat label="Target Profile">AIR ONLY</stat>
<stat label="Base Damage">30 (+20 vs Armor)</stat>
<stat label="Primary User">Valkyrie Fighter</stat>
</stats>
<lore>
<p>Army-grade heavy smart bombs. Taken from old empty war hangars.</p>
</lore>
</entry>

<entry id="theranos-missile-wep">
<name>Theranos Bomb</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Heavy-load sky ship rocket.</quote>
<stats>
<stat label="Base Damage">300 Single Sky</stat>
<stat label="Splash Area">200 Splash Range</stat>
<stat label="Bonus Structure">+200 Damage vs Buildings</stat>
<stat label="Primary User">Chaffron Warship</stat>
</stats>
<lore>
<p>Huge rocket. Flattens whole base camps and thick sky groups.</p>
</lore>
</entry>

<entry id="thermal-beam-wep">
<name>Heat Beam</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Non-stop hot energy beam.</quote>
<stats>
<stat label="Base Damage">15 Damage</stat>
<stat label="Weapon Range">6</stat>
<stat label="Primary User">Archon</stat>
</stats>
<lore>
<p>High-power energy gun. Made by Enclave smart men to slice clean through metal walls.</p>
</lore>
</entry>

<entry id="energized-halberd-wep">
<name>Energy Spear</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Fast-shake plasma melee sword.</quote>
<stats>
<stat label="Melee Damage">12 Damage</stat>
<stat label="Weapon Delay">1.1s</stat>
<stat label="Primary User">Steward</stat>
</stats>
<lore>
<p>Energy blade. Made for Enclave city guards to stop close biter rushes.</p>
</lore>
</entry>

<entry id="plasma-cannon-wep">
<name>Plasma Gun</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Super-hot matter ball gun.</quote>
<stats>
<stat label="Base Damage">15 to 20 Damage</stat>
<stat label="Bonus Modifier">+30 vs Armor (Python)</stat>
<stat label="Primary Users">Destroyer, Python</stat>
</stats>
<lore>
<p>Shoots thick plasma balls. Melts metal and hard shields fast.</p>
</lore>
</entry>

<entry id="plasma-rifle-wep">
<name>Plasma Rifle</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Foot-troop plasma bolt gun.</quote>
<stats>
<stat label="Base Damage">10 Damage</stat>
<stat label="Weapon Delay">0.9s</stat>
<stat label="Primary User">Pioneer</stat>
</stats>
<lore>
<p>Steady energy gun. Good cover fire for front-line walkers.</p>
</lore>
</entry>

<entry id="thermal-cannon-wep">
<name>Heat Gun</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Non-stop energy spear, tuned for bug threats.</quote>
<stats>
<stat label="Base Damage">1 [+9 vs Light]</stat>
<stat label="Weapon Delay">0.3s</stat>
<stat label="Primary User">Speeder</stat>
</stats>
<lore>
<p>Tuned down against metal walls. Very strong against swarms of flesh units.</p>
</lore>
</entry>

<entry id="charged-lance-wep">
<name>Power Spear</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Beam gun that builds up damage.</quote>
<stats>
<stat label="Initial Damage">5 Damage</stat>
<stat label="Maximum Damage">20 Damage (Non-stop)</stat>
<stat label="Tick Speed">0.25s</stat>
<stat label="Primary User">Harpy</stat>
</stats>
<lore>
<p>Top Enclave sky gun. Damage goes up the longer the harpy aims at one target.</p>
</lore>
</entry>

<entry id="ion-cannon-wep">
<name>Ion Gun Group</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Non-stop atomic energy beam.</quote>
<stats>
<stat label="Base Damage">25 Damage</stat>
<stat label="Turret Count">4x Free Guns</stat>
<stat label="Primary User">Dirigible</stat>
</stats>
<lore>
<p>Huge main energy gun. Can shoot many different targets across the map.</p>
</lore>
</entry>

<entry id="mandibles-wep">
<name>Mouth Jaws</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Hard bug bite parts.</quote>
<stats>
<stat label="Melee Damage">2 Damage</stat>
<stat label="Attack Speed">0.6s Wait</stat>
<stat label="Primary User">Biter</stat>
</stats>
<lore>
<p>Main bug attack of the biter. Uses big numbers to chew through metal hulls.</p>
</lore>
</entry>

<entry id="acid-claws-wep">
<name>Acid Claws</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Wet, bone-thick slice claws.</quote>
<stats>
<stat label="Melee Damage">8 [+6 vs Armor]</stat>
<stat label="Attack Speed">0.8s Wait</stat>
<stat label="Acidity">Strong Corrosive Bug Juice</stat>
<stat label="Primary User">Ravenger</stat>
</stats>
<lore>
<p>Leaks a very strong bug acid. Melts truck plates fast in close fights.</p>
</lore>
</entry>

<entry id="suicide-wep">
<name>Boom</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Tight chemical blast.</quote>
<stats>
<stat label="Blast Damage">12 to 20 [+8 vs Armor]</stat>
<stat label="Area Effect">Touch Splash</stat>
<stat label="Primary Users">Feral, Leech, Phosphate</stat>
</stats>
<lore>
<p>Bad bug defense trick. The bug blows itself up to drop melting liquids.</p>
</lore>
</entry>

<entry id="claws-wep">
<name>Claws</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Bone-covered pure claws.</quote>
<stats>
<stat label="Melee Damage">10 to 14 [+4 vs Armor]</stat>
<stat label="Primary Users">Annihilator, Moving Base</stat>
</stats>
<lore>
<p>Heavy bone parts. Made to tear apart metal walls and foot troops.</p>
</lore>
</entry>

<entry id="acidic-bile-wep">
<name>Acid Spit</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Tossed flesh chemical shot.</quote>
<stats>
<stat label="Base Damage">12 [+4 vs Light]</stat>
<stat label="Lob Speed">14/s</stat>
<stat label="Primary User">Spitter</stat>
</stats>
<lore>
<p>Normal long-range attack of the bug swarm. Tosses melting fluid from far away.</p>
</lore>
</entry>

<entry id="acid-vomit-wep">
<name>Acid Puke</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Thick, heavy bug juice stream.</quote>
<stats>
<stat label="Base Damage">20 [+12 vs Light]</stat>
<stat label="Properties">Slow Toss (Easy dodge)</stat>
<stat label="Primary User">Gagger</stat>
</stats>
<lore>
<p>Strong close-range spray. Very good gun, but makes a loud, bad sound.</p>
</lore>
</entry>

<entry id="acid-spit-wep">
<name>Acid Spike</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Straight bone-spike tosser with acid.</quote>
<stats>
<stat label="Base Damage">10 [+25 vs Armor]</stat>
<stat label="Projectile Speed">18/s</stat>
<stat label="Primary User">Ranger</stat>
</stats>
<lore>
<p>Shoots bone spikes covered in deep-melting chemicals. Made just to stop tanks.</p>
</lore>
</entry>

<entry id="crush-wep">
<name>Smash</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Huge heavy foot stomp.</quote>
<stats>
<stat label="Base Damage">30 [+10 vs Machine]</stat>
<stat label="Special">Ignores 50% of armor</stat>
<stat label="Primary User">Titan</stat>
</stats>
<lore>
<p>Huge foot smash. Ignores heavy metal armor plates totally.</p>
</lore>
</entry>

<entry id="acid-spines-wep">
<name>Acid Pins</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Fast bug needle tosser.</quote>
<stats>
<stat label="Base Damage">5 [+10 vs Machine]</stat>
<stat label="Projectile Speed">22/s</stat>
<stat label="Primary User">Stalker</stat>
</stats>
<lore>
<p>Shoots small bug needles to pop machine pipes and annoy workers.</p>
</lore>
</entry>

<entry id="spines-wep">
<name>Bone Pins</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Heavy bone-spear tosser.</quote>
<stats>
<stat label="Base Damage">15 Damage</stat>
<stat label="Projectile Speed">20/s</stat>
<stat label="Primary User">Vulture</stat>
</stats>
<lore>
<p>Pure bone spears grown inside lung sacks. Shot to clear the sky.</p>
</lore>
</entry>

<entry id="tentacles-wep">
<name>Arms</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Long bug pull arms.</quote>
<stats>
<stat label="Base Damage">10 [+10 vs Light]</stat>
<stat label="Special">Small chance to one-bite Light units</stat>
<stat label="Primary User">Carrion</stat>
</stats>
<lore>
<p>Long muscle whips. Made to pull enemy troops right into the mouth.</p>
</lore>
</entry>

<entry id="acid-spray-wep">
<name>Acid Spray</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Non-stop bug chemical fog.</quote>
<stats>
<stat label="Damage Profile">0.1 DPS (Ramps to 0.5 over time)</stat>
<stat label="Bonus Modifier">+0.1 vs Light targets</stat>
<stat label="Primary User">Vomiter</stat>
</stats>
<lore>
<p>Coats tight paths in non-stop melting mist. Melts troops over time.</p>
</lore>
</entry>

<entry id="spore-cannons-wep">
<name>Pod Guns</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Far-range flesh base gun.</quote>
<stats>
<stat label="Base Damage">30 [+20 vs Armor]</stat>
<stat label="Siege Range">6 tiles</stat>
<stat label="Primary User">Husk</stat>
</stats>
<lore>
<p>Shoots heavy, hard boom pods. Cracks human bases from very far away.</p>
</lore>
</entry>

<!-- MATERIALS -->
<entry id="caspium">
<name>Caspium Metal</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>A rare metal. Takes bullet hits and turns them right into heat.</quote>
<stats>
<stat label="Market Value">200,000c / kg</stat>
<stat label="Conductivity">Very Bad Conductor</stat>
<stat label="Workability">No machine cuts or hammer hits; casting only</stat>
</stats>
<lore>
<p>Caspium reacts to hits. Turns bullet energy into huge heat spikes. Cars in fights literally melt on-screen.</p>
<p>Very sharp raw sheets. Bad to touch. No grind or drill.</p>
</lore>
<extra>Tech File: Hitting Caspium with a factory tool makes a sudden heat flash. To keep drivers safe, plates sit inside safe Steeline cooling pipes.</extra>
</entry>

<entry id="steeline">
<name>Steeline</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>Heat-safe building metal used to wrap Caspium plates.</quote>
<stats>
<stat label="Refining Duration">~2 Months per batch</stat>
<stat label="Primary Property">Great heat safety</stat>
<stat label="Conductivity">100% Nonconductive</stat>
</stats>
<lore>
<p>High-value, heavy metal mix. Steel, tungsten, and other parts. Used for huge space builds like the Star Forge.</p>
<p>Very heat safe. Wraps around Caspium plates. Lets them take bullets and cool down without cooking the driver.</p>
</lore>
</entry>

<entry id="dna-stabilizer">
<name>DNA Tool</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>Syncon Inc sleep parts. Kept human genes safe during the 20,000-year drift.</quote>
<stats>
<stat label="Developer">Syncon Inc</stat>
<stat label="Power Source">Body heat</stat>
<stat label="Power Split">Core feeds head and limbs</stat>
<stat label="System Goal">Stop gene change during sleep</stat>
</stats>
<lore>
<p>Sleep parts used by the Syndicates on the long trip to the Proxima stars.</p>
<p>Run completely by body heat. Any gene error drops the power. Causes bad body shakes.</p>
</lore>
</entry>

<!-- PRE-WAR CORPORATIONS -->
<entry id="bmo-corp">
<name>BMO Corp</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>The state group made to watch the human gene crash.</quote>
<stats>
<stat label="Jurisdiction">Pre-War Earth</stat>
<stat label="Focus">Stop the bug sickness</stat>
<stat label="Key Inventions">Watch Trucks, BMO Guard Suits</stat>
</stats>
<lore>
<p>BMO group made to block sick zones on Earth. Watched the sickness grow. Totally overrun during the big wall break. BMO suits use back battery packs with quick drop hooks.</p>
</lore>
</entry>

<entry id="charcoal-military-corp">
<name>Charcoal Military</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>The ship builders. Makers of the ships that saved human history.</quote>
<stats>
<stat label="Specialty">Space cargo boxes &amp; war bases</stat>
<stat label="Vessels Constructed">Regolith, Aethon, TSC, Praeus, Alabama</stat>
</stats>
<lore>
<p>Built the huge space ships. Transported the frozen human runners. Low resources meant these ships only had basic foot armor and Valkyrie fighters.</p>
</lore>
</entry>

<entry id="bsc-inc-corp">
<name>BSC Inc</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>First makers of deep-space engines and heavy pushers.</quote>
<stats>
<stat label="Specialty">Air fan parts and ship pushers</stat>
<stat label="Iconic Designs">Chaffron ship lift fans</stat>
</stats>
<lore>
<p>Made the high-push engine plans used in all human space ships. Best at heavy air lift fans for cargo holding.</p>
</lore>
</entry>

<entry id="syncon-inc-corp">
<name>Syncon Inc</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>Health giants who built the sleep pods.</quote>
<stats>
<stat label="Specialty">Cold rooms &amp; gene tools</stat>
<stat label="Legacy Impact">Gave the 'Syndicate' group their name</stat>
</stats>
<lore>
<p>Built the cold rooms and body-heat sleep parts. Kept the runners safe on their 20,000-year trip.</p>
</lore>
</entry>

<entry id="alaby-inc-corp">
<name>Alaby Inc</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>Makers of 90% of the bullet weapon plans.</quote>
<stats>
<stat label="Specialty">Real bullets and solid-ammo guns</stat>
<stat label="Signature Weapons">CD-12 Assault Gun, CD-13 Auto Gun</stat>
</stats>
<lore>
<p>Focused on tough foot troops weapons. Thick steel shells. Built to live through heavy mine work and front line fights.</p>
</lore>
</entry>

<!-- FACTION SYSTEM RULES -->
<entry id="syndicate-weakness">
<name>Syndicate System Rules &amp; Weakness</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Good early start. Beaten by late-game armor limits and drill weak spots.</quote>
<stats>
<stat label="Power Standard">500V 30A AC Low Power Grid</stat>
<stat label="Drill Weakness">8-second build stop when hit by EMP</stat>
<stat label="Strategic Cap">Stop growth after 20 minutes; must push early</stat>
</stats>
<lore>
<p>Syndicates use normal low-power wall plugs across all bases. Mine drills use bare computer parts. Hitting a drill with an EMP stops rock grabs for 8 seconds.</p>
<p>Weak Caspium know-how. Syndicate late-game armor stops early. Players must win fast in the early-to-mid game.</p>
</lore>
</entry>

<entry id="biomass-weakness">
<name>Bug Swarm System Rules &amp; Weakness</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Fast changes and slime grabs. Weak to fire and rock burns.</quote>
<stats>
<stat label="Type Switch Cost">200 Caspium (Switches between Normal, Acid, Pure)</stat>
<stat label="Slime Weakness">Catches fire fast; burns without slime nodes</stat>
<stat label="Rock Weakness">Takes 3x damage from fire guns</stat>
</stats>
<lore>
<p>Bug bases need gray slime paths to work and build. Slime catches fire fast. Fire burns down whole camps without Caspium slime nodes to put it out. Bug rock grabs also take 3x extra damage from fire guns.</p>
<p>Bug players can change types (Normal, Acid, Pure) any time for 200 Caspium. Game lore: Bugs eat Caspium from broken cars to make armor.</p>
</lore>
</entry>

<entry id="enclave-weakness">
<name>Enclave System Rules &amp; Weakness</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Top late-game units. Held back by strict power grids and Caspium costs.</quote>
<stats>
<stat label="Base Look">Gold shell made of old Caspium</stat>
<stat label="Guard Need">Needs active Caspium plants or Beam Towers</stat>
<stat label="Build Rule">Guards cannot build near live fights or broken bases</stat>
</stats>
<lore>
<p>Enclave guard bases build fast with just Rock. But they need Caspium power plants or Beam Towers to run. Base spread is hard. Guards cannot build near live fights or broken bases.</p>
<p>All main fight units need Caspium. Enclave must play safe and save up for a huge late-game push.</p>
</lore>
</entry>

<entry id="map-template-rule">
<name>Standard Sector Map Template</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Strict rock layout needed to keep Enclave game balance.</quote>
<stats>
<stat label="Main Base Node">20,000 Rock / 4x Metal Nodes (1,000 each)</stat>
<stat label="Main Push">100 Caspium Rock / 3,000 Oil Pool</stat>
<stat label="Second Base">10,000 Rock / 8,000 Metal / 6,000 Oil or 500-1,000 Caspium</stat>
<stat label="Middle Center">10,000 Metal / 8,000 Oil / 1,000-5,000 Caspium</stat>
</stats>
<lore>
<p>Every standard map in Proxima must match this exact rock plan. The Enclave needs Caspium for all fight bases. Changing these exact rock numbers makes the faction useless.</p>
</lore>
</entry>

<!-- MAJOR EVENTS -->
<entry id="starforge-explosion">
<name>Destruction of the Star Forge</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The pre-war ruin that broke the Enclave empire and made the Bug Swarm.</quote>
<stats>
<stat label="Location">Star system Caspius XII</stat>
<stat label="Starters">The Ravenous (Old Enclave)</stat>
<stat label="End Star">Caspius XII-d (White Dwarf)</stat>
<stat label="Dead">99% of space people in 30s</stat>
</stats>
<lore>
<p>The Star Forge was a huge Steeline space ball around Caspius XII. Used to cast Caspium. Power-mad Ravenous attacked the control rooms. Enclave war fleet showed up and won.</p>
<p>The Ravenous blew up the frame legs to avoid a total loss. Half the ball fell into the star. Broke the star core.</p>
<p>0.000083 seconds after hit, 99% of people died. In 30 seconds, the star shrank to a rock. Huge star blast melted the running Enclave fleet. Made Caspium rock belts around a dead star.</p>
</lore>
</entry>

<entry id="earth-outbreak">
<name>The Earth Bug Escape</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The bad meat sickness that killed Earth and forced the 20,000-year space drift.</quote>
<stats>
<stat label="Bug Start">Bad meat food on Earth</stat>
<stat label="Main Watcher">BMO Group</stat>
<stat label="Save Fleet">Empty Training Ships</stat>
<stat label="Sleep Trip Time">20,000 Earth Years</stat>
</stats>
<lore>
<p>The bug sickness started on Earth in bad meat. Fast move into the brain. 7 clear steps: early high heat (Step 1), fake quick health (Step 2), fast cell death (Step 3), brain wall break and 3-day mind loss (Step 4), brain death with new bug nerves (Step 5), body move return as a new beast (Step 6), and full angry bug swarm act in 3-8 weeks (Step 7).</p>
<p>To save humans, a fleet of empty training ships launched. People frozen in cold pods with DNA Tools. Goal: build immunity over thousands of years.</p>
<p>The drift made them safe, but turned them into hidden carriers. Mixed genes sometimes make weak kids.</p>
</lore>
</entry>

<entry id="redline-crisis">
<name>The Redline Crisis</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The planet escape try on Earth that showed the first smart Bug.</quote>
<stats>
<stat label="Location">BMO Main Base / Launch Pad</stat>
<stat label="Bug Boss">Dr. Glenn Stafford (Jeffery suit)</stat>
<stat label="Brave Hero">BMO Officer Tanner</stat>
<stat label="Result">Escape rocket blown up over pad</stat>
</stats>
<lore>
<p>During the Earth fall, Tanner saved his friend Jeffery. Jeffery was a meat puppet run by the mind of Dr. Glenn Stafford.</p>
<p>Stafford tried to steal a Proxima space rocket to drop bugs on other stars. Tanner got on the ship during lift-off. Blew it up. Died to save human stars.</p>
</lore>
</entry>

<entry id="torus-purge">
<name>The Purge of Torus VI</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The final team push to crash a sick space station with 4 billion people.</quote>
<stats>
<stat label="Target Area">Derrulicant Space Station Torus VI</stat>
<stat label="Town People">4,000,000,000 Mine Workers</stat>
<stat label="Main Goal">Break 3 planet Space Locks</stat>
<stat label="Result">Station pulled down, totally burned up</stat>
</stats>
<lore>
<p>Torus VI was the huge factory home of the Derrulicants. End of the war: the spinning station was totally covered by the bug swarm.</p>
<p>To stop a huge spread, the Syndicate and Enclave did a big team strike. Goal: unlock three heavy space locks across different planets.</p>
<p>The unlock dragged the huge station out of the sky. Crashed right into a planet. Burned up the bugs.</p>
</lore>
</entry>

<entry id="startis-ambush">
<name>The Ambush on Startis</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The sudden attack that started the human fight.</quote>
<stats>
<stat label="Location">Startis Mine Rock</stat>
<stat label="Bad Guys">Derrulicant Heavy Troops</stat>
<stat label="Key Escape">Bran Davis &amp; Tan SUV</stat>
<stat label="End Result">Bran Davis made boss</stat>
</stats>
<lore>
<p>First fight of the Proxima War. Derrulicant troops did a sneak attack on Bran Davis's rock mine.</p>
<p>Bran got away in his custom SUV. Picked up by an Enclave warship. Got command after the ship captain died of the carrier bug.</p>
</lore>
</entry>

<entry id="factory-raid">
<name>The Startis Forge Raid</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The base attack on the new Derrulicant Star Forge plan.</quote>
<stats>
<stat label="Location">Startis Factory Zone</stat>
<stat label="Goal">Break the Derrulicant Factory Frame</stat>
<stat label="Syndicate Boss">Bran Davis</stat>
</stats>
<lore>
<p>Syndicate drop ships found a secret new Star Forge build by the Derrulicants on Startis.</p>
<p>Bran Davis sent a heavy drop ship wave. Broke the factory flat. Kept the system rock limits fair.</p>
</lore>
</entry>

<entry id="purist-clash">
<name>The Caspium Pipeline Defense</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The small fight that made the Enclave Purists mad.</quote>
<stats>
<stat label="Location">Far Caspium Dead Planet</stat>
<stat label="Bad Guys">Enclave Purists</stat>
<stat label="Goal">Keep 10,000 Caspium pipe parts safe</stat>
</stats>
<lore>
<p>Bran's rock miners found an old Enclave Caspium graveyard.</p>
<p>The strict Purist group attacked fast. Bran's foot troops had to build a fast wall to keep the pipes safe.</p>
</lore>
</entry>

<entry id="prius-betrayal">
<name>The Abandonment at Campaign 2</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The back-out move that broke the team peace.</quote>
<stats>
<stat label="Location">Bug Swarm Post 4</stat>
<stat label="Bad Guy">Enclave King Prius</stat>
<stat label="Result">Syndicates left to die to the bug swarm</stat>
</stats>
<lore>
<p>Big team push against a huge bug camp. King Prius gave a sudden order. Enclave help troops ran back to the sky. Syndicates left alone to die.</p>
<p>Bran's crew barely got out on stolen sky ships. Complete end of the human-Enclave peace.</p>
</lore>
</entry>

<entry id="bran-assassination">
<name>The Death of Bran Davis</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The sad, simple flash death of the hero.</quote>
<stats>
<stat label="Location">Prius's Safe Room</stat>
<stat label="Target">King Prius</stat>
<stat label="Kill Tool">Auto Caspium Roof Rock</stat>
</stats>
<lore>
<p>Using the words of the dead Elder, Bran Davis snuck into Prius's safe room to kill him.</p>
<p>Found Prius talking to screens. Bran pulled out his CD-13 rifle. Prius did not look. The auto safe crystal in the roof flashed Bran to dust instantly.</p>
</lore>
</entry>
</database>
`;
