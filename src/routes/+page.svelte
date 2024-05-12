<script>
	import moment from 'moment-timezone';
	import SearchBar from '../components/search-bar.svelte';

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
		},
		{
			name: 'America/BajaNorte',
			GMT: -7
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

	// Clock

	let timer = moment();

	setInterval(() => {
		timer = moment();
	}, 500);
</script>

<svelte:head>
	<title>Time Zone Picker</title>
	<meta name="description" content="Time zones preview" />
</svelte:head>

<section class="flex relative min-h-[95dvh] gap-4">
	<section id="search-section" class="flex flex-col gap-6 relative">
		<SearchBar on:found={(val) => addZone(val.detail)} />
		<section
			id="zones-box"
			class="h-[80%] border-border border p-4 rounded-lg text-secondary flex flex-col gap-2 bg-background-foreground"
		>
			<h1 class="font-bold text-xl relative">
				Time zones <p class="font-light absolute top-0 right-0">{timer.format('hh:mm:ss')}</p>
			</h1>
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
							on:click={() => {
								removeZone(zone);
							}}
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
		class="h-[85dvh] w-full border-border border p-4 rounded-lg text-secondary relative flex flex-col gap-2 bg-background-foreground"
	>
		<section class="grid w-full grid-cols-24 p-2">
			<!-- Items -->
			{#each selectedZones as zone, index}
				<section class="shadow-md p-4 col-span-full row-span-1">
					<p>{zone.name} GMT {zone.GMT}</p>
					<section class="grid grid-cols-24">
						{#each [...Array(24).keys()] as hour}
							<p>
								{(() => {
									if (!index) return moment(timer).add(hour, 'hour').format('HH');
									// console.log(Math.abs(GMT) + Number(zone.GMT));
									console.log(timer.get('hour'));
									const diff = Math.abs(GMT) + Number(zone.GMT);
									return moment(timer)
										.add(hour + diff, 'hour')
										.format('HH');
								})()}
							</p>
						{/each}
					</section>
				</section>
			{/each}
			<!-- Cursor selection box -->
			<!-- <section
					id="cursor-selection-box"
					class="absolute border-2 shadow-inner border-red row-span-full col-start-[1] col-end-[-1] bg-black bg-opacity-5 w-full h-full"
				></section> -->
		</section>
	</section>
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
