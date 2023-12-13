# Seed data for users
User.create([
  { username: 'Amanda', password_digest: 'pass', bio: 'Adventurer in the world of fantasy.' },
  { username: 'Indigo', password_digest: 'pass', bio: 'Enthusiastic role-player and storyteller.' },
  { username: 'Elena', password_digest: 'pass', bio: 'Magical being exploring new realms.' },
  { username: 'Gideon', password_digest: 'pass', bio: 'Dungeon master with a passion for epic tales.' },
  { username: 'Mira', password_digest: 'pass', bio: 'Seeker of treasures and ancient mysteries.' },
  { username: 'Felix', password_digest: 'pass', bio: 'Bard with a silver tongue and a quick wit.' },
  { username: 'Thalia', password_digest: 'pass', bio: 'Mystical sorceress wielding arcane powers.' },
  { username: 'Cyrus', password_digest: 'pass', bio: 'Rogue with a shady past and a quick blade.' },
  { username: 'Luna', password_digest: 'pass', bio: 'Moonlit ranger with a bow and a wolf companion.' },
  { username: 'Orion', password_digest: 'pass', bio: 'Celestial cleric on a divine mission.' }
])

# Seed data for campaigns
Campaign.create([
  { title: 'Rise of the Eldritch Realms', description: 'A campaign where ancient eldritch powers threaten the world.', dungeon_master_id: 4 },
  { title: 'Kingdoms of the Shattered Crown', description: 'Political intrigue and power struggles in a fractured land.', dungeon_master_id: 5 }
])

# Seed data for characters and their association with campaigns
Character.create([
  { character_class: 'Paladin', race: 'Human', alignment: 'Lawful Good', name: 'Sir Percival', image: 'paladin.jpg', user_id: 1, campaign_id: 1 },
  { character_class: 'Wizard', race: 'Elf', alignment: 'Neutral', name: 'Elowen', image: 'wizard.jpg', user_id: 2, campaign_id: 1 },
  { character_class: 'Rogue', race: 'Halfling', alignment: 'Chaotic Neutral', name: 'Finn Quickblade', image: 'rogue.jpg', user_id: 6, campaign_id: 1 },
  { character_class: 'Sorcerer', race: 'Tiefling', alignment: 'Lawful Evil', name: 'Morgana Shadowflame', image: 'sorcerer.jpg', user_id: 7, campaign_id: 1 },
  { character_class: 'Bard', race: 'Half-Elf', alignment: 'Chaotic Good', name: 'Silas Melodyweaver', image: 'bard.jpg', user_id: 8, campaign_id: 1 },
  { character_class: 'Fighter', race: 'Dwarf', alignment: 'Neutral Good', name: 'Grim Ironbeard', image: 'fighter.jpg', user_id: 3, campaign_id: 2 },
  { character_class: 'Cleric', race: 'Human', alignment: 'Lawful Neutral', name: 'Sister Seraphina', image: 'cleric.jpg', user_id: 4, campaign_id: 2 },
  { character_class: 'Druid', race: 'Half-Orc', alignment: 'True Neutral', name: 'Thorn Oakheart', image: 'druid.jpg', user_id: 5, campaign_id: 2 },
  { character_class: 'Ranger', race: 'Wood Elf', alignment: 'Chaotic Good', name: 'Aria Swiftshot', image: 'ranger.jpg', user_id: 9, campaign_id: 2 },
  { character_class: 'Warlock', race: 'Tiefling', alignment: 'Chaotic Evil', name: 'Malachi Darkshroud', image: 'warlock.jpg', user_id: 10, campaign_id: 2 }
])

# Seed data for posts
Post.create([
  { content: 'Excited to embark on the journey in the Rise of the Eldritch Realms campaign!', user_id: 1 },
  { content: 'Just created my wizard character, Elowen, ready to cast some spells!', user_id: 2 },
  { content: 'Finn Quickblade reporting for duty! Sneaking in the shadows and ready for action.', user_id: 6 },
  { content: 'Morgana Shadowflame has joined the fray. Beware the power of infernal magic!', user_id: 7 },
  { content: 'Silas Melodyweaver, at your service! Let the music of adventure begin!', user_id: 8 },
  { content: 'Grim Ironbeard, reporting for duty in the Kingdoms of the Shattered Crown campaign.', user_id: 3 },
  { content: 'Sister Seraphina, ready to heal and guide in the name of justice.', user_id: 4 },
  { content: 'Thorn Oakheart, the druid of the wild, joins the quest for balance.', user_id: 5 },
  { content: 'Aria Swiftshot, the elven ranger, ready to explore the unknown in the Shattered Crown.', user_id: 9 },
  { content: 'Malachi Darkshroud, warlock of the abyss, seeks power and chaos in the Shattered Crown.', user_id: 10 }
])
