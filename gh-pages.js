import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/MatthewNobes/crypto-lab',
		user: {
			name: 'Matthew Nobes',
			email: 'mattnobes.develop@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Successful!');
	}
);
