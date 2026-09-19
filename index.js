const xmlDatabaseSource = `
<?xml version="1.0" encoding="UTF-8"?>
<database>
<!-- CHARACTERS -->
<entry id="bran-davis">
<name>Bran Davis</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Worker of mines. Zero expert in combat. Man learning on job.</quote>
<stats>
<stat label="Role">Leader of Syndicate &amp; Student of Wires</stat>
<stat label="Blueprints of Vehicle">SUV of Sand Color</stat>
<stat label="HP of Base">100 HP</stat>
<stat label="Armor of Base">2 Armor</stat>
<stat label="Weapon of Priority">&lt;span class='wiki-link' data-id='cd-13-rifle'&gt;Gun of Machine Type&lt;/span&gt;</stat>
</stats>
<lore>
<p>Bran Davis: man of work. Goal: job with wires. Zero luck. Result: job of mines in stars of Proxima.</p>
<p>Derrulicants of war did attack on home of Startis. Escape in SUV of sand color. Time passes, Bran gets rank of captain for ship of Syndicate. Reason: captain of past died from bug of sickness.</p>
<p>Zero past in army. Skills with rigs for mines and knowledge of wires make Bran the heart in fight for humanity.</p>
</lore>
<extra>Note of System: Desk of Bran holds item of Earth—keyboard of Dell L100. Zero logo. SUV of mines holds addition of 125 HP and addition of 2 armor on mode for beginners. Buffer for mistakes of player. Bran deals reduction in damage. Reason: history as civilian.</extra>
</entry>

<entry id="prius">
<name>Prius</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Ruler in hiding behind screens of light. Protection for history of lies.</quote>
<stats>
<stat label="Role in Faction">Ruler of Enclave</stat>
<stat label="Presence of Sight">Talk via holograms of light</stat>
<stat label="Inspiration">General Horatio Gates of Earth</stat>
<stat label="State of Mind">Fear &amp; Lack of Sleep</stat>
</stats>
<lore>
<p>Prius: captain of ship for Enclave in past. Presence at blast of Star Forge. Zero fighting. Hiding of cruiser due to lies in log of flight and trouble with engine. Cowardice kept in secret from crew.</p>
<p>Fear of discovery. Result: madness. Rule over empire in ruin with gear for spies and holograms of light.</p>
<p>Creator for war of Syndicate on Derrulicants. Goal: ruin for project of Star Forge on Startis. Burial for proof of cowardice.</p>
</lore>
<extra>Note of System: Prius hunts 25 ships of Enclave from blast of Star Forge. Goal: destruction before crew shows past of lies.</extra>
</entry>

<entry id="stafford">
<name>Dr. Glenn Stafford</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Jeffery is memory. Suit of armor holds mind of Dr. Stafford.</quote>
<stats>
<stat label="Alignment of Faction">Mind of Hive for Flesh</stat>
<stat label="Identity of Host">Guard of BMO from Past</stat>
<stat label="Symptom of Body">Shakes in joints of armor</stat>
<stat label="Cause">Failure in gear for heat of body</stat>
</stats>
<lore>
<p>Days of crisis with bugs on Earth. Jeffery: guard for BMO. Team on patrol died. Suit taken by mind of Dr. Glenn Stafford.</p>
<p>Stafford: shot self with tool of DNA. Tool held cells of bug. Beasts of bugs have zero mind. Mind of Stafford has control over swarm.</p>
<p>Shakes in body. Reason: gear for heat in suit shares heat with errors during mix of cells. Failure in power for joints.</p>
</lore>
<extra>Egg of Easter: ID of Jeffery is #033198. Meaning: date of release for StarCraft. Name of Stafford comes from Glenn Stafford, maker of music for StarCraft.</extra>
</entry>

<entry id="tanner">
<name>Officer Tanner of BMO</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Guard facing world of death.</quote>
<stats>
<stat label="ID of Office">#072710</stat>
<stat label="Zone of Drop">Base of BMO on Earth</stat>
<stat label="Vehicle of Choice">Truck of BMO</stat>
<stat label="Status">Death in Fight</stat>
</stats>
<lore>
<p>Tanner: guard for BMO on Earth. Team of six died during outbreak of bugs. Walk of solo status through zone of bugs.</p>
<p>Base found. Chopper called. Beasts of bug jump and break blades of rotor. Crash back into waste of dirt.</p>
<p>Choice of end: death. Blast of rocket for escape in air. Result: zero spread of bugs to stars.</p>
</lore>
<extra>Note for ID of System: Number of Tanner is #072710. Meaning: date of release for StarCraft II.</extra>
</entry>

<entry id="jamison">
<name>Specialist Jamison</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Zero gun. Zero armor. Waste of dirt. Jamison fights with will.</quote>
<stats>
<stat label="Frame of Armor">Increase in size over suits of Syndicate</stat>
<stat label="Capacity of HP">250 HP</stat>
<stat label="Index of Armor">2 Armor</stat>
<stat label="Damage of Melee">20 Damage</stat>
<stat label="Damage of Rifle">10 Damage</stat>
</stats>
<lore>
<p>Jamison: guard on ship for drops. Guns shot down ship. Wing of pod broke. Locks for crew popped open.</p>
<p>Hands opening rack of safety. Climb into suit of metal right before hit on ground. Gun lost off cliff during trap of bugs. Result: Jamison beating beasts with hands.</p>
<p>Jamison is stuck in waste of dirt. Lines of fluid broke. Drop of plate for chest needed for life.</p>
</lore>
</entry>

<entry id="former-captain">
<name>Captain of Syndicate in Past</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Captain of ship for Syndicate in past. Death moved Bran Davis up.</quote>
<stats>
<stat label="Command in Past">Ship for Stars of Syndicate</stat>
<stat label="Cause of Death">Crash of genes with bug</stat>
<stat label="Age at Onset">30 Years of Earth</stat>
</stats>
<lore>
<p>Captain of ship for Bran in past. Death soon after arrival at stars of Proxima. Secret kept by staff of command.</p>
<p>Death by bug of Earth. Reason: trap in genes. Mix from parents cancelled guard against bug by age 30.</p>
<p>Proof in game: spot of purple color in room. Remnant from melt of body at end.</p>
</lore>
</entry>

<entry id="elder">
<name>Elder of Enclave</name>
<type>Character</type>
<category>Character</category>
<tagClass>tag-character</tagClass>
<quote>Leader with bravery. Death for showing truth about Prius.</quote>
<stats>
<stat label="Jurisdiction">Room of Rule for Enclave</stat>
<stat label="Action">Share of files showing cover-up for Star Forge</stat>
<stat label="Status">Death by spies of Enclave</stat>
</stats>
<lore>
<p>Leader in Enclave. Finder of files about Prius and run-away at Star Forge.</p>
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
<stat label="Status of Genes">Sickness of bugs but mind with clarity</stat>
<stat label="Parts for Stasis">4 Parts of Syncon</stat>
</stats>
<lore>
<p>Ruler of Derrulicants. Rule of iron over home of factories on Torus VI.</p>
<p>Sickness with virus of bugs in past. Zero loss of mind. Reason: recovery of body and 4 parts for safety of genes placed in flesh.</p>
<p>Change in body. Result: life of eternity. Mind kept during changes in body.</p>
</lore>
</entry>

<!-- SYNDICATE UNITS -->
<entry id="soldier">
<name>Soldier</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Troops of foot in gear for lifting boxes.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">1 Supply / 12s</stat>
<stat label="HP / Armor of Base">50 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 7</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='cd-12-rifle'&gt;Gun of Assault&lt;/span&gt;</stat>
<stat label="Stats of Weapon">3 Damage | Range 5 | 1.0s Wait</stat>
<stat label="Upgrades">Gun 1-3</stat>
<stat label="Tags">Foot, Flesh</stat>
</stats>
<lore>
<p>Troops of Syndicate. Workers of mines and builders in lifters for boxes with guns of machine type.</p>
<p>Boost of 5 HP over units of baseline. Reason: dust of Caspium in plates of metal. Effect of side: cancer of lung from dust.</p>
</lore>
<extra>File of Secret: Soldiers bypass tanks of water in suit. Moonshine and mash of fruit go in filters for water. Help for shifts on watch. Many are survivors of sickness given jobs on line of front.</extra>
</entry>

<entry id="prawn">
<name>Prawn</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Builder of fields. Maker of bases and fixer of units of metal.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">1 Supply / 10s</stat>
<stat label="HP / Armor of Base">50 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 8</stat>
<stat label="Upgrades">None</stat>
<stat label="Tags">Machine</stat>
</stats>
<lore>
<p>Prawn: builder of bases and fixer of machines. Frame of soldier with power for lift. Zero guns. Fixes pipes, buildings, and walkers of metal.</p>
<p>Syndicate lacks truck with gun of mass. Players must walk units of Prawn to lines of front. Goal: build guns of mass there.</p>
</lore>
</entry>

<entry id="enforcer">
<name>Enforcer</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Troops of foot with metal.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">100 Rock / 5 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 18s</stat>
<stat label="HP / Armor of Base">75 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 7</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='cd-12-rifle'&gt;Gun of Assault with Mods&lt;/span&gt;</stat>
<stat label="Stats of Weapon">6 Damage | Range 5 | 1.2s Wait</stat>
<stat label="Tags">Flesh</stat>
</stats>
<lore>
<p>Enforcer: troop on foot. Step up in combat from Soldier. Plates of metal for hits of force.</p>
</lore>
</entry>

<entry id="skidder">
<name>Skidder</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Scout of speed. Block for doors of base.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 20 Metal / 5 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 16s</stat>
<stat label="HP / Armor of Base">40 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 6.0/s / Range 9</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='light-grenades-wep'&gt;Bombs of Toss&lt;/span&gt;</stat>
<stat label="Mode of Sitting">5 Damage | Range 4 | 2.0s Wait</stat>
<stat label="Mode of Motion">5 Damage | Range 4 | 3.0s Wait</stat>
<stat label="Upgrades">Armor of Truck 1 &amp; 2</stat>
<stat label="Tags">Machine, Truck</stat>
</stats>
<lore>
<p>Skidder: life in past as truck for trees. Use of now: toss of bombs. Base of wheels shoots with speed when sitting without movement.</p>
</lore>
</entry>

<entry id="incinerator">
<name>Incinerator</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Fighter for line of front. Safety from fire. Risk of boom.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">5 Rock / 20 Metal / 50 Oil / 10 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 22s</stat>
<stat label="HP / Armor of Base">100 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 6</stat>
<stat label="Abilities">Aim of Automaton | Safety from Fire | Risk of Boom</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='dual-flamers'&gt;Two Guns of Fire&lt;/span&gt;</stat>
<stat label="Stats of Weapon">5 Dmg | Range 3</stat>
<stat label="Upgrades">Gun 1-3 | Burn of 3s</stat>
<stat label="Tags">Foot, Flesh</stat>
</stats>
<lore>
<p>Guns of fire for clearing paths of slime from bugs. Risk: hits over 15 HP have chance of 50% to pop lines of gas. Blast hurts units in area.</p>
</lore>
<extra>Note of Tech: Suit lacks block for air. Limit of room. Jobs in space: tank 2 filled with air. Jobs on planet: filters of CO2-to-air.</extra>
</entry>

<entry id="medic">
<name>Medic</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Healer of flesh.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='conscription-center'&gt;Center of Draft&lt;/span&gt;</stat>
<stat label="Cost">5 Rock / 20 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">1 Supply / 15s</stat>
<stat label="HP / Armor of Base">50 HP / 1 Armor</stat>
<stat label="Abilities">Heal of flesh</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='needler-wep'&gt;Gun of Needles&lt;/span&gt;</stat>
<stat label="Stats of Weapon">2 Damage | Range 4 | 0.7s Wait</stat>
<stat label="Upgrades">Gun | Armor</stat>
<stat label="Tags">Flesh, Help</stat>
</stats>
<lore>
<p>Boost of drugs by Medic for Syndicate. Direct into units of flesh. Speed of gun rate active only during healing.</p>
</lore>
</entry>

<entry id="suv">
<name>SUV of Support</name>
<type>Truck of Support</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Truck of cover for game. Scout, block for doors, and layer of bombs.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">100 Rock / 50 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 24s</stat>
<stat label="HP / Armor of Base">75 HP / 2 Armor</stat>
<stat label="Move / Sight">Pace of 6.0/s / Range 9</stat>
<stat label="Garrison">4 Soldiers</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='eject-mines-wep'&gt;Bombs of Drop&lt;/span&gt;</stat>
<stat label="Effect of Weapon">Drop of 5 bombs</stat>
<stat label="Upgrades">Gun of Truck</stat>
<stat label="Tags">Machine, Truck</stat>
</stats>
<lore>
<p>Truck of Support: unit of cover for Proxima. Order of self-boom drops five bombs on floor in hiding to block door of base. Drops of unit: 2 per side, left to right.</p>
</lore>
</entry>

<entry id="sentry">
<name>Sentry</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Base of defense; stops attacks from air and units in hiding.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 50 Metal / 100 Oil / 20 Caspium</stat>
<stat label="Supply / Time of Build">3 Supply / 30s</stat>
<stat label="HP / Armor of Base">50 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 3.0/s / Range 10</stat>
<stat label="Rule">Zero solo attack. Needs lock on floor.</stat>
<stat label="Ability of Deploy">+1 Range, See Units in Hiding, Radar in 20 tiles</stat>
<stat label="Weapon of Priority">&lt;span class='wiki-link' data-id='cluster-rockets-wep'&gt;Rockets of Sky&lt;/span&gt;</stat>
<stat label="Weapon of Backup">&lt;span class='wiki-link' data-id='mg-turret-wep'&gt;Gun of Machine Type&lt;/span&gt;</stat>
<stat label="Upgrades">Armor | Gun</stat>
<stat label="Tags">Robot, Armor of Mass, Machine</stat>
</stats>
<lore>
<p>Rule of Sentry: attack only in mode of locked floor. Mode of lock: station of radar. Gives +1 range, spots units in hiding. Boost of fire speed: +40% for each Sentry in lock. Guns of air pump make sounds of cracks.</p>
</lore>
</entry>

<entry id="bulwark">
<name>Bulwark</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Suit of fight for line of front.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='factory'&gt;Factory&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 75 Metal / 20 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">3 Supply / 32s</stat>
<stat label="HP / Armor of Base">150 HP / 2 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 8</stat>
<stat label="Weapon of Priority">&lt;span class='wiki-link' data-id='autocannon-wep'&gt;Gun of Size&lt;/span&gt;</stat>
<stat label="Weapon of Backup">&lt;span class='wiki-link' data-id='dual-rocket-pods-wep'&gt;Two Pods of Rockets&lt;/span&gt;</stat>
<stat label="Upgrades">Upgrades for Gun</stat>
<stat label="Tags">Foot, Machine</stat>
</stats>
<lore>
<p>Bulwark: frame of armor for game. Pods of rockets without cost. Aim for two targets of difference at time of same.</p>
</lore>
</entry>

<entry id="drone">
<name>Drone of Aero</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Helper of flight against swarms of bugs.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='space-center'&gt;Center of Space&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 20 Metal / 5 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">1 Supply / 14s</stat>
<stat label="HP / Armor of Base">20 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 6.5/s / Range 10</stat>
<stat label="Abilities">Boost of Speed | Over-charge</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='light-gatling-wep'&gt;Gun of Spin&lt;/span&gt;</stat>
<stat label="Tags">Drone, Machine</stat>
</stats>
<lore>
<p>Drones of Aero: scouts of speed. Mode of over-charge: move of delay, but gun shoots 100 shots per second. Melts swarms of bugs.</p>
</lore>
</entry>

<entry id="valkyrie">
<name>Fighter of Valkyrie</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Fighter of sky.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='space-center'&gt;Center of Space&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 100 Metal / 30 Oil / 5 Caspium</stat>
<stat label="Supply / Time of Build">3 Supply / 35s</stat>
<stat label="HP / Armor of Base">200 HP / 3 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 9</stat>
<stat label="Weapon of Sky">&lt;span class='wiki-link' data-id='t280-torpedoes-wep'&gt;Bombs of Star&lt;/span&gt;</stat>
<stat label="Weapon of Ground">&lt;span class='wiki-link' data-id='autocannon-wep'&gt;Gun of Size&lt;/span&gt;</stat>
<stat label="Upgrades">Upgrades</stat>
<stat label="Tags">Machine, Air</stat>
</stats>
<lore>
<p>Truck of army for humans. Found in holds of ships for sleep. Guns of system: copies from parts of Valkyrie.</p>
</lore>
</entry>

<entry id="chaffron">
<name>Ship of Chaffron</name>
<type>Unit of Syndicate</type>
<category>Unit of Syndicate</category>
<tagClass>tag-syndicate</tagClass>
<quote>Ship of guns for planet. Needs guard of ground.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='space-center'&gt;Center of Space&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 400 Metal / 200 Oil / 250 Caspium</stat>
<stat label="Supply / Time of Build">8 Supply / 70s</stat>
<stat label="HP / Armor of Base">2000 HP / 10 Armor</stat>
<stat label="Move / Sight">Pace of 2.0/s / Range 10</stat>
<stat label="Guns">8x Guns of Spin</stat>
<stat label="Missiles of Sky">2x Rockets of Sky with Splash</stat>
<stat label="Ability of Mass">&lt;span class='wiki-link' data-id='theranos-missile-wep'&gt;Bomb of Theranos&lt;/span&gt;</stat>
<stat label="Upgrades">Upgrades</stat>
<stat label="Tags">Machine, Air</stat>
</stats>
<lore>
<p>Made from frames of ships for boxes. Loads of rockets for ground and air. Two fans for lift in air. Movement with delay if one fan breaks. Ships of space from Syndicate own stars of height.</p>
</lore>
</entry>

<!-- ENCLAVE UNITS -->
<entry id="archon">
<name>Archon</name>
<type>Unit of Enclave</type>
<category>Unit of Enclave</category>
<tagClass>tag-enclave</tagClass>
<quote>Walker of metal with shield.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='foundry'&gt;Foundry&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 100 Metal / 50 Oil / 10 Caspium</stat>
<stat label="Supply / Time of Build">3 Supply / 28s</stat>
<stat label="HP / Shield">80 HP / Shield of Light</stat>
<stat label="Armor of Base">0 Armor</stat>
<stat label="Move / Sight">Pace of 3.0/s / Range 8</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='thermal-beam-wep'&gt;Beam of Heat&lt;/span&gt;</stat>
<stat label="Tags">Machine, Energy, Walker</stat>
</stats>
<lore>
<p>Archon: tech of shield for Enclave. Shield of light stops bullets. Laser of heat melts through plates of metal.</p>
</lore>
</entry>

<entry id="steward">
<name>Steward</name>
<type>Unit of Enclave</type>
<category>Unit of Enclave</category>
<tagClass>tag-enclave</tagClass>
<quote>Guard of melee and block for bullets.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='foundry'&gt;Foundry&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 60 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">1 Supply / 14s</stat>
<stat label="HP / Armor of Base">20 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 3.5/s / Range 6</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='energized-halberd-wep'&gt;Spear of Energy&lt;/span&gt;</stat>
<stat label="Tags">Flesh, Foot</stat>
</stats>
<lore>
<p>Steward: unit of flesh for melee. Used in grabs of land. Guard for damage and block for bullets.</p>
</lore>
</entry>

<entry id="destroyer">
<name>Destroyer</name>
<type>Unit of Enclave</type>
<category>Unit of Enclave</category>
<tagClass>tag-enclave</tagClass>
<quote>Truck of metal.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='fabricator'&gt;Fabricator&lt;/span&gt;</stat>
<stat label="Cost">10 Rock / 100 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Time of Build">3 Supply / 28s</stat>
<stat label="HP / Armor of Base">100 HP / 2 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 7</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='plasma-cannon-wep'&gt;Gun of Plasma&lt;/span&gt;</stat>
<stat label="Tags">Metal, Machine</stat>
</stats>
<lore>
<p>Truck of metal for Enclave. Balls of plasma melt walls of mass.</p>
</lore>
</entry>

<entry id="pioneer">
<name>Pioneer</name>
<type>Unit of Enclave</type>
<category>Unit of Enclave</category>
<tagClass>tag-enclave</tagClass>
<quote>Walker of line of front.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='fabricator'&gt;Fabricator&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 100 Metal / 75 Oil / 75 Caspium</stat>
<stat label="Supply / Time of Build">4 Supply / 34s</stat>
<stat label="HP / Armor of Base">150 HP / 3 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 8</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='plasma-rifle-wep'&gt;Rifle of Plasma&lt;/span&gt;</stat>
<stat label="Tags">Metal, Machine, Walker</stat>
</stats>
<lore>
<p>Pioneers: shields of walk. March right into bases. Goal: absorb fire of return.</p>
</lore>
</entry>

<entry id="speeder">
<name>Speeder</name>
<type>Unit of Enclave</type>
<category>Unit of Enclave</category>
<tagClass>tag-enclave</tagClass>
<quote>Scout of speed. Made for fights against bugs.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='advanced-fabricator'&gt;Forge of Adv&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 25 Oil / 5 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 18s</stat>
<stat label="HP / Armor of Base">50 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 6.0/s / Range 9</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='thermal-cannon-wep'&gt;Gun of Heat&lt;/span&gt;</stat>
<stat label="Tags">Metal, Machine</stat>
</stats>
<lore>
<p>Scout of speed. Built to burn troops of foot. Damage of baseline makes it useless against metal of mass.</p>
</lore>
</entry>

<entry id="python">
<name>Python</name>
<type>Unit of Enclave</type>
<category>Unit of Enclave</category>
<tagClass>tag-enclave</tagClass>
<quote>Walker of metal for end of game.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='advanced-fabricator'&gt;Forge of Adv&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 125 Metal / 100 Oil / 75 Caspium</stat>
<stat label="Supply / Time of Build">5 Supply / 45s</stat>
<stat label="HP / Armor of Base">300 HP / 3 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 8</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='plasma-cannon-wep'&gt;Gun of Plasma&lt;/span&gt;</stat>
<stat label="Tags">Metal, Machine</stat>
</stats>
<lore>
<p>Python: peak in group of metal from Enclave. Shots of plasma. Made to pop shells of trucks.</p>
</lore>
</entry>

<entry id="harpy">
<name>Harpy</name>
<type>Unit of Enclave</type>
<category>Unit of Enclave</category>
<tagClass>tag-enclave</tagClass>
<quote>Fighter of sky.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='air-channel'&gt;Gate of Air&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 75 Metal / 25 Oil / 25 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 24s</stat>
<stat label="HP / Armor of Base">100 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 6.0/s / Range 8</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='charged-lance-wep'&gt;Spear of Power&lt;/span&gt;</stat>
<stat label="Tags">Metal, Machine, Air</stat>
</stats>
<lore>
<p>Harpy: weapon of Spear for Power. Damage gains value over time. Beam of laser stays locked on one target.</p>
</lore>
</entry>

<entry id="dirigible">
<name>Dirigible</name>
<type>Unit of Enclave</type>
<category>Unit of Enclave</category>
<tagClass>tag-enclave</tagClass>
<quote>Ship of air.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='air-channel'&gt;Gate of Air&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 150 Metal / 150 Oil / 100 Caspium</stat>
<stat label="Supply / Time of Build">6 Supply / 55s</stat>
<stat label="HP / Armor of Base">300 HP / 4 Armor</stat>
<stat label="Move / Sight">Pace of 3.0/s / Range 9</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='ion-cannon-wep'&gt;Group of Ion Guns&lt;/span&gt;</stat>
<stat label="Tags">Machine, Metal, Air</stat>
</stats>
<lore>
<p>Base of float in sky. Drifts over zones of battle. Four guns of ion with aim of freedom. Melts targets on ground and sky.</p>
</lore>
</entry>

<entry id="phosphate">
<name>Phosphate</name>
<type>Unit of Enclave</type>
<category>Unit of Enclave</category>
<tagClass>tag-enclave</tagClass>
<quote>Drone of boom in sky.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='air-channel'&gt;Gate of Air&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 40 Metal / 100 Oil / 5 Caspium</stat>
<stat label="Supply / Time of Build">1 Supply / 12s</stat>
<stat label="HP / Armor of Base">40 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 6.0/s / Range 7</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Boom&lt;/span&gt;</stat>
<stat label="Tags">Machine, Robot, Air</stat>
</stats>
<lore>
<p>Drones of Phosphate: units of boom. Fly into swarms of air. Pop of mass. Clear skies with speed.</p>
</lore>
</entry>

<!-- BUG SWARM UNITS -->
<entry id="biter">
<name>Biter</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Unit of bug swarm.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Room of Birth&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 0 Metal / 0 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">0.5 Supply / 7s</stat>
<stat label="HP / Armor of Base">15 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 7.5/s / Range 5</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='mandibles-wep'&gt;Jaws of Mouth&lt;/span&gt;</stat>
<stat label="Tags">Flesh</stat>
</stats>
<lore>
<p>Biters: bugs of foot. Form of baseline across types for bugs. Numbers of mass block defense. Weakness to fire.</p>
</lore>
</entry>

<entry id="ravenger">
<name>Ravenger</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Bug of melee.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Room of Birth&lt;/span&gt;</stat>
<stat label="Cost">75 Rock / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 16s</stat>
<stat label="HP / Armor of Base">70 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 6.0/s / Range 6</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='acid-claws-wep'&gt;Claws of Acid&lt;/span&gt;</stat>
<stat label="Tags">Flesh, Melee</stat>
</stats>
<lore>
<p>Unit of melee. Claws full of acid from bugs. Cuts plates of metal with speed.</p>
</lore>
</entry>

<entry id="feral">
<name>Feral</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Unit of boom with acid.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Room of Birth&lt;/span&gt;</stat>
<stat label="Cost">75 Rock / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 16s</stat>
<stat label="HP / Armor of Base">80 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 3.5/s / Range 5</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Boom&lt;/span&gt;</stat>
<stat label="Tags">Flesh, Melee, Acid</stat>
</stats>
<lore>
<p>Biters of Feral: bugs with bags of acid. Run into groups of metal. Pop and boom on touch.</p>
</lore>
</entry>

<entry id="annihilator">
<name>Annihilator</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Troop of shock.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='incubation-chamber'&gt;Room of Birth&lt;/span&gt;</stat>
<stat label="Cost">75 Rock / 0 Metal / 15 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 18s</stat>
<stat label="HP / Armor of Base">125 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 6</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='claws-wep'&gt;Claws&lt;/span&gt;</stat>
<stat label="Tags">Flesh, Melee</stat>
</stats>
<lore>
<p>Bug of muscle. Smashes walls of metal.</p>
</lore>
</entry>

<entry id="spitter">
<name>Spitter</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Bug of range.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Pod of Bugs&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 20s</stat>
<stat label="HP / Armor of Base">50 HP / 2 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 7</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='acidic-bile-wep'&gt;Spit of Acid&lt;/span&gt;</stat>
<stat label="Tags">Flesh</stat>
</stats>
<lore>
<p>Unit of range for bugs. Tosses acid of stomach from distance. Melts troops of foot.</p>
</lore>
</entry>

<entry id="gagger">
<name>Gagger</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Spitter of acid with noise.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Pod of Bugs&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 20s</stat>
<stat label="HP / Armor of Base">35 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 3.0/s / Range 6</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='acid-vomit-wep'&gt;Puke of Acid&lt;/span&gt;</stat>
<stat label="Tags">Flesh, Acid</stat>
</stats>
<lore>
<p>Spray of acid. Gaggers make noise of gag. Enemies hear noise in fog of map.</p>
</lore>
</entry>

<entry id="ranger">
<name>Ranger</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Hunter of metal from distance.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Pod of Bugs&lt;/span&gt;</stat>
<stat label="Cost">25 Rock / 50 Metal / 75 Oil / 0 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 20s</stat>
<stat label="HP / Armor of Base">75 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 8</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='acid-spit-wep'&gt;Spike of Acid&lt;/span&gt;</stat>
<stat label="Tags">Flesh</stat>
</stats>
<lore>
<p>Bugs of hunter. Shoot spikes of bone. Punch holes of cleanness in tanks of metal.</p>
</lore>
</entry>

<entry id="nest">
<name>Nest</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Fort of flesh in motion.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Pod of Bugs&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 20 Oil / 10 Caspium</stat>
<stat label="Supply / Time of Build">0 Supply / 25s</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='claws-wep'&gt;Claws&lt;/span&gt;</stat>
<stat label="Rule">Zero move off slime. Death of instant if slime burns.</stat>
<stat label="Tags">Flesh, Base</stat>
</stats>
<lore>
<p>Acts as base of bugs. Can pull up and walk on legs. Move off slime of bugs = death of instant. Same rule if slime melts.</p>
</lore>
</entry>

<entry id="titan">
<name>Titan</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Beast of base-smash. Ignores plates of metal.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='spore-accumulator'&gt;Pod of Bugs&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 100 Metal / 50 Oil / 25 Caspium</stat>
<stat label="Supply / Time of Build">4 Supply / 38s</stat>
<stat label="HP / Armor of Base">150 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 3.0/s / Range 6</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='crush-wep'&gt;Smash&lt;/span&gt;</stat>
<stat label="Rule">Zero type of acid. Hides in dirt if player picks type of acid.</stat>
<stat label="Tags">Flesh, Metal</stat>
</stats>
<lore>
<p>Ignores half of armor on enemy. Player picks type of bug with acid? Titans hide in dirt. Mode of sleep.</p>
</lore>
</entry>

<entry id="stalker">
<name>Stalker</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Pest of sky.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 22s</stat>
<stat label="HP / Armor of Base">100 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 8</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='acid-spines-wep'&gt;Pins of Acid&lt;/span&gt;</stat>
<stat label="Tags">Flesh, Air</stat>
</stats>
<lore>
<p>Bugs of sky. Made to annoy workers. Fly ahead of swarm.</p>
</lore>
</entry>

<entry id="leech">
<name>Leech</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Bug of boom in air.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Time of Build">1 Supply / 12s</stat>
<stat label="HP / Armor of Base">25 HP / -1 Armor</stat>
<stat label="Move / Sight">Pace of 6.0/s / Range 7</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='suicide-wep'&gt;Boom&lt;/span&gt;</stat>
<stat label="Tags">Flesh, Air, Acid</stat>
</stats>
<lore>
<p>Leeches rush units of sky. Boom of mass. Drop mix of acid.</p>
</lore>
</entry>

<entry id="vulture">
<name>Vulture</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Fighter of sky.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">50 Rock / 50 Metal / 100 Oil / 10 Caspium</stat>
<stat label="Supply / Time of Build">2 Supply / 24s</stat>
<stat label="HP / Armor of Base">115 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 3.5/s / Range 8</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='spines-wep'&gt;Pins of Bone&lt;/span&gt;</stat>
<stat label="Tags">Flesh, Air</stat>
</stats>
<lore>
<p>Guards of sky. Shoot spears of bone. Win for sky.</p>
</lore>
</entry>

<entry id="carrion">
<name>Carrion</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Bug of mass. Eats troops of baseline mass.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Time of Build">3 Supply / 30s</stat>
<stat label="HP / Armor of Base">150 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 7</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='tentacles-wep'&gt;Arms&lt;/span&gt;</stat>
<stat label="Tags">Flesh, Help</stat>
</stats>
<lore>
<p>Arms of length grab. Pull troops into mouth of mass. Chance to kill in bite of one count.</p>
</lore>
</entry>

<entry id="vomiter">
<name>Vomiter</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Sprayer of acid in area.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Time of Build">3 Supply / 30s</stat>
<stat label="HP / Armor of Base">100 HP / 0 Armor</stat>
<stat label="Move / Sight">Pace of 3.0/s / Range 6</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='acid-spray-wep'&gt;Spray of Acid&lt;/span&gt;</stat>
<stat label="Tags">Flesh, Acid</stat>
</stats>
<lore>
<p>Coats paths in mist of acid without stop. Mist gains strength over time of troops standing in it.</p>
</lore>
</entry>

<entry id="husk">
<name>Husk</name>
<type>Unit of Bug Swarm</type>
<category>Unit of Bug Swarm</category>
<tagClass>tag-biomass</tagClass>
<quote>Beast of siege for bugs.</quote>
<stats>
<stat label="Room for Builds">&lt;span class='wiki-link' data-id='corea'&gt;Room for Sky Bugs&lt;/span&gt;</stat>
<stat label="Cost">0 Rock / 75 Metal / 50 Oil / 50 Caspium</stat>
<stat label="Supply / Time of Build">4 Supply / 36s</stat>
<stat label="HP / Armor of Base">200 HP / 1 Armor</stat>
<stat label="Move / Sight">Pace of 4.5/s / Range 8</stat>
<stat label="Weapon">&lt;span class='wiki-link' data-id='spore-cannons-wep'&gt;Guns of Pod&lt;/span&gt;</stat>
<stat label="Tags">Flesh</stat>
</stats>
<lore>
<p>Bug for smash of bases. Shoots pods of bone. Punch holes in walls of enemy.</p>
</lore>
</entry>

<!-- PRODUCTION STRUCTURES -->
<entry id="conscription-center">
<name>Center of Draft</name>
<type>Room for Builds</type>
<category>Room for Builds</category>
<tagClass>tag-structure</tagClass>
<quote>Camp of troops. Workers of mines drafted into suits.</quote>
<stats>
<stat label="Owner">Syndicates</stat>
<stat label="Units of Build">Soldier, Prawn, Enforcer, Skidder, Incinerator, Medic</stat>
<stat label="Role">Camp of Foot</stat>
</stats>
<lore>
<p>Base of start for Syndicate. Drafts miners. Gives frames of Soldier.</p>
<p>Builds Medics, fixers of Prawn, and Incinerators. Goal: fight threat of bugs.</p>
</lore>
</entry>

<entry id="factory">
<name>Factory</name>
<type>Room for Builds</type>
<category>Room for Builds</category>
<tagClass>tag-structure</tagClass>
<quote>Plant of metal for frames of machines.</quote>
<stats>
<stat label="Owner">Syndicates</stat>
<stat label="Units of Build">Truck of Support, Sentry, Bulwark</stat>
<stat label="Role">Walkers of Metal</stat>
</stats>
<lore>
<p>Builds frames of metal. Made from machines of cargo.</p>
<p>Makes Truck of Support, Sentry of sit-mode, and walk suits of Bulwark.</p>
</lore>
</entry>

<entry id="space-center">
<name>Center of Space</name>
<type>Room for Builds</type>
<category>Room for Builds</category>
<tagClass>tag-structure</tagClass>
<quote>Pad of launch for fighters of sky and ships of space.</quote>
<stats>
<stat label="Owner">Syndicates</stat>
<stat label="Units of Build">Drone of Aero, Fighter of Valkyrie, Ship of Chaffron</stat>
<stat label="Role">Base of Sky</stat>
</stats>
<lore>
<p>Uses plans of hangars for support of sky.</p>
<p>Launches Drones of Aero, Fighters of Valkyrie, and Ships of Chaffron.</p>
</lore>
</entry>

<entry id="foundry">
<name>Foundry</name>
<type>Room for Builds</type>
<category>Room for Builds</category>
<tagClass>tag-structure</tagClass>
<quote>Base of metal for guards.</quote>
<stats>
<stat label="Owner">Enclave</stat>
<stat label="Units of Build">Steward, Archon</stat>
<stat label="Role">Guards</stat>
</stats>
<lore>
<p>Uses rocks of Caspium to mold frames for guards.</p>
<p>Makes Stewards of flesh to block bullets. Makes walkers of Archon with shields.</p>
</lore>
</entry>

<entry id="fabricator">
<name>Fabricator</name>
<type>Room for Builds</type>
<category>Room for Builds</category>
<tagClass>tag-structure</tagClass>
<quote>Shop of machines for mechs of planet.</quote>
<stats>
<stat label="Owner">Enclave</stat>
<stat label="Units of Build">Destroyer, Pioneer</stat>
<stat label="Role">Builds of Metal</stat>
</stats>
<lore>
<p>Welds steel to bases of cars.</p>
<p>Makes Destroyers of metal and teams of Pioneers.</p>
</lore>
</entry>

<entry id="advanced-fabricator">
<name>Forge of Adv</name>
<type>Room for Builds</type>
<category>Room for Builds</category>
<tagClass>tag-structure</tagClass>
<quote>Forge of metal for smashers of planet.</quote>
<stats>
<stat label="Owner">Enclave</stat>
<stat label="Units of Build">Speeder, Python</stat>
<stat label="Role">Shop of Titan</stat>
</stats>
<lore>
<p>Needs power of Caspium. Launches Speeders for work of spies. Builds walkers of Python.</p>
</lore>
</entry>

<entry id="air-channel">
<name>Gate of Air</name>
<type>Room for Builds</type>
<category>Room for Builds</category>
<tagClass>tag-structure</tagClass>
<quote>Grid of float for forts of sky.</quote>
<stats>
<stat label="Owner">Enclave</stat>
<stat label="Units of Build">Harpy, Dirigible, Phosphate</stat>
<stat label="Role">Pad of Sky</stat>
</stats>
<lore>
<p>Makes gate of air to launch sweeps of sky.</p>
<p>Builds Harpies of beam, blimps of Dirigible, and robots of Phosphate.</p>
</lore>
</entry>

<entry id="incubation-chamber">
<name>Room of Birth</name>
<type>Room for Builds</type>
<category>Room for Builds</category>
<tagClass>tag-structure</tagClass>
<quote>Pit of spawn for swarm of bugs.</quote>
<stats>
<stat label="Owner">Swarm of Bugs</stat>
<stat label="Units of Spawn">Biter, Ravenger, Feral, Annihilator</stat>
<stat label="Role">Node of Melee</stat>
</stats>
<lore>
<p>Base of meat. Uses slime of bugs and food to make life.</p>
<p>Makes Biters. Allows change into bugs of punch like Ferals or Annihilators.</p>
</lore>
</entry>

<entry id="spore-accumulator">
<name>Pod of Bugs</name>
<type>Room for Builds</type>
<category>Room for Builds</category>
<tagClass>tag-structure</tagClass>
<quote>Node of bugs turning paste of flesh into bugs of spit.</quote>
<stats>
<stat label="Owner">Swarm of Bugs</stat>
<stat label="Units of Spawn">Spitter, Gagger, Ranger, Nest, Titan</stat>
<stat label="Role">Spawner of Range</stat>
</stats>
<lore>
<p>Grows types of bugs. Makes Spitters, Gaggers without sight, and Titans.</p>
</lore>
</entry>

<entry id="corea">
<name>Room for Sky Bugs</name>
<type>Room for Builds</type>
<category>Room for Builds</category>
<tagClass>tag-structure</tagClass>
<quote>Nest of sky and center of help for bugs.</quote>
<stats>
<stat label="Owner">Swarm of Bugs</stat>
<stat label="Units of Spawn">Stalker, Leech, Vulture, Carrion, Vomiter, Husk</stat>
<stat label="Role">Nest of Sky</stat>
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
<stat label="Maker">Alaby Inc</stat>
<stat label="Ammo">Rounds of Steel</stat>
<stat label="Feature of Melee">Plate of bash on side of right</stat>
<stat label="Users">Soldier, Enforcer</stat>
</stats>
<lore>
<p>Gun of issue for Syndicate. Sides of steel. Use for hitting things when out of ammo.</p>
<p>Soldiers change it to shoot shells of shotgun. Act of crime.</p>
</lore>
</entry>

<entry id="cd-13-rifle">
<name>Gun of Auto Mode</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of armor-break for units of heroes.</quote>
<stats>
<stat label="Maker">Alaby Inc</stat>
<stat label="Property">Breaks armor on target</stat>
<stat label="Damage">7 Damage</stat>
<stat label="User">Bran Davis</stat>
</stats>
<lore>
<p>Gun for units of heroes. Speed of shots. Punches through armor.</p>
</lore>
</entry>

<entry id="dual-flamers">
<name>Two Guns of Fire</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Guns of fire with fuel on suits of Incinerator.</quote>
<stats>
<stat label="Damage of Engine">5</stat>
<stat label="Target">Ground</stat>
<stat label="User">Incinerator</stat>
</stats>
<lore>
<p>Hoses of fuel. Sprays gel of fire in cone of front. Clears slime of bugs.</p>
</lore>
</entry>

<entry id="needler-wep">
<name>Gun of Needles</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of darts for drugs.</quote>
<stats>
<stat label="Damage">2 Damage</stat>
<stat label="Wait">0.7s</stat>
<stat label="Range">4 Tiles</stat>
<stat label="User">Medic</stat>
</stats>
<lore>
<p>Shoots needles for health. Carries drugs of life to keep troop in safety on field.</p>
</lore>
</entry>

<entry id="light-grenades-wep">
<name>Bombs of Light Mass</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Tosser of bombs stuck on trucks for trees.</quote>
<stats>
<stat label="Damage">5 Damage</stat>
<stat label="Speed of Fire">12/s</stat>
<stat label="Path">Arc</stat>
<stat label="User">Skidder</stat>
</stats>
<lore>
<p>Shoots bombs of drop. Shoots with speed when truck sits without movement.</p>
</lore>
</entry>

<entry id="eject-mines-wep">
<name>Bombs of Drop</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Field of bombs from boom of self.</quote>
<stats>
<stat label="Damage of Mine">50</stat>
<stat label="Time of Arm">2.0 seconds</stat>
<stat label="Type of Drop">Touch / Hiding</stat>
<stat label="User">SUV of Support</stat>
</stats>
<lore>
<p>Move of risk. Truck blows up to drop field of bombs in hiding.</p>
</lore>
</entry>

<entry id="cluster-rockets-wep">
<name>Rockets of Sky</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Pods of rockets for clearing air.</quote>
<stats>
<stat label="Target">Sky</stat>
<stat label="Count of Targets">5 targets</stat>
<stat label="Damage">20</stat>
<stat label="Users">Sentry, Ship of Chaffron</stat>
</stats>
<lore>
<p>Shoots rockets. Locks onto targets of sky. Stops rushes of air.</p>
</lore>
</entry>

<entry id="mg-turret-wep">
<name>Gun of Machine Type</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of bullets.</quote>
<stats>
<stat label="Damage">5 Damage</stat>
<stat label="Wait">1.5s</stat>
<stat label="Type of Projectile">Hit of Instant</stat>
<stat label="User">Sentry</stat>
</stats>
<lore>
<p>Gun of auto mode. Used for guard of base and stopping troops of foot.</p>
</lore>
</entry>

<entry id="autocannon-wep">
<name>Gun of Size</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of shells.</quote>
<stats>
<stat label="Damage">5-12</stat>
<stat label="Type of Projectile">Shell</stat>
<stat label="Users">Bulwark, Fighter of Valkyrie</stat>
</stats>
<lore>
<p>Gun of shells with speed of shoot. Use for chewing units of bugs and cars without armor.</p>
</lore>
</entry>

<entry id="dual-rocket-pods-wep">
<name>Two Pods of Rockets</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Two systems of rockets.</quote>
<stats>
<stat label="Damage">20 per rocket</stat>
<stat label="Aim">Pods can aim at targets of difference</stat>
<stat label="User">Bulwark</stat>
</stats>
<lore>
<p>Shoots rockets of double mode. Made to cut through plates of metal armor.</p>
</lore>
</entry>

<entry id="light-gatling-wep">
<name>Gun of Spin</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of spin.</quote>
<stats>
<stat label="Damage">0.1 Damage</stat>
<stat label="Wait">0.09s</stat>
<stat label="User">Drone of Aero</stat>
</stats>
<lore>
<p>Gun of bullets. Made to melt swarms of biters.</p>
</lore>
</entry>

<entry id="t280-torpedoes-wep">
<name>Bombs of Star</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>System of bombs for sky.</quote>
<stats>
<stat label="Target">Sky</stat>
<stat label="Damage">30</stat>
<stat label="User">Fighter of Valkyrie</stat>
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
<stat label="Damage">300 Target of Sky</stat>
<stat label="Area of Splash">200 Range of Splash</stat>
<stat label="User">Ship of Chaffron</stat>
</stats>
<lore>
<p>Rocket of mass. Flattens camps of bases and groups of sky.</p>
</lore>
</entry>

<entry id="thermal-beam-wep">
<name>Beam of Heat</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Beam of energy without stop.</quote>
<stats>
<stat label="Damage">15 Damage</stat>
<stat label="Range">6</stat>
<stat label="User">Archon</stat>
</stats>
<lore>
<p>Gun of energy. Made by men of brains from Enclave to slice through walls of metal.</p>
</lore>
</entry>

<entry id="energized-halberd-wep">
<name>Spear of Energy</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Sword of plasma for melee.</quote>
<stats>
<stat label="Damage of Melee">12 Damage</stat>
<stat label="Wait">1.1s</stat>
<stat label="User">Steward</stat>
</stats>
<lore>
<p>Blade of energy. Made for guards of city from Enclave to stop rushes of biters.</p>
</lore>
</entry>

<entry id="plasma-cannon-wep">
<name>Gun of Plasma</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of matter balls.</quote>
<stats>
<stat label="Damage">15 to 20 Damage</stat>
<stat label="Users">Destroyer, Python</stat>
</stats>
<lore>
<p>Shoots balls of plasma. Melts metal and shields.</p>
</lore>
</entry>

<entry id="plasma-rifle-wep">
<name>Rifle of Plasma</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of plasma bolts for troops of foot.</quote>
<stats>
<stat label="Damage">10 Damage</stat>
<stat label="Wait">0.9s</stat>
<stat label="User">Pioneer</stat>
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
<quote>Spear of energy without stop, tuned for threats of bugs.</quote>
<stats>
<stat label="Damage">1</stat>
<stat label="Wait">0.3s</stat>
<stat label="User">Speeder</stat>
</stats>
<lore>
<p>Tuned against walls of metal. Power against swarms of flesh units.</p>
</lore>
</entry>

<entry id="charged-lance-wep">
<name>Spear of Power</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of beam that builds up damage.</quote>
<stats>
<stat label="Damage of Start">5 Damage</stat>
<stat label="Damage of Max">20 Damage</stat>
<stat label="Speed of Tick">0.25s</stat>
<stat label="User">Harpy</stat>
</stats>
<lore>
<p>Gun of sky for Enclave. Damage goes up over time of aim at target.</p>
</lore>
</entry>

<entry id="ion-cannon-wep">
<name>Group of Ion Guns</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Beam of energy of atoms without stop.</quote>
<stats>
<stat label="Damage">25 Damage</stat>
<stat label="Count of Turrets">4x Guns of Freedom</stat>
<stat label="User">Dirigible</stat>
</stats>
<lore>
<p>Gun of energy. Can shoot targets of difference across map.</p>
</lore>
</entry>

<entry id="mandibles-wep">
<name>Jaws of Mouth</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Parts of bug bite.</quote>
<stats>
<stat label="Damage of Melee">2 Damage</stat>
<stat label="Speed of Attack">0.6s Wait</stat>
<stat label="User">Biter</stat>
</stats>
<lore>
<p>Attack of bugs. Uses numbers of mass to chew through hulls of metal.</p>
</lore>
</entry>

<entry id="acid-claws-wep">
<name>Claws of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Claws of slice.</quote>
<stats>
<stat label="Damage of Melee">8</stat>
<stat label="Speed of Attack">0.8s Wait</stat>
<stat label="User">Ravenger</stat>
</stats>
<lore>
<p>Leaks acid of bugs. Melts plates of trucks in fights of melee.</p>
</lore>
</entry>

<entry id="suicide-wep">
<name>Boom</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Blast of chemicals.</quote>
<stats>
<stat label="Damage of Blast">12 to 20</stat>
<stat label="Effect of Area">Splash on Touch</stat>
<stat label="Users">Feral, Leech, Phosphate</stat>
</stats>
<lore>
<p>Trick of defense by bugs. Bug blows self up to drop liquids of melting nature.</p>
</lore>
</entry>

<entry id="claws-wep">
<name>Claws</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Claws with cover of bone.</quote>
<stats>
<stat label="Damage of Melee">10 to 14</stat>
<stat label="Users">Annihilator, Nest</stat>
</stats>
<lore>
<p>Parts of bone. Made to tear apart walls of metal and troops of foot.</p>
</lore>
</entry>

<entry id="acidic-bile-wep">
<name>Spit of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Shot of chemicals from flesh.</quote>
<stats>
<stat label="Damage">12</stat>
<stat label="Speed of Lob">14/s</stat>
<stat label="User">Spitter</stat>
</stats>
<lore>
<p>Attack of range from swarm of bugs. Tosses fluid of melting nature from distance.</p>
</lore>
</entry>

<entry id="acid-vomit-wep">
<name>Puke of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Stream of bug juice.</quote>
<stats>
<stat label="Damage">20</stat>
<stat label="Properties">Toss with Delay</stat>
<stat label="User">Gagger</stat>
</stats>
<lore>
<p>Spray of range of closeness. Gun of power, but makes sound of noise.</p>
</lore>
</entry>

<entry id="acid-spit-wep">
<name>Spike of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Tosser of bone spikes with acid.</quote>
<stats>
<stat label="Damage">10</stat>
<stat label="Speed of Projectile">18/s</stat>
<stat label="User">Ranger</stat>
</stats>
<lore>
<p>Shoots spikes of bone in chemicals of melting nature. Made to stop tanks.</p>
</lore>
</entry>

<entry id="crush-wep">
<name>Smash</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Stomp of foot.</quote>
<stats>
<stat label="Damage">30</stat>
<stat label="Special">Ignores half of armor</stat>
<stat label="User">Titan</stat>
</stats>
<lore>
<p>Smash of foot. Ignores plates of metal armor.</p>
</lore>
</entry>

<entry id="acid-spines-wep">
<name>Pins of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Tosser of bug needles.</quote>
<stats>
<stat label="Damage">5</stat>
<stat label="Speed of Projectile">22/s</stat>
<stat label="User">Stalker</stat>
</stats>
<lore>
<p>Shoots needles of bugs to pop pipes of machines and annoy workers.</p>
</lore>
</entry>

<entry id="spines-wep">
<name>Pins of Bone</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Tosser of bone spears.</quote>
<stats>
<stat label="Damage">15 Damage</stat>
<stat label="Speed of Projectile">20/s</stat>
<stat label="User">Vulture</stat>
</stats>
<lore>
<p>Spears of bone grown inside sacks of lungs. Shot to clear sky.</p>
</lore>
</entry>

<entry id="tentacles-wep">
<name>Arms</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Arms of bug pull.</quote>
<stats>
<stat label="Damage">10</stat>
<stat label="Special">Chance to bite troops of levity</stat>
<stat label="User">Carrion</stat>
</stats>
<lore>
<p>Whips of muscle. Made to pull troops into mouth.</p>
</lore>
</entry>

<entry id="acid-spray-wep">
<name>Spray of Acid</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Fog of bug chemicals without stop.</quote>
<stats>
<stat label="Profile of Damage">0.1 DPS</stat>
<stat label="User">Vomiter</stat>
</stats>
<lore>
<p>Coats paths in mist of melting nature. Melts troops over time.</p>
</lore>
</entry>

<entry id="spore-cannons-wep">
<name>Guns of Pod</name>
<type>Weapon</type>
<category>Weapon</category>
<tagClass>tag-weapon</tagClass>
<quote>Gun of base from distance.</quote>
<stats>
<stat label="Damage">30</stat>
<stat label="Range of Siege">6 tiles</stat>
<stat label="User">Husk</stat>
</stats>
<lore>
<p>Shoots pods of bone. Cracks bases of humans from distance.</p>
</lore>
</entry>

<!-- MATERIALS -->
<entry id="caspium">
<name>Caspium</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>Metal of rarity. Takes hits of bullets and turns them into heat.</quote>
<stats>
<stat label="Value of Market">200,000c / kg</stat>
<stat label="Conductivity">Conductor with Failure</stat>
<stat label="Workability">Zero machine cuts or hits of hammer; casting only</stat>
</stats>
<lore>
<p>Caspium reacts to hits. Turns energy of bullets into spikes of heat. Cars in fights melt on screen.</p>
<p>Sheets of ore cut with ease. Danger to touch. Zero grind or drill.</p>
</lore>
<extra>File of Tech: Hitting Caspium with tool of factory makes flash of heat. To keep drivers in safety, plates sit inside pipes of Steeline cooling.</extra>
</entry>

<entry id="steeline">
<name>Steeline</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>Metal of building with safety of heat used to wrap plates of Caspium.</quote>
<stats>
<stat label="Duration of Refining">Months of time per batch</stat>
<stat label="Property">Safety of heat</stat>
<stat label="Conductivity">100% Non-conductor</stat>
</stats>
<lore>
<p>Mix of metals. Steel, tungsten, and parts of difference. Used for builds of space like Star Forge.</p>
<p>Safety of heat. Wraps around plates of Caspium. Lets them take bullets and cool down without cooking of driver.</p>
</lore>
</entry>

<entry id="dna-stabilizer">
<name>Tool of DNA</name>
<type>Material</type>
<category>Material</category>
<tagClass>tag-material</tagClass>
<quote>Parts for sleep by Syncon Inc. Kept genes of humans in safety during drift of 20,000 years.</quote>
<stats>
<stat label="Maker">Syncon Inc</stat>
<stat label="Source of Power">Heat of body</stat>
<stat label="Split of Power">Core feeds head and limbs</stat>
<stat label="Goal of System">Stop change of genes during sleep</stat>
</stats>
<lore>
<p>Parts for sleep used by Syndicates on trip to stars of Proxima.</p>
<p>Run by heat of body. Error of genes drops power. Causes shakes of body.</p>
</lore>
</entry>

<!-- PRE-WAR CORPORATIONS -->
<entry id="bmo-corp">
<name>Corp of BMO</name>
<type>Corp of Past</type>
<category>Corp of Past</category>
<tagClass>tag-company</tagClass>
<quote>Group of state made to watch crash of human genes.</quote>
<stats>
<stat label="Jurisdiction">Earth of Past</stat>
<stat label="Focus">Stop sickness of bugs</stat>
<stat label="Inventions">Trucks of Watch, Suits of BMO</stat>
</stats>
<lore>
<p>Group of BMO made to block zones of sickness on Earth. Watched sickness grow. Overrun during break of wall. Suits of BMO use packs of battery with hooks for drop of speed.</p>
</lore>
</entry>

<entry id="charcoal-military-corp">
<name>Charcoal Military</name>
<type>Corp of Past</type>
<category>Corp of Past</category>
<tagClass>tag-company</tagClass>
<quote>Builders of ships. Makers of ships that saved history of humans.</quote>
<stats>
<stat label="Focus">Boxes of space and bases of war</stat>
<stat label="Builds of Ships">Regolith, Aethon, TSC, Praeus, Alabama</stat>
</stats>
<lore>
<p>Built ships of space. Transported runners in ice. Resources of limits meant ships had armor of foot and fighters of Valkyrie.</p>
</lore>
</entry>

<entry id="bsc-inc-corp">
<name>BSC Inc</name>
<type>Corp of Past</type>
<category>Corp of Past</category>
<tagClass>tag-company</tagClass>
<quote>Makers of engines of space and pushers of mass.</quote>
<stats>
<stat label="Focus">Parts of air fans and pushers of ships</stat>
<stat label="Designs">Fans of lift for ships of Chaffron</stat>
</stats>
<lore>
<p>Made plans of engines used in ships of space for humans. Best at fans of air lift for holds of cargo.</p>
</lore>
</entry>

<entry id="syncon-inc-corp">
<name>Syncon Inc</name>
<type>Corp of Past</type>
<category>Corp of Past</category>
<tagClass>tag-company</tagClass>
<quote>Giants of health who built pods of sleep.</quote>
<stats>
<stat label="Focus">Rooms of cold &amp; tools of genes</stat>
<stat label="Impact of Legacy">Gave group of Syndicate their name</stat>
</stats>
<lore>
<p>Built rooms of cold and parts of sleep using heat of body. Kept runners in safety on trip of 20,000 years.</p>
</lore>
</entry>

<entry id="alaby-inc-corp">
<name>Alaby Inc</name>
<type>Corp of Past</type>
<category>Corp of Past</category>
<tagClass>tag-company</tagClass>
<quote>Makers of plans for weapons of bullets.</quote>
<stats>
<stat label="Focus">Bullets of reality and guns of ammo</stat>
<stat label="Weapons">Gun of Assault, Gun of Auto Mode</stat>
</stats>
<lore>
<p>Focus on weapons for troops of foot. Shells of steel. Built to live through work of mines and fights of front line.</p>
</lore>
</entry>

<!-- FACTION SYSTEM RULES -->
<entry id="syndicate-weakness">
<name>Rules of System &amp; Weakness for Syndicate</name>
<type>Rule of Faction</type>
<category>Rule of Faction</category>
<tagClass>tag-rule</tagClass>
<quote>Start of strength. Beaten by limits of armor and spots of weakness in drills.</quote>
<stats>
<stat label="Standard of Power">Grid of Power for 500V 30A</stat>
<stat label="Weakness of Drill">Stop in build of 8 seconds when hit by EMP</stat>
<stat label="Cap of Strategy">Stop in growth after 20 minutes; must push in start</stat>
</stats>
<lore>
<p>Syndicates use plugs of walls across bases. Drills of mines use parts of computers. Hitting drill with EMP stops grabs of rocks for 8 seconds.</p>
<p>Know-how of Caspium lacks strength. Armor of late game stops. Players must win in stages of early time.</p>
</lore>
</entry>

<entry id="biomass-weakness">
<name>Rules of System &amp; Weakness for Bug Swarm</name>
<type>Rule of Faction</type>
<category>Rule of Faction</category>
<tagClass>tag-rule</tagClass>
<quote>Changes of speed and grabs of slime. Weakness to fire and burns of rocks.</quote>
<stats>
<stat label="Cost of Switch">200 Caspium</stat>
<stat label="Weakness of Slime">Catches fire with speed; burns without nodes of slime</stat>
<stat label="Weakness of Rock">Takes 3x damage from guns of fire</stat>
</stats>
<lore>
<p>Bases of bugs need paths of slime to work and build. Slime catches fire. Fire burns down camps without nodes of Caspium slime to put it out. Grabs of bug rocks take 3x damage from guns of fire.</p>
<p>Players of bugs can change types any time for 200 Caspium. Lore of game: Bugs eat Caspium from cars of ruin to make armor.</p>
</lore>
</entry>

<entry id="enclave-weakness">
<name>Rules of System &amp; Weakness for Enclave</name>
<type>Rule of Faction</type>
<category>Rule of Faction</category>
<tagClass>tag-rule</tagClass>
<quote>Units for end of game. Held back by grids of power and costs of Caspium.</quote>
<stats>
<stat label="Look of Base">Shell of gold color made of Caspium</stat>
<stat label="Need of Guard">Needs plants of Caspium or Towers of Beam</stat>
<stat label="Rule of Build">Guards cannot build near fights or bases in ruin</stat>
</stats>
<lore>
<p>Bases of guard for Enclave build with Rock. But they need plants of power or Towers of Beam to run. Spread of base has limits. Guards cannot build near fights or bases in ruin.</p>
<p>Units of fight need Caspium. Enclave must play with safety and save for push of end game.</p>
</lore>
</entry>

<entry id="map-template-rule">
<name>Template of Sector Map</name>
<type>Rule of Faction</type>
<category>Rule of Faction</category>
<tagClass>tag-rule</tagClass>
<quote>Layout of rocks needed to keep balance of game for Enclave.</quote>
<stats>
<stat label="Node of Main Base">20,000 Rock / 4x Nodes of Metal</stat>
<stat label="Push of Main Nature">100 Rock of Caspium / 3,000 Pool of Oil</stat>
<stat label="Base of Second Nature">10,000 Rock / 8,000 Metal</stat>
<stat label="Center of Map">10,000 Metal / 8,000 Oil / 1,000-5,000 Caspium</stat>
</stats>
<lore>
<p>Every map in Proxima must match plan of rocks. Enclave needs Caspium for bases of fight. Changing numbers of rocks makes faction useless.</p>
</lore>
</entry>

<!-- MAJOR EVENTS -->
<entry id="starforge-explosion">
<name>Destruction of Star Forge</name>
<type>Event of Mass</type>
<category>Event of Mass</category>
<tagClass>tag-event</tagClass>
<quote>Ruin of pre-war that broke empire of Enclave and made Swarm of Bugs.</quote>
<stats>
<stat label="Location">System of Stars Caspius XII</stat>
<stat label="Starters">The Ravenous</stat>
<stat label="Star of End">Caspius XII-d</stat>
<stat label="Death">99% of people of space in 30s</stat>
</stats>
<lore>
<p>Forge of Star was ball of Steeline in space around Caspius XII. Used to cast Caspium. Ravenous with madness of power attacked rooms of control. Fleet of war from Enclave showed up and won.</p>
<p>Ravenous blew up legs of frame to avoid loss. Half of ball fell into star. Broke core of star.</p>
<p>After hit, 99% of people died. In 30 seconds, star shrank to rock. Blast of star melted fleet of Enclave in flight. Made belts of Caspium rocks around star of death.</p>
</lore>
</entry>

<entry id="earth-outbreak">
<name>Escape of Earth Bug</name>
<type>Event of Mass</type>
<category>Event of Mass</category>
<tagClass>tag-event</tagClass>
<quote>Sickness of meat that killed Earth and forced drift of space for 20,000 years.</quote>
<stats>
<stat label="Start of Bug">Meat of rot on Earth</stat>
<stat label="Watcher">Group of BMO</stat>
<stat label="Fleet of Save">Ships of Training</stat>
<stat label="Time of Trip">20,000 Years of Earth</stat>
</stats>
<lore>
<p>Sickness of bugs started on Earth in meat of rot. Move of speed into brain. 7 steps: heat of body, health of fake nature, death of cells, break of brain wall and loss of mind, death of brain with nerves of bugs, return of body moves as beast, and act of bug swarm.</p>
<p>To save humans, fleet of training ships without weapons launched. People frozen in pods of cold with Tools of DNA. Goal: build immunity over time of thousands of years.</p>
<p>Drift made them safe, but turned them into carriers in hiding. Mix of genes makes kids of weakness.</p>
</lore>
</entry>

<entry id="redline-crisis">
<name>Crisis of Redline</name>
<type>Event of Mass</type>
<category>Event of Mass</category>
<tagClass>tag-event</tagClass>
<quote>Try of escape on Earth that showed Bug of minds.</quote>
<stats>
<stat label="Location">Main Base of BMO / Pad of Launch</stat>
<stat label="Boss of Bugs">Dr. Glenn Stafford</stat>
<stat label="Hero of Bravery">Officer Tanner of BMO</stat>
<stat label="Result">Rocket of escape blown up over pad</stat>
</stats>
<lore>
<p>During fall of Earth, Tanner saved friend Jeffery. Jeffery was puppet of meat run by mind of Dr. Glenn Stafford.</p>
<p>Stafford tried to steal rocket of space to drop bugs on stars. Tanner got on ship during lift off. Blew it up. Died to save stars of humans.</p>
</lore>
</entry>

<entry id="torus-purge">
<name>Purge of Torus VI</name>
<type>Event of Mass</type>
<category>Event of Mass</category>
<tagClass>tag-event</tagClass>
<quote>Push of team to crash station of space with 4 billion people.</quote>
<stats>
<stat label="Area of Target">Station of Space Torus VI</stat>
<stat label="People of Town">4,000,000,000 Workers of Mine</stat>
<stat label="Goal of Main Nature">Break 3 Locks of Space</stat>
<stat label="Result">Station pulled down, burned up in flames</stat>
</stats>
<lore>
<p>Torus VI was home of factories for Derrulicants. End of war: station of spin was covered by swarm of bugs.</p>
<p>To stop spread of mass, Syndicate and Enclave did strike of team. Goal: unlock locks of space across planets.</p>
<p>Unlock dragged station out of sky. Crashed right into planet. Burned up bugs.</p>
</lore>
</entry>

<entry id="startis-ambush">
<name>Ambush on Startis</name>
<type>Event of Mass</type>
<category>Event of Mass</category>
<tagClass>tag-event</tagClass>
<quote>Attack of surprise that started fight of humans.</quote>
<stats>
<stat label="Location">Rock of Mine on Startis</stat>
<stat label="Attackers">Troops of Derrulicants</stat>
<stat label="Escape of Note">Bran Davis &amp; SUV of Sand Color</stat>
<stat label="Result of End">Bran Davis made boss</stat>
</stats>
<lore>
<p>Fight of start for War of Proxima. Troops of Derrulicants did attack of sneak on mine of rocks for Bran Davis.</p>
<p>Bran got away in SUV of choice. Picked up by ship of war from Enclave. Got command after captain of ship died of bug of carriers.</p>
</lore>
</entry>

<entry id="factory-raid">
<name>Raid of Forge on Startis</name>
<type>Event of Mass</type>
<category>Event of Mass</category>
<tagClass>tag-event</tagClass>
<quote>Attack of base on plan of Star Forge for Derrulicants.</quote>
<stats>
<stat label="Location">Zone of Factory on Startis</stat>
<stat label="Goal">Break Frame of Factory</stat>
<stat label="Boss of Syndicate">Bran Davis</stat>
</stats>
<lore>
<p>Ships of drop for Syndicate found build of Star Forge in hiding by Derrulicants on Startis.</p>
<p>Bran Davis sent wave of drop ships. Broke factory to level of dirt. Kept limits of system rocks in state of fairness.</p>
</lore>
</entry>

<entry id="purist-clash">
<name>Defense of Pipeline</name>
<type>Event of Mass</type>
<category>Event of Mass</category>
<tagClass>tag-event</tagClass>
<quote>Fight of skirmish that made Purists of Enclave act with anger.</quote>
<stats>
<stat label="Location">Planet of Death for Caspium</stat>
<stat label="Attackers">Purists of Enclave</stat>
<stat label="Goal">Keep parts of pipe in safety</stat>
</stats>
<lore>
<p>Miners of rocks for Bran found graveyard of Caspium from Enclave.</p>
<p>Group of Purists attacked with speed. Troops of foot for Bran had to build wall to keep pipes in safety.</p>
</lore>
</entry>

<entry id="prius-betrayal">
<name>Abandonment at Campaign 2</name>
<type>Event of Mass</type>
<category>Event of Mass</category>
<tagClass>tag-event</tagClass>
<quote>Move of back-out that broke peace of team.</quote>
<stats>
<stat label="Location">Post of Swarm 4</stat>
<stat label="Attacker">Prius of Enclave</stat>
<stat label="Result">Syndicates left to die to swarm of bugs</stat>
</stats>
<lore>
<p>Push of team against camp of bugs. Prius gave order of surprise. Troops for help from Enclave ran back to sky. Syndicates left alone to die.</p>
<p>Crew of Bran barely got out on ships of sky. End of peace for humans and Enclave.</p>
</lore>
</entry>
</database>
`
