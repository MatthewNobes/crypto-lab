<script>
	import Navigation from '../components/Navigation.svelte';
	import Header from '../components/Header.svelte';
	import Home from '../features/Home/Home.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Crypto Lab</title>
</svelte:head>

<Header headerText={'Crypto Lab'} />

<Navigation />
<Home />
