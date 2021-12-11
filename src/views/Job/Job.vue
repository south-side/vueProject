<template>
    <div id="Job">
        <job-header></job-header>
        <job-content></job-content>
        <job-footer></job-footer>

    </div>
</template>

<script>
    import JobHeader from '../Header'
    import JobFooter from '../Footer'
    import JobContent from "./Jobcomponents/JobContent";
    export default {
        name: "Job",
        components:{
            JobHeader,
            JobFooter,
            JobContent
       }
    }
</script>

<style>

</style>