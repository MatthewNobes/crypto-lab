<script>
	import Navigation from '../components/Navigation.svelte';
	import Header from '../components/Header.svelte';
	import CaesarCipher from '../features/CaesarCipher/CaesarCipher.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Caesar Cipher</title>
</svelte:head>

<Header headerText={'Caesar Cipher'} />
<Navigation />
<CaesarCipher />
