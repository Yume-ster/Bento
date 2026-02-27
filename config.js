// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Micah!',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Time to sleep,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '4450a8b8b5c3923f0e7df315acc2eb65', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '33.950001',
	defaultLongitude: '-83.383331',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '2',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.proton.me/u/1/',
		},
		{
			id: '3',
			name: 'Spotify',
			icon: 'disc-2',
			link: 'https://open.spotify.com/',
		},
		{
			id: '4',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://www.twitch.tv/',
		},
		{
			id: '5',
			name: 'Sudoku',
			icon: 'grid-3x3',
			link: 'https://www.websudoku.com/',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'palette',
			id: '1',
			links: [
				{
					name: 'ArchiveO3',
					link: 'https://archiveofourown.org/',
				},
				{
					name: 'MonkeyType',
					link: 'https://monkeytype.com/',
				},
				{
					name: 'Github',
					link: 'https://github.com/',
				},
				{
					name: 'DevDoc',
					link: 'https://devdocs.io/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Reddit',
					link: 'https://www.reddit.com/',
				},
				{
					name: 'Steam',
					link: 'http://store.steampowered.com/'
				},
				{
					name: 'Twitter',
					link: 'https://twitter.com/home'
				},
				{
					name: 'Tumblr',
					link: 'https://www.tumblr.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'b',
			id: '1',
			links: [
				{
					name: '_',
					link: '_',
				},
				{
					name: '_',
					link: '_',
				},
				{
					name: '_',
					link: '_',
				},
				{
					name: '_',
					link: '_',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: '_',
					link: '_',
				},
				{
					name: '_',
					link: '_',
				},
				{
					name: '_',
					link: '_',
				},
				{
					name: '_',
					link: '_',
				},
			],
		},
	],
};
