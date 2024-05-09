<script>
	import Dialog from '../components/dialog.svelte';
	import SearchBar from '../components/search-bar.svelte';
	import moment from 'moment-timezone';
	import Caution from '../icons/caution.svelte';
	const userGuessZone = moment.tz.guess();
	const userZone = moment.tz(userGuessZone);
	const name = userZone.tz() ?? '';
	const GMT = Number(userZone.format('Z').replace(':00', ''));

	/**
	 * @type {any| null | undefined}
	 */
	let selectedZones = [
		{
			name,
			GMT
		}
	];

	function addZone(zone) {
		if (selectedZones.filter((added) => added.name === zone.name).length > 0) return;
		selectedZones?.push?.(zone);
		selectedZones = [...selectedZones];
	}

	function removeZone(zone) {
		selectedZones = selectedZones.filter((added) => added.name !== zone.name);
	}
</script>

<svelte:head>
	<title>Homepage</title>
	<meta name="description" content="Time zones preview" />
</svelte:head>

<section class="flex relative min-h-[95dvh] gap-4">
	<section id="search-section" class="flex flex-col gap-6 relative">
		<SearchBar on:found={(val) => addZone(val.detail)} />
		<section
			id="zones-box"
			class="h-[80%] border-border border p-4 rounded-lg text-secondary flex flex-col gap-2 bg-background-foreground"
		>
			<h1 class="font-bold text-xl">Time zones</h1>
			<p class="font-thin">Here you can see the time zones of different countries</p>
			{#each selectedZones as zone}
				<section
					class="flex content-between border border-border gap-4 p-4 rounded-md bg-background"
				>
					<section class="grow">
						<h2 class="font-bold text-lg">
							{zone.name}
						</h2>

						<p class="font-extralight">Time zone: GMT{zone.GMT}</p>
					</section>
					<section class="shrink grow-0 font-thin">
						<button
							class="hover:text-primary text-sm cursor-pointer"
							on:click={() => removeZone(zone)}
						>
							Remove
						</button>
					</section>
				</section>
			{/each}
		</section>
	</section>
	<section
		id="zones-box"
		class="h-[85dvh] w-full border-border border p-4 rounded-lg text-secondary flex flex-col gap-2 bg-background-foreground"
	></section>
</section>

<!-- <Dialog title="Warning!">
	<section slot="content" class="w-full h-full">
		<section class="flex pb-16 flex-col content-evenly min-h-full flex-wrap">
			<Caution size="180" fill="#ffaa22" />
			<p class="max-h-16">Are you sure to delete your current location?</p>
		</section>
	</section>
	<section slot="footer" class="w-full flex *:grow gap-4 h-16 *:transition-all">
		<button
			class="bg-primary-foreground hover:bg-secondary hover:text-primary-foreground text-secondary shadow-md rounded-md p-2"
			>No, go back!</button
		>
		<button
			class="bg-primary text-white rounded-md p-2 hover:bg-secondary hover:text-primary-foreground"
			>Yes, delete it!</button
		>
	</section>
</Dialog> -->

<style lang="postcss">
</style>
