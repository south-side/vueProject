<template>
    <div class="NewsResearch">
        <div class="NewsResearch-up">

        </div>
        <div class="NewsResearch-down">
            <div v-for="items in newList">
                <ul class="ResearchList">
                    <li>
                        <router-link to="/" class="router">
                            <div>
                                <img :src="items.url" style="height: 200px">
                                <h2 style="text-align: center;color: black;">{{items.title}}</h2>
                                <p>
                                    {{items.des}}
                                </p>
                                <p>{{items.time}}</p>
                            </div>
                        </router-link>

                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                newList:[
                    {
                        id:'1',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'星药科技创始人兼CEO李成涛博士将于2021年7月12日、17日分别出席第三届全球生物医药前沿技术大会及首届AI药物研发创新研讨会，与大家分享人工智能在小分子创新药领域应用中的洞见，期待您的到来！'
                    },
                    {id:'2',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'星药科技创始人兼CEO李成涛博士将于2021年7月12日、17日分别出席第三届全球生物医药前沿技术大会及首届AI药物研发创新研讨会，与大家分享人工智能在小分子创新药领域应用中的洞见，期待您的到来！'
                    },
                    {id:'3',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'星药科技创始人兼CEO李成涛博士将于2021年7月12日、17日分别出席第三届全球生物医药前沿技术大会及首届AI药物研发创新研讨会，与大家分享人工智能在小分子创新药领域应用中的洞见，期待您的到来！'
                    },
                    {id:'4',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'星药科技创始人兼CEO李成涛博士将于2021年7月12日、17日分别出席第三届全球生物医药前沿技术大会及首届AI药物研发创新研讨会，与大家分享人工智能在小分子创新药领域应用中的洞见，期待您的到来！'
                    },
                    {id:'5',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'星药科技创始人兼CEO李成涛博士将于2021年7月12日、17日分别出席第三届全球生物医药前沿技术大会及首届AI药物研发创新研讨会，与大家分享人工智能在小分子创新药领域应用中的洞见，期待您的到来！'
                    },
                    {id:'6',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'星药科技创始人兼CEO李成涛博士将于2021年7月12日、17日分别出席第三届全球生物医药前沿技术大会及首届AI药物研发创新研讨会，与大家分享人工智能在小分子创新药领域应用中的洞见，期待您的到来！'
                    },
                    {id:'7',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'星药科技创始人兼CEO李成涛博士将于2021年7月12日、17日分别出席第三届全球生物医药前沿技术大会及首届AI药物研发创新研讨会，与大家分享人工智能在小分子创新药领域应用中的洞见，期待您的到来！'
                    },
                    {id:'8',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'星药科技创始人兼CEO李成涛博士将于2021年7月12日、17日分别出席第三届全球生物医药前沿技术大会及首届AI药物研发创新研讨会，与大家分享人工智能在小分子创新药领域应用中的洞见，期待您的到来！'
                    },
                    {id:'9',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'星药科技创始人兼CEO李成涛博士将于2021年7月12日、17日分别出席第三届全球生物医药前沿技术大会及首届AI药物研发创新研讨会，与大家分享人工智能在小分子创新药领域应用中的洞见，期待您的到来！'
                    },
                ]
            }
        }
    }
</script>

<style>
    .NewsResearch{
        width: 100%;
        background-color: rosybrown;
        height: 2000px;
        position: relative;
        float: left;
    }
    .NewsResearch-up{
        width: 100%;
        background-color: #42b983;
        height: 600px;
    }
    .NewsResearch-down{
        width: 100%;
        height: 1400px;
    }
    .ResearchList{
        width: 100%;
        list-style: none;
    }
    .ResearchList li{
        width: 30%;
        height: 400px;
        float: left;
        list-style:none;
        padding:0; /* 将默认的内边距去掉 */
        margin:15px;
        background-color: #568ae1;
    }


</style>