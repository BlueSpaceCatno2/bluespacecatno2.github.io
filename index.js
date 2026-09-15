const xmlDatabaseSource = `
<?xml version="1.0" encoding="UTF-8"?>
<database>
<!-- CHARACTERS -->
<entry id="bran-davis">
<name>Bran Davis</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>He is literally a mining technician. He is not a combat expert, just a regular guy forced to figure it out on the job.</quote>
<stats>
<stat label="Role">Syndicate Leader &amp; Electrician Student</stat>
<stat label="Vehicle Blueprints">Custom Tan SUV</stat>
<stat label="Standard HP">100 HP</stat>
<stat label="Standard Armor">2 Armor (Displays 1 in-game for layout ease)</stat>
<stat label="Primary Armament">&lt;span class='wiki-link' data-id='cd-13-rifle'&gt;CD-13 Automatic Rifle&lt;/span&gt;</stat>
</stats>
<lore>
<p>Bran Davis is a regular working-class guy who wanted to be an electrician. Because he couldn't find an apprenticeship, he took a heavy mining job in the Proxima system instead.</p>
<p>When the militaristic Derrulicants attacked his platform on Startis, he fled in his custom tan &lt;span class='wiki-link' data-id='suv'&gt;SUV&lt;/span&gt;. He was later promoted to captain of the Syndicate command vessel after the previous captain died of a mysterious disease.</p>
<p>Despite having zero military background, his expertise with complex heavy mining rigging and basic electrical circuitry makes him the practical heartbeat of the human resistance.</p>
</lore>
<extra>System Record: Bran Davis's command desk contains a real-world relic—a standard Dell L100 computer keyboard with the corporate logo pried off. His custom Tan mining SUV carries 125 additional HP (200 total) and 2 additional armor (4 total) on easier difficulties to buffer player error, scaling down to standard stats on Hard. In combat, Bran deals slightly less damage (8 damage) than typical hero units (10 damage) to reflect his civilian background.</extra>
</entry>

<entry id="prius">
<name>Prius (Enclave King)</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>A paranoid ruler hiding behind holographic monitors to protect a fake legacy.</quote>
<stats>
<stat label="Faction Role">Supreme Sovereign of the Enclave Purists</stat>
<stat label="Visual Presence">Communicates strictly via glowing blue holograms</stat>
<stat label="Inspiration">American Revolutionary General Horatio Gates</stat>
<stat label="Psychological State">Advanced Paranoia &amp; Insomnia</stat>
</stats>
<lore>
<p>Prius served as an Enclave warship captain during the historic battle that witnessed the catastrophic &lt;span class='wiki-link' data-id='starforge-explosion'&gt;Destruction of the Star Forge&lt;/span&gt;. Instead of fighting, Prius hid his cruiser due to navigation flight log errors and an alleged engine failure, hiding his true cowardice from his bridge crew.</p>
<p>The persistent dread of his desertion being unearthed has slowly driven him insane. He rules his crumbling empire behind a curtain of heavy digital surveillance and constant holograms.</p>
<p>He orchestrated the Syndicate's war against the Derrulicants to strategically dismantle a rival Star Forge project on Startis, burying any residual proof of his historic cowardice.</p>
</lore>
<extra>System Record: Prius obsessively tracks the 25 surviving derelict Enclave warships that escaped the Star Forge explosion, seeking to destroy them before any surviving crew can expose his fraudulent history.</extra>
</entry>

<entry id="stafford">
<name>Dr. Glenn Stafford (Jeffery)</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Jeffery is long gone. His heavy armor suit is now steered by the merged mind of Dr. Stafford.</quote>
<stats>
<stat label="Faction Alignment">Biomass Intelligent Hive Mind</stat>
<stat label="Host Identity">Former BMO Officer Jeffery (ID #033198)</stat>
<stat label="Physical Symptom">Highly erratic armor joint twitches and spasms</stat>
<stat label="Cause">Stuttering metabolic body-heat stabilizer</stat>
</stats>
<lore>
<p>During the early days of the biological crisis on Earth, Jeffery was an officer in the BMO screening team. After his patrol was wiped out, his containment armor was hijacked by the consciousness of chief researcher Dr. Glenn Stafford.</p>
<p>Stafford injected himself with a flawed prototype &lt;span class='wiki-link' data-id='dna-stabilizer'&gt;DNA Stabilizer&lt;/span&gt; corrupted by pathogen cells. While ordinary Biomass creatures are mindless, Stafford's merged mind possesses the coordination to direct the swarm.</p>
<p>He behaves twitchily because his suit's 6-part stabilizer distributes metabolic body heat unevenly across extremity modules during the cellular merge, disrupting joint power systems.</p>
</lore>
<extra>Easter Egg: Jeffery's BMO Officer ID is #033198, a direct reference to the release date of the original StarCraft (March 31, 1998). Stafford is also named after Glenn Stafford, Starcraft's legendary composer.</extra>
</entry>

<entry id="tanner">
<name>BMO Officer Tanner</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>A boots-on-the-ground operative facing down a global biological collapse.</quote>
<stats>
<stat label="Official ID">#072710 (BMO Archives)</stat>
<stat label="Deployment Zone">BMO Earth Headquarters</stat>
<stat label="Primary Vehicle">BMO Heavy Screening Truck</stat>
<stat label="Status">Killed in Action</stat>
</stats>
<lore>
<p>Tanner was a frontline officer for the Biomass Management Organisation (BMO) on Earth. When his entire six-man screening team was slaughtered during an outbreak, Tanner navigated the quarantine zone alone.</p>
<p>He located BMO headquarters and successfully coordinated an evacuation helicopter, only to have the blades destroyed by leaping biological anomalies, crashing him back into the wasteland.</p>
<p>He eventually sacrificed his life by destroying the escape rocket in mid-launch, choosing death to ensure the mutating Biomass pathogen could not spread to other solar systems.</p>
</lore>
<extra>System ID Note: Tanner's registration number #072710 is a direct reference to July 27, 2010—the release date of StarCraft II: Wings of Liberty.</extra>
</entry>

<entry id="jamison">
<name>Specialist Jamison</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Left unarmed and unarmored in a hostile wasteland, Jamison fights with pure grit.</quote>
<stats>
<stat label="Armor Frame">15% larger than standard Syndicate suits</stat>
<stat label="True HP Capacity">250 HP</stat>
<stat label="Armoring Index">2 Armor</stat>
<stat label="Melee Damage">20 Damage</stat>
<stat label="Rifle Damage">10 Damage</stat>
</stats>
<lore>
<p>Jamison was deployed aboard a security shuttle dispatched during the crash-landing of a Blue Ops ship downed by automated fire. During descent, his shuttle's wing was sheared off, popping the locks on the crew module.</p>
<p>He managed to claw open a jammed safety rack bare-handed, climbing into his heavy exo-suit right before impact. Although his physical rifle fell off a cliff during a biological ambush, Jamison beat the creatures with his fists.</p>
<p>He is left stranded in the wasteland after hydraulic line leaks forced him to completely eject his heavy chestplate to survive.</p>
</lore>
</entry>

<entry id="former-captain">
<name>The Unnamed Syndicate Captain</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>The original captain of the Syndicate command ship whose tragic death promoted Bran Davis.</quote>
<stats>
<stat label="Former Command">Syndicate Exploratory Warship</stat>
<stat label="Primary Cause of Death">Genetic immunity collision of the Proxima pathogen</stat>
<stat label="Age of Onset">30 Standard Years</stat>
</stats>
<lore>
<p>The former captain of Bran's command ship died shortly after arrival in the Proxima system. His death was kept highly quiet by the command staff.</p>
<p>He succumbed to the Earth-born pathogen due to a tragic genetic loophole: his parents' individual immunity methods crossed in a manner that completely nullified his immunity by age 30.</p>
<p>The only in-game evidence of his passing is a strange purple stain in his private quarters, left behind during his final cellular collapse.</p>
</lore>
</entry>

<entry id="elder">
<name>The Enclave Elder</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>A courageous official who paid the ultimate price for revealing Prius's cowardice.</quote>
<stats>
<stat label="Jurisdiction">Enclave Council Room</stat>
<stat label="Action">Leaked files showing the Star Forge engine cover-up</stat>
<stat label="Current Status">Assassinated (Silenced by Enclave operatives)</stat>
</stats>
<lore>
<p>An elder within the Enclave ruling council who discovered the true files of Prius's desertion during the destruction of the Star Forge.</p>
<p>He contacted Bran Davis, leaking proof of Prius's corruption and his hidden schemes to destroy the Derrulicants simply to silence rival projects.</p>
<p>Right after Bran attempted to verify this information, the elder was found dead in his quarters, orchestrating the final split between the Syndicate and Enclave.</p>
</lore>
</entry>

<entry id="derrulicant-leader">
<name>The Derrulicant Overlord</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>An immortal tyrant piloting a heavily stabilized biological system.</quote>
<stats>
<stat label="Jurisdiction">Torus VI Core Command</stat>
<stat label="Genetic Status">Heavily infected yet fully sentient</stat>
<stat label="Stabilizers Held">4 Active Syncon Stasis Stabilizers</stat>
</stats>
<lore>
<p>The Supreme Commander of the Derrulicants. He rules the industrial stronghold of &lt;span class='wiki-link' data-id='torus-purge'&gt;Torus VI&lt;/span&gt; with iron efficiency.</p>
<p>He contracted the Biomass virus early in the war but bypassed cognitive decline by recovering and installing four separate genetic stabilizers directly into his body.</p>
<p>This extreme biological engineering makes him practically immortal, preserving his intellect even as his body undergoes creeping mutations.</p>
</lore>
</entry>

<!-- SYNDICATE UNITS -->
<entry id="soldier">
<name>Soldier</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Rugged infantry wearing repurposed, clunky cargo-stacking gear.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Conscription Center&lt;/span&gt;</stat>
<stat label="Cost">50 Stone / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 12s</stat>
<stat label="HP / Base Armor">50 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='cd-12-rifle'&gt;Assault Rifle&lt;/span&gt; (Ground &amp; Air)</stat>
<stat label="Weapon Stats">3 Damage | Range 5 | 1.0s Delay | Hitscan</stat>
<stat label="Upgrades">Infantry Weapons 1-3 (+1 Dmg/tier)</stat>
<stat label="Tags">Light, Infantry, Biological</stat>
</stats>
<lore>
<p>The standard infantry of the Syndicate consists of miners and construction workers piloting modified 1.5-ton industrial pallet stackers retrofitted with machine guns.</p>
<p>The suit's slight 5 HP advantage over standard RTS templates comes from a microscopic amount of Caspium dust added into the plating during fabrication. However, inhaling this dust can cause terminal lung cancer.</p>
</lore>
<extra>Secret File: Syndicate soldiers are notorious for manually overriding their suit's internal water storage, dumping moonshine or fermented fruit mash directly into their water filters to get through their long watch-shifts. Many soldiers are survivors of minor genetic pathogen deficiencies given frontline roles.</extra>
</entry>

<entry id="prawn">
<name>Prawn</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Field mechanic used to build bases and repair heavy mechanical units.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Conscription Center&lt;/span&gt;</stat>
<stat label="Cost">25 Stone / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 10s</stat>
<stat label="HP / Base Armor">50 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">4.5 tiles/s (0.8s acceleration delay) / Range 8</stat>
<stat label="Upgrades">Combat Upgrades: None</stat>
<stat label="Tags">Light, Mechanical</stat>
</stats>
<lore>
<p>The Prawn is a dedicated base builder and mechanical field support unit. Built on an elevated soldier suit chassis with increased pneumatic lift power, it lacks weapons but repairs pipelines, structures, and mechs.</p>
<p>Because the Syndicate lacks a mobile artillery vehicle, players must physically escort fragile Prawn units directly to the front lines to construct stationary artillery structures.</p>
</lore>
</entry>

<entry id="enforcer">
<name>Enforcer</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>More advanced, heavily armored tactical infantry.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Conscription Center&lt;/span&gt;</stat>
<stat label="Cost">100 Stone / 5 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 18s</stat>
<stat label="HP / Base Armor">75 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='cd-12-rifle'&gt;Assault Rifle (Modded)&lt;/span&gt; (Ground &amp; Air)</stat>
<stat label="Weapon Stats">6 Damage | Range 5 | 1.2s Delay | Hitscan</stat>
<stat label="Tags">Medium, Biological</stat>
</stats>
<lore>
<p>The Enforcer is a heavy infantry unit serving as a direct combat upgrade to the basic &lt;span class='wiki-link' data-id='soldier'&gt;Soldier&lt;/span&gt;, utilizing reinforced alloy plates to survive high-kinetic impacts.</p>
</lore>
</entry>

<entry id="skidder">
<name>Skidder</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Fast scout, excellent for blockading base exits.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Conscription Center&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 20 Metal / 5 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 16s</stat>
<stat label="HP / Base Armor">40 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Fast (6.0 tiles/s) / Range 9</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='light-grenades-wep'&gt;Light Grenades&lt;/span&gt; (Ground Only)</stat>
<stat label="Stationary Mode">5 Damage | Range 4 | 2.0s Delay</stat>
<stat label="Mobile Mode">5 Damage | Range 4 | 3.0s Delay</stat>
<stat label="Upgrades">Vehicle Armor 1 &amp; 2 (+2 HP, +0.5 Armor/tier)</stat>
<stat label="Tags">Light, Mechanical, Vehicle</stat>
</stats>
<lore>
<p>The Skidder was originally designed as an industrial logging tractor. Retrofitted with arcing grenade launchers, its wheel platform fires slightly faster when fully stationary.</p>
</lore>
</entry>

<entry id="incinerator">
<name>Incinerator</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Frontline brawler, immune to fire, highly volatile.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Conscription Center&lt;/span&gt;</stat>
<stat label="Cost">5 Stone / 20 Metal / 50 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 22s</stat>
<stat label="HP / Base Armor">100 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 6</stat>
<stat label="Abilities">Auto-Target Creep | Fire Immunity | Explosive Volatility (50% chance to explode for 5 dmg if hit for &gt;15 HP)</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='dual-flamers'&gt;Dual Flamers&lt;/span&gt; (Cone Area)</stat>
<stat label="Weapon Stats">5 Dmg (2 rapid) | Range 3 | +10 vs Light</stat>
<stat label="Upgrades">Infantry Weapons 1-3 (+2 Dmg, +3 vs Light) | Tier 3 (3s Burn Effect)</stat>
<stat label="Tags">Heavy, Infantry, Biological</stat>
</stats>
<lore>
<p>Equipped with heavy flamethrowers designed to clear out Biomass creep trails. However, if hit by an attack delivering more than 15 HP of damage, there is a 50% chance its pressurized fuel lines detonate, damaging all nearby units.</p>
</lore>
<extra>Technical Note: Incinerator suits are not airtight due to space limits. For vacuum operations, fuel tank #2 is drained and pressure-filled with oxygen; planetary ops rely on active CO2-to-O2 filters.</extra>
</entry>

<entry id="medic">
<name>Medic</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Biological healing support unit.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Conscription Center&lt;/span&gt;</stat>
<stat label="Cost">5 Stone / 20 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 15s</stat>
<stat label="HP / Base Armor">50 HP / 1 Armor (Upgradable)</stat>
<stat label="Abilities">Healing (Autocast bio heal)</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='needler-wep'&gt;Needler&lt;/span&gt; (Ground &amp; Air, Researchable)</stat>
<stat label="Weapon Stats">2 Damage | Range 4 | 0.7s Delay</stat>
<stat label="Upgrades">Weapon Upgrades (+0.5 dmg) | Armor Upgrades (+10 HP/tier)</stat>
<stat label="Tags">Light, Biological, Support</stat>
</stats>
<lore>
<p>Unlike typical combat stims, the Syndicate Medic administers the stim boost directly to biological targets, keeping the fire-rate bonus active only as long as the target is being actively healed.</p>
</lore>
</entry>

<entry id="suv">
<name>Support SUV</name>
<type>Support Vehicle (SUV)</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>The cover unit of the game. Scouting, base denial, and mine-laying.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">100 Stone / 50 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 24s</stat>
<stat label="HP / Base Armor">75 HP / 2 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Fast (6.0 tiles/s) / Range 9</stat>
<stat label="Garrison">4 Soldiers (Can fire from inside)</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='eject-mines-wep'&gt;Eject Mines&lt;/span&gt; (Self Destructs)</stat>
<stat label="Weapon Effect">Deploy 5 mines (50 dmg +20 vs armored +30 vs mech)</stat>
<stat label="Upgrades">Vehicle Weapons (+2 mines per level)</stat>
<stat label="Tags">Medium, Mechanical, Vehicle</stat>
</stats>
<lore>
<p>The tactical Support Vehicle serves as the absolute cover unit of Proxima. Triggering its self-destruct command instantly ejects a defensive field of five cloaked proximity mines to block base entry. Units disembark 2 per side from left to right when unloaded.</p>
</lore>
</entry>

<entry id="sentry">
<name>Sentry</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Stationary defense coordinator; counters air rushes and stealth.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 50 Metal / 100 Oil / 20 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 30s</stat>
<stat label="HP / Base Armor">50 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Slow (3.0 tiles/s) / Range 10</stat>
<stat label="Rule">Cannot attack alone. Requires anchored Sentry.</stat>
<stat label="Deploy Ability">+1 Range, Cloak Reveal, Radar Motion in 20 tiles</stat>
<stat label="Primary Weapon">&lt;span class='wiki-link' data-id='cluster-rockets-wep'&gt;Cluster Rockets&lt;/span&gt; (AIR ONLY, 5 Targets, 20 dmg +10 vs Mech)</stat>
<stat label="Secondary Weapon">&lt;span class='wiki-link' data-id='mg-turret-wep'&gt;Machine Gun Turret&lt;/span&gt; (Ground &amp; Air, 5 dmg +2 anchored)</stat>
<stat label="Upgrades">Armor (Lowers siege time) | Weapons (+15% Fire Rate &amp; Dmg/tier)</stat>
<stat label="Tags">Robotic, Heavy Armor, Mechanical</stat>
</stats>
<lore>
<p>The Sentry cannot attack unless anchored in its deployed mode. When deployed, it acts as a radar station, granting +1 range, exposing cloaked units, and gaining a +40% fire-rate bonus for each additional sieged Sentry nearby. Pneumatic firing triggers supersonic bullet acoustics.</p>
</lore>
</entry>

<entry id="bulwark">
<name>Bulwark</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Heavy frontline combat mech suit.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">50 Stone / 75 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 32s</stat>
<stat label="HP / Base Armor">150 HP / 2 Armor (No upgrade path)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 8</stat>
<stat label="Primary Weapon">&lt;span class='wiki-link' data-id='autocannon-wep'&gt;Autocannon&lt;/span&gt; (5-12 Dmg +5 vs Light)</stat>
<stat label="Secondary Weapon">&lt;span class='wiki-link' data-id='dual-rocket-pods-wep'&gt;Dual Rocket Pods&lt;/span&gt; (20 Dmg +10 vs Armored, Split Target)</stat>
<stat label="Upgrades">Syndicate Weapon Upgrades (+2 base dmg output)</stat>
<stat label="Tags">Heavy, Infantry, Mechanical</stat>
</stats>
<lore>
<p>The Bulwark is a mid-to-late game armored frame, utilizing independent rocket pods that can target two different units simultaneously.</p>
</lore>
</entry>

<entry id="drone">
<name>Aero Drone</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Lightweight, hovering support unit against biological swarms.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='space-center'&gt;Space Center&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 20 Metal / 5 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 14s</stat>
<stat label="HP / Base Armor">20 HP / 0 Armor (No upgrade path)</stat>
<stat label="Movement / Vision">6.5 tiles/s (10.0 with Afterburner) / Range 10</stat>
<stat label="Abilities">Afterburner (Speed boost) | Overcharger (0.01s delay, slow speed)</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='light-gatling-wep'&gt;Light Gatling&lt;/span&gt; (0.1 Dmg, 0.09s Delay)</stat>
<stat label="Tags">Lightweight, Drone, Mechanical</stat>
</stats>
<lore>
<p>Aero Drones are highly maneuverable scouts. Activating Overcharger mode slows their propulsion but increases their fire rate to 100 rounds per second, vaporizing biological swarms.</p>
</lore>
</entry>

<entry id="valkyrie">
<name>Valkyrie Fighter</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>High-speed air interceptor.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='space-center'&gt;Space Center&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 100 Metal / 30 Oil / 5 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 35s</stat>
<stat label="HP / Base Armor">200 HP / 3 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 9</stat>
<stat label="AA Weapon">&lt;span class='wiki-link' data-id='t280-torpedoes-wep'&gt;T280 Fusion Torpedoes&lt;/span&gt; (2 Attacks, 30 Dmg +20 vs Armored)</stat>
<stat label="Ground/AA Weapon">&lt;span class='wiki-link' data-id='autocannon-wep'&gt;Autocannon&lt;/span&gt; (5 Dmg +10 vs Mechanical)</stat>
<stat label="Upgrades">Upgrades (+10 HP, +1 Armor per tier)</stat>
<stat label="Tags">Medium, Mechanical, Air</stat>
</stats>
<lore>
<p>The only human military-grade vehicle, retrieved from the hangars of demobilized cryo-ships. Most weapons in the system are reverse-engineered from Valkyrie parts.</p>
</lore>
</entry>

<entry id="chaffron">
<name>Chaffron Warship</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Massive planetary gunship; requires heavy ground escorts.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='space-center'&gt;Space Center&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 400 Metal / 200 Oil / 250 Caspium</stat>
<stat label="Supply / Build Time">8 Supply / 70s</stat>
<stat label="HP / Base Armor">2000 HP / 10 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Very Slow (2.0 tiles/s) / Range 10</stat>
<stat label="Guns">8x Gatling Turrets (0.3 Dmg each, 0.06s delay)</stat>
<stat label="AA Missiles">2x Anti-Air Splash Missiles (6 Dmg +10 vs Armored)</stat>
<stat label="Heavy Ability">&lt;span class='wiki-link' data-id='theranos-missile-wep'&gt;Theranos Missile&lt;/span&gt; (300 single / 200 splash air, +200 structure)</stat>
<stat label="Upgrades">Upgrades (+15% HP, +2 Armor per tier)</stat>
<stat label="Tags">Heavy, Mechanical, Air, Massive</stat>
</stats>
<lore>
<p>Modified from flat-bottomed cargo transport frames designed by BSC Inc. While carrying devastating anti-ground and anti-air missile packages, its reliance on dual VTOL turbofans makes it incredibly slow to lift if one turbofan is destroyed. Larger Syndicate space force flagships like Supercarriers and Nailheads dominate orbital space.</p>
</lore>
</entry>

<!-- ENCLAVE UNITS -->
<entry id="archon">
<name>Archon</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Slow, heavily shielded mechanical walker.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='foundry'&gt;Foundry&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 100 Metal / 50 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 28s</stat>
<stat label="HP / Shield">80 HP / 120 Hard-Light Shield</stat>
<stat label="Base Armor">0 Armor (No upgrade path)</stat>
<stat label="Movement / Vision">Slow (3.0 tiles/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='thermal-beam-wep'&gt;Thermal Beam&lt;/span&gt; (15 Dmg, Range 6, Instant Hitscan Beam)</stat>
<stat label="Tags">Heavy, Mechanical, Energy, Walker</stat>
</stats>
<lore>
<p>The Archon utilizes advanced Enclave shielding technology. Its hard-light shielding absorbs incoming heavy ballistic impacts, allowing its thermal laser to systematically melt through armor.</p>
</lore>
</entry>

<entry id="steward">
<name>Steward</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Early game melee defender and bullet sponge.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='foundry'&gt;Foundry&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 60 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 14s</stat>
<stat label="HP / Base Armor">20 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">3.5 tiles/s / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='energized-halberd-wep'&gt;Energized Halberd&lt;/span&gt; (12 Melee Dmg, 1.1s Delay)</stat>
<stat label="Tags">Light, Biological, Infantry</stat>
</stats>
<lore>
<p>The Steward is a fragile biological melee unit deployed during early territory grabs to act as high-damage defenders and basic bullet shields.</p>
</lore>
</entry>

<entry id="destroyer">
<name>Destroyer</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Early-to-mid game heavy armored vehicle.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='fabricator'&gt;Fabricator&lt;/span&gt;</stat>
<stat label="Cost">10 Stone / 100 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 28s</stat>
<stat label="HP / Base Armor">100 HP / 2 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='plasma-cannon-wep'&gt;Plasma Cannon&lt;/span&gt; (15 Dmg, Range 5, Energy Orb)</stat>
<stat label="Tags">Heavy, Armored, Mechanical</stat>
</stats>
<lore>
<p>The standard armored vehicle of the Enclave, utilizing concentrated plasma orbs to dissolve heavy fortifications.</p>
</lore>
</entry>

<entry id="pioneer">
<name>Pioneer</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Thick-plated front-line walker.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='fabricator'&gt;Fabricator&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 100 Metal / 75 Oil / 75 Caspium</stat>
<stat label="Supply / Build Time">4 Supply / 34s</stat>
<stat label="HP / Base Armor">150 HP / 3 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='plasma-rifle-wep'&gt;Plasma Rifle&lt;/span&gt; (10 Dmg, Range 5, 0.9s Delay)</stat>
<stat label="Tags">Heavy, Armored, Mechanical, Walker</stat>
</stats>
<lore>
<p>Pioneers are heavy walking shields, built to march directly into dense bases to absorb return fire.</p>
</lore>
</entry>

<entry id="speeder">
<name>Speeder</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>High-speed light scout, engineered for anti-light harassment.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='advanced-fabricator'&gt;Advanced Fabricator&lt;/span&gt;</stat>
<stat label="Cost">50 Stone / 50 Metal / 25 Oil / 5 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 18s</stat>
<stat label="HP / Base Armor">50 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Fast (6.0 tiles/s) / Range 9</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='thermal-cannon-wep'&gt;Thermal Cannon&lt;/span&gt; (1 Dmg +9 vs Light, 0.3s Delay)</stat>
<stat label="Tags">Light, Armored, Mechanical</stat>
</stats>
<lore>
<p>A fast scout specifically designed to ignite light infantry, though its low base damage makes it entirely useless against heavy armor.</p>
</lore>
</entry>

<entry id="python">
<name>Python</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Peak late-game armored walker.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='advanced-fabricator'&gt;Advanced Fabricator&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 125 Metal / 100 Oil / 75 Caspium</stat>
<stat label="Supply / Build Time">5 Supply / 45s</stat>
<stat label="HP / Base Armor">300 HP / 3 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='plasma-cannon-wep'&gt;Plasma Cannon&lt;/span&gt; (20 Dmg +30 vs Armored, Range 6)</stat>
<stat label="Tags">Heavy, Armored, Mechanical</stat>
</stats>
<lore>
<p>The Python represents the absolute peak of the Enclave's armored division, delivering high-impact plasma bursts designed to instantly compromise vehicle hulls.</p>
</lore>
</entry>

<entry id="harpy">
<name>Harpy</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Nimble aerial interceptor.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='air-channel'&gt;Air Channel&lt;/span&gt;</stat>
<stat label="Cost">50 Stone / 75 Metal / 25 Oil / 25 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 24s</stat>
<stat label="HP / Base Armor">100 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Fast (6.0 tiles/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='charged-lance-wep'&gt;Charged Lance&lt;/span&gt; (5 to 20 ramp Dmg, Range 5, Focus Beam)</stat>
<stat label="Tags">Medium, Armored, Mechanical, Air</stat>
</stats>
<lore>
<p>The Harpy uses a Charged Lance that deals continuous damage, increasing in output the longer its laser beam remains locked onto a single target.</p>
</lore>
</entry>

<entry id="dirigible">
<name>Dirigible</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Slow, devastating capital airship.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='air-channel'&gt;Air Channel&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 150 Metal / 150 Oil / 100 Caspium</stat>
<stat label="Supply / Build Time">6 Supply / 55s</stat>
<stat label="HP / Base Armor">300 HP / 4 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Slow (3.0 tiles/s) / Range 9</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='ion-cannon-wep'&gt;Ion Cannon Array&lt;/span&gt; (4x Turrets, 25 Dmg, Range 7)</stat>
<stat label="Tags">Heavy, Mechanical, Armored, Massive, Air</stat>
</stats>
<lore>
<p>A massive floating platform that drifts over battlefields, firing its four independently-aimed ion turrets to dissolve ground and air threats.</p>
</lore>
</entry>

<entry id="phosphate">
<name>Phosphate</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Explosive anti-air kamikaze drone.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='air-channel'&gt;Air Channel&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 40 Metal / 100 Oil / 5 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 12s</stat>
<stat label="HP / Base Armor">40 HP / 0 Armor (No upgrade path)</stat>
<stat label="Movement / Vision">Fast (6.0 tiles/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Explode&lt;/span&gt; (AIR ONLY, 40 Dmg, Contact Detonation)</stat>
<stat label="Tags">Light, Mechanical, Robotic, Air</stat>
</stats>
<lore>
<p>Phosphate drones are highly volatile, cheap kamikaze units programmed to launch into air swarms and detonate to instantly clear airspace.</p>
</lore>
</entry>

<!-- BIOMASS UNITS -->
<entry id="biter">
<name>Biter (Normal Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>The cheapest, fastest biological swarm unit.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Incubation Chamber&lt;/span&gt;</stat>
<stat label="Cost">25 Stone / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">0.5 Supply / 7s</stat>
<stat label="HP / Base Armor">15 HP / 0 Armor (No upgrade path)</stat>
<stat label="Movement / Vision">Very Fast (7.5 tiles/s) / Range 5</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='mandibles-wep'&gt;Mandibles&lt;/span&gt; (2 Melee Dmg, 0.6s Delay)</stat>
<stat label="Tags">Light, Biological</stat>
</stats>
<lore>
<p>Biters are the basic infantry of the Biomass. Unchanged across all three biological strains, they rely on rapid numbers to swarm defenses despite being weak to fire.</p>
</lore>
</entry>

<entry id="ravenger">
<name>Ravenger (Normal Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Sturdier, armor-dissolving melee strain.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Incubation Chamber&lt;/span&gt;</stat>
<stat label="Cost">75 Stone / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 16s</stat>
<stat label="HP / Base Armor">70 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Fast (6.0 tiles/s) / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-claws-wep'&gt;Acid Claws&lt;/span&gt; (8 Melee Dmg +6 vs Armored, 0.8s Delay)</stat>
<stat label="Acid Composition">pH 1.2 Hydrofluoric-Enzymatic Matrix</stat>
<stat label="Tags">Medium, Biological, Melee</stat>
</stats>
<lore>
<p>The Standard Strain melee unit, utilizing claws coated in a highly concentrated biological acid (pH 1.2) to rapidly slice through metal plating.</p>
</lore>
</entry>

<entry id="feral">
<name>Feral (Acid Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Acidic biological suicide unit.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Incubation Chamber&lt;/span&gt;</stat>
<stat label="Cost">75 Stone / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 16s</stat>
<stat label="HP / Base Armor">80 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">3.5 tiles/s / Range 5</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Suicide&lt;/span&gt; (12 Dmg +8 vs Armored, Instant Contact)</stat>
<stat label="Internal Pressure">450 kPa Hyper-Digestive Sac</stat>
<stat label="Tags">Medium, Biological, Melee, Acid</stat>
</stats>
<lore>
<p>Feral biters expand with pressurized digestive acid (pH 0.8), charging directly into mechanical clusters to rupture and explode upon contact.</p>
</lore>
</entry>

<entry id="annihilator">
<name>Annihilator (Primal Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Heavy primal shock-trooper.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Incubation Chamber&lt;/span&gt;</stat>
<stat label="Cost">75 Stone / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 18s</stat>
<stat label="HP / Base Armor">125 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='claws-wep'&gt;Claws&lt;/span&gt; (14 Melee Dmg +4 vs Armored, 1.2s Delay)</stat>
<stat label="Tags">Medium, Biological, Melee, Primal</stat>
</stats>
<lore>
<p>The raw muscle of the Primal strain, shrugging off minor wounds to physically crush standard armored defenses.</p>
</lore>
</entry>

<entry id="spitter">
<name>Spitter (Normal Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Standard mid-game ranged artillery.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Spore Accumulator&lt;/span&gt;</stat>
<stat label="Cost">25 Stone / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 20s</stat>
<stat label="HP / Base Armor">50 HP / 2 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acidic-bile-wep'&gt;Acidic Bile&lt;/span&gt; (12 Dmg +4 vs Light, Range 5, Lobbed)</stat>
<stat label="Bile pH">pH 2.4 Mucosal Slurry</stat>
<stat label="Tags">Light, Biological</stat>
</stats>
<lore>
<p>The primary ranged support for the Standard strain, firing digestive bile from a safe distance to dissolve infantry.</p>
</lore>
</entry>

<entry id="gagger">
<name>Gagger (Acid Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Loud, high-damage acid vomiter.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Spore Accumulator&lt;/span&gt;</stat>
<stat label="Cost">25 Stone / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 20s</stat>
<stat label="HP / Base Armor">35 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Slow (3.0 tiles/s) / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-vomit-wep'&gt;Acid Vomit&lt;/span&gt; (20 Dmg +12 vs Light, Range 4, Dodgeable)</stat>
<stat label="Flaw">Makes loud gagging noise heard through fog of war</stat>
<stat label="Tags">Medium, Biological, Acid</stat>
</stats>
<lore>
<p>Though dealing heavy acid spray, Gaggers make an incredibly loud gagging noise that can occasionally be heard through the fog of war by enemies. Excellent for dissolving early Incinerators or Archons.</p>
</lore>
</entry>

<entry id="ranger">
<name>Ranger (Primal Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Long-range anti-armor hunter.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Spore Accumulator&lt;/span&gt;</stat>
<stat label="Cost">25 Stone / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 20s</stat>
<stat label="HP / Base Armor">75 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-spit-wep'&gt;Acid Spit&lt;/span&gt; (10 Dmg +25 vs Armored, Range 5)</stat>
<stat label="Tags">Medium, Biological, Primal</stat>
</stats>
<lore>
<p>Primal hunters that fire calcified spikes to punch clean holes through heavy metal tanks and mechs.</p>
</lore>
</entry>

<entry id="nest">
<name>Nest (Mobile Structure)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Mobile biological bunker.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Spore Accumulator&lt;/span&gt;</stat>
<stat label="Cost">50 Stone / 50 Metal / 20 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">0 Supply / 25s</stat>
<stat label="Rooted Stats">150 HP / 2 Armor / Rooted (0 tiles/s) / Range 7</stat>
<stat label="Uprooted Stats">100 HP / 1 Armor / Uprooted (2.0 tiles/s) / Range 7</stat>
<stat label="Garrison">4 Ranged Units (Transforms when empty)</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='claws-wep'&gt;Claws&lt;/span&gt; (Uprooted Only: 10 Melee Dmg, 1.0s delay)</stat>
<stat label="Flaws">Cannot move off creep. Dies immediately if creep below burns/dissolves.</stat>
<stat label="Tags">Biological, Structure</stat>
</stats>
<lore>
<p>Acts as a fortified bunker. While it can uproot and walk on limbs, moving off creep or losing the underlying slime causes instant death.</p>
</lore>
</entry>

<entry id="titan">
<name>Titan (Normal Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Massive siege beast, ignores armor.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Spore Accumulator&lt;/span&gt;</stat>
<stat label="Cost">50 Stone / 100 Metal / 50 Oil / 25 Caspium</stat>
<stat label="Supply / Build Time">4 Supply / 38s</stat>
<stat label="HP / Base Armor">150 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Slow (3.0 tiles/s) / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='crush-wep'&gt;Crush&lt;/span&gt; (30 Melee Dmg +10 vs Mech, Ignores 50% armor)</stat>
<stat label="Restrictions">No Acid/Primal variants. Burrows and deactivates if Acid strain selected.</stat>
<stat label="Tags">Biological, Massive, Armored</stat>
</stats>
<lore>
<p>Ignores 50% of the target's armor. However, if the player selects the Acid strain, Titans burrow underground and become completely inactive.</p>
</lore>
</entry>

<entry id="stalker">
<name>Stalker (Normal Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Cheap flying pest for harassment.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Corea&lt;/span&gt;</stat>
<stat label="Cost">50 Stone / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 22s</stat>
<stat label="HP / Base Armor">100 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-spines-wep'&gt;Acid Spines&lt;/span&gt; (5 Dmg +10 vs Mech, Range 4)</stat>
<stat label="Tags">Light, Biological, Air</stat>
</stats>
<lore>
<p>Cheap, fast aerial pests designed to harass workers and scout ahead of the swarm.</p>
</lore>
</entry>

<entry id="leech">
<name>Leech (Acid Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Fragile suicide air bomb.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Corea&lt;/span&gt;</stat>
<stat label="Cost">50 Stone / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 12s</stat>
<stat label="HP / Base Armor">25 HP / -1 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Fast (6.0 tiles/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Suicide&lt;/span&gt; (AIR ONLY, 20 Dmg, Instant Contact)</stat>
<stat label="Tags">Light, Biological, Air, Acid</stat>
</stats>
<lore>
<p>Leeches rush at enemy aircraft and explode, releasing pressurized dissolving chemicals.</p>
</lore>
</entry>

<entry id="vulture">
<name>Vulture (Primal Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Beefy, slow-flying interceptor.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Corea&lt;/span&gt;</stat>
<stat label="Cost">50 Stone / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 24s</stat>
<stat label="HP / Base Armor">115 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">3.5 tiles/s / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='spines-wep'&gt;Spines&lt;/span&gt; (AIR ONLY, 15 Dmg, Range 5)</stat>
<stat label="Tags">Medium, Biological, Air, Primal</stat>
</stats>
<lore>
<p>Sturdy aerial defenders that fire calcified bone lances to easily dominate skies.</p>
</lore>
</entry>

<entry id="carrion">
<name>Carrion (Normal Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Terrifying support beast; eats light units whole.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Corea&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 30s</stat>
<stat label="HP / Base Armor">150 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='tentacles-wep'&gt;Tentacles&lt;/span&gt; (10 Dmg +10 if light, Chance to insta-kill light)</stat>
<stat label="Tags">Heavy, Biological, Support</stat>
</stats>
<lore>
<p>Lashes out with tentacles, dragging light targets into its central crushing maw with a small chance to instantly kill them.</p>
</lore>
</entry>

<entry id="vomiter">
<name>Vomiter (Acid Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Area-of-effect acid sprayer.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Corea&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 30s</stat>
<stat label="HP / Base Armor">100 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Slow (3.0 tiles/s) / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-spray-wep'&gt;Acid spray&lt;/span&gt; (0.1 Dmg ramps to 0.5, +0.1 vs light, Continuous)</stat>
<stat label="Tags">Heavy, Biological, Acid</stat>
</stats>
<lore>
<p>Coats choke points in continuous chemical spray that increases in toxicity the longer targets stand inside.</p>
</lore>
</entry>

<entry id="husk">
<name>Husk (Primal Strain)</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Heavy biological siege tank.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Corea&lt;/span&gt;</stat>
<stat label="Cost">0 Stone / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">4 Supply / 36s</stat>
<stat label="HP / Base Armor">200 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Standard (4.5 tiles/s) / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='spore-cannons-wep'&gt;Spore Cannons&lt;/span&gt; (30 Dmg +20 vs Armored, Range 6, Lobbed Spore)</stat>
<stat label="Tags">Heavy, Biological, Primal</stat>
</stats>
<lore>
<p>The ultimate bio-artillery unit, firing massive bone-shielded spore pods to punch through base fortifications.</p>
</lore>
</entry>

<!-- PRODUCTION STRUCTURES -->
<entry id="conscription-center">
<name>Conscription Center</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Syndicate barracks where working-class miners are conscripted into suits.</quote>
<stats>
<stat label="Faction Owner">The Syndicates</stat>
<stat label="Primary Units Built">Soldier, Prawn, Enforcer, Skidder, Incinerator, Medic</stat>
<stat label="Structural Role">Tier 1 Infantry Assembly</stat>
</stats>
<lore>
<p>The bedrock of Syndicate operations. It repurposes civilian miners and equips them with standard &lt;span class='wiki-link' data-id='soldier'&gt;Soldier&lt;/span&gt; frames.</p>
<p>Additionally, this structure deploys &lt;span class='wiki-link' data-id='medic'&gt;Medics&lt;/span&gt;, field &lt;span class='wiki-link' data-id='prawn'&gt;Prawns&lt;/span&gt;, and high-heat &lt;span class='wiki-link' data-id='incinerator'&gt;Incinerators&lt;/span&gt; to combat the creeping Biomass threat.</p>
</lore>
</entry>

<entry id="factory">
<name>Factory</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Heavy manufacturing plant for Syndicate mechanized chassis.</quote>
<stats>
<stat label="Faction Owner">The Syndicates</stat>
<stat label="Primary Units Built">Support SUV, Sentry, Bulwark</stat>
<stat label="Structural Role">Tier 2 Armored Mech Assembly</stat>
</stats>
<lore>
<p>Constructs heavy-duty chassis modified from pre-war logistics machinery.</p>
<p>It rolls out the fast &lt;span class='wiki-link' data-id='suv'&gt;Support SUV&lt;/span&gt;, the stationary &lt;span class='wiki-link' data-id='sentry'&gt;Sentry&lt;/span&gt;, and the high-yield &lt;span class='wiki-link' data-id='bulwark'&gt;Bulwark&lt;/span&gt; walker suits.</p>
</lore>
</entry>

<entry id="space-center">
<name>Space Center</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Syndicate launch complex for atmospheric fighters and capital warships.</quote>
<stats>
<stat label="Faction Owner">The Syndicates</stat>
<stat label="Primary Units Built">Aero Drone, Valkyrie Fighter, Chaffron Warship</stat>
<stat label="Structural Role">Tier 3 Orbital &amp; Air Shipyard</stat>
</stats>
<lore>
<p>Repurposes ancient exploratory hangar designs to field aerial support.</p>
<p>Launches swarms of fast &lt;span class='wiki-link' data-id='drone'&gt;Aero Drones&lt;/span&gt;, robust &lt;span class='wiki-link' data-id='valkyrie'&gt;Valkyrie Fighters&lt;/span&gt;, and the colossal &lt;span class='wiki-link' data-id='chaffron'&gt;Chaffron Warships&lt;/span&gt;.</p>
</lore>
</entry>

<entry id="foundry">
<name>Foundry</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Enclave metal casting node for baseline security units.</quote>
<stats>
<stat label="Faction Owner">The Enclave</stat>
<stat label="Primary Units Built">Steward, Archon</stat>
<stat label="Structural Role">Tier 1 Gatekeepers</stat>
</stats>
<lore>
<p>Uses starting Caspium reserves to cast protective combat frames.</p>
<p>Fields rapid biological &lt;span class='wiki-link' data-id='steward'&gt;Stewards&lt;/span&gt; to absorb incoming fire, and heavy shielded &lt;span class='wiki-link' data-id='archon'&gt;Archon&lt;/span&gt; walker systems.</p>
</lore>
</entry>

<entry id="fabricator">
<name>Fabricator</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Enclave mechanical bay assembling standard planetary mechs.</quote>
<stats>
<stat label="Faction Owner">The Enclave</stat>
<stat label="Primary Units Built">Destroyer, Pioneer</stat>
<stat label="Structural Role">Tier 2 Armored Assembly</stat>
</stats>
<lore>
<p>Welds heavy steel plating onto automated vehicle platforms.</p>
<p>Fields standard heavy &lt;span class='wiki-link' data-id='destroyer'&gt;Destroyers&lt;/span&gt; and defensive walking &lt;span class='wiki-link' data-id='pioneer'&gt;Pioneer&lt;/span&gt; divisions.</p>
</lore>
</entry>

<entry id="advanced-fabricator">
<name>Advanced Fabricator</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Enclave heavy forge for the highest-tier planetary dominators.</quote>
<stats>
<stat label="Faction Owner">The Enclave</stat>
<stat label="Primary Units Built">Speeder, Python</stat>
<stat label="Structural Role">Tier 3 Titan Assembly</stat>
</stats>
<lore>
<p>Requires high levels of Caspium power to run. Launches highly agile &lt;span class='wiki-link' data-id='speeder'&gt;Speeders&lt;/span&gt; for reconnaissance and the massive, armored &lt;span class='wiki-link' data-id='python'&gt;Pythons&lt;/span&gt;.</p>
</lore>
</entry>

<entry id="air-channel">
<name>Air Channel</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Enclave gravity grid for assembling floating fortresses.</quote>
<stats>
<stat label="Faction Owner">The Enclave</stat>
<stat label="Primary Units Built">Harpy, Dirigible, Phosphate</stat>
<stat label="Structural Role">Tier 3 Orbital Flight Deck</stat>
</stats>
<lore>
<p>Structures a stable atmospheric warp gate to launch air sweeps.</p>
<p>Constructs continuous-beam &lt;span class='wiki-link' data-id='harpy'&gt;Harpies&lt;/span&gt;, massive ion-guided &lt;span class='wiki-link' data-id='dirigible'&gt;Dirigibles&lt;/span&gt;, and explosive robotic &lt;span class='wiki-link' data-id='phosphate'&gt;Phosphate&lt;/span&gt; units.</p>
</lore>
</entry>

<entry id="incubation-chamber">
<name>Incubation Chamber</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>The primary spawning pit of the biological swarm.</quote>
<stats>
<stat label="Faction Owner">The Biomass Swarm</stat>
<stat label="Primary Units Spawned">Biter, Ravenger, Feral, Annihilator</stat>
<stat label="Structural Role">Melee Spawning Node</stat>
</stats>
<lore>
<p>A massive, breathing organic organ cluster that utilizes creep and protein reserves to mutate new life.</p>
<p>Mutates basic &lt;span class='wiki-link' data-id='biter'&gt;Biters&lt;/span&gt; and allows evolution into specialized melee strains such as &lt;span class='wiki-link' data-id='feral'&gt;Ferals&lt;/span&gt; or &lt;span class='wiki-link' data-id='annihilator'&gt;Annihilators&lt;/span&gt;.</p>
</lore>
</entry>

<entry id="spore-accumulator">
<name>Spore Accumulator</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Biomass node converting organic marrow into ranged threats.</quote>
<stats>
<stat label="Faction Owner">The Biomass Swarm</stat>
<stat label="Primary Units Spawned">Spitter, Gagger, Ranger, Mobile Nest, Titan</stat>
<stat label="Structural Role">Ranged &amp; Heavy Organic Spawner</stat>
</stats>
<lore>
<p>Evolves advanced organism lines. Generates basic &lt;span class='wiki-link' data-id='spitter'&gt;Spitters&lt;/span&gt;, sensory &lt;span class='wiki-link' data-id='gagger'&gt;Gaggers&lt;/span&gt;, and the massive, armor-smashing &lt;span class='wiki-link' data-id='titan'&gt;Titans&lt;/span&gt;.</p>
</lore>
</entry>

<entry id="corea">
<name>Corea</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Biomass advanced flight nest and support center.</quote>
<stats>
<stat label="Faction Owner">The Biomass Swarm</stat>
<stat label="Primary Units Spawned">Stalker, Leech, Vulture, Carrion, Vomiter, Husk</stat>
<stat label="Structural Role">Advanced Flying &amp; Support Nest</stat>
</stats>
<lore>
<p>The peak of biological adaptation. Fields aerial pests like &lt;span class='wiki-link' data-id='stalker'&gt;Stalkers&lt;/span&gt; and heavy support units like the massive &lt;span class='wiki-link' data-id='husk'&gt;Husk&lt;/span&gt; spore-cannoneer.</p>
</lore>
</entry>

<!-- WEAPONS -->
<entry id="cd-12-rifle">
<name>CD-12 Assault Rifle</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>CD-12 Automatic Projectile Assault Weapon, developed by Alaby Inc.</quote>
<stats>
<stat label="Manufacturer">&lt;span class='wiki-link' data-id='alaby-inc-corp'&gt;Alaby Inc&lt;/span&gt;</stat>
<stat label="Ammo Standard">.50 Caliber Steeline Rounds</stat>
<stat label="Melee Feature">Heavy Steel bashing plate on the right</stat>
<stat label="Standard Users">&lt;span class='wiki-link' data-id='soldier'&gt;Soldier&lt;/span&gt;, &lt;span class='wiki-link' data-id='enforcer'&gt;Enforcer&lt;/span&gt;</stat>
</stats>
<lore>
<p>The rugged, standard-issue firearm of the Syndicate. It is crafted with extremely thick steel siding to allow infantry to easily club threats when ammunition runs dry.</p>
<p>Modified by some clever soldiers to fire devastating shotgun shells, though this specific modification remains highly illegal.</p>
</lore>
</entry>

<entry id="cd-13-rifle">
<name>CD-13 Automatic Rifle</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Premium, armor-penetrating assault rifle of hero units.</quote>
<stats>
<stat label="Manufacturer">&lt;span class='wiki-link' data-id='alaby-inc-corp'&gt;Alaby Inc&lt;/span&gt;</stat>
<stat label="Special Property">Penetrates 15% of target armor</stat>
<stat label="Standard Damage">7 Damage (+4 over CD-12)</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='bran-davis'&gt;Bran Davis&lt;/span&gt;</stat>
</stats>
<lore>
<p>The exclusive firearm used by hero units. Its high-velocity firing mechanism punches straight through standard armor.</p>
</lore>
</entry>

<entry id="dual-flamers">
<name>Dual Flamers</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>High-yield fuel flamers mounted on Incinerator suits.</quote>
<stats>
<stat label="Engine Damage">5 (Fires 2 instances simultaneously)</stat>
<stat label="Bonus Modifier">+10 vs Light biologicals</stat>
<stat label="Target Profile">Ground Only (Friendly fire cone)</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='incinerator'&gt;Incinerator&lt;/span&gt;</stat>
</stats>
<lore>
<p>Highly dangerous, uninsulated fuel hoses that spray burning gel in a front cone to clear biological creep.</p>
</lore>
</entry>

<entry id="needler-wep">
<name>Needler</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Biochemical applicator dart launcher.</quote>
<stats>
<stat label="Base Damage">2 Damage</stat>
<stat label="Weapon Delay">0.7s</stat>
<stat label="Range Index">4 Tiles</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='medic'&gt;Medic&lt;/span&gt;</stat>
</stats>
<lore>
<p>Fires medical-grade kinetic needles carrying biological agents to defend the operative while on active deployment.</p>
</lore>
</entry>

<entry id="light-grenades-wep">
<name>Light Grenades</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Frag launcher retrofitted onto logging machinery.</quote>
<stats>
<stat label="Base Damage">5 Damage</stat>
<stat label="Firing Speed">12 tiles/s</stat>
<stat label="Trajectory">Arcing Ballistic</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='skidder'&gt;Skidder&lt;/span&gt;</stat>
</stats>
<lore>
<p>Launches quick, short-range arcing charges. Fire-rate improves when the vehicle is stationary.</p>
</lore>
</entry>

<entry id="eject-mines-wep">
<name>Eject Mines</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Self-destruct mine deployment field.</quote>
<stats>
<stat label="Mine Damage">50 Base (+20 vs Armored, +30 vs Mechanical)</stat>
<stat label="Arm Time">2.0 seconds</stat>
<stat label="Deployment Type">Contact / Proximity Cloaked</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='suv'&gt;Support SUV&lt;/span&gt;</stat>
</stats>
<lore>
<p>A high-risk tactical mechanism that instantly vaporizes the deploying vehicle to create a massive defensive mine field.</p>
</lore>
</entry>

<entry id="cluster-rockets-wep">
<name>Cluster Rockets</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Air-clearing micro missile pods.</quote>
<stats>
<stat label="Target Profile">AIR ONLY</stat>
<stat label="Simultaneous Targets">Up to 5 targets</stat>
<stat label="Base Damage">20 (+10 vs Mechanical)</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='sentry'&gt;Sentry&lt;/span&gt;, &lt;span class='wiki-link' data-id='chaffron'&gt;Chaffron&lt;/span&gt;</stat>
</stats>
<lore>
<p>Fires homing missiles that lock onto enemy flyers, serving as a vital counter against air rushes.</p>
</lore>
</entry>

<entry id="mg-turret-wep">
<name>Machine Gun Turret</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Standard rapid ballistic machine gun.</quote>
<stats>
<stat label="Base Damage">5 Damage (+2 when Anchored)</stat>
<stat label="Weapon Delay">1.5s</stat>
<stat label="Projectile Type">Hitscan (800 tiles/s)</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='sentry'&gt;Sentry&lt;/span&gt;</stat>
</stats>
<lore>
<p>A basic automated kinetic turret used for steady defense and screening light attackers.</p>
</lore>
</entry>

<entry id="autocannon-wep">
<name>Autocannon</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Heavy-duty rapid shell launcher.</quote>
<stats>
<stat label="Base Damage">5-12 Variance [+5 vs Light]</stat>
<stat label="Projectile Type">Ballistic Shell (30 tiles/s)</stat>
<stat label="Primary Users">&lt;span class='wiki-link' data-id='bulwark'&gt;Bulwark&lt;/span&gt;, &lt;span class='wiki-link' data-id='valkyrie'&gt;Valkyrie&lt;/span&gt;</stat>
</stats>
<lore>
<p>A fast-firing heavy shell dispenser ideal for chewing through light biological units and soft vehicles.</p>
</lore>
</entry>

<entry id="dual-rocket-pods-wep">
<name>Dual Rocket Pods</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Twin independent missile systems.</quote>
<stats>
<stat label="Base Damage">20 per rocket [+10 vs Armored]</stat>
<stat label="Targeting">Pods can acquire independent targets</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='bulwark'&gt;Bulwark&lt;/span&gt;</stat>
</stats>
<lore>
<p>Launches double-guided missiles configured to slice through mechanical armor plating.</p>
</lore>
</entry>

<entry id="light-gatling-wep">
<name>Light Gatling</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Ultra-fast micro rotor gun.</quote>
<stats>
<stat label="Base Damage">0.1 Damage</stat>
<stat label="Weapon Delay">0.09s (0.01s Overcharged)</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='drone'&gt;Aero Drone&lt;/span&gt;</stat>
</stats>
<lore>
<p>A rapid suppression gun designed to disintegrate massive biological swarms of light biters.</p>
</lore>
</entry>

<entry id="t280-torpedoes-wep">
<name>T280 Fusion Torpedoes</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Heavy atmospheric plasma-torpedo system.</quote>
<stats>
<stat label="Target Profile">AIR ONLY</stat>
<stat label="Base Damage">30 (+20 vs Armored)</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='valkyrie'&gt;Valkyrie Fighter&lt;/span&gt;</stat>
</stats>
<lore>
<p>Military-grade heavy homing torpedos retrieved from demilitarized war hangar vaults.</p>
</lore>
</entry>

<entry id="theranos-missile-wep">
<name>Theranos Missile</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Heavy-payload tactical airship rocket.</quote>
<stats>
<stat label="Base Damage">300 Single-Target Air</stat>
<stat label="Splash Area">200 Splash Radius</stat>
<stat label="Bonus Structure">+200 Damage vs Buildings</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='chaffron'&gt;Chaffron Warship&lt;/span&gt;</stat>
</stats>
<lore>
<p>A massive ordnance launcher deployed to flatten entire base structures and clear thick air formations.</p>
</lore>
</entry>

<entry id="thermal-beam-wep">
<name>Thermal Beam</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Continuous focused thermal energy beam.</quote>
<stats>
<stat label="Base Damage">15 Damage</stat>
<stat label="Weapon Range">6</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='archon'&gt;Archon&lt;/span&gt;</stat>
</stats>
<lore>
<p>A high-power energy weapon designed by Enclave scholars to slice cleanly through armor columns.</p>
</lore>
</entry>

<entry id="energized-halberd-wep">
<name>Energized Halberd</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>High-frequency plasma melee blade.</quote>
<stats>
<stat label="Melee Damage">12 Damage</stat>
<stat label="Weapon Delay">1.1s</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='steward'&gt;Steward&lt;/span&gt;</stat>
</stats>
<lore>
<p>An energy blade designed for Enclave city guards to defend against close-range biter rushes.</p>
</lore>
</entry>

<entry id="plasma-cannon-wep">
<name>Plasma Cannon</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Superheated matter orb launcher.</quote>
<stats>
<stat label="Base Damage">15 to 20 Damage</stat>
<stat label="Bonus Modifier">+30 vs Armored (Python)</stat>
<stat label="Primary Users">&lt;span class='wiki-link' data-id='destroyer'&gt;Destroyer&lt;/span&gt;, &lt;span class='wiki-link' data-id='python'&gt;Python&lt;/span&gt;</stat>
</stats>
<lore>
<p>Launches dense plasma spheres that quickly compromise metallic and composite shields.</p>
</lore>
</entry>

<entry id="plasma-rifle-wep">
<name>Plasma Rifle</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Infantry-grade plasma bolt gun.</quote>
<stats>
<stat label="Base Damage">10 Damage</stat>
<stat label="Weapon Delay">0.9s</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='pioneer'&gt;Pioneer&lt;/span&gt;</stat>
</stats>
<lore>
<p>Steady energy rifle providing solid combat suppression to front-line walkers.</p>
</lore>
</entry>

<entry id="thermal-cannon-wep">
<name>Thermal Cannon</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Continuous energy lance, tuned against bio threats.</quote>
<stats>
<stat label="Base Damage">1 [+9 vs Light]</stat>
<stat label="Weapon Delay">0.3s</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='speeder'&gt;Speeder&lt;/span&gt;</stat>
</stats>
<lore>
<p>Intentionally tuned down against metal structures, but devastatingly effective against swarms of flesh-based targets.</p>
</lore>
</entry>

<entry id="charged-lance-wep">
<name>Charged Lance</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Focus-beam energy weapon that amplifies damage.</quote>
<stats>
<stat label="Initial Damage">5 Damage</stat>
<stat label="Maximum Damage">20 Damage (Continuous)</stat>
<stat label="Tick Speed">0.25s</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='harpy'&gt;Harpy&lt;/span&gt;</stat>
</stats>
<lore>
<p>An advanced Enclave aerial system. The beam ramps up in damage the longer the harpy remains focused on a single target.</p>
</lore>
</entry>

<entry id="ion-cannon-wep">
<name>Ion Cannon Array</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Continuous-charge nuclear energy beam.</quote>
<stats>
<stat label="Base Damage">25 Damage</stat>
<stat label="Turret Count">4x Independent Turrets</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='dirigible'&gt;Dirigible&lt;/span&gt;</stat>
</stats>
<lore>
<p>A massive capital energy system capable of engaging multiple independent targets across heavy combat horizons.</p>
</lore>
</entry>

<entry id="mandibles-wep">
<name>Mandibles</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Hardened biological crushing mouthparts.</quote>
<stats>
<stat label="Melee Damage">2 Damage</stat>
<stat label="Attack Speed">0.6s Delay</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='biter'&gt;Biter&lt;/span&gt;</stat>
</stats>
<lore>
<p>The primary biological attack of the basic biter, relying on immense numbers to chew through alloy hulls.</p>
</lore>
</entry>

<entry id="acid-claws-wep">
<name>Acid Claws</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Dripping marrow-dense slicing claws.</quote>
<stats>
<stat label="Melee Damage">8 [+6 vs Armored]</stat>
<stat label="Attack Speed">0.8s Delay</stat>
<stat label="Acidity">pH 1.2 Corrosive Compound</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='ravenger'&gt;Ravenger&lt;/span&gt;</stat>
</stats>
<lore>
<p>Secretes a powerful biological acid (pH 1.2) that rapidly melts down vehicle plating during close combat engagement.</p>
</lore>
</entry>

<entry id="suicide-wep">
<name>Suicide Detonation</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Pressurized chemical decomposition blast.</quote>
<stats>
<stat label="Blast Damage">12 to 20 [+8 vs Armored]</stat>
<stat label="Area Effect">Contact Area Splash</stat>
<stat label="Primary Users">&lt;span class='wiki-link' data-id='feral'&gt;Feral&lt;/span&gt;, &lt;span class='wiki-link' data-id='leech'&gt;Leech&lt;/span&gt;, &lt;span class='wiki-link' data-id='phosphate'&gt;Phosphate&lt;/span&gt;</stat>
</stats>
<lore>
<p>A volatile biological defense mechanism where the organism self-destructs to release highly corrosive fluids.</p>
</lore>
</entry>

<entry id="claws-wep">
<name>Organic Claws</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Bone-sheathed primal claws.</quote>
<stats>
<stat label="Melee Damage">10 to 14 [+4 vs Armored]</stat>
<stat label="Primary Users">&lt;span class='wiki-link' data-id='annihilator'&gt;Annihilator&lt;/span&gt;, &lt;span class='wiki-link' data-id='nest'&gt;Mobile Nest&lt;/span&gt;</stat>
</stats>
<lore>
<p>Heavy bone-based implements designed to tear apart metal structures and physical infantry.</p>
</lore>
</entry>

<entry id="acidic-bile-wep">
<name>Acidic Bile</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Lobbed organic chemical projectile.</quote>
<stats>
<stat label="Base Damage">12 [+4 vs Light]</stat>
<stat label="Lob Speed">14 tiles/s</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='spitter'&gt;Spitter&lt;/span&gt;</stat>
</stats>
<lore>
<p>Standard ranged attack of the Biomass, launching corrosive fluid from distance.</p>
</lore>
</entry>

<entry id="acid-vomit-wep">
<name>Acid Vomit</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Heavy-density biochemical stream.</quote>
<stats>
<stat label="Base Damage">20 [+12 vs Light]</stat>
<stat label="Properties">Slow Ballistic (Dodgeable)</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='gagger'&gt;Gagger&lt;/span&gt;</stat>
</stats>
<lore>
<p>A powerful close-range spray. The weapon is highly effective but produces a distinctive loud sound.</p>
</lore>
</entry>

<entry id="acid-spit-wep">
<name>Primal Acid Spit</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Linear bone-spike launcher carrying acid.</quote>
<stats>
<stat label="Base Damage">10 [+25 vs Armored]</stat>
<stat label="Projectile Speed">18 tiles/s</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='ranger'&gt;Ranger&lt;/span&gt;</stat>
</stats>
<lore>
<p>Unleashes bone spikes coated in deep-dissolving chemicals designed specifically to neutralize tanks.</p>
</lore>
</entry>

<entry id="crush-wep">
<name>Titan Crush</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Colossal physical stamping slam.</quote>
<stats>
<stat label="Base Damage">30 [+10 vs Mechanical]</stat>
<stat label="Special">Ignores 50% of target armor</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='titan'&gt;Titan&lt;/span&gt;</stat>
</stats>
<lore>
<p>A devastating kinetic stomp that ignores heavy metal armoring grids entirely.</p>
</lore>
</entry>

<entry id="acid-spines-wep">
<name>Acid Spines</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Rapid biological needle launcher.</quote>
<stats>
<stat label="Base Damage">5 [+10 vs Mechanical]</stat>
<stat label="Projectile Speed">22 tiles/s</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='stalker'&gt;Stalker&lt;/span&gt;</stat>
</stats>
<lore>
<p>Fires localized bio-needles to puncture mechanical pipelines and harass workers.</p>
</lore>
</entry>

<entry id="spines-wep">
<name>Primal Spines</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Heavy bone-lance launcher.</quote>
<stats>
<stat label="Base Damage">15 Damage</stat>
<stat label="Projectile Speed">20 tiles/s</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='vulture'&gt;Vulture&lt;/span&gt;</stat>
</stats>
<lore>
<p>Primal lances grown inside lung chambers, fired to enforce complete aerial dominance.</p>
</lore>
</entry>

<entry id="tentacles-wep">
<name>Lashing Tentacles</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Extended biological pulling tentacles.</quote>
<stats>
<stat label="Base Damage">10 [+10 vs Light]</stat>
<stat label="Special">Small chance to instantly eat Light units</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='carrion'&gt;Carrion&lt;/span&gt;</stat>
</stats>
<lore>
<p>Extended muscular lashes designed to pull enemy infantry directly into the maw.</p>
</lore>
</entry>

<entry id="acid-spray-wep">
<name>Corrosive Acid Spray</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Continuous biological chemical sprayer.</quote>
<stats>
<stat label="Damage Profile">0.1 DPS (Ramps to 0.5 over time)</stat>
<stat label="Bonus Modifier">+0.1 vs Light targets</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='vomiter'&gt;Vomiter&lt;/span&gt;</stat>
</stats>
<lore>
<p>Coats choke barriers in persistent acidic mist that melts infantry columns over time.</p>
</lore>
</entry>

<entry id="spore-cannons-wep">
<name>Spore Cannons</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Long-range organic siege mortar.</quote>
<stats>
<stat label="Base Damage">30 [+20 vs Armored]</stat>
<stat label="Siege Range">6 tiles</stat>
<stat label="Primary User">&lt;span class='wiki-link' data-id='husk'&gt;Husk&lt;/span&gt;</stat>
</stats>
<lore>
<p>Fires heavy, calcified explosive pods to crack human bases from exceptional distances.</p>
</lore>
</entry>

<!-- MATERIALS -->
<entry id="caspium">
<name>Caspium Metal</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>A rare metal that absorbs kinetic impact and turns it directly into heat.</quote>
<stats>
<stat label="Market Value">200,000c / kg</stat>
<stat label="Conductivity">Extremely Poor Conductor</stat>
<stat label="Workability">Cannot be machined or hammered; can only be cast</stat>
</stats>
<lore>
<p>Caspium kinetic-reacts, converting ~20,000 joules per bullet into nearly 4,000°C thermal spikes. Consequently, vehicles in combat literally melt on-screen during combat.</p>
<p>Because it is impossible to grind down or drill without kinetic feedback, raw sheets are razor-sharp and hazardous to handle.</p>
</lore>
<extra>Technical File: Hitting Caspium with an active lathe or steel hammer can trigger a sudden thermal flash. To shield occupants, plates must be encased in nonconductive &lt;span class='wiki-link' data-id='steeline'&gt;Steeline&lt;/span&gt; cooling channels.</extra>
</entry>

<entry id="steeline">
<name>Steeline</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>Thermally-insulative structural alloy used to isolate Caspium plates.</quote>
<stats>
<stat label="Refining Duration">~2 Months per batch</stat>
<stat label="Primary Property">Immense thermal resilience and insulation</stat>
<stat label="Conductivity">100% Nonconductive</stat>
</stats>
<lore>
<p>A highly valuable, heavy alloy made of steel, tungsten, and trace elements, used primarily to build space superstructures like the Star Forge.</p>
<p>Because of its thermal resilience, it is wrapped around Caspium plates, allowing them to absorb bullets and safely cool down without cooking the vehicle pilot.</p>
</lore>
</entry>

<entry id="dna-stabilizer">
<name>DNA Stabilizer</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>Syncon Inc stasis units that protected human genes during the 20,000-year drift.</quote>
<stats>
<stat label="Developer">Syncon Inc</stat>
<stat label="Power Source">Metabolic body heat</stat>
<stat label="Power Split">Central unit feeds head and extremities</stat>
<stat label="System Goal">Prevent biological mutation during stasis</stat>
</stats>
<lore>
<p>The stabilizers used by the Syndicates during their long journey to the Proxima system.</p>
<p>Because the system is powered entirely by metabolic body heat, any genetic error or system collapse causes power distribution to stutter, leading to erratic physical spasms.</p>
</lore>
</entry>

<!-- PRE-WAR CORPORATIONS -->
<entry id="bmo-corp">
<name>BMO Corp</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>The state-backed organization tasked with cataloging human DNA collapse.</quote>
<stats>
<stat label="Jurisdiction">Pre-War Earth</stat>
<stat label="Focus">Containment of the biological pathogen</stat>
<stat label="Key Inventions">Screening Trucks, BMO Officers' Armor</stat>
</stats>
<lore>
<p>The Biomass Management Organisation (BMO) was established to isolate infected zones on Earth. They monitored the disease's 7-stage progression but were entirely overrun during the main containment breach. BMO exo-suits utilize a backpack lithium-ion power bank with pneumatic emergency pack-ejection mechanisms.</p>
</lore>
</entry>

<entry id="charcoal-military-corp">
<name>Charcoal Military</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>The industrial shipbuilders who built the vessels that saved human history.</quote>
<stats>
<stat label="Specialty">Interstellar cargo hulls &amp; war platforms</stat>
<stat label="Vessels Constructed">Regolith, Aethon, TSC, Praeus, Alabama</stat>
</stats>
<lore>
<p>Charcoal Military manufactured the massive exploratory warships that transported the frozen human refugees. Due to resource limits, these vessels carried basic infantry armor and Valkyrie fighters.</p>
</lore>
</entry>

<entry id="bsc-inc-corp">
<name>BSC Inc</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>Pioneers of deep-space propulsion, thrusters, and heavy navigation.</quote>
<stats>
<stat label="Specialty">VTOL Turbofan modules and starship propulsion</stat>
<stat label="Iconic Designs">Chaffron warship lift engines</stat>
</stats>
<lore>
<p>Designed the high-thrust engine templates used across all human spacecraft, specializing in heavy VTOL systems for cargo lifting.</p>
</lore>
</entry>

<entry id="syncon-inc-corp">
<name>Syncon Inc</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>Biomedical giants who constructed the stasis pods.</quote>
<stats>
<stat label="Specialty">Cryostatic modules &amp; gene stabilizers</stat>
<stat label="Legacy Impact">Gave the 'Syndicate' faction their name</stat>
</stats>
<lore>
<p>Syncon Inc designed the cryo-chambers and metabolic heat-powered stabilizers that kept the refugees safe during their 20,000-year voyage.</p>
</lore>
</entry>

<entry id="alaby-inc-corp">
<name>Alaby Inc</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>Developers of 90% of the ballistic weapon frameworks.</quote>
<stats>
<stat label="Specialty">Physical ballistics and solid-ammo rifles</stat>
<stat label="Signature Weapons">CD-12 Assault Rifle, CD-13 Rifle</stat>
</stats>
<lore>
<p>Alaby Inc focused on designing highly durable infantry weaponry with thick steel casings to survive heavy industrial labor and frontline mining clashes.</p>
</lore>
</entry>

<!-- FACTION SYSTEM RULES -->
<entry id="syndicate-weakness">
<name>Syndicate System Rules &amp; Weakness</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>High early versatility countered by late-game armor limits and drill EMP vulnerabilities.</quote>
<stats>
<stat label="Power Standard">500V 30A AC Low Voltage Grid</stat>
<stat label="Drill Weakness">8-second total production lockout when hit by EMP</stat>
<stat label="Strategic Cap">Caps performance after 20 minutes; must push early</stat>
</stats>
<lore>
<p>The Syndicates use standard low-voltage 500V 30A AC electrical sockets across all base facilities. Because their mining drills still rely on exposed electronic components, striking a Syndicate drill with an EMP temporarily shuts down resource extraction for 8 seconds.</p>
<p>Due to a limited structural understanding of Caspium, Syndicate late-game armor caps out early, forcing Syndicate players to win through swift early-to-mid game aggression.</p>
</lore>
</entry>

<entry id="biomass-weakness">
<name>Biomass System Rules &amp; Weakness</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Rapid adaptation and creep expansion vulnerable to fire and quarry burning.</quote>
<stats>
<stat label="Strain Switch Cost">200 Caspium (Switches between Normal, Acid, Primal)</stat>
<stat label="Creep Vulnerability">Highly flammable; burns rapidly without secretion nodes</stat>
<stat label="Quarry Weakness">Takes 3x damage from thermal/fire weapons</stat>
</stats>
<lore>
<p>Biomass structures rely on grey exudate creep trails to function and build. This creep is extremely flammable; if set alight without secretion nodes using Caspium to extinguish the fire, entire colonies can incinerate. Biomass quarries also take 3x extra damage from thermal attacks.</p>
<p>Biomass players can switch strains (Standard Kinetic, Acid vs Light, Primal vs Heavy) at any time for 200 Caspium. Lore-wise, Biomass metabolizes Caspium from destroyed vehicles into armor, though this is excluded from active match mechanics.</p>
</lore>
</entry>

<entry id="enclave-weakness">
<name>Enclave System Rules &amp; Weakness</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Overpowering late-game units limited by strict power grids and Caspium costs.</quote>
<stats>
<stat label="Structure Aesthetics">Golden casing made of early pre-Forge Caspium</stat>
<stat label="Defense Requirement">Requires active Caspium generators or Beam Towers</stat>
<stat label="Construction Rule">Defenses cannot build while nearby structures take damage or attack</stat>
</stats>
<lore>
<p>Enclave defensive structures build rapidly using only Stone, but cannot function without Caspium-fueled power generators or Beam Towers. Base expansion is constrained because defenses cannot be constructed anywhere near active combat or damaged structures.</p>
<p>All core combat units and structures require Caspium, forcing the Enclave to play conservatively and save for an unstoppable late-game push.</p>
</lore>
</entry>

<entry id="map-template-rule">
<name>Standard Sector Map Template</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Rigid resource layout required to maintain Enclave faction balance.</quote>
<stats>
<stat label="Main Base Node">20,000 Stone / 4x Metal Nodes (1,000 each)</stat>
<stat label="Main Expansion">100 Caspium Deposit / 3,000 Oil Pool</stat>
<stat label="Secondary Base">10,000 Stone / 8,000 Metal / 6,000 Oil or 500-1,000 Caspium</stat>
<stat label="Central Deposits">10,000 Metal / 8,000 Oil / 1,000-5,000 Caspium</stat>
</stats>
<lore>
<p>Every standard competitive map in Proxima must strictly adhere to this layout template. Because the Enclave is entirely dependent on Caspium for combat structures, deviating from these exact resource node ratios renders the faction unplayable.</p>
</lore>
</entry>

<!-- MAJOR EVENTS -->
<entry id="starforge-explosion">
<name>Destruction of the Star Forge</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The pre-war disaster that shattered the Enclave empire and created the Biomass.</quote>
<stats>
<stat label="Location">Star system Caspius XII</stat>
<stat label="Pre-War Perpetrators">The Ravenous (Pre-Biomass Enclave)</stat>
<stat label="Resulting Star">Caspius XII-d (White Dwarf)</stat>
<stat label="Casualties">99% of regional population inside 30s</stat>
</stats>
<lore>
<p>The Star Forge was a massive Steeline truss-structured Dyson sphere surrounding Caspius XII to cast Caspium. When the power-mad Ravenous attacked the outer control centers, the arriving Enclave warfleet overwhelmed them.</p>
<p>Faced with complete defeat, the Ravenous detonated the skeletal structural ligaments. Torsion forces pulled half of the Dyson Sphere into the star, compromising its internal nuclear fusion.</p>
<p>0.000083 seconds after impact, 99% of onboard survivors were dead. In 30 seconds, the star compressed into an asteroid-sized core before triggering a massive supernova that melted the fleeing Enclave fleet into Caspium-rich asteroid belts around white dwarf Caspius XII-d.</p>
</lore>
</entry>

<entry id="earth-outbreak">
<name>The Earth Pathogen Escape</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The foodborne disaster that killed Earth and forced humanity's 20,000-year drift.</quote>
<stats>
<stat label="Pathogen Origin">Infected meat consumption on Earth</stat>
<stat label="Clinical Agency">BMO (Biomass Management Organisation)</stat>
<stat label="Survival Fleet">Demilitarized Training Warships</stat>
<stat label="Cryo-Voyage Length">20,000 Earth Years</stat>
</stats>
<lore>
<p>The Biomass disease began on Earth via infected meat, rapidly bypassing the human blood-brain barrier by infecting filter cells. It progresses through 7 distinct stages: initial high fever (Stage 1), deceptive temporary recovery (Stage 2), rapid immune cell death (Stage 3), blood-brain barrier dissolution and 3-day cognitive decline (Stage 4), brain death with synthetic nervous network formation (Stage 5), motor skill recovery as a new species (Stage 6), and fully developed hostile swarm behavior in 3-8 weeks (Stage 7).</p>
<p>To save humanity, a fleet of demilitarized training vessels was launched. Passengers were frozen inside cryo-pods equipped with &lt;span class='wiki-link' data-id='dna-stabilizer'&gt;DNA Stabilizers&lt;/span&gt; to develop resistance over thousands of years.</p>
<p>The drift immunized the survivors, but transformed them into asymptomatic carriers whose colliding genetic immunities occasionally produce vulnerable offspring.</p>
</lore>
</entry>

<entry id="redline-crisis">
<name>The Redline Crisis</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The planetary escape attempt on Earth that exposed the first intelligent Biomass.</quote>
<stats>
<stat label="Location">BMO Headquarters / Launchpad</stat>
<stat label="Swarm Commander">Dr. Glenn Stafford (merged as Jeffery)</stat>
<stat label="Tragic Hero">BMO Officer Tanner</stat>
<stat label="Outcome">Escape rocket destroyed over launch pad</stat>
</stats>
<lore>
<p>During the collapse on Earth, Tanner rescued his 'colleague' Jeffery, who was secretly a flesh-puppet guided by the merged mind of &lt;span class='wiki-link' data-id='stafford'&gt;Dr. Glenn Stafford&lt;/span&gt;.</p>
<p>Stafford attempted to hijack a Proxima-bound colonial rocket to seed other systems. Tanner boarded the craft during launch and successfully detonated it, sacrificing his life to save humanity.</p>
</lore>
</entry>

<entry id="torus-purge">
<name>The Purge of Torus VI</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The final joint operation to crash an infested space station containing 4 billion people.</quote>
<stats>
<stat label="Target Area">Derrulicant Space Station Torus VI</stat>
<stat label="Civilian Population">4,000,000,000 Industrial Miners</stat>
<stat label="Primary Objective">Destroy 3 planetary Magnetic Locks</stat>
<stat label="Result">Station pulled into orbit, completely vaporized</stat>
</stats>
<lore>
<p>Torus VI was the hyper-industrial capital of the Derrulicants. During the final stage of the war, the rotating station was completely overrun by the Biomass swarm.</p>
<p>To prevent absolute contamination, the Syndicate and Enclave launched a massive joint strike to unlock three heavily-guarded magnetic locks anchored across separate planets.</p>
<p>Shifting the magnetic locks dragged the colossal space station out of orbit, crashing it directly into a planet below to completely incinerate the biological hosts.</p>
</lore>
</entry>

<entry id="startis-ambush">
<name>The Ambush on Startis</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The sudden attack that launched the human resistance.</quote>
<stats>
<stat label="Location">Startis Mining Platform</stat>
<stat label="Aggressors">Derrulicant Heavy Infantry</stat>
<stat label="Key Survivors">Bran Davis &amp; Tan Mining SUV</stat>
<stat label="Historical Outcome">Bran Davis promoted to command</stat>
</stats>
<lore>
<p>The opening engagement of the Proxima War. Derrulicant forces launched a surprise raid on Bran Davis's civilian mining platform.</p>
<p>Bran successfully fled the platform in his custom &lt;span class='wiki-link' data-id='suv'&gt;SUV&lt;/span&gt;. He was picked up by an Enclave warship, eventually receiving command after the ship's captain died of the carrier virus.</p>
</lore>
</entry>

<entry id="factory-raid">
<name>The Startis Forge Raid</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The structural siege of the Derrulicant new Star Forge project.</quote>
<stats>
<stat label="Location">Startis Industrial Zone</stat>
<stat label="Objective">Destroy the Derrulicant Factory Superstructure</stat>
<stat label="Syndicate Commander">Bran Davis</stat>
</stats>
<lore>
<p>Syndicate dropships discovered that the Derrulicants were attempting to construct a secret, secondary Star Forge on Startis.</p>
<p>Bran Davis coordinated a heavy dropship campaign, successfully raiding and leveling the factory complex to preserve the balance of system resources.</p>
</lore>
</entry>

<entry id="purist-clash">
<name>The Caspium Pipeline Defense</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The tactical skirmish that angered the Enclave Purists.</quote>
<stats>
<stat label="Location">Remote Caspium Graveyard Planet</stat>
<stat label="Hostiles">Enclave Purists</stat>
<stat label="Objective">Secure 10,000 Caspium pipeline units</stat>
</stats>
<lore>
<p>While scavenging an abandoned Derrulicant mining yard, Bran's miners inadvertently disturbed an Enclave Caspium graveyard.</p>
<p>The religious Purist subfaction immediately attacked, forcing Bran's infantry to establish a desperate bunker line to defend the pipeline.</p>
</lore>
</entry>

<entry id="prius-betrayal">
<name>The Abandonment at Campaign 2</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The tactical retreat that shattered the alliance.</quote>
<stats>
<stat label="Location">Biomass Outpost 4</stat>
<stat label="Perpetrator">Enclave King Prius</stat>
<stat label="Outcome">Syndicates abandoned to swarm</stat>
</stats>
<lore>
<p>During a joint offensive against a major Biomass hive cluster, King Prius abruptly ordered all Enclave support forces to retreat to orbit, leaving the Syndicates stranded.</p>
<p>Bran's crew barely escaped by hijacking orbital transports, completely ending the human-Enclave alliance.</p>
</lore>
</entry>

<entry id="bran-assassination">
<name>The Death of Bran Davis</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>The tragic, unceremonious vaporization of the accidental hero.</quote>
<stats>
<stat label="Location">Prius's Private Chambers</stat>
<stat label="Target">King Prius</stat>
<stat label="Execution Method">Automated Caspium Ceiling Crystal</stat>
</stats>
<lore>
<p>Guided by the words of the dead Elder, Bran Davis snuck into Prius's secure meeting chambers to execute him.</p>
<p>He located Prius conversing with hologram feeds. Right as Bran drew his &lt;span class='wiki-link' data-id='cd-13-rifle'&gt;CD-13 rifle&lt;/span&gt;, Prius paid him no attention; the automated security crystal in the ceiling instantly vaporized Bran.</p>
</lore>
</entry>
</database>
`
