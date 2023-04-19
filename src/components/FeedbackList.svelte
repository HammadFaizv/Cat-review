<script>
    import {FeedbackStore} from '../stores';
    import { fade, scale } from 'svelte/transition';
    import FeedbackItem from './FeedbackItem.svelte';

    // can also use onMount and onDestroy method to subscribe to the data
</script>

{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade={{ duration: 400 }}>
    <FeedbackItem item={fb} />
</div>
{/each}