const xmlDatabaseSource = `
<?xml version="1.0" encoding="UTF-8"?>
<database>
<!-- CHARACTERS -->
<entry id="bran-davis">
<name>Bran Davis</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Man of mines. No skills in combat. Work teaches man.</quote>
<stats>
<stat label="Role">Leader of Syndicate &amp; Student of Wires</stat>
<stat label="Vehicle Blueprints">SUV with color of sand</stat>
<stat label="Standard HP">100 HP</stat>
<stat label="Standard Armor">2 Armor</stat>
<stat label="Primary Armament">&lt;span class='wiki-link' data-id='cd-13-rifle'&gt;Gun of Machines&lt;/span&gt;</stat>
</stats>
<lore>
<p>Bran Davis: man of work. Goal: work with wires. No luck. Result: work in mines in stars of Proxima.</p>
<p>Derrulicants attack home of Startis. Escape in SUV. Time passes. Bran gets rank of captain for ship of Syndicate. Reason: captain of past died from bug of sickness.</p>
<p>No past in army. Skills with rigs for mines and knowledge of wires make Bran the leader in fight for humanity.</p>
</lore>
<extra>Desk of Bran holds keyboard of Earth. SUV of mines holds 125 HP and 2 armor on setting for beginners. Buffer for mistakes of player. Bran deals reduction in damage. Reason: history as civilian.</extra>
</entry>

<entry id="prius">
<name>Prius</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Ruler in hiding behind screens of light. Protection for history of lies.</quote>
<stats>
<stat label="Faction Role">Ruler of Enclave</stat>
<stat label="Visual Presence">Talk via holograms of light</stat>
<stat label="Inspiration">General Horatio Gates of Earth</stat>
<stat label="Psychological State">Fear &amp; Lack of Sleep</stat>
</stats>
<lore>
<p>Prius: captain of ship for Enclave in past. Presence at blast of Star Forge. No fighting. Hiding of cruiser due to lies in logs of flight and trouble with engine. Secret from crew.</p>
<p>Fear of discovery. Result: madness. Rule over empire in ruin with gear for spies and holograms of light.</p>
<p>Creator for war of Syndicate on Derrulicants. Goal: ruin for project of Star Forge on Startis. Burial for proof of past.</p>
</lore>
<extra>Prius hunts 25 ships of Enclave from blast of Star Forge. Goal: destruction before crew shows past of lies.</extra>
</entry>

<entry id="stafford">
<name>Dr. Glenn Stafford</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Jeffery is memory. Suit of armor holds mind of Dr. Stafford.</quote>
<stats>
<stat label="Faction Alignment">Mind of Hive for Flesh</stat>
<stat label="Host Identity">Guard of BMO from Past</stat>
<stat label="Physical Symptom">Shakes in joints of armor</stat>
<stat label="Cause">Failure in gear for heat of body</stat>
</stats>
<lore>
<p>Days of crisis with bugs on Earth. Jeffery: guard for BMO. Team on patrol died. Suit taken by mind of Dr. Glenn Stafford.</p>
<p>Stafford shot self with tool of DNA. Tool held cells of bugs. Beasts of bugs have no mind. Mind of Stafford has control over swarm.</p>
<p>Shakes in body. Reason: gear for heat in suit shares heat with errors during mix of cells. Failure in power for joints.</p>
</lore>
<extra>ID of Jeffery is #033198. Meaning: date of release for StarCraft. Name of Stafford comes from Glenn Stafford, maker of music for StarCraft.</extra>
</entry>

<entry id="tanner">
<name>Officer Tanner of BMO</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Guard facing world of death.</quote>
<stats>
<stat label="Official ID">#072710</stat>
<stat label="Deployment Zone">Base of BMO on Earth</stat>
<stat label="Primary Vehicle">Truck of BMO</stat>
<stat label="Status">Death in Fight</stat>
</stats>
<lore>
<p>Tanner: guard for BMO on Earth. Team of six died during outbreak of bugs. Walk through zone of bugs.</p>
<p>Base found. Chopper called. Beasts of bugs jump and break blades of rotor. Crash back into waste of dirt.</p>
<p>Choice of end: death. Blast of rocket for escape in air. Result: no spread of bugs to stars.</p>
</lore>
<extra>Number of Tanner is #072710. Meaning: date of release for StarCraft II.</extra>
</entry>

<entry id="jamison">
<name>Specialist Jamison</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>No gun. No armor. Waste of dirt. Jamison fights with will.</quote>
<stats>
<stat label="Armor Frame">Increase in size over suits of Syndicate</stat>
<stat label="True HP Capacity">250 HP</stat>
<stat label="Armoring Index">2 Armor</stat>
<stat label="Melee Damage">20 Damage</stat>
<stat label="Rifle Damage">10 Damage</stat>
</stats>
<lore>
<p>Jamison: guard on ship for drops. Guns shot down ship. Wing of pod broke. Locks for crew popped open.</p>
<p>Hands open rack of safety. Climb into suit of metal before hit on ground. Gun lost off cliff during trap of bugs. Result: Jamison beating beasts with hands.</p>
<p>Jamison stays in waste of dirt. Lines of fluid broke. Drop of plate for chest needed for life.</p>
</lore>
</entry>

<entry id="former-captain">
<name>Captain of Syndicate in Past</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Captain of ship for Syndicate in past. Death moved Bran Davis up.</quote>
<stats>
<stat label="Former Command">Ship for Stars of Syndicate</stat>
<stat label="Primary Cause of Death">Crash of genes with bug</stat>
<stat label="Age of Onset">30 Years of Earth</stat>
</stats>
<lore>
<p>Captain of ship for Bran in past. Death soon after arrival at stars of Proxima. Secret kept by staff of command.</p>
<p>Death by bug of Earth. Reason: trap in genes. Mix from parents cancelled guard against bugs by age 30.</p>
<p>Proof in game: spot of purple color in room. Remnant from melt of body.</p>
</lore>
</entry>

<entry id="elder">
<name>Elder of Enclave</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Leader of bravery. Death for showing truth about Prius.</quote>
<stats>
<stat label="Jurisdiction">Room of Rule for Enclave</stat>
<stat label="Action">Share of files showing cover for Star Forge</stat>
<stat label="Current Status">Death by spies of Enclave</stat>
</stats>
<lore>
<p>Leader in Enclave. Finder of files about Prius and run from Star Forge.</p>
<p>Contact with Bran Davis. Proof sent showing lies of Prius and plan against Derrulicants.</p>
<p>Attempt by Bran to check facts. Result: death of elder in room. Break between Syndicate and Enclave.</p>
</lore>
</entry>

<entry id="derrulicant-leader">
<name>Overlord of Derrulicants</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Ruler of eternity in body of bugs.</quote>
<stats>
<stat label="Jurisdiction">Command of Core for Torus VI</stat>
<stat label="Genetic Status">Sickness of bugs but mind with clarity</stat>
<stat label="Stabilizers Held">4 Parts of Syncon</stat>
</stats>
<lore>
<p>Ruler of Derrulicants. Rule of iron over home of factories on Torus VI.</p>
<p>Sickness with virus of bugs in past. No loss of mind. Reason: recovery of body and 4 parts for safety of genes placed in flesh.</p>
<p>Change in body. Result: life of eternity. Mind stays during changes in body.</p>
</lore>
</entry>

<!-- SYNDICATE UNITS -->
<entry id="soldier">
<name>Soldier</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Troops of foot in gear for lifting boxes.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 12s</stat>
<stat label="HP / Base Armor">50 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='cd-12-rifle'&gt;Gun of Assault&lt;/span&gt; (Ground &amp; Air)</stat>
<stat label="Weapon Stats">3 Damage | Range 5 | 1.0s Wait | Hit of Instant</stat>
<stat label="Upgrades">Gun 1-3 (+1 Dmg/tier)</stat>
<stat label="Tags">Foot, Flesh</stat>
</stats>
<lore>
<p>Troops of Syndicate. Workers of mines and builders in lifters for boxes with guns of machines.</p>
<p>Boost of 5 HP over units of baseline. Reason: dust of Caspium in plates of metal. Effect: cancer of lung from dust.</p>
</lore>
<extra>Soldiers bypass tanks of water in suit. Alcohol and mash of fruit go in filters for water. Help for shifts on watch. Many are survivors of sickness given jobs on line of front.</extra>
</entry>

<entry id="prawn">
<name>Prawn</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Builder of fields. Maker of bases and fixer of units of metal.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 10s</stat>
<stat label="HP / Base Armor">50 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">4.5/s (0.8s start wait) / Range 8</stat>
<stat label="Upgrades">None</stat>
<stat label="Tags">Machine</stat>
</stats>
<lore>
<p>Prawn: builder of bases and fixer of machines. Frame of soldier with power for lift. No guns. Fixes pipes, buildings, and walkers of metal.</p>
<p>Syndicate lacks truck with gun of mass. Players must walk units of Prawn to lines of front. Goal: build guns of mass there.</p>
</lore>
</entry>

<entry id="enforcer">
<name>Enforcer</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Troops of foot with metal.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">100 Rock / 5 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 18s</stat>
<stat label="HP / Base Armor">75 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='cd-12-rifle'&gt;Gun of Assault with Mods&lt;/span&gt; (Ground &amp; Air)</stat>
<stat label="Weapon Stats">6 Damage | Range 5 | 1.2s Wait | Hit of Instant</stat>
<stat label="Tags">Flesh</stat>
</stats>
<lore>
<p>Enforcer: troop on foot. Step up in combat from Soldier. Plates of metal for hits of force.</p>
</lore>
</entry>

<entry id="skidder">
<name>Skidder</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Scout of speed. Block for doors of base.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 20 Metal / 5 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 16s</stat>
<stat label="HP / Base Armor">40 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 6.0/s / Range 9</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='light-grenades-wep'&gt;Bombs of Toss&lt;/span&gt; (Ground Only)</stat>
<stat label="Stationary Mode">5 Damage | Range 4 | 2.0s Wait</stat>
<stat label="Mobile Mode">5 Damage | Range 4 | 3.0s Wait</stat>
<stat label="Upgrades">Armor of Truck 1 &amp; 2</stat>
<stat label="Tags">Machine, Truck</stat>
</stats>
<lore>
<p>Skidder: life in past as truck for trees. Use of now: toss of bombs. Base of wheels shoots with speed when sitting without movement.</p>
</lore>
</entry>

<entry id="incinerator">
<name>Incinerator</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Fighter for line of front. Safety from fire. Risk of explosion.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">5 Rock / 20 Metal / 50 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 22s</stat>
<stat label="HP / Base Armor">100 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 6</stat>
<stat label="Abilities">Aim of Machines | Safety from Fire | Risk of Explosion</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='dual-flamers'&gt;Two Guns of Fire&lt;/span&gt; (Cone Area)</stat>
<stat label="Weapon Stats">5 Dmg | Range 3</stat>
<stat label="Upgrades">Gun 1-3 | Burn of 3s</stat>
<stat label="Tags">Foot, Flesh</stat>
</stats>
<lore>
<p>Guns of fire for removal of slime of bugs. Risk: hits over 15 HP have chance to pop lines of gas. Blast hurts units in area.</p>
</lore>
<extra>Suit lacks block for air. Limit of room. Jobs in space: tank 2 filled with air. Jobs on planet: filters of CO2-to-air.</extra>
</entry>

<entry id="medic">
<name>Medic</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Healer of flesh.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">5 Rock / 20 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 15s</stat>
<stat label="HP / Base Armor">50 HP / 1 Armor (Upgradable)</stat>
<stat label="Abilities">Heal of flesh</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='needler-wep'&gt;Gun of Needles&lt;/span&gt; (Ground &amp; Air)</stat>
<stat label="Weapon Stats">2 Damage | Range 4 | 0.7s Wait</stat>
<stat label="Upgrades">Gun | Armor</stat>
<stat label="Tags">Flesh, Help</stat>
</stats>
<lore>
<p>Boost of drugs by Medic for Syndicate. Direct into units of flesh. Speed of gun active only during healing.</p>
</lore>
</entry>

<entry id="suv">
<name>SUV of Support</name>
<type>Support Vehicle (SUV)</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Truck of cover for game. Scout, block for doors, and drop of bombs.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">100 Rock / 50 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 24s</stat>
<stat label="HP / Base Armor">75 HP / 2 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 6.0/s / Range 9</stat>
<stat label="Garrison">4 Soldiers</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='eject-mines-wep'&gt;Bombs of Drop&lt;/span&gt; (Explosion of Self)</stat>
<stat label="Weapon Effect">Drop of 5 bombs</stat>
<stat label="Upgrades">Gun of Truck</stat>
<stat label="Tags">Machine, Truck</stat>
</stats>
<lore>
<p>Truck of Support: unit of cover for Proxima. Order of explosion of self drops five bombs on floor in hiding to block door of base. Drops of unit: 2 per side.</p>
</lore>
</entry>

<entry id="sentry">
<name>Sentry</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Base of defense; stops attacks from air and units in hiding.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 50 Metal / 100 Oil / 20 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 30s</stat>
<stat label="HP / Base Armor">50 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 3.0/s / Range 10</stat>
<stat label="Rule">No solo attack. Needs lock on floor.</stat>
<stat label="Deploy Ability">+1 Range, See Units in Hiding, Radar in 20 tiles</stat>
<stat label="Primary Weapon">&lt;span class='wiki-link' data-id='cluster-rockets-wep'&gt;Rockets of Sky&lt;/span&gt; (AIR ONLY, 5 Targets, 20 dmg)</stat>
<stat label="Secondary Weapon">&lt;span class='wiki-link' data-id='mg-turret-wep'&gt;Gun of Machine&lt;/span&gt; (Ground &amp; Air, 5 dmg)</stat>
<stat label="Upgrades">Armor | Gun</stat>
<stat label="Tags">Robot, Armor of Mass, Machine</stat>
</stats>
<lore>
<p>Rule of Sentry: attack only in mode of lock on floor. Mode of lock: station of radar. Gives +1 range, spots units in hiding. Boost of fire speed for each Sentry in lock. Guns of air pump make sounds of cracks.</p>
</lore>
</entry>

<entry id="bulwark">
<name>Bulwark</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Suit of fight for line of front.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 75 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 32s</stat>
<stat label="HP / Base Armor">150 HP / 2 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 8</stat>
<stat label="Primary Weapon">&lt;span class='wiki-link' data-id='autocannon-wep'&gt;Gun of Size&lt;/span&gt; (5-12 Dmg)</stat>
<stat label="Secondary Weapon">&lt;span class='wiki-link' data-id='dual-rocket-pods-wep'&gt;Two Pods of Rockets&lt;/span&gt; (20 Dmg, Split Aim)</stat>
<stat label="Upgrades">Upgrades for Gun</stat>
<stat label="Tags">Foot, Machine</stat>
</stats>
<lore>
<p>Bulwark: frame of armor for game. Pods of rockets without cost. Aim for two targets at time of same.</p>
</lore>
</entry>

<entry id="drone">
<name>Drone of Aero</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Helper of flight against swarms of bugs.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='space-center'&gt;Center of Space&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 20 Metal / 5 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 14s</stat>
<stat label="HP / Base Armor">20 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 6.5/s / Range 10</stat>
<stat label="Abilities">Boost of Speed | Charge of Power</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='light-gatling-wep'&gt;Gun of Spin&lt;/span&gt; (0.1 Dmg, 0.09s Wait)</stat>
<stat label="Tags">Drone, Machine</stat>
</stats>
<lore>
<p>Drones of Aero: scouts of speed. Mode of charge: move with delay, but gun shoots 100 shots per second. Ruin for swarms of bugs.</p>
</lore>
</entry>

<entry id="valkyrie">
<name>Fighter of Valkyrie</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Fighter of sky.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='space-center'&gt;Center of Space&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 100 Metal / 30 Oil / 5 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 35s</stat>
<stat label="HP / Base Armor">200 HP / 3 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 9</stat>
<stat label="AA Weapon">&lt;span class='wiki-link' data-id='t280-torpedoes-wep'&gt;Bombs of Star&lt;/span&gt; (2 Hits, 30 Dmg)</stat>
<stat label="Ground/AA Weapon">&lt;span class='wiki-link' data-id='autocannon-wep'&gt;Gun of Size&lt;/span&gt; (5 Dmg)</stat>
<stat label="Upgrades">Upgrades</stat>
<stat label="Tags">Machine, Air</stat>
</stats>
<lore>
<p>Truck of army for humans. Found in holds of ships for sleep. Guns of system: copies from parts of Valkyrie.</p>
</lore>
</entry>

<entry id="chaffron">
<name>Ship of Chaffron</name>
<type>Syndicate Unit</type>
<category>Syndicate Unit</category>
<tagClass>tag-syndicate</tagClass>
<quote>Ship of guns for planet. Needs guard of ground.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='space-center'&gt;Center of Space&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 400 Metal / 200 Oil / 250 Caspium</stat>
<stat label="Supply / Build Time">8 Supply / 70s</stat>
<stat label="HP / Base Armor">2000 HP / 10 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 2.0/s / Range 10</stat>
<stat label="Guns">8x Guns of Spin (0.3 Dmg each)</stat>
<stat label="AA Missiles">2x Rockets of Sky (6 Dmg)</stat>
<stat label="Heavy Ability">&lt;span class='wiki-link' data-id='theranos-missile-wep'&gt;Bomb of Theranos&lt;/span&gt; (300 single sky)</stat>
<stat label="Upgrades">Upgrades</stat>
<stat label="Tags">Machine, Air, Mass</stat>
</stats>
<lore>
<p>Made from frames of ships for boxes. Loads of rockets for ground and air. Two fans for lift in air. Movement with delay if one fan breaks. Ships of space from Syndicate own stars.</p>
</lore>
</entry>

<!-- ENCLAVE UNITS -->
<entry id="archon">
<name>Archon</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Walker of metal with shield.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='foundry'&gt;Foundry&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 100 Metal / 50 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 28s</stat>
<stat label="HP / Shield">80 HP / Shield of Light</stat>
<stat label="Base Armor">0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 3.0/s / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='thermal-beam-wep'&gt;Beam of Heat&lt;/span&gt; (15 Dmg, Range 6)</stat>
<stat label="Tags">Machine, Energy, Walker</stat>
</stats>
<lore>
<p>Archon: tech of shield for Enclave. Shield of light stops bullets. Laser of heat causes ruin for plates of metal.</p>
</lore>
</entry>

<entry id="steward">
<name>Steward</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Guard of melee and block for bullets.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='foundry'&gt;Foundry&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 60 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 14s</stat>
<stat label="HP / Base Armor">20 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 3.5/s / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='energized-halberd-wep'&gt;Spear of Energy&lt;/span&gt; (12 Melee Dmg)</stat>
<stat label="Tags">Flesh, Foot</stat>
</stats>
<lore>
<p>Steward: unit of flesh for melee. Used in grabs of land. Guard for damage and block for bullets.</p>
</lore>
</entry>

<entry id="destroyer">
<name>Destroyer</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Truck of metal.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='fabricator'&gt;Fabricator&lt;/span&gt;</stat>
<stat label="Cost">10 Rock / 100 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 28s</stat>
<stat label="HP / Base Armor">100 HP / 2 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='plasma-cannon-wep'&gt;Gun of Plasma&lt;/span&gt; (15 Dmg, Range 5)</stat>
<stat label="Tags">Metal, Machine</stat>
</stats>
<lore>
<p>Truck of metal for Enclave. Balls of plasma cause ruin for walls of mass.</p>
</lore>
</entry>

<entry id="pioneer">
<name>Pioneer</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Walker of line of front.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='fabricator'&gt;Fabricator&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 100 Metal / 75 Oil / 75 Caspium</stat>
<stat label="Supply / Build Time">4 Supply / 34s</stat>
<stat label="HP / Base Armor">150 HP / 3 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='plasma-rifle-wep'&gt;Rifle of Plasma&lt;/span&gt; (10 Dmg, Range 5)</stat>
<stat label="Tags">Metal, Machine, Walker</stat>
</stats>
<lore>
<p>Pioneers: shields of walk. March right into bases. Goal: absorb fire of return.</p>
</lore>
</entry>

<entry id="speeder">
<name>Speeder</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Scout of speed. Made for fights against bugs.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='advanced-fabricator'&gt;Forge of Metal&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 25 Oil / 5 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 18s</stat>
<stat label="HP / Base Armor">50 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 6.0/s / Range 9</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='thermal-cannon-wep'&gt;Gun of Heat&lt;/span&gt; (1 Dmg, 0.3s Wait)</stat>
<stat label="Tags">Metal, Machine</stat>
</stats>
<lore>
<p>Scout of speed. Built for ruin of troops of foot. Damage of baseline makes it useless against metal of mass.</p>
</lore>
</entry>

<entry id="python">
<name>Python</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Walker of metal for end of game.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='advanced-fabricator'&gt;Forge of Metal&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 125 Metal / 100 Oil / 75 Caspium</stat>
<stat label="Supply / Build Time">5 Supply / 45s</stat>
<stat label="HP / Base Armor">300 HP / 3 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='plasma-cannon-wep'&gt;Gun of Plasma&lt;/span&gt; (20 Dmg, Range 6)</stat>
<stat label="Tags">Metal, Machine</stat>
</stats>
<lore>
<p>Python: peak in group of metal from Enclave. Shots of plasma. Made for holes in shells of trucks.</p>
</lore>
</entry>

<entry id="harpy">
<name>Harpy</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Fighter of sky.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='air-channel'&gt;Gate of Air&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 75 Metal / 25 Oil / 25 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 24s</stat>
<stat label="HP / Base Armor">100 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 6.0/s / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='charged-lance-wep'&gt;Spear of Power&lt;/span&gt; (5 to 20 ramp Dmg, Range 5)</stat>
<stat label="Tags">Metal, Machine, Air</stat>
</stats>
<lore>
<p>Harpy: weapon of Spear for Power. Increase of damage over time. Beam of laser stays locked on one target.</p>
</lore>
</entry>

<entry id="dirigible">
<name>Dirigible</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Ship of air.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='air-channel'&gt;Gate of Air&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 150 Metal / 150 Oil / 100 Caspium</stat>
<stat label="Supply / Build Time">6 Supply / 55s</stat>
<stat label="HP / Base Armor">300 HP / 4 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 3.0/s / Range 9</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='ion-cannon-wep'&gt;Group of Ion Guns&lt;/span&gt; (4x Guns, 25 Dmg, Range 7)</stat>
<stat label="Tags">Machine, Metal, Air</stat>
</stats>
<lore>
<p>Base of float in sky. Drifts over zones of battle. Four guns of ion with aim of freedom. Ruin for targets on ground and sky.</p>
</lore>
</entry>

<entry id="phosphate">
<name>Phosphate</name>
<type>Enclave Unit</type>
<category>Enclave Unit</category>
<tagClass>tag-enclave</tagClass>
<quote>Drone of boom in sky.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='air-channel'&gt;Gate of Air&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 40 Metal / 100 Oil / 5 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 12s</stat>
<stat label="HP / Base Armor">40 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 6.0/s / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Explosion&lt;/span&gt; (AIR ONLY, 40 Dmg)</stat>
<stat label="Tags">Machine, Robot, Air</stat>
</stats>
<lore>
<p>Drones of Phosphate: units of boom. Fly into swarms of air. Pop of mass. Clear skies with speed.</p>
</lore>
</entry>

<!-- BIOMASS UNITS -->
<entry id="biter">
<name>Biter</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Unit of bugs.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Room of Birth&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">0.5 Supply / 7s</stat>
<stat label="HP / Base Armor">15 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 7.5/s / Range 5</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='mandibles-wep'&gt;Jaws of Mouth&lt;/span&gt; (2 Melee Dmg, 0.6s Wait)</stat>
<stat label="Tags">Flesh</stat>
</stats>
<lore>
<p>Biters: bugs of foot. Form of baseline across types for bugs. Numbers of mass block defense. Weakness to fire.</p>
</lore>
</entry>

<entry id="ravenger">
<name>Ravenger</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Bug of melee.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Room of Birth&lt;/span&gt;</stat>
<stat label="Cost">75 Rock / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 16s</stat>
<stat label="HP / Base Armor">70 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 6.0/s / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-claws-wep'&gt;Claws of Acid&lt;/span&gt; (8 Melee Dmg, 0.8s Wait)</stat>
<stat label="Tags">Flesh, Melee</stat>
</stats>
<lore>
<p>Unit of melee. Claws with acid of bugs. Destruction of plates of metal in range of melee.</p>
</lore>
</entry>

<entry id="feral">
<name>Feral</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Unit of boom with acid.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Room of Birth&lt;/span&gt;</stat>
<stat label="Cost">75 Rock / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 16s</stat>
<stat label="HP / Base Armor">80 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 3.5/s / Range 5</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Explosion&lt;/span&gt; (12 Dmg)</stat>
<stat label="Tags">Flesh, Melee, Acid</stat>
</stats>
<lore>
<p>Biters of Feral: bugs with bags of acid. Movement into groups of metal. Pop and boom on touch.</p>
</lore>
</entry>

<entry id="annihilator">
<name>Annihilator</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Troop of shock.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Room of Birth&lt;/span&gt;</stat>
<stat label="Cost">75 Rock / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 18s</stat>
<stat label="HP / Base Armor">125 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='claws-wep'&gt;Claws&lt;/span&gt; (14 Melee Dmg, 1.2s Wait)</stat>
<stat label="Tags">Flesh, Melee</stat>
</stats>
<lore>
<p>Bug of muscle. Destruction of walls of metal.</p>
</lore>
</entry>

<entry id="spitter">
<name>Spitter</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Bug of range.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Pod of Bugs&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 20s</stat>
<stat label="HP / Base Armor">50 HP / 2 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acidic-bile-wep'&gt;Spit of Acid&lt;/span&gt; (12 Dmg, Range 5)</stat>
<stat label="Tags">Flesh</stat>
</stats>
<lore>
<p>Unit of range for bugs. Toss of acid from stomach from distance. Destruction of troops of foot.</p>
</lore>
</entry>

<entry id="gagger">
<name>Gagger</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Spitter of acid with noise.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Pod of Bugs&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 20s</stat>
<stat label="HP / Base Armor">35 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 3.0/s / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-vomit-wep'&gt;Puke of Acid&lt;/span&gt; (20 Dmg, Range 4)</stat>
<stat label="Tags">Flesh, Acid</stat>
</stats>
<lore>
<p>Spray of acid. Makers of noise of gag. Enemies hear noise in fog of map.</p>
</lore>
</entry>

<entry id="ranger">
<name>Ranger</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Hunter of metal from distance.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Pod of Bugs&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 20s</stat>
<stat label="HP / Base Armor">75 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-spit-wep'&gt;Spike of Acid&lt;/span&gt; (10 Dmg, Range 5)</stat>
<stat label="Tags">Flesh</stat>
</stats>
<lore>
<p>Bugs of hunter. Toss of spikes of bone. Holes in tanks of metal.</p>
</lore>
</entry>

<entry id="nest">
<name>Nest</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Fort of flesh in motion.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Pod of Bugs&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 20 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">0 Supply / 25s</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='claws-wep'&gt;Claws&lt;/span&gt;</stat>
<stat label="Rule">No move off slime. Death of instant if slime burns.</stat>
<stat label="Tags">Flesh, Base</stat>
</stats>
<lore>
<p>Base of bugs. Pull up and walk on legs. Move off slime of bugs equals death. Same rule for melt of slime.</p>
</lore>
</entry>

<entry id="titan">
<name>Titan</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Beast of base-smash.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Pod of Bugs&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 100 Metal / 50 Oil / 25 Caspium</stat>
<stat label="Supply / Build Time">4 Supply / 38s</stat>
<stat label="HP / Base Armor">150 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 3.0/s / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='crush-wep'&gt;Smash&lt;/span&gt; (30 Melee Dmg)</stat>
<stat label="Rule">No bugs of acid. Hides in dirt if player picks bugs of acid.</stat>
<stat label="Tags">Flesh, Metal</stat>
</stats>
<lore>
<p>Bypass for half of armor on enemy. Choice of bugs with acid places Titans in dirt. Mode of sleep.</p>
</lore>
</entry>

<entry id="stalker">
<name>Stalker</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Pest of sky.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 22s</stat>
<stat label="HP / Base Armor">100 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-spines-wep'&gt;Pins of Acid&lt;/span&gt; (5 Dmg, Range 4)</stat>
<stat label="Tags">Flesh, Air</stat>
</stats>
<lore>
<p>Bugs of sky. Annoyance for workers. Flight ahead of swarm.</p>
</lore>
</entry>

<entry id="leech">
<name>Leech</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Bug of boom in air.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">1 Supply / 12s</stat>
<stat label="HP / Base Armor">25 HP / -1 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 6.0/s / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Explosion&lt;/span&gt; (AIR ONLY, 20 Dmg)</stat>
<stat label="Tags">Flesh, Air, Acid</stat>
</stats>
<lore>
<p>Leeches rush units of sky. Boom of mass. Drop of acid.</p>
</lore>
</entry>

<entry id="vulture">
<name>Vulture</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Fighter of sky.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Build Time">2 Supply / 24s</stat>
<stat label="HP / Base Armor">115 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 3.5/s / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='spines-wep'&gt;Pins of Bone&lt;/span&gt; (AIR ONLY, 15 Dmg, Range 5)</stat>
<stat label="Tags">Flesh, Air</stat>
</stats>
<lore>
<p>Guards of sky. Toss of spears of bone. Win for sky.</p>
</lore>
</entry>

<entry id="carrion">
<name>Carrion</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Bug of mass.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 30s</stat>
<stat label="HP / Base Armor">150 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 7</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='tentacles-wep'&gt;Arms&lt;/span&gt; (10 Dmg)</stat>
<stat label="Tags">Flesh, Help</stat>
</stats>
<lore>
<p>Arms of length grab. Pull of troops into mouth of mass. Chance for death of enemy in bite of one count.</p>
</lore>
</entry>

<entry id="vomiter">
<name>Vomiter</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Sprayer of acid in area.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">3 Supply / 30s</stat>
<stat label="HP / Base Armor">100 HP / 0 Armor (No upgrades)</stat>
<stat label="Movement / Vision">Pace of 3.0/s / Range 6</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='acid-spray-wep'&gt;Spray of Acid&lt;/span&gt; (0.1 Dmg)</stat>
<stat label="Tags">Flesh, Acid</stat>
</stats>
<lore>
<p>Coat for paths in mist of acid without stop. Increase in strength over time for troops in mist.</p>
</lore>
</entry>

<entry id="husk">
<name>Husk</name>
<type>Biomass Unit</type>
<category>Biomass Unit</category>
<tagClass>tag-biomass</tagClass>
<quote>Beast of siege for bugs.</quote>
<stats>
<stat label="Production Facility">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Build Time">4 Supply / 36s</stat>
<stat label="HP / Base Armor">200 HP / 1 Armor (Upgradable)</stat>
<stat label="Movement / Vision">Pace of 4.5/s / Range 8</stat>
<stat label="Armament">&lt;span class='wiki-link' data-id='spore-cannons-wep'&gt;Guns of Pod&lt;/span&gt; (30 Dmg, Range 6)</stat>
<stat label="Tags">Flesh</stat>
</stats>
<lore>
<p>Bug for smash of bases. Toss of pods of bone. Holes in walls of enemy.</p>
</lore>
</entry>

<!-- PRODUCTION STRUCTURES -->
<entry id="conscription-center">
<name>Center of Draft</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Camp of troops.</quote>
<stats>
<stat label="Faction Owner">Syndicates</stat>
<stat label="Primary Units Built">Soldier, Prawn, Enforcer, Skidder, Incinerator, Medic</stat>
<stat label="Structural Role">Camp of Foot</stat>
</stats>
<lore>
<p>Base of start for Syndicate. Draft for miners. Gift of frames of Soldier.</p>
<p>Builds for Medics, fixers of Prawn, and Incinerators. Goal: fight threat of bugs.</p>
</lore>
</entry>

<entry id="factory">
<name>Factory</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Plant of metal for frames of machines.</quote>
<stats>
<stat label="Faction Owner">Syndicates</stat>
<stat label="Primary Units Built">SUV of Support, Sentry, Bulwark</stat>
<stat label="Structural Role">Walkers of Metal</stat>
</stats>
<lore>
<p>Builds frames of metal. Made from machines of cargo.</p>
<p>Makes SUV of Support, Sentry of radar, and suits of Bulwark.</p>
</lore>
</entry>

<entry id="space-center">
<name>Center of Space</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Pad of launch for fighters of sky and ships of space.</quote>
<stats>
<stat label="Faction Owner">Syndicates</stat>
<stat label="Primary Units Built">Drone of Aero, Fighter of Valkyrie, Ship of Chaffron</stat>
<stat label="Structural Role">Base of Sky</stat>
</stats>
<lore>
<p>Use of plans of hangars for support of sky.</p>
<p>Launch for Drones of Aero, Fighters of Valkyrie, and Ships of Chaffron.</p>
</lore>
</entry>

<entry id="foundry">
<name>Foundry</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Base of metal for guards.</quote>
<stats>
<stat label="Faction Owner">Enclave</stat>
<stat label="Primary Units Built">Steward, Archon</stat>
<stat label="Structural Role">Guards</stat>
</stats>
<lore>
<p>Use of rocks of Caspium to mold frames for guards.</p>
<p>Makes Stewards of flesh as blocks for bullets. Makes walkers of Archon with shields.</p>
</lore>
</entry>

<entry id="fabricator">
<name>Fabricator</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Shop of machines for mechs of planet.</quote>
<stats>
<stat label="Faction Owner">Enclave</stat>
<stat label="Primary Units Built">Destroyer, Pioneer</stat>
<stat label="Structural Role">Builds of Metal</stat>
</stats>
<lore>
<p>Welds of steel to bases of cars.</p>
<p>Makes Destroyers of metal and teams of Pioneers.</p>
</lore>
</entry>

<entry id="advanced-fabricator">
<name>Forge of Metal</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Forge of metal for smashers of planet.</quote>
<stats>
<stat label="Faction Owner">Enclave</stat>
<stat label="Primary Units Built">Speeder, Python</stat>
<stat label="Structural Role">Shop of Titan</stat>
</stats>
<lore>
<p>Need for power of Caspium. Launch for Speeders for work of spies. Builds for walkers of Python.</p>
</lore>
</entry>

<entry id="air-channel">
<name>Gate of Air</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Grid of float for forts of sky.</quote>
<stats>
<stat label="Faction Owner">Enclave</stat>
<stat label="Primary Units Built">Harpy, Dirigible, Phosphate</stat>
<stat label="Structural Role">Pad of Sky</stat>
</stats>
<lore>
<p>Creation of gate of air for sweeps of sky.</p>
<p>Builds for Harpies of beam, blimps of Dirigible, and robots of Phosphate.</p>
</lore>
</entry>

<entry id="incubation-chamber">
<name>Room of Birth</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Pit of spawn for swarm of bugs.</quote>
<stats>
<stat label="Faction Owner">Swarm of Bugs</stat>
<stat label="Primary Units Spawned">Biter, Ravenger, Feral, Annihilator</stat>
<stat label="Structural Role">Node of Melee</stat>
</stats>
<lore>
<p>Base of meat. Use of slime of bugs and food for creation of life.</p>
<p>Makes Biters. Allows change into bugs of punch like Ferals or Annihilators.</p>
</lore>
</entry>

<entry id="spore-accumulator">
<name>Pod of Bugs</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Node of bugs.</quote>
<stats>
<stat label="Faction Owner">Swarm of Bugs</stat>
<stat label="Primary Units Spawned">Spitter, Gagger, Ranger, Nest, Titan</stat>
<stat label="Structural Role">Spawner of Range</stat>
</stats>
<lore>
<p>Growth for types of bugs. Makes Spitters, Gaggers without sight, and Titans.</p>
</lore>
</entry>

<entry id="corea">
<name>Room for Sky Bugs</name>
<type>Production Structure</type>
<category>Production Structure</category>
<tagClass>tag-structure</tagClass>
<quote>Nest of sky and center of help for bugs.</quote>
<stats>
<stat label="Faction Owner">Swarm of Bugs</stat>
<stat label="Primary Units Spawned">Stalker, Leech, Vulture, Carrion, Vomiter, Husk</stat>
<stat label="Structural Role">Nest of Sky</stat>
</stats>
<lore>
<p>Stage of growth for bugs. Makes pests of sky like Stalkers. Makes bugs of support like Husk.</p>
</lore>
</entry>

<!-- WEAPONS -->
<entry id="cd-12-rifle">
<name>Gun of Assault</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of Bullets, made by Alaby Inc.</quote>
<stats>
<stat label="Manufacturer">Alaby Inc</stat>
<stat label="Ammo Standard">Rounds of Steel</stat>
<stat label="Melee Feature">Plate of bash on side of right</stat>
<stat label="Standard Users">Soldier, Enforcer</stat>
</stats>
<lore>
<p>Gun of issue for Syndicate. Sides of steel. Use for hits when out of ammo.</p>
<p>Change by soldiers to shoot shells of shotgun. Act of crime.</p>
</lore>
</entry>

<entry id="cd-13-rifle">
<name>Gun of Machines</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun for units of heroes.</quote>
<stats>
<stat label="Manufacturer">Alaby Inc</stat>
<stat label="Special Property">Breaks armor on target</stat>
<stat label="Standard Damage">7 Damage</stat>
<stat label="Primary User">Bran Davis</stat>
</stats>
<lore>
<p>Gun for units of heroes. Speed of shots. Holes in armor.</p>
</lore>
</entry>

<entry id="dual-flamers">
<name>Two Guns of Fire</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Guns of fire with fuel on suits of Incinerator.</quote>
<stats>
<stat label="Engine Damage">5</stat>
<stat label="Target Profile">Ground Only</stat>
<stat label="Primary User">Incinerator</stat>
</stats>
<lore>
<p>Hoses of fuel. Spray of gel of fire in cone of front. Removal of slime of bugs.</p>
</lore>
</entry>

<entry id="needler-wep">
<name>Gun of Needles</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of darts for drugs.</quote>
<stats>
<stat label="Base Damage">2 Damage</stat>
<stat label="Weapon Delay">0.7s</stat>
<stat label="Range Index">4 Tiles</stat>
<stat label="Primary User">Medic</stat>
</stats>
<lore>
<p>Toss of needles for health. Carriage of drugs of life for safety of troops on field.</p>
</lore>
</entry>

<entry id="light-grenades-wep">
<name>Bombs of Toss</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Tosser of bombs stuck on trucks for trees.</quote>
<stats>
<stat label="Base Damage">5 Damage</stat>
<stat label="Firing Speed">12/s</stat>
<stat label="Trajectory">Arc</stat>
<stat label="Primary User">Skidder</stat>
</stats>
<lore>
<p>Toss of bombs of drop. Increase of speed when truck sits without movement.</p>
</lore>
</entry>

<entry id="eject-mines-wep">
<name>Bombs of Drop</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Field of bombs from explosion of self.</quote>
<stats>
<stat label="Mine Damage">50 Base</stat>
<stat label="Arm Time">2.0 seconds</stat>
<stat label="Deployment Type">Touch / Hiding</stat>
<stat label="Primary User">SUV of Support</stat>
</stats>
<lore>
<p>Move of risk. Explosion of truck for drop of field of bombs in hiding.</p>
</lore>
</entry>

<entry id="cluster-rockets-wep">
<name>Rockets of Sky</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Pods of rockets for clearing air.</quote>
<stats>
<stat label="Target Profile">AIR ONLY</stat>
<stat label="Simultaneous Targets">Up to 5 targets</stat>
<stat label="Base Damage">20</stat>
<stat label="Primary User">Sentry, Ship of Chaffron</stat>
</stats>
<lore>
<p>Toss of rockets. Locks on targets of sky. Block for rushes of air.</p>
</lore>
</entry>

<entry id="mg-turret-wep">
<name>Gun of Machine</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of bullets.</quote>
<stats>
<stat label="Base Damage">5 Damage</stat>
<stat label="Weapon Delay">1.5s</stat>
<stat label="Projectile Type">Hit of Instant</stat>
<stat label="Primary User">Sentry</stat>
</stats>
<lore>
<p>Gun of bullets. Used for guard of base and block for troops of foot.</p>
</lore>
</entry>

<entry id="autocannon-wep">
<name>Gun of Size</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of shells.</quote>
<stats>
<stat label="Base Damage">5-12</stat>
<stat label="Projectile Type">Shell (30/s)</stat>
<stat label="Primary Users">Bulwark, Fighter of Valkyrie</stat>
</stats>
<lore>
<p>Gun of shells with speed of shoot. Use for ruin of units of bugs and cars without armor.</p>
</lore>
</entry>

<entry id="dual-rocket-pods-wep">
<name>Two Pods of Rockets</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Two systems of rockets.</quote>
<stats>
<stat label="Base Damage">20 per rocket</stat>
<stat label="Targeting">Pods can aim at targets of difference</stat>
<stat label="Primary User">Bulwark</stat>
</stats>
<lore>
<p>Toss of rockets. Ruin for plates of metal armor.</p>
</lore>
</entry>

<entry id="light-gatling-wep">
<name>Gun of Spin</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of spin.</quote>
<stats>
<stat label="Base Damage">0.1 Damage</stat>
<stat label="Weapon Delay">0.09s</stat>
<stat label="Primary User">Drone of Aero</stat>
</stats>
<lore>
<p>Gun of bullets. Ruin for swarms of biters.</p>
</lore>
</entry>

<entry id="t280-torpedoes-wep">
<name>Bombs of Star</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>System of bombs for sky.</quote>
<stats>
<stat label="Target Profile">AIR ONLY</stat>
<stat label="Base Damage">30</stat>
<stat label="Primary User">Fighter of Valkyrie</stat>
</stats>
<lore>
<p>Bombs of army. Taken from hangars of war.</p>
</lore>
</entry>

<entry id="theranos-missile-wep">
<name>Bomb of Theranos</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Rocket of load for ships of sky.</quote>
<stats>
<stat label="Base Damage">300 Target of Sky</stat>
<stat label="Splash Area">200 Splash Area</stat>
<stat label="Primary User">Ship of Chaffron</stat>
</stats>
<lore>
<p>Rocket of mass. Ruin for camps of bases and groups of sky.</p>
</lore>
</entry>

<entry id="thermal-beam-wep">
<name>Beam of Heat</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Beam of energy without stop.</quote>
<stats>
<stat label="Base Damage">15 Damage</stat>
<stat label="Weapon Range">6</stat>
<stat label="Primary User">Archon</stat>
</stats>
<lore>
<p>Gun of energy. Creation by men of brains from Enclave for holes in walls of metal.</p>
</lore>
</entry>

<entry id="energized-halberd-wep">
<name>Spear of Energy</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Sword of plasma for melee.</quote>
<stats>
<stat label="Melee Damage">12 Damage</stat>
<stat label="Weapon Delay">1.1s</stat>
<stat label="Primary User">Steward</stat>
</stats>
<lore>
<p>Blade of energy. Tool for guards of city from Enclave as block for rushes of biters.</p>
</lore>
</entry>

<entry id="plasma-cannon-wep">
<name>Gun of Plasma</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of matter balls.</quote>
<stats>
<stat label="Base Damage">15 to 20 Damage</stat>
<stat label="Primary Users">Destroyer, Python</stat>
</stats>
<lore>
<p>Toss of balls of plasma. Ruin for metal and shields.</p>
</lore>
</entry>

<entry id="plasma-rifle-wep">
<name>Rifle of Plasma</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of plasma bolts for troops of foot.</quote>
<stats>
<stat label="Base Damage">10 Damage</stat>
<stat label="Weapon Delay">0.9s</stat>
<stat label="Primary User">Pioneer</stat>
</stats>
<lore>
<p>Gun of energy. Cover fire for walkers on line of front.</p>
</lore>
</entry>

<entry id="thermal-cannon-wep">
<name>Gun of Heat</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Spear of energy without stop.</quote>
<stats>
<stat label="Base Damage">1</stat>
<stat label="Weapon Delay">0.3s</stat>
<stat label="Primary User">Speeder</stat>
</stats>
<lore>
<p>Power against swarms of units of flesh. No power against walls of metal.</p>
</lore>
</entry>

<entry id="charged-lance-wep">
<name>Spear of Power</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of beam with increase of damage.</quote>
<stats>
<stat label="Initial Damage">5 Damage</stat>
<stat label="Maximum Damage">20 Damage</stat>
<stat label="Tick Speed">0.25s</stat>
<stat label="Primary User">Harpy</stat>
</stats>
<lore>
<p>Gun of sky for Enclave. Increase of damage over time of aim at target.</p>
</lore>
</entry>

<entry id="ion-cannon-wep">
<name>Group of Ion Guns</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Beam of energy of atoms without stop.</quote>
<stats>
<stat label="Base Damage">25 Damage</stat>
<stat label="Turret Count">4x Guns of Freedom</stat>
<stat label="Primary User">Dirigible</stat>
</stats>
<lore>
<p>Gun of energy. Reach for targets of difference across map.</p>
</lore>
</entry>

<entry id="mandibles-wep">
<name>Jaws of Mouth</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Parts of bug bite.</quote>
<stats>
<stat label="Melee Damage">2 Damage</stat>
<stat label="Attack Speed">0.6s Wait</stat>
<stat label="Primary User">Biter</stat>
</stats>
<lore>
<p>Attack of bugs. Use of numbers of mass for holes in hulls of metal.</p>
</lore>
</entry>

<entry id="acid-claws-wep">
<name>Claws of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Claws of ruin.</quote>
<stats>
<stat label="Melee Damage">8</stat>
<stat label="Attack Speed">0.8s Wait</stat>
<stat label="Primary User">Ravenger</stat>
</stats>
<lore>
<p>Claws with acid. Destruction of plates of metal in range of melee.</p>
</lore>
</entry>

<entry id="suicide-wep">
<name>Explosion</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Blast of chemicals.</quote>
<stats>
<stat label="Blast Damage">12 to 20</stat>
<stat label="Area Effect">Splash on Touch</stat>
<stat label="Primary Users">Feral, Leech, Phosphate</stat>
</stats>
<lore>
<p>Trick of defense by bugs. Explosion of self for drop of liquids with traits of melting.</p>
</lore>
</entry>

<entry id="claws-wep">
<name>Claws</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Claws with cover of bone.</quote>
<stats>
<stat label="Melee Damage">10 to 14</stat>
<stat label="Primary Users">Annihilator, Nest</stat>
</stats>
<lore>
<p>Parts of bone. Tools for ruin of walls of metal and troops of foot.</p>
</lore>
</entry>

<entry id="acidic-bile-wep">
<name>Spit of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Shot of chemicals from flesh.</quote>
<stats>
<stat label="Base Damage">12</stat>
<stat label="Lob Speed">14/s</stat>
<stat label="Primary User">Spitter</stat>
</stats>
<lore>
<p>Attack of range from swarm of bugs. Toss of fluid with traits of melting from distance.</p>
</lore>
</entry>

<entry id="acid-vomit-wep">
<name>Puke of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Stream of bug juice.</quote>
<stats>
<stat label="Base Damage">20</stat>
<stat label="Properties">Toss with Delay</stat>
<stat label="Primary User">Gagger</stat>
</stats>
<lore>
<p>Spray in range of melee. Gun of power, but maker of sound of noise.</p>
</lore>
</entry>

<entry id="acid-spit-wep">
<name>Spike of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Tosser of bone spikes with acid.</quote>
<stats>
<stat label="Base Damage">10</stat>
<stat label="Projectile Speed">18/s</stat>
<stat label="Primary User">Ranger</stat>
</stats>
<lore>
<p>Toss of spikes of bone in chemicals with traits of melting. Tool as block for tanks.</p>
</lore>
</entry>

<entry id="crush-wep">
<name>Smash</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Stomp of foot.</quote>
<stats>
<stat label="Base Damage">30</stat>
<stat label="Special">Bypass for half of armor</stat>
<stat label="Primary User">Titan</stat>
</stats>
<lore>
<p>Smash of foot. Bypass for plates of metal armor.</p>
</lore>
</entry>

<entry id="acid-spines-wep">
<name>Pins of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Tosser of bug needles.</quote>
<stats>
<stat label="Base Damage">5</stat>
<stat label="Projectile Speed">22/s</stat>
<stat label="Primary User">Stalker</stat>
</stats>
<lore>
<p>Toss of needles of bugs for holes in pipes of machines and annoyance of workers.</p>
</lore>
</entry>

<entry id="spines-wep">
<name>Pins of Bone</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Tosser of bone spears.</quote>
<stats>
<stat label="Base Damage">15 Damage</stat>
<stat label="Projectile Speed">20/s</stat>
<stat label="Primary User">Vulture</stat>
</stats>
<lore>
<p>Spears of bone from inside of sacks of lungs. Toss for ruin of targets in sky.</p>
</lore>
</entry>

<entry id="tentacles-wep">
<name>Arms</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Arms of bug pull.</quote>
<stats>
<stat label="Base Damage">10</stat>
<stat label="Special">Chance for bite of troops</stat>
<stat label="Primary User">Carrion</stat>
</stats>
<lore>
<p>Whips of muscle. Tools for pull of troops into mouth.</p>
</lore>
</entry>

<entry id="acid-spray-wep">
<name>Spray of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Mist of ruin.</quote>
<stats>
<stat label="Damage Profile">0.1 DPS</stat>
<stat label="Primary User">Vomiter</stat>
</stats>
<lore>
<p>Coat for paths in mist with traits of melting. Ruin for troops over time.</p>
</lore>
</entry>

<entry id="spore-cannons-wep">
<name>Guns of Pod</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of base from distance.</quote>
<stats>
<stat label="Base Damage">30</stat>
<stat label="Siege Range">6 tiles</stat>
<stat label="Primary User">Husk</stat>
</stats>
<lore>
<p>Toss of pods of bone. Ruin for bases of humans from distance.</p>
</lore>
</entry>

<!-- MATERIALS -->
<entry id="caspium">
<name>Caspium Metal</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>Metal of rarity. Change of hits of bullets into heat.</quote>
<stats>
<stat label="Market Value">200,000c / kg</stat>
<stat label="Conductivity">Conductor with Failure</stat>
<stat label="Workability">No machine cuts or hits of hammer; casting only</stat>
</stats>
<lore>
<p>Reaction to hits. Change of energy of bullets into spikes of heat. Melt of cars in fights on screen.</p>
<p>Sheets of ore cut with ease. Danger to touch. No grind or drill.</p>
</lore>
<extra>File of Tech: Hits on Caspium with tool of factory equals flash of heat. For safety of drivers, plates sit inside pipes of Steeline cooling.</extra>
</entry>

<entry id="steeline">
<name>Steeline</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>Metal of building with safety of heat.</quote>
<stats>
<stat label="Refining Duration">Months of time per batch</stat>
<stat label="Primary Property">Safety of heat</stat>
<stat label="Conductivity">100% Non-conductor</stat>
</stats>
<lore>
<p>Mix of metals. Steel, tungsten, and parts of difference. Material for builds of space like Star Forge.</p>
<p>Safety of heat. Wrap around plates of Caspium. Block of heat from bullets for safety of driver.</p>
</lore>
</entry>

<entry id="dna-stabilizer">
<name>Tool of DNA</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>Parts for sleep by Syncon Inc.</quote>
<stats>
<stat label="Developer">Syncon Inc</stat>
<stat label="Power Source">Heat of body</stat>
<stat label="Power Split">Core feeds head and limbs</stat>
<stat label="System Goal">Stop change of genes during sleep</stat>
</stats>
<lore>
<p>Parts for sleep in use by Syndicates on trip to stars of Proxima.</p>
<p>Power from heat of body. Error of genes equals drop in power. Cause of shakes of body.</p>
</lore>
</entry>

<!-- PRE-WAR CORPORATIONS -->
<entry id="bmo-corp">
<name>Corp of BMO</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>Group of state made to watch crash of human genes.</quote>
<stats>
<stat label="Jurisdiction">Earth of Past</stat>
<stat label="Focus">Stop sickness of bugs</stat>
<stat label="Key Inventions">Trucks of Watch, Suits of BMO</stat>
</stats>
<lore>
<p>Group of BMO for block of zones of sickness on Earth. Watchers of growth of sickness. Overrun of group during break of wall. Suits of BMO use packs of battery with hooks for drop of speed.</p>
</lore>
</entry>

<entry id="charcoal-military-corp">
<name>Charcoal Military</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>Builders of ships of space.</quote>
<stats>
<stat label="Specialty">Boxes of space and bases of war</stat>
<stat label="Vessels Constructed">Regolith, Aethon, TSC, Praeus, Alabama</stat>
</stats>
<lore>
<p>Builders of ships of space. Transporters of runners in ice. Resources of limits equal ships with armor of foot and fighters of Valkyrie.</p>
</lore>
</entry>

<entry id="bsc-inc-corp">
<name>BSC Inc</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>Makers of plans of engines in use in ships of space.</quote>
<stats>
<stat label="Specialty">Parts of air fans and pushers of ships</stat>
<stat label="Iconic Designs">Fans of lift for ships of Chaffron</stat>
</stats>
<lore>
<p>Makers of plans of engines in use in ships of space for humans. Best at fans of air lift for holds of cargo.</p>
</lore>
</entry>

<entry id="syncon-inc-corp">
<name>Syncon Inc</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>Giants of health. Makers of pods of sleep.</quote>
<stats>
<stat label="Specialty">Rooms of cold &amp; tools of genes</stat>
<stat label="Legacy Impact">Gave group of Syndicate their name</stat>
</stats>
<lore>
<p>Makers of rooms of cold and parts of sleep with heat of body. Providers of safety for runners on trip of 20,000 years.</p>
</lore>
</entry>

<entry id="alaby-inc-corp">
<name>Alaby Inc</name>
<type>Pre-War Corporation</type>
<category>Pre-War Corporation</category>
<tagClass>tag-company</tagClass>
<quote>Makers of plans for weapons of bullets.</quote>
<stats>
<stat label="Specialty">Bullets of reality and guns of ammo</stat>
<stat label="Signature Weapons">Gun of Assault, Gun of Machines</stat>
</stats>
<lore>
<p>Focus on weapons for troops of foot. Shells of steel. Tools for survival in work of mines and fights of front line.</p>
</lore>
</entry>

<!-- FACTION SYSTEM RULES -->
<entry id="syndicate-weakness">
<name>Rules of System &amp; Weakness for Syndicate</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Start of strength. Beaten by limits of armor and spots of weakness in drills.</quote>
<stats>
<stat label="Power Standard">Grid of Power for 500V 30A</stat>
<stat label="Drill Weakness">Stop in build of 8 seconds when hit by EMP</stat>
<stat label="Strategic Cap">Stop in growth after 20 minutes; must push in start</stat>
</stats>
<lore>
<p>Syndicates use plugs of walls across bases. Drills of mines use parts of computers. Hit on drill with EMP equals stop of grabs of rocks for 8 seconds.</p>
<p>Know-how of Caspium lacks strength. Cap of armor in late game. Players need win in stages of early time.</p>
</lore>
</entry>

<entry id="biomass-weakness">
<name>Rules of System &amp; Weakness for Bug Swarm</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Changes of speed and grabs of slime. Weakness to fire and burns of rocks.</quote>
<stats>
<stat label="Strain Switch Cost">200 Caspium</stat>
<stat label="Creep Vulnerability">Fire of speed; burns without nodes of slime</stat>
<stat label="Quarry Weakness">3x damage from guns of fire</stat>
</stats>
<lore>
<p>Bases of bugs need paths of slime for work and builds. Slime catches fire. Fire burns camps to dirt without nodes of Caspium slime for block of fire. Grabs of bug rocks take 3x damage from guns of fire.</p>
<p>Players of bugs have choice of change of types at any time for 200 Caspium. Lore of game: Bugs eat Caspium from cars in ruin for armor.</p>
</lore>
</entry>

<entry id="enclave-weakness">
<name>Rules of System &amp; Weakness for Enclave</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Units for end of game. Held back by grids of power and costs of Caspium.</quote>
<stats>
<stat label="Structure Aesthetics">Shell of gold color made of Caspium</stat>
<stat label="Defense Requirement">Needs plants of Caspium or Towers of Beam</stat>
<stat label="Construction Rule">Ban on builds for guards near fights or bases in ruin</stat>
</stats>
<lore>
<p>Bases of guard for Enclave use Rock for builds. Plants of power or Towers of Beam needed for operation. Limits on spread of base. Ban on builds for guards near fights or bases in ruin.</p>
<p>Units of fight need Caspium. Requirement of safety and savings for push in end game for Enclave.</p>
</lore>
</entry>

<entry id="map-template-rule">
<name>Template of Sector Map</name>
<type>Faction Rule</type>
<category>Faction Rule</category>
<tagClass>tag-rule</tagClass>
<quote>Layout of rocks for balance of game for Enclave.</quote>
<stats>
<stat label="Main Base Node">20,000 Rock / 4x Nodes of Metal</stat>
<stat label="Main Expansion">100 Rock of Caspium / 3,000 Pool of Oil</stat>
<stat label="Secondary Base">10,000 Rock / 8,000 Metal</stat>
<stat label="Central Deposits">10,000 Metal / 8,000 Oil / 1,000-5,000 Caspium</stat>
</stats>
<lore>
<p>Every map in Proxima needs match to plan of rocks. Enclave needs Caspium for bases of fight. Changes in numbers of rocks equals faction without use.</p>
</lore>
</entry>

<!-- MAJOR EVENTS -->
<entry id="starforge-explosion">
<name>Destruction of Star Forge</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>Ruin of pre-war that broke empire of Enclave and made Swarm of Bugs.</quote>
<stats>
<stat label="Location">System of Stars Caspius XII</stat>
<stat label="Pre-War Perpetrators">The Ravenous</stat>
<stat label="Resulting Star">Caspius XII-d</stat>
<stat label="Casualties">99% of people of space in 30s</stat>
</stats>
<lore>
<p>Forge of Star was ball of Steeline in space around Caspius XII. Use for cast of Caspium. Attack by Ravenous with madness of power on rooms of control. Arrival and win by fleet of war from Enclave.</p>
<p>Explosion of legs of frame by Ravenous for dodge of loss. Fall of half of ball into star. Break of core of star.</p>
<p>After hit, death of 99% of people. In 30 seconds, shrink of star to rock. Blast of star melts fleet of Enclave in flight. Creation of belts of Caspium rocks around star of death.</p>
</lore>
</entry>

<entry id="earth-outbreak">
<name>Escape of Earth Bug</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>Sickness of meat that killed Earth and forced drift of space for 20,000 years.</quote>
<stats>
<stat label="Pathogen Origin">Meat of rot on Earth</stat>
<stat label="Clinical Agency">Group of BMO</stat>
<stat label="Survival Fleet">Ships of Training</stat>
<stat label="Cryo-Voyage Length">20,000 Years of Earth</stat>
</stats>
<lore>
<p>Sickness of bugs started on Earth in meat of rot. Move with speed into brain. 7 steps: heat of body, health of fake nature, death of cells, break of brain wall and loss of mind, death of brain with nerves of bugs, return of body moves as beast, and act of bug swarm.</p>
<p>Launch of fleet of training ships without weapons for salvation of humans. Freeze of people in pods of cold with Tools of DNA. Goal: immunity over time of thousands of years.</p>
<p>Drift equals safety, but turns people into carriers in hiding. Mix of genes equals kids of weakness.</p>
</lore>
</entry>

<entry id="redline-crisis">
<name>Crisis of Redline</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>Try of escape on Earth that showed Bug of minds.</quote>
<stats>
<stat label="Location">Main Base of BMO / Pad of Launch</stat>
<stat label="Swarm Commander">Dr. Glenn Stafford</stat>
<stat label="Tragic Hero">Officer Tanner of BMO</stat>
<stat label="Outcome">Explosion of rocket of escape over pad</stat>
</stats>
<lore>
<p>During fall of Earth, rescue of friend Jeffery by Tanner. Jeffery was puppet of meat in control of mind of Dr. Glenn Stafford.</p>
<p>Attempt by Stafford for theft of rocket of space for drop of bugs on stars. Boarding of ship by Tanner during lift off. Explosion of ship. Death of Tanner for safety of stars of humans.</p>
</lore>
</entry>

<entry id="torus-purge">
<name>Purge of Torus VI</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>Push of team to crash station of space.</quote>
<stats>
<stat label="Target Area">Station of Space Torus VI</stat>
<stat label="Civilian Population">4,000,000,000 Workers of Mine</stat>
<stat label="Primary Objective">Break 3 Locks of Space</stat>
<stat label="Result">Pull of station down, fire in flames</stat>
</stats>
<lore>
<p>Torus VI was home of factories for Derrulicants. End of war: cover of station of spin by swarm of bugs.</p>
<p>Strike of team by Syndicate and Enclave to stop spread of mass. Goal: unlock for locks of space across planets.</p>
<p>Unlock drags station out of sky. Crash into planet. Fire for bugs.</p>
</lore>
</entry>

<entry id="startis-ambush">
<name>Ambush on Startis</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>Attack of surprise that started fight of humans.</quote>
<stats>
<stat label="Location">Rock of Mine on Startis</stat>
<stat label="Aggressors">Troops of Derrulicants</stat>
<stat label="Key Survivors">Bran Davis &amp; SUV</stat>
<stat label="Historical Outcome">Bran Davis made boss</stat>
</stats>
<lore>
<p>Fight of start for War of Proxima. Attack of sneak by troops of Derrulicants on mine of rocks for Bran Davis.</p>
<p>Escape by Bran in SUV of choice. Rescue by ship of war from Enclave. Gain of command after death of captain of ship from bug of carriers.</p>
</lore>
</entry>

<entry id="factory-raid">
<name>Raid of Forge on Startis</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>Attack of base on plan of Star Forge for Derrulicants.</quote>
<stats>
<stat label="Location">Zone of Factory on Startis</stat>
<stat label="Objective">Break Frame of Factory</stat>
<stat label="Syndicate Commander">Bran Davis</stat>
</stats>
<lore>
<p>Find of build of Star Forge in hiding by ships of drop for Syndicate on Startis.</p>
<p>Wave of drop ships by Bran Davis. Ruin of factory to level of dirt. Limits of system rocks kept in state of fairness.</p>
</lore>
</entry>

<entry id="purist-clash">
<name>Defense of Pipeline</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>Fight of skirmish with anger from Purists of Enclave.</quote>
<stats>
<stat label="Location">Planet of Death for Caspium</stat>
<stat label="Hostiles">Purists of Enclave</stat>
<stat label="Objective">Keep parts of pipe in safety</stat>
</stats>
<lore>
<p>Find of graveyard of Caspium from Enclave by miners of rocks for Bran.</p>
<p>Attack with speed by group of Purists. Need for build of wall by troops of foot for Bran for safety of pipes.</p>
</lore>
</entry>

<entry id="prius-betrayal">
<name>Abandonment at Campaign 2</name>
<type>Major Event</type>
<category>Major Event</category>
<tagClass>tag-event</tagClass>
<quote>Move of back-out and break of peace of team.</quote>
<stats>
<stat label="Location">Post of Swarm 4</stat>
<stat label="Perpetrator">Prius of Enclave</stat>
<stat label="Outcome">Syndicates left to swarm of bugs</stat>
</stats>
<lore>
<p>Push of team against camp of bugs. Order of surprise by Prius. Retreat of troops for help from Enclave back to sky.</p>
<p>Syndicates left alone to swarm of bugs. Escape by crew of Bran on ships of sky. End of peace for humans and Enclave.</p>
</lore>
</entry>
</database>
`
