<script>
	import Navigation from '../../components/Navigation.svelte';
	import Header from '../../components/Header.svelte';
	export /**
	 * @type {string}
	 */
	let pageTitle;
</script>

<Header headerText={pageTitle} />
<Navigation />
