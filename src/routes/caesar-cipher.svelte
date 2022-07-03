<script>
	import PageHead from '../components/PageHead/PageHead.svelte';
	import CaesarCipher from '../features/CaesarCipher/CaesarCipher.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Caesar Cipher</title>
</svelte:head>

<PageHead pageTitle="Caesar Cipher" />
<CaesarCipher />
